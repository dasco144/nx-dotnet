import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  ProjectConfiguration,
  readJson,
  Tree,
} from '@nrwl/devkit';

import { readFileSync } from 'fs';
import * as path from 'path';

import { Schema } from './schema';
import {
  ExecutorsCollection,
  GeneratorsCollection,
  SchemaJSON,
} from './schema-json.interface';

export default async function (host: Tree, options: Schema) {
  const projects = await findProjectsWithGeneratorsOrExecutors(host);

  const packageDetails: {
    packageName: string;
    projectFileName: string;
    project: Omit<ProjectConfiguration, 'generators'>;
    generators: number;
    executors: number;
  }[] = [];

  projects.forEach((project) => {
    let gettingStartedFile: string | null = options.gettingStartedFile.replace(
      '<src>',
      project.root,
    );

    gettingStartedFile = host.exists(gettingStartedFile)
      ? gettingStartedFile
      : null;

    const generatorsCollection: GeneratorsCollection = project.generators
      ? readJson<GeneratorsCollection>(host, `${project.root}/generators.json`)
      : ({} as GeneratorsCollection);
    const generators = generatorsCollection.generators;

    const executorsCollection: ExecutorsCollection = project.executors
      ? readJson<ExecutorsCollection>(host, `${project.root}/executors.json`)
      : ({} as ExecutorsCollection);
    const executors = executorsCollection.executors;

    const packageName = readJson(host, `${project.root}/package.json`).name;
    const projectFileName = names(project.name).fileName;

    packageDetails.push({
      packageName,
      projectFileName,
      project,
      generators: Object.keys(generators).length,
      executors: Object.keys(executors).length,
    });

    generateFiles(
      host,
      path.join(__dirname, 'templates/index'),
      options.outputDirectory,
      {
        projectFileName,
        packageName,
        project,
        generators,
        executors,
        underscore: '_',
        gettingStartedMd: gettingStartedFile
          ? readFileSync(gettingStartedFile).toString()
          : '',
        frontMatter: options.skipFrontMatter
          ? null
          : {
              title: `${packageName}`,
              summary: `${packageName}`,
            },
      },
    );

    Object.entries(generators).forEach(([generatorName, config]) => {
      const generatorFileName = names(generatorName).fileName;
      const schema = readJson<SchemaJSON>(
        host,
        path.relative(process.cwd(), path.resolve(project.root, config.schema)),
      );
      generateFiles(
        host,
        path.join(__dirname, 'templates/detail'),
        `${options.outputDirectory}/${projectFileName}/generators`,
        {
          projectFileName,
          project,
          generatorName,
          generatorFileName,
          schema,
          packageName,
        },
      );
    });

    Object.entries(executors).forEach(([generatorName, config]) => {
      const generatorFileName = names(generatorName).fileName;
      const schema = readJson<SchemaJSON>(
        host,
        path.relative(process.cwd(), path.resolve(project.root, config.schema)),
      );
      generateFiles(
        host,
        path.join(__dirname, 'templates/detail'),
        `${options.outputDirectory}/${projectFileName}/executors`,
        {
          projectFileName,
          project,
          generatorName,
          generatorFileName,
          schema,
          packageName,
        },
      );
    });
  });

  generateFiles(
    host,
    path.join(__dirname, 'templates/root'),
    options.outputDirectory,
    {
      packageDetails,
      includeFrontMatter: !options.skipFrontMatter,
    },
  );

  if (!options.skipFormat) {
    await formatFiles(host);
  }
}

export async function findProjectsWithGeneratorsOrExecutors(host: Tree) {
  const projects: ({
    name: string;
    generators: boolean;
    executors: boolean;
  } & Omit<ProjectConfiguration, 'generators'>)[] = [];
  getProjects(host).forEach((configuration, project) => {
    const res = projectContainsGeneratorsOrExecutors(host, configuration);
    if (res) {
      projects.push({
        ...configuration,
        name: project,
        ...res,
      });
    }
  });
  return projects;
}

export function projectContainsGeneratorsOrExecutors(
  host: Tree,
  project: ProjectConfiguration,
): false | { generators: boolean; executors: boolean } {
  const executors = host.isFile(`${project.root}/executors.json`);
  const generators = host.isFile(`${project.root}/generators.json`);
  return !(executors || generators) ? false : { generators, executors };
}
