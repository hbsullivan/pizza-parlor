// Business Logic 
let pizza = new Pizza();

function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.findCost = function(toppings, size) {
let cost = 10;
if (this.toppings.includes("sausage")) {
  return cost += 1
}

}
