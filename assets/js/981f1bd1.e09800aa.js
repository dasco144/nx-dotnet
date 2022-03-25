"use strict";(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"@nx-dotnet/core",sidebar_position:0,sidebar_label:"Getting Started",slug:"/core/"},s="Getting Started",c={unversionedId:"core/index",id:"core/index",title:"@nx-dotnet/core",description:"Prerequisites",source:"@site/../../docs/core/index.md",sourceDirName:"core",slug:"/core/",permalink:"/docs/core/",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"@nx-dotnet/core",sidebar_position:0,sidebar_label:"Getting Started",slug:"/core/"},sidebar:"someSidebar",previous:{title:"Our Plugins",permalink:"/docs/"},next:{title:"Handling Solution Files",permalink:"/docs/core/guides/handling-solutions"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"NPM",id:"npm",level:3},{value:"PNPM",id:"pnpm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Generate and run your first api!",id:"generate-and-run-your-first-api",level:2},{value:"nrwl/nx/enforce-module-boundaries support",id:"nrwlnxenforce-module-boundaries-support",level:2},{value:"Generators",id:"generators",level:2},{value:"library",id:"library",level:3},{value:"application",id:"application",level:3},{value:"project-reference",id:"project-reference",level:3},{value:"init",id:"init",level:3},{value:"sync",id:"sync",level:3},{value:"nuget-reference",id:"nuget-reference",level:3},{value:"restore",id:"restore",level:3},{value:"test",id:"test",level:3},{value:"import-projects",id:"import-projects",level:3},{value:"Executors",id:"executors",level:2},{value:"build",id:"build",level:3},{value:"serve",id:"serve",level:3},{value:"test",id:"test-1",level:3},{value:"publish",id:"publish",level:3},{value:"format",id:"format",level:3}],d={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have an existing nx workspace. For creating this, see ",(0,o.kt)("a",{parentName:"li",href:"https://nx.dev/latest/angular/getting-started/nx-setup"},"nrwl's documentation"),"."),(0,o.kt)("li",{parentName:"ul"},".NET SDK is installed, and ",(0,o.kt)("inlineCode",{parentName:"li"},"dotnet")," is available on the path. For help on this, see ",(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install"},"Microsoft's documentation"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev @nx-dotnet/core\nnpx nx g @nx-dotnet/core:init\n")),(0,o.kt)("h3",{id:"pnpm"},"PNPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i --save-dev @nx-dotnet/core\npnpx nx g @nx-dotnet/core:init\n")),(0,o.kt)("h3",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @nx-dotnet/core\nnpx nx g @nx-dotnet/core:init\n")),(0,o.kt)("h2",{id:"generate-and-run-your-first-api"},"Generate and run your first api!"),(0,o.kt)("p",null,"Generate my-api, and my-api-test with C# and nunit tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx nx g @nx-dotnet/core:app my-api --test-template nunit --language C#\n")),(0,o.kt)("p",null,"Run my-api locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx nx serve my-api\n")),(0,o.kt)("h2",{id:"nrwlnxenforce-module-boundaries-support"},"nrwl/nx/enforce-module-boundaries support"),(0,o.kt)("p",null,"Nrwl publishes an eslint rule for enforcing module boundaries based on tags in a library. We recently added similar support to nx-dotnet."),(0,o.kt)("p",null,"To avoid duplicating the rules configuration, if your workspace already has it, nx-dotnet can read the dependency constraints from your workspace's eslint files. It does this by looking at what is configured for typescript files."),(0,o.kt)("p",null,"If your workspace does not currently contain eslint, do not worry! You do not have to install eslint just for its configuration. The same dependency constraints can be placed inside of your .nx-dotnet.rc.json file at workspace root. This should look something like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "moduleBoundaries": [\n    {\n      "onlyDependOnLibsWithTags": ["a", "shared"],\n      "sourceTag": "a"\n    },\n    {\n      "onlyDependOnLibsWithTags": ["b", "shared"],\n      "sourceTag": "b"\n    },\n    {\n      "onlyDependOnLibsWithTags": ["shared"],\n      "sourceTag": "shared"\n    }\n  ],\n  "nugetPackages": {}\n}\n')),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("h2",{id:"generators"},"Generators"),(0,o.kt)("h3",{id:"library"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/library"},"library")),(0,o.kt)("p",null,"nx-dotnet generator"),(0,o.kt)("h3",{id:"application"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/application"},"application")),(0,o.kt)("p",null,"Generate a new C# project."),(0,o.kt)("h3",{id:"project-reference"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/project-reference"},"project-reference")),(0,o.kt)("p",null,"Adds a reference from one project to another."),(0,o.kt)("h3",{id:"init"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/init"},"init")),(0,o.kt)("p",null,"init generator"),(0,o.kt)("h3",{id:"sync"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/sync"},"sync")),(0,o.kt)("p",null,"sync generator"),(0,o.kt)("h3",{id:"nuget-reference"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/nuget-reference"},"nuget-reference")),(0,o.kt)("p",null,"nuget-reference generator"),(0,o.kt)("h3",{id:"restore"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/restore"},"restore")),(0,o.kt)("p",null,"Restores NuGet packages and .NET tools used by the workspace"),(0,o.kt)("h3",{id:"test"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/test"},"test")),(0,o.kt)("p",null,"Generate a .NET test project for an existing application or library"),(0,o.kt)("h3",{id:"import-projects"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/generators/import-projects"},"import-projects")),(0,o.kt)("p",null,"Import existing projects into your nx workspace"),(0,o.kt)("h2",{id:"executors"},"Executors"),(0,o.kt)("h3",{id:"build"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/executors/build"},"build")),(0,o.kt)("p",null,"build executor"),(0,o.kt)("h3",{id:"serve"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/executors/serve"},"serve")),(0,o.kt)("p",null,"serve executor"),(0,o.kt)("h3",{id:"test-1"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/executors/test"},"test")),(0,o.kt)("p",null,"test executor"),(0,o.kt)("h3",{id:"publish"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/executors/publish"},"publish")),(0,o.kt)("p",null,"publish executor"),(0,o.kt)("h3",{id:"format"},(0,o.kt)("a",{parentName:"h3",href:"/docs/core/executors/format"},"format")),(0,o.kt)("p",null,"Formats and lints a project using the dotnet-format tool"))}h.isMDXComponent=!0}}]);