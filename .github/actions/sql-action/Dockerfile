# Usa uma imagem Ubuntu como base para instalar o cliente SQL Server
FROM ubuntu:20.04

# Instala o cliente sqlcmd
RUN apt-get update && \
    apt-get install -y curl apt-transport-https && \
    curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && \
    ACCEPT_EULA=Y apt-get install -y msodbcsql17 unixodbc-dev mssql-tools

# Adiciona o script de entrada
ADD entrypoint.sh /entrypoint.sh

# Dá permissão de execução ao script de entrada
RUN chmod +x /entrypoint.sh

# Define o script de entrada
ENTRYPOINT ["/entrypoint.sh"]