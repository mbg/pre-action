const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    core.info(`Found input for ${ms} milliseconds ...`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
