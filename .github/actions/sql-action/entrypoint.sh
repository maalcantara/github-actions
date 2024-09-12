#!/bin/bash

# Pega os inputs (credenciais e consulta SQL)
DB_HOST=$1
DB_PORT=$2
DB_USER=$3
DB_PASSWORD=$4
DB_NAME=$5
QUERY=$6

# Executa a query no banco de dados SQL Server usando sqlcmd
/opt/mssql-tools/bin/sqlcmd -S $DB_HOST,$DB_PORT -U $DB_USER -P $DB_PASSWORD -d $DB_NAME -Q "$QUERY"

# Verifica se a execução falhou
if [ $? -ne 0 ]; then
  echo "Error executing the SQL query"
  exit 1
fi

# Saída final
echo "Query executed successfully"
