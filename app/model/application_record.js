import connection from '../../db/connection';
import pluralize from 'pluralize';


class ApplicationRecord {
    constructor(){
        const modelName = this.constructor.name.toLowerCase();
        console.log('paren----t00000000', pluralize(modelName)  )
    }

}
export default ApplicationRecord