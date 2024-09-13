class OrderModel {
    constructor( userId, totalAmount,id) {
        this._id = id;          
        this.userId = userId;                     
        this.totalAmount = totalAmount; 
        this.createdAt = new Date();    
    }
}

export default OrderModel;
