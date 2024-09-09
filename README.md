# github-actions
Repositório com exemplos de Composite, JavaScript, e Docker Actions no GitHub Actions para automação de pipelines CI/CD.

## 🧩 Composite Action
Um Composite Action agrupa vários passos de um workflow em um único arquivo YAML → facilitando a reutilização.

**Exemplo:** Composite Action para instalar dependências e rodar lint (`lint.yml`).

## 🟡 JavaScript Action
Uma JavaScript Action é um script que pode ser executado diretamente dentro de um workflow do GitHub Actions → permite criar uma ação personalizada usando Node.js. Ideal para lógica complexa no workflow.

**Exemplo:** Ação js para modificar um arquivo de configuração em uma aplicação durante o processo de deploy ou build.

📖 🐋 [Creating a JavaScript acion](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action#template-repositories-for-creating-javascript-actions)

## Docker Container Action
Uma Docker Container Action executa tarefas dentro de um contêiner Docker, oferecendo um ambiente controlado.

**Exemplo:** Reescrever o processo de lint usando Docker.

📖 [Creating a Docker container action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-docker-container-action)