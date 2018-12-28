#!/usr/bin/env node
const { execSync } = require('child_process');
const entries = require('object.entries');
var packagejson = require("./package.json");

const fields = {
    repository: true,
    branch: true,
    folder: true,
    commit: true,
    script: true,
    user_name: true,
    user_email: true,
    beforePushScript: false
};
const cwd = process.cwd();
const config = packagejson.config.deployToGit;;

// for (const [field, isRequired] of entries(fields)) {
//     const configVar = packagejson.config.deployToGit;
//     console.log(configVar,'sss')
//     if (!configVar && isRequired) {
//         throw Error(`deployOnGit requires "${field}" field in package config`);
//     }

//     if (configVar) {
//         config[field] = configVar.replace(/\$([a-zA-Z0-9_]+)/g, (match, envVarName) => {
//             const envVar = process.env[envVarName];

//             if (!envVar) {
//                 throw Error(`Environment variable "${envVarName}" presented at string "${configVar}" is missing`);
//             }

//             return envVar;
//         });
//     }
// }

// console.log('Starting deploy to Git...');
// console.log(`Cloning the repository to "${config.folder}" folder...`);

// execSync(`git clone -b ${config.branch} ${config.repository} ${config.folder}`, { cwd });

console.log(`Starting script "${config.script}"...`);
console.log(execSync(`${config.script}`, { cwd }).toString('utf-8'));

console.log('配置提交...');
execSync([
  `cd ${config.folder}`,
  `git init`,
  `git remote add origin ${config.repository}`,
  `git config user.email "${config.user.email}"`,
  `git config user.name "${config.user.name}"`,
  'git add .',
  `git commit --allow-empty -m "${config.commit}"`
].join('&&'), { cwd });

console.log('配置提交完毕!!!');
if (config.beforePushScript) {
    console.log('Running beforePushScript...');

    execSync(`cd ${config.folder} && ${config.beforePushScript}`, { cwd });
}

console.log('Pushing...');

execSync(`cd ${config.folder} && git push --tags ${config.repository} ${config.branch} -f`, { cwd });

console.log('Deploying to git is finished.');