#!/usr/bin/env node
const { execSync } = require('child_process');
var packagejson = require("./package.json");

const cwd = process.cwd();
const config = packagejson.config.deployToGit;



console.log(`开始执行编译脚本命令 "${config.script}"...`);
console.log(execSync(`${config.script}`, { cwd }).toString('utf-8'));

execSync([
  `cd ${config.folder}`,
  `git init`,
  `git remote add origin ${config.repository}`,
  `git config user.email "${config.user.email}"`,
  `git config user.name "${config.user.name}"`,
  'git add .',
  `git commit --allow-empty -m "${config.commit}"`
].join('&&'), { cwd });

if (config.beforePushScript) {
    console.log('push 之前执行');

    execSync(`cd ${config.folder} && ${config.beforePushScript}`, { cwd });
}

console.log('开始推送...');

execSync(`cd ${config.folder} && git push --tags ${config.repository} ${config.branch} -f`, { cwd });

console.log('部署完成.');