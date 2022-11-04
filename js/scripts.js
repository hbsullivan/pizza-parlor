// Business Logic 
let pizza = new Pizza();

function Pizza(toppings, size) {
  this.toppings = []
  this.size = []
}

Pizza.prototype.findCost = function(toppings, size) {
let cost = 10;
if (this.toppings.includes("sausage")) {
  return cost += 1
}
if (this.toppings.includes("pepperoni")) {
  return cost +=2
}

}
