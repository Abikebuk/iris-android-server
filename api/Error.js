export default class Error{
    constructor(code, message, data){
        this.code = code;
        this.message = message;
        this.data = data;
    }

    json(){
        JSON.stringify(this);
    }

}