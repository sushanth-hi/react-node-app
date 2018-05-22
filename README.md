# Steps to set-up node-app

## Express: 
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web applications.

* Install express: "npm install express -g"
* Use expess to create boiler-plate code: express "app-name"
* Go to the directory (app-name) install dependencies (npm install).

## Reference for express:
https://expressjs.com/

## Sequelize: 
Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

* Install other libraries: "npm install pg sqlite3 sequelize sequelize-cli --save"
* Initialize Sequelize: "node_modules/.bin/sequelize init" :- This will create 4 folders(config, migration, models, seeder).

* In config.json ,make changes as per dev,test or prod environment
* Create a model using sequelize command: "node_modules/.bin/sequelize model:generate --name User --attributes username:string"
This will create a "User" model with a field "username".

* Run the migration file using command: "node_modules/.bin/sequelize db:migrate"
This will create a schema in the database by running all models.

* Create seed failes using command: "node_modules/.bin/sequelize seed:generate --name demo-user"
This will create a seed file.

* Run the seed file using command: "node_modules/.bin/sequelize db:seed:all"

Reference for Sequelize:
http://docs.sequelizejs.com/

* Use "export NODE_ENV=production" while deploying in production environment.
* React part of code is there client folder.

## PM2: 
pm2 is a complete feature set for production environment, built with a worldwide community of developers and enterprises.

Refernce: http://pm2.keymetrics.io/

* In AWS EC2 manage node apps using pm2 tool.
* There is a file called process.json in the project. Confiure your app in this file.
* Below are handy useful commands

1) pm2 start process.json : It will pick up the configuration and run the node server.
2) pm2 list: List all the node servers that are running
3) pm2 kill: It will kill all process.
4) pm2 startup: Using this command we can configure node app to restart on system reboot. When you run this command, based on OS a command will be generated. Run it.
Start your app using pm2. Then use "pm2 save" to save all process. For testing reboot the system. The node app will be up without any manual intervention.



