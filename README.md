# github-actions
Repositório com exemplos de Composite, JavaScript, e Docker Actions no GitHub Actions para automação de pipelines CI/CD.

## Composite Action
Um Composite Action agrupa vários passos de um workflow em um único arquivo YAML → facilitando a reutilização.
**Exemplo:** Composite Action para instalar dependências e rodar lint (`lint.yml`).

## JavaScript Action
Uma JavaScript Action é um script que pode ser executado diretamente dentro de um workflow do GitHub Actions → permite criar uma ação personalizada usando Node.js. Ideal para lógica complexa;
**Exemplo:** Ação js para rodar um comando de lint.

## Docker Container Action
Uma Docker Container Action executa tarefas dentro de um contêiner Docker, oferecendo um ambiente controlado.
**Exemplo:** Reescrever o processo de lint usando Docker.