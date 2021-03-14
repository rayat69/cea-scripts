#!/usr/bin/env node
"use strict";var require$$0$3=require("commander"),require$$0$1=require("path"),require$$2=require("fs"),require$$0=require("cross-spawn"),require$$1=require("child_process"),rollup=require("rollup"),commonjs=require("@rollup/plugin-commonjs"),typescript=require("rollup-plugin-typescript2"),require$$0$2=require("rollup-plugin-uglify"),Json=require("@rollup/plugin-json");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var require$$0__default$3=_interopDefaultLegacy(require$$0$3),require$$0__default$1=_interopDefaultLegacy(require$$0$1),require$$2__default=_interopDefaultLegacy(require$$2),require$$0__default=_interopDefaultLegacy(require$$0),require$$1__default=_interopDefaultLegacy(require$$1),rollup__default=_interopDefaultLegacy(rollup),commonjs__default=_interopDefaultLegacy(commonjs),typescript__default=_interopDefaultLegacy(typescript),require$$0__default$2=_interopDefaultLegacy(require$$0$2),Json__default=_interopDefaultLegacy(Json);const{sync:sync}=require$$0__default.default,{exec:exec}=require$$1__default.default,{writeFile:writeFile,mkdir:mkdir}=require$$2__default.default,execAsync=e=>new Promise((i,s)=>{exec(e,(e,r,t)=>{e&&s(e),r&&s(t),i(r)})}),spawnAsync$2=(i,s={})=>new Promise((e,r)=>{var t=sync(i,s);t.stderr?r("stderr:"+t.stderr):t.error?r("error:"+t.error):e("stdout:"+t.stdout)}),writeFileAsync=(e,i,s)=>new Promise((r,t)=>{writeFile(e,i,s,e=>{e?t(e):r("successfully done")})}),mkdirAsync=(e,i)=>new Promise((r,t)=>{mkdir(e,i,e=>{e?t(e):r("done")})});var promisify={execAsync:execAsync,spawnAsync:spawnAsync$2,writeFileAsync:writeFileAsync,mkdirAsync:mkdirAsync};const{join:join$1}=require$$0__default$1.default,{existsSync:existsSync$1}=require$$2__default.default,{spawnAsync:spawnAsync$1}=promisify,CWD$2=process.cwd(),devScript$1=async()=>{try{existsSync$1(join$1(CWD$2,"tsconfig.json"))?await spawnAsync$1(`cd ${CWD$2} && nodemon --watch ./src --exec ts-node src/index.ts`,{shell:!0,stdio:"inherit"}):await spawnAsync$1(`cd ${CWD$2} && nodemon --watch ./src --exec node src/index.js`,{shell:!0,stdio:"inherit"})}catch(e){console.log(e)}};var dev=devScript$1;const{spawnAsync:spawnAsync}=promisify,CWD$1=process.cwd(),startScript$1=async()=>{try{await spawnAsync(`cd ${CWD$1} && node dist/index.js`,{shell:!0,stdio:"inherit"})}catch(e){console.log(e)}};var start=startScript$1;const{uglify:uglify}=require$$0__default$2.default,CWD=process.cwd(),defaults={compilerOptions:{declaration:!0}},override={compilerOptions:{declaration:!1}},TS={in:{input:`${CWD}\\src\\index.ts`,plugins:[commonjs__default.default(),Json__default.default(),uglify(),typescript__default.default({tsconfigDefaults:defaults,tsconfig:"tsconfig.json",tsconfigOverride:override})]},out:{file:`${CWD}\\dist\\index.js`,format:"cjs"}},JS={in:{input:`${CWD}\\src\\index.js`,plugins:[commonjs__default.default(),Json__default.default(),uglify()]},out:{file:`${CWD}\\dist\\index.js`,format:"cjs"}},buildScript$1=async()=>{try{existsSync(join(CWD,"tsconfig.json"))?await buildFunc(TS.in,TS.out):await buildFunc(JS.in,JS.out)}catch(e){console.log(e)}};async function buildFunc(e,r){const t=await rollup__default.default.rollup(e);console.log(t.watchFiles);var{output:e}=await t.generate(r);for(const i of e)"asset"===i.type?console.log("Asset",i):console.log("Chunk",i.modules);await t.write(r),await t.close()}var build=buildScript$1,scripts={devScript:dev,startScript:start,buildScript:buildScript$1};const{Command:Command}=require$$0__default$3.default,{devScript:devScript,startScript:startScript,buildScript:buildScript}=scripts,program=new Command;program.version("0.1.0").description("Script for running create-express-app commands"),program.command("dev").alias("d").description("Start a nodemon development server").action(devScript),program.command("start").alias("s").description("Start the production build server").action(startScript),program.command("build").alias("b").description("Build the project for production").action(buildScript),program.parse(process.argv);var src={};module.exports=src;