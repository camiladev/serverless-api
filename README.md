# API - My Minions

Este é o projeto responsavel pelo backend do site My Minions. o My Minions é um site de reservas de bonecos em miniatura de minions, onde os clientes podem selecionar os bonecos que deseja reservas e enviar por e-mail para o resposavel pelas reservas e uma cópia é encaminhada para o cliente.

### :page_with_curl: Informações sobre o Projeto

Este projeto é a parte do backend para a aplicação de reservas.

### :clipboard: Resolução

Este projeto utiliza o Serverless Framework com funções lambdas, para realizar a conexão com o banco de dados DynamoDB e retornar os dados para o frontend.

E para enviar e-mail utiliza o NodeMailer para conectar com o servidor de e-mail, no caso é o gmail e enviar o e-mail para os endereços informados pelo frontend.

### :hammer_and_wrench: Tecnologias/Serviços usados

- Node.js
- Serverless Framework
- AWS Lambda
- AWS APIGateway
- AWS DynamoDB
- AWS Cognito
- NodeMailer


### :computer: Execução

Para você rodar o projeto localmente é necessário que realize o clone do projeto e executar o comando:

```bash
npm install
```

E para testar a aplicação você pode utilizar este comando:

```bash
npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='YOUR_COGNITO_USER_POOL_ID' \
--app-client-id='YOUR_COGNITO_APP_CLIENT_ID' \
--cognito-region='YOUR_COGNITO_REGION' \
--identity-pool-id='YOUR_IDENTITY_POOL_ID' \
--invoke-url='YOUR_API_GATEWAY_URL' \
--api-gateway-region='YOUR_API_GATEWAY_REGION' \
--path-template='/produtosDB' \
--method='GET' \
```

para que funcione você precisa ter cadastro na aws e informar seus dados substituindo o texto em capslock com seus dados.