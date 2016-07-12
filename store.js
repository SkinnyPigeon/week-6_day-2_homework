var crisps = {
  name: "crisps",
  price: 1.50,
  bogof: true
}

var bananas = {
  name: "bananas",
  price: 0.50,
  bogof: false
}

var steak = {
  name: "steak",
  price: 8,
  bogof: false
}

var irnBru = {
  name: "Irn Bru",
  price: 2.50,
  bogof: true
}

var store = { crisps, bananas, steak, irnBru };

module.exports = store;
// console.log(store['crisps'].price)