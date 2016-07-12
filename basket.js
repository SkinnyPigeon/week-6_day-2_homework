var store = require( './store');

var basket = {
  items: [],
  total: 0,
  totalItems: function() {
    return this.items.length
  },
  add: function( item ) {
    this.items.push( item )
    this.total += item.price
  },
  remove: function( item ) {
    for( basket_item of this.items ) {

      if( item.name === basket_item.name ){
        this.total -= basket_item.price;
      }

      {
        if( item.name === basket_item.name ){
          this.items.splice( basket_item.index, 1);
        }
      }
    }
  },
  bulkDiscount: function() {
    if( this.total >= 20 ){
      this.total *= 0.9;
    }
  },
  customerDiscount: function() {
    if( this.total >= 20 ){
      this.total *= 0.9;
      this.total *= 0.95;
    }
  },

}
module.exports.basket = basket;

