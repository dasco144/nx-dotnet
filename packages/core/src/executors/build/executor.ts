import { ExecutorContext } from '@nrwl/devkit';
import { workspaceRoot } from 'nx/src/utils/app-root';

import { DotNetClient, dotnetFactory } from '@nx-dotnet/dotnet';
import {
  getExecutedProjectConfiguration,
  getProjectFileForNxProject,
} from '@nx-dotnet/utils';
import { resolve } from 'path';

import { BuildExecutorSchema } from './schema';

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext,
  dotnetClient: DotNetClient = new DotNetClient(dotnetFactory()),
) {
  const nxProjectConfiguration = getExecutedProjectConfiguration(context);
  dotnetClient.cwd = resolve(workspaceRoot, nxProjectConfiguration.root);
  dotnetClient.printSdkVersion();
  const projectFilePath = resolve(
    workspaceRoot,
    await getProjectFileForNxProject(nxProjectConfiguration),
  );
  options.output = options.output
    ? resolve(workspaceRoot, options.output)
    : undefined;

  dotnetClient.build(projectFilePath, options);

  return {
    success: true,
  };
}
