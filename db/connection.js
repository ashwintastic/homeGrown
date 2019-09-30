import fs  from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let connectionsPoll = 'asd';
const env = process.argv[2] || 'development';
const configFilePath = path.join(__dirname, 'config.json');
const connection = {
    connectDb: (configs) => {
        const parsedConfigs = JSON.parse(configs);
        const config = parsedConfigs[env];
        connectionsPoll = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            pool: {
                max: config.connectionLimit,
                min: 0,
                idle: 10000
            },
        });
        return connectionsPoll;
    }
};

try {
    const dbConfigs = fs.readFileSync(configFilePath, 'utf8');
    connectionsPoll = connection.connectDb(dbConfigs); // returns connection pool
} catch (e) {
    console.log(e);
}
export default connectionsPoll;

