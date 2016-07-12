var crisps = require( '../item' );
var assert = require( 'chai' ).assert;

describe( 'Item', function() {


  it( 'Should have a price', function() {
    assert.equal( 1.50, crisps.price );
  })

  

} )