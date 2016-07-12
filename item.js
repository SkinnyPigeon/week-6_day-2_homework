var item = {
  price: 0
}

var crisps = Object.create( item );
crisps.price = 1.50;

var bananas = Object.create( item );
bananas.price = 1.50;

var steak = Object.create( item );
steak.price = 1.50;

var irnBru = Object.create( item );
irnBru.price = 1.50;



module.exports = crisps;
module.exports = bananas;
module.exports = steak;
module.exports = irnBru;

