import yaml from 'js-yaml';
import fs  from 'fs';
import path from 'path';

const congigFilePath = path.join(__dirname, 'database.yml');

try {
    const dbConfigs = yaml.safeLoad(fs.readFileSync(congigFilePath, 'utf8'));
    connection.connectDb()
} catch (e) {
    console.log(e);
}


const connection = {
    connectDb: (configs) => {
        console.log('opopopopop',configs)

    }
}