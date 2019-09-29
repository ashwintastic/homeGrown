import yaml from 'js-yaml';
import fs  from 'fs';
import path from 'path';
import mysql from 'mysql';

let connectionsPoll;
const env = process.argv[2] || 'development';
const configFilePath = path.join(__dirname, 'database.yml');
const connection = {
    connectDb: (configs) => {
     const pool =  mysql.createPool(configs[env]);
     return pool;
    }
};

try {
    const dbConfigs = yaml.safeLoad(fs.readFileSync(configFilePath, 'utf8'));
    connectionsPoll = connection.connectDb(dbConfigs); // returns connection pool
} catch (e) {
    console.log(e);
}
export default connectionsPoll;
