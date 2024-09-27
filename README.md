# github-actions
Repositório com exemplos de Composite, JavaScript, e Docker Actions no GitHub Actions para automação de pipelines CI/CD.

## 🧩 Composite Action
Um Composite Action agrupa vários passos de um workflow em um único arquivo YAML → facilitando a reutilização.

**Exemplo:** Composite Action para instalar dependências e rodar lint (`lint.yml`).

## 🟡 JavaScript Action
Uma JavaScript Action é um script que pode ser executado diretamente dentro de um workflow do GitHub Actions → permite criar uma ação personalizada usando Node.js. Ideal para lógica complexa no workflow.

**Exemplo:** Ação js para modificar um arquivo de configuração em uma aplicação durante o processo de deploy ou build.

📖 [Creating a JavaScript acion](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action#template-repositories-for-creating-javascript-actions)

## 🐋 Docker Container Action
Uma Docker Container Action executa tarefas dentro de um contêiner Docker, oferecendo um ambiente controlado.

**Exemplo:** Reescrever o processo de lint usando Docker.

📖 [Creating a Docker container action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-docker-container-action)

## 💾 Cache em pipeline CI/CD

**Cache** é uma técnica que armazena arquivos ou resultados de processos que são demorados ou caros de serem gerados, como dependências de pacotes (`npm install`), artefatos de compilação ou até resultados de consultas a banco de dados.

Em pipelines do GitHub Actions, o cache pode ser configurado para armazenar arquivos de dependências ou resultados de compilação de builds anteriores. Quando uma nova execução da pipeline começa, ela verifica se o cache correspondente existe.

- Se sim, ele é usado em vez de baixar em vez de baixar ou gerar os arquivos novamente.

- Se não, os arquivos são gerados ou baixados e o cache é atualizado ao final da execução.

#### Exemplo de uso de cache:

**npm install:** Em uma aplicação js, o comando `npm install` pode levar muito tempo para ser executado - pois ele baixa todas as dependências do projeto. Se você cachear a pasta `node_modules` ou o arquivo `package-lock.json`, em execuções posteriores, o processo pode pular o download das dependências e reutilizar o cache, acelerando bastante a pipeline.

📖 [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows)