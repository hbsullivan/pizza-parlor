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
if(this.toppings.includes("sausage") && this.toppings.includes("pepperoni") && this.toppings.includes("veggies")) {
  let newCost = cost += 3.5;
  return newCost.toFixed(2)
}else if (this.toppings.includes("sausage") && this.toppings.includes("pepperoni")){
  let newCost = cost += 3;
  return newCost.toFixed(2);
}else if (this.toppings.includes("sausage") && this.toppings.includes("veggies")){
  let newCost = cost += 1.5;
  return newCost.toFixed(2);
}else if (this.toppings.includes("veggies") && this.toppings.includes("pepperoni")){
  let newCost = cost += 2.5;
  return newCost.toFixed(2);
}else if (this.toppings.includes("veggies")) {
  let newCost = cost += .5;
  return newCost.toFixed(2);
}else if (this.toppings.includes("sausage")) {
  let newCost = cost += 1;
  return newCost.toFixed(2);
}else if (this.toppings.includes("pepperoni")) {
  let newCost = cost += 2;
  return newCost.toFixed(2);
}else if (this.toppings.includes("no-toppings")) {
  let newCost = cost += 0;
  return newCost.toFixed(2);
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

// function errorMessage() {
//   document.getElementById("error").removeAttribute("class");
// }

function handleSubmit(event) {
event.preventDefault();
getSelected();
let sizeCost = pizza.findCostSize();
let finalCost = pizza.findCostToppings(sizeCost);
document.getElementById("price").innerText = finalCost
document.getElementById("final-price").removeAttribute("class");
pizza.toppings = []
} 

function newOrder() {
  document.getElementById("final-price").setAttribute("class", "hidden");
  document.getElementById("size-option").value = "small";
  const selectedToppings = document.querySelectorAll("input[name=topping-option]:checked");
  for (var i = 0; i < selectedToppings.length; i++) {
    if (selectedToppings[i].checked) {
        selectedToppings[i].checked = false
    } 
  }
}


window.addEventListener("load", function(){
  document.getElementById("order-form").addEventListener("submit", handleSubmit);
  document.getElementById("new-order").addEventListener("click", newOrder)
})