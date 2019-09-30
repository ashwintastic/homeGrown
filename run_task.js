/**
 *
 *
 // Commands:
 // sequelize db:migrate                        Run pending migrations
 // sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
 // sequelize db:migrate:status                 List the status of all migrations
 // sequelize db:migrate:undo                   Reverts a migration
 // sequelize db:migrate:undo:all               Revert all migrations ran
 // sequelize db:seed                           Run specified seeder
 // sequelize db:seed:undo                      Deletes data from the database
 // sequelize db:seed:all                       Run every seeder
 // sequelize db:seed:undo:all                  Deletes data from the database
 // sequelize db:create                         Create database specified by configuration
 // sequelize db:drop                           Drop database specified by configuration
 // sequelize init                              Initializes project
 // sequelize init:config                       Initializes configuration
 // sequelize init:migrations                   Initializes migrations
 // sequelize init:models                       Initializes models
 // sequelize init:seeders                      Initializes seeders
 // sequelize migration:generate                Generates a new migration file  [aliases: migration:create]
 // sequelize model:generate                    Generates a model and its migration  [aliases: model:create]
 // sequelize seed:generate                     Generates a new seed file  [aliases: seed:create]
 *
 *
 */

const shell = require('shelljs');
const path = require('path');
const env = process.argv[3] || 'development';
const restArgs = process.argv.slice(2).join(' ');

const sequelizePath = path.join(__dirname, 'node_modules/.bin/sequelize');
const configJsonPath = path.join(__dirname, 'db/config.json');
const optionPath = path.join(__dirname, 'db/options.json');

console.log('----------command Running: ', optionPath);
shell.exec(`${sequelizePath} --config ${configJsonPath} --options-path=${optionPath} ${restArgs}`);





