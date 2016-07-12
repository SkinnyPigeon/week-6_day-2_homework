var item = {
  price: 0
}

var crisps = Object.create( item );
crisps.price = 1.50;

var bananas = Object.create( item );
bananas.price = 0.50;

var steak = Object.create( item );
steak.price = 8;

var irnBru = Object.create( item );
irnBru.price = 2.50;

console.log('crisps', crisps);
console.log('bananas', bananas);
console.log('steack', steak);
console.log('crisps', crisps);

module.exports.crisps = crisps;
module.exports.bananas = bananas;
module.exports.steak = steak;
module.exports.irnBru = irnBru;

