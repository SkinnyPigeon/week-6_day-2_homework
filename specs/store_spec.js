var store = require( '../store' );

var assert = require( 'chai' ).assert;

describe( 'Item', function() {


  it( 'Should have a price', function() {
    assert.equal( 1.50, store['crisps'].price );
  })

  it ('Should have a description', function() {
    assert.equal( "crisps", store['crisps'].name );
  })

  it ('Should have a bogof', function() {
    assert.equal( true, store['crisps'].bogof );
  })

} ) 