const core = require('@actions/core');

const apiUrl = core.getInput('apiUrl');
const appName = core.getInput('appName');
const token = core.getInput('token');
const branch = core.getInput('branch');

module.exports = {
  apiUrl, appName, branch, token,
};
