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
  }
}
module.exports.basket = basket;