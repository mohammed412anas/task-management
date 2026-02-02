# About

## Server Application

A simple server application which is able to get some requests and able to perform actions with database.

## User Instructions

Clone the github repo

```sh
git clone git@github.com:mohammed412anas/task-management.git
```

Checkout to the directory

```sh
cd taskmanagement
```

Install all the dependencies

```sh
npm install
```

### Run the migration files

```sh
npx sequelize-cli db:migrate
```

### Run seeding files

```sh
npx sequelize-cli db:seed:all
```

### In case you want to undo the migration

Undo all the mirations

```sh
npx sequelize-cli db:migrate:undo:all
```

To undo specific files

```sh
npx sequelize-cli db:migrate:undo --name XXXXXXXXXXXXXX-create-posts.js
```

### In case you want to undo the seeding

If you wish to undo the most recent seed:

```sh
npx sequelize-cli db:seed:undo
```

If you wish to undo a specific seed:

```sh
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

If you wish to undo all seeds:

```sh
npx sequelize-cli db:seed:undo:all
```

# Scripts Available

## npm run start

This script start the application as backend server, when started the application will be able to accepts requests from a client and respond to the requests accordingly.

On default server runs at

```bash
http://localhost:10000/

```
