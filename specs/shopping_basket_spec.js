var basket = require( '../basket' ).basket;
var assert = require( 'chai' ).assert;

describe( 'Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  })

  it( 'Should have a total of 0 at start', function() {
    assert.equal( 0, basket.total );
  })

} )
