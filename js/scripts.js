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

function getSelected() {
const selectedSize = document.getElementById("size-option").value
pizza.size = selectedSize;
const selectedToppings = document.querySelectorAll("input[name=topping-option]:checked");
  for (var i = 0; i < selectedToppings.length; i++) {
    if (selectedToppings[i].checked) {
        pizza.toppings.push(selectedToppings[i].value);
    }
  }
}

function handleSubmit(event) {
event.preventDefault();
getSelected();
let sizeCost = pizza.findCostSize();
let finalCost = pizza.findCostToppings(sizeCost);
console.log(finalCost);
document.getElementById("price").innerText = finalCost
document.getElementById("finalPrice").removeAttribute("class");
}


window.addEventListener("load", function(){
  document.getElementById("order-form").addEventListener("submit", handleSubmit);
})