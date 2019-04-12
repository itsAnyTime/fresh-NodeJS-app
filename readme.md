# fresh-NodeJS-app with express #

## Clone

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.


```
$ git clone  # or clone your own fork
```

## Deploying to Heroku

open terminal/console

```
$ cd fresh-NodeJS-app
$ heroku create // or add a name: heroku create fresh-nodejs-2019
(Name must start with a letter, end with a letter or digit and can only contain lowercase letters, digits, and dashes.)
$ git remote -v
$ heroku git:remote -a fresh-nodejs-2019 (or your app name)
$ git push heroku master
$ heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## To work local on http://localhost:5000/

```
$ npm install
$ heroku local 
```


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
