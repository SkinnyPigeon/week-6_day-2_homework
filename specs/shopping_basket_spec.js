var basket = require( '../basket' ).basket;
var store = require( '../store' );
var assert = require( 'chai' ).assert;

describe( 'Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  })

  it( 'Should have a total of 0 at start', function() {
    assert.equal( 0, basket.total );
  })

  it( 'Should have something in in at some point', function() {
    basket.add( store['crisps'] )
    assert.equal( 1, basket.totalItems() );
  })

  it( 'Should increase basket total', function() {
    basket.total = 0;
    basket.add( store['crisps'] );
    assert.equal( 1.5, basket.total );
  })

  it( 'Should remove item from basket', function() {
    basket.items = [];
    basket.add( store['crisps'] );
    basket.remove( store['crisps'] );
    assert.equal( 0, basket.totalItems() );
  })

  it( 'Should reduce basket total', function() {
    basket.items = [];
    basket.total = 0;
    basket.add( store['crisps']);
    basket.add( store['crisps']);
    basket.remove( store['crisps'] );
    assert.equal( 1.5, basket.total );
  })

  it( 'Should apply discount over £20', function() {
    basket.items = [];
    basket.total = 0;
    basket.add( store['steak']);
    basket.add( store['steak']);
    basket.add( store['steak']);
    basket.bulkDiscount( true );
    assert.equal( 21.6, basket.total );
  })

  it( 'Should apply customer discount over £20', function() {
    basket.items = [];
    basket.total = 0;
    basket.add( store['steak']);
    basket.add( store['steak']);
    basket.add( store['steak']);
    console.log( basket.items )
    basket.customerDiscount( true );
    assert.equal( 20.52, basket.total );
  })

  it( 'Should sort the basket alphebetically', function() {
    basket.items = [];
    basket.total = 0;
    basket.add( store['steak']);
    basket.add( store['crisps']);
    basket.add( store['bananas']);
    basket.add( store['steak']);
    basket.add( store['steak']);
    basket.add( store['steak']);
    basket.bogof();
    console.log( basket.total );
  })

} )

















