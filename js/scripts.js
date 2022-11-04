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
}
// }else if (this.size.includes("large")) {
//   return cost += 10
// }
// return cost
}

Pizza.prototype.findCostToppings = function (cost) {
if (this.toppings.includes("sausage") && this.toppings.includes("pepperoni")) {
  return cost += 3;
}else if (this.toppings.includes("sausage")) {
  return cost += 1;
}else if (this.toppings.includes("pepperoni")) {
  return cost +=2;
}

}


