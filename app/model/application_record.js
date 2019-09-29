import connection from '../../db/connection';

class ApplicationRecord {
    constructor(){
        console.log('connection', connection)
    }

}
export default ApplicationRecord