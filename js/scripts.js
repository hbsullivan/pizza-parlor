// Business Logic 
let pizza = new Pizza();

function Pizza(toppings, size) {
  this.toppings = []
  this.size = []
}

Pizza.prototype.findCostSize = function() {
let cost = 10;
if (this.size.includes("small")) {
  return cost;
}else if (this.size.includes("medium")) {
  return cost += 5

}else if (this.size.includes("large")) {
  return cost += 10
}
return cost
}

Pizza.prototype.findCostToppings = function (cost) {
let newCost
if (this.toppings.includes("sausage") && this.toppings.includes("pepperoni")) {
  let newCost = cost += 3;
  return newCost;
}else if (this.toppings.includes("sausage")) {
  let newCost = cost += 1;
  return newCost;
}else if (this.toppings.includes("pepperoni")) {
  let newCost = cost += 2;
  return newCost;
}
return newCost;
}

//User Interface Logic


