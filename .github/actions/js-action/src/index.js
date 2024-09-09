const core = require('@actions/core');

try {
  // obtém o input
  const message = core.getInput('message');

  // exibe a mensagem
  console.log(`Message: ${message}`);

  // define um output
  core.setOutput('result', `Printed message: ${message}`);

} catch(error){
  core.setFailed(`Action failed with error: ${error.message}`);
}