#### How to Install

``` sh
$ git clone https://github.com/jonasqq/reactjs-todo.git todo && cd todo
$ cp .env.example .env
```

###### For `development` environment, edit file `.env` => `NODE_ENV=development`
#
```sh
$ npm install
$ npm start
```

###### For `production` environment, edit file `.env` => `NODE_ENV=production`
#
```sh
$ npm install
$ npm run build
$ npm run build:asset
$ npm run build:serve
```