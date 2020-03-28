# semanaomnistack11
#reactjs #reactnative nodejs

# Metodos HTTP
GET:    buscar uma informacao do back-end;
POST:   criar uma informacao no back-end;
DELETE: deletar uma informacao no back-end;
PUT:    alterar uma informacao no back-end;

Iniciando Projeto Back-End NodeJS
-----------------------------------------
*Iniciando Projeto
npm init -y
*Instalando Programas para ver rotas
insomnia
----------------------------------------------------
*Instalando dependencias
npm install express
npm install nodemon -D 

alterar o arquivo package.json
incluir
"scripts":{
   "start": "nodemon ./src/index.js"
},
---------------------------------------------------
instalar para trabalhar com banco SQL - "utilizando sqlite"
npm install knex
npm install sqlite

iniciar o knex
npx knex init 

* as as pastas em src database e migrations
* vai gerar um arquivo chamado knexfile.js, deve colocar o endereco onde ficara o banco de dados.
Exemplo:
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

para criar as migrates
npx knex migrate: make create_nomeTabela

ao rodar o comando acima, vai gerar um arquivo, onde vai aparecer o sequinte schema
* aqui vai criar os campos da tabela
xports.up = function(knex) {
}

* caso queira da hollback deve colocar aqui
exports.down = function(knex) {
}

A estrutura vai ficar parecida com isso
exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
-------------------------------------------------------------------------

para criar tabela 
npx knex migrate: latest
