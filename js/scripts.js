// Business Logic 
let pizza = new Pizza();

function Pizza(toppings, size) {
  this.toppings = []
  this.size = []
}

Pizza.prototype.findCost = function(toppings, size) {
let cost = 10;
if (this.size.includes("small")) {
  return cost;
}else if (this.size.includes("medium")) {
  return cost += 5
}

if (this.toppings.includes("sausage") && this.toppings.includes("pepperoni")) {
  return cost += 3;
}else if (this.toppings.includes("sausage")) {
  return cost += 1;
}else if (this.toppings.includes("pepperoni")) {
  return cost +=2;
}

}
