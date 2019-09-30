import dataBaseConnection  from '../../db/connection';


class Base {
    constructor(){
        dataBaseConnection.define(this.constructor.name.toLowerCase(),{

        },{})
       // const modelName = this.constructor.name.toLowerCase();
       // console.log('paren---', pluralize(modelName)  )
    }

}
export default Base