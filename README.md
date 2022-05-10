# Template CRUD - typescript + sequelize + docker

## Como inicializar

```
  $ npm install
```

```
  $ sudo docker network create local
```

```
  $ sudo docker-compose -f ./docker-compose.dev.yaml up
```

- Adicione ao [Postman](https://www.postman.com/downloads) a collection
- Adiciona a conexão ao [dbeaver](https://dbeaver.io/download)

⋅⋅⋅ Host 127.0.0.1
⋅⋅⋅ Port 5432
⋅⋅⋅ Database postgres
⋅⋅⋅ User postgres
⋅⋅⋅ Pass 123456

- Crie o schema gpweb ao banco de dados
- Crie a tabela presente na pasta SQL
