# SQL- Node

## Descrição do projeto
Neste projeto eu busquei compreender melhor todas as funcionalidades que o Sequelize nos proporciona como Orm e também como utiliza-lo com o TypeScript

## 🛠️ Ferramentas

#### TypeScript
#### Sequelize 
#### Express
#### Postgres
#### Swagger
#### DotEnv
#### Eslint
#### Prettier

## Documentação das rotas

A documentação pode ser acessada de forma online pela url: https://sqlnode-production.up.railway.app/api-docs/

## Como rodar

### Tecnologias necessarias

##### Node
##### NPM ou Yarn
##### DATABASE SQL (Postgres, MySql, ...)
##### Git

### Iniciar a aplicação

#### Clone o repositorio

```
git clone https://github.com/GabrieldosSantosOliveira/sqlnode.git
```
#### Entre na pasta da aplicação

```
cd sqlnode
```
#### Instale as dependencias do projeto
```
yarn
# or
npm install
```
Crie o arquivo .env usando como exemplo o arquivo .env.example
```
DB_DIALECT=
DB_HOST=
DB_PORT=
DB_PASSWORD=
DB_DATABASE=
DB_USERNAME=
PORT=
```
#### Crie o database
```
yarn sequelize db:create
# or
npx sequelize db:create
```
#### Realize a migração das tabelas
```
yarn sequelize db:migrate
# or
npx sequelize db:migrate
```
#### Rode os seeders
```
yarn sequelize db:seed:all
# or
npx sequelize db:seed:all
```
#### Execute a aplicação 
```
yarn dev
# or
npm run dev
```
#### Contribuidores
[Gabriel dos Santos Oliveira](https://www.linkedin.com/in/gabriel-dos-santos-oliveira-24b67b243/)
