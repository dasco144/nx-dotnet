"use strict";(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(b,r(r({ref:t},p),{},{components:n})):i.createElement(b,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],o={},d="Nx Incremental Builds",s={unversionedId:"core/guides/incremental-builds",id:"core/guides/incremental-builds",title:"Nx Incremental Builds",description:"As of v1.8.0, @nx-dotnet/core:build is configured by default to pass --no-dependencies to the dotnet CLI. When working outside of Nx, this would require developers to manually build the project's dependencies. This is not the case within Nx, due to the targetDependencies setup inside nx.json.",source:"@site/../../docs/core/guides/incremental-builds.md",sourceDirName:"core/guides",slug:"/core/guides/incremental-builds",permalink:"/docs/core/guides/incremental-builds",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/guides/incremental-builds.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Handling Solution Files",permalink:"/docs/core/guides/handling-solutions"},next:{title:"@nx-dotnet/core:build",permalink:"/docs/core/executors/build"}},p={},u=[{value:"Avoiding duplicate builds during <code>dotnet</code> execution",id:"avoiding-duplicate-builds-during-dotnet-execution",level:2},{value:"Optimizing Cache Hits",id:"optimizing-cache-hits",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nx-incremental-builds"},"Nx Incremental Builds"),(0,a.kt)("p",null,"As of v1.8.0, ",(0,a.kt)("inlineCode",{parentName:"p"},"@nx-dotnet/core:build")," is configured by default to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-dependencies")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI. When working outside of Nx, this would require developers to manually build the project's dependencies. This is not the case within Nx, due to the targetDependencies setup inside ",(0,a.kt)("inlineCode",{parentName:"p"},"nx.json"),"."),(0,a.kt)("p",null,"When using target dependencies, Nx knows to build all dependents before building a library or application. By falling back on this logic, instead of letting ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," handle building dependencies, we can better take advantage of Nx's cache and avoid duplicated builds."),(0,a.kt)("h2",{id:"avoiding-duplicate-builds-during-dotnet-execution"},"Avoiding duplicate builds during ",(0,a.kt)("inlineCode",{parentName:"h2"},"dotnet")," execution"),(0,a.kt)("p",null,"Consider the following workspace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apps/webApi"),(0,a.kt)("li",{parentName:"ul"},"libs/classLib")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"webApi")," project depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"classlib")," project, running the following commands without ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-dependencies")," results in the following outcomes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx build webApi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and runs ",(0,a.kt)("inlineCode",{parentName:"li"},"nx build classlib")),(0,a.kt)("li",{parentName:"ul"},"Nx kicks off a child ",(0,a.kt)("inlineCode",{parentName:"li"},"tao")," instance running the build executor for ",(0,a.kt)("inlineCode",{parentName:"li"},"classlib")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," reads the csproj and builds classlib first"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx build classlib"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds no child tasks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build libs/classlib/classlib.csproj")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds classlib"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx affected:build"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds that webapi and classlib should be built."),(0,a.kt)("li",{parentName:"ul"},"Since webapi depends on classlib, Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build classlib")," first.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build libs/classlib/classlib.csproj"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds classlib"))))),(0,a.kt)("li",{parentName:"ul"},"Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build webapi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," reads the csproj and builds classlib first"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi")))))))),(0,a.kt)("p",null,"This means that every time you build webApi or Nx affected you are waiting for 1 extra build of the classlib library. This continues to scale up and gets worse as more projects are added to the monorepo."),(0,a.kt)("p",null,"By punting the dependency builds to Nx, you no longer get these duplicate runs. The same scenario would look like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx build webApi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and runs ",(0,a.kt)("inlineCode",{parentName:"li"},"nx build classlib")),(0,a.kt)("li",{parentName:"ul"},"Nx kicks off a child ",(0,a.kt)("inlineCode",{parentName:"li"},"tao")," instance running the build executor for ",(0,a.kt)("inlineCode",{parentName:"li"},"classlib")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx build classlib"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds no child tasks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build libs/classlib/classlib.csproj")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds classlib"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx affected:build"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds that webapi and classlib should be built."),(0,a.kt)("li",{parentName:"ul"},"Since webapi depends on classlib, Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build classlib")," first.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build libs/classlib/classlib.csproj"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds classlib"))))),(0,a.kt)("li",{parentName:"ul"},"Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build webapi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi")))))))),(0,a.kt)("p",null,"Note that the extra builds for classlib vanished."),(0,a.kt)("h2",{id:"optimizing-cache-hits"},"Optimizing Cache Hits"),(0,a.kt)("p",null,"Lets use the same workspace from above, and imagine that we are working on a feature that only touched the webapi."),(0,a.kt)("p",null,"Running the following commands without ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-dependencies")," results in the following outcomes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx affected:build"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the change set, and finds that only the webapi needs to be built."),(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds that only the webapi requires the classlib."),(0,a.kt)("li",{parentName:"ul"},"Since the classlib hasn't been changed, Nx pulls it down from the remote cache or restores from local if a cache is available."),(0,a.kt)("li",{parentName:"ul"},"Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build webapi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," reads the csproj and builds classlib first (",(0,a.kt)("em",{parentName:"li"},"Note here, the classlib was still built from source, despite Nx restoring it from cache"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi")))))))),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"-no-dependencies"),", the same scenario looks like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx affected:build"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the change set, and finds that only the webapi needs to be built."),(0,a.kt)("li",{parentName:"ul"},"Nx analyzes the dependency graph, and finds that only the webapi requires the classlib."),(0,a.kt)("li",{parentName:"ul"},"Since the classlib hasn't been changed, Nx pulls it down from the remote cache or restores from local if a cache is available."),(0,a.kt)("li",{parentName:"ul"},"Nx runs ",(0,a.kt)("inlineCode",{parentName:"li"},"build webapi"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet build apps/webApi/webApi.csproj --no-dependencies"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," builds webApi")))))))))}m.isMDXComponent=!0}}]);