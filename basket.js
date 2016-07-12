var crisps = require( './item' ).crisps;
var bananas = require( './item' ).bananas;
var steak = require( './item' ).steak;
var irnBru = require( './item' ).irnBru;

var basket = {
  items: [],
  total: 0,
  totalItems: function() {
    return this.items.length
  },
  add: function( item ) {
    this.items.push( item )
  }
}
console.log( crisps )
module.exports.basket = basket;