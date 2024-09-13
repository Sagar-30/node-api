export default class CartModel {
  constructor(userId, itemId, quantity, id) {
      this._id = id;
      this.userId = userId;         
      this.itemId = itemId;         
      this.quantity = quantity;    
  }
}

