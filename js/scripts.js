// Business Logic 

function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.findCostSize = function() {
  let cost = 10;
  if (this.size.includes("small")) {
    return cost;
  }else if (this.size.includes("medium")) {
    return cost += 5;
  }else if (this.size.includes("large")) {
    return cost += 10;
  }else
    console.log("please select a size")
}

Pizza.prototype.resetPizza = function() {
  pizza.toppings = [];
}

Pizza.prototype.findCostToppings = function (cost) {
  if(this.toppings.includes("sausage") && this.toppings.includes("pepperoni") && this.toppings.includes("veggies")) {
    let newCost = cost += 3.5;
    return newCost.toFixed(2);
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
  }else {
  let newCost = null;
  return newCost
  }
}

//User Interface Logic


function getSelected() {
  const size = document.getElementById("size-option").value;
  const toppings = document.querySelectorAll("input[name=topping-option]:checked");
  let toppingsArray = [];
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      toppingsArray.push(toppings[i].value);
    } 
  }
  let pizza = new Pizza(size, toppingsArray);
  return pizza
}


function handleSubmit(event) {
  event.preventDefault();
  pizza = getSelected();
  let sizeCost = pizza.findCostSize();
  let finalCost = pizza.findCostToppings(sizeCost);
  if (finalCost === null){
    errorMessage();
  }else {
  document.getElementById("error").setAttribute("class", "uhOh");
  document.getElementById("price").innerText = finalCost;
  document.getElementById("final-price").removeAttribute("class");
  pizza.resetPizza();
 }
} 

function newOrder() {
  document.getElementById("final-price").setAttribute("class", "hidden");
  document.getElementById("size-option").value = "small";
  const selectedToppings = document.querySelectorAll("input[name=topping-option]:checked");
  for (let i = 0; i < selectedToppings.length; i++) {
    if (selectedToppings[i].checked) {
        selectedToppings[i].checked = false;
    } 
  }
}

function errorMessage() {
  document.getElementById("error").removeAttribute("class");
  document.getElementById("final-price").setAttribute("class", "hidden");
}

window.addEventListener("load", function(){
  document.getElementById("order-form").addEventListener("submit", handleSubmit);
  document.getElementById("new-order").addEventListener("click", newOrder);
})