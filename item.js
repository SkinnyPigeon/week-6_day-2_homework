var crisps = {
  name: "crisps",
  price: 1.50
}
var bananas = {
  name: "bananas",
  price: 0.50
}

var steak = {
  name: "steak",
  price: 8
}

var irnBru = {
  name: "Irn Bru",
  price: 2.50
}

var store = { crisps, bananas, steak, irnBru };

module.exports = store;
console.log(store.crisps.price)