var basket = require( '../basket' ).basket;
var store = require( '../item' );
var assert = require( 'chai' ).assert;

describe( 'Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  })

  it( 'Should have a total of 0 at start', function() {
    assert.equal( 0, basket.total );
  })

  it( 'Should have something in in at some point', function() {
    basket.add( store.crisps )
    assert.equal( 1, basket.total );
  })

} )
