const core = require('@actions/core');
const github = require('@actions/github');

try {
  // who-to-greet -> input defined in action file
  const nameToGreet = core.getInput('who-to-greet');
  
  // exibe a mensagem
  console.log(`Hello: ${nameToGreet}!`);
  
  const time = (new Date()).toTimeString();
  
  // define um output
  core.setOutput("time", time);
  
  // payload do evento atual
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}