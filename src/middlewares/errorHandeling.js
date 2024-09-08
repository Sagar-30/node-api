export class ApplicationError extends Error{
    constructor(message,code){
        super();
        this.code = code;
    }
}