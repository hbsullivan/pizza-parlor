# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests
```
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }


Describe: Pizza.prototype.finCostSize()

Test: "It should add 0 to the price if a small pizza is selected"
Code:
const pizza = new Pizza(, "small")
pizza.findCostSize();
Expected Output: 10

Test: "It should add 5 to the price if a medium pizza is selected"
Code:
const pizza = new Pizza(, "medium")
pizza.findCostSize();
Expected Output: 15

Test: "It should add 10 to the price if a medium pizza is selected"
Code:
const pizza = new Pizza(, "large")
pizza.findCostSize();
Expected Output: 20


Describe: Pizza.prototype.findCostToppings()

Test: "It should add $1 to price if sausage is selected
Code: 
const pizza = new Pizza("sausage", );
pizza.findCostToppings()
Expected Output: 11

Test: "It should add $2 to price if pepperoni is selected"
Code: 
const pizza = new Pizza("pepperoni", )
pizza.findCostToppings();
Expected Output: 12

Test: "It should add $3 to the price if both pepperoni and sausage are selected"
Code: 
const pizza = new Pizza(["pepperoni", "sausage"])
pizza.findCostToppings();
Expected Output: 13
```
## Known Bugs

* _Any known issues_
* _should go here_

## License


_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_