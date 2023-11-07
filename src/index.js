const core = require('@actions/core');
const github = require('@actions/github');
const { createDeployment, getBearerToken } = require('./api');
const { branch } = require('./constants');

const getBranchToDeploy = () => {
  if (branch) {
    return branch;
  }

  const { ref, eventName } = github.context;

  if (eventName === 'pull_request') {
    return process.env.GITHUB_HEAD_REF;
  }

  if (ref.startsWith('refs/heads/')) {
    return ref.replace('refs/heads/', '');
  }
  if (ref.startsWith('refs/tags/')) {
    return ref.replace('refs/tags/', '');
  }
  return ref;
};

const main = async () => {
  try {
    const { token } = await getBearerToken();
    const targetBranch = getBranchToDeploy();

    await createDeployment(token, targetBranch);
  } catch (err) {
    core.error(err);
  }
};

main();
