# _Pizza Parlor_

#### By _Henry Sullivan_

#### _Order a pizza with your desired toppings, and the app will tell you how much it costs!_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_This is a simple web application that allows for the user to select from a list of toppings and choose the size of the pizza. The application will then display to the user how much they owe._

## Setup/Installation Requirements

* _Clone this repo to your workspace._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._
* _Can also reach site by using the link https://github.com/hbsullivan/pizza-parlor.git_


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

Test: "It should show an error message if no size is selected"
Code: 
const pizza = new Pizza(,undefined)
pizza.findCostSize();
Expected Output: "Please choose a size"

Describe: Pizza.prototype.findCostToppings()

Test: "It should add $1 to price if sausage is selected
Code: 
const pizza = new Pizza("sausage", );
pizza.findCostToppings(10)
Expected Output: 11

Test: "It should add $2 to price if pepperoni is selected"
Code: 
const pizza = new Pizza("pepperoni", )
pizza.findCostToppings(10);
Expected Output: 12

Test: "It should add $3 to the price if both pepperoni and sausage are selected"
Code: 
const pizza = new Pizza(["pepperoni", "sausage"])
pizza.findCostToppings(10);
Expected Output: 13

Test: "It should add $0.50 to the price if veggies are selected"
Code: 
const pizza = new Pizza(["veggies"])
pizza.findCostToppings(10);
Expected Output: 10.50

Test: "It should show an error message when no toppings are selected with the checkboxes"
Code: const pizza = new Pizza([], "small");
pizza.findCostToppings(10);
Expected Output: "Error"
```
## Known Bugs

* _Error message is showing with incorrect 'undefined' price when no checkboxes selected_
* _Error message doesn't go away on resubmission_

## License

MIT License

Copyright (c) [2022] [Henry Sullivan]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.