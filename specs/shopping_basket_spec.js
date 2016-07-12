var basket = require( '../basket' );
var assert = require( 'chai' ).assert;

describe( 'Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.items );
  })



} )
