const pizzaToppings = ["Ham", "Cheese", "Onions", "Olive"];
for (let name of pizzaToppings) {
  console.log(name);
}

let greetCustomer = function() {
    console.log("Welcome to Pizza House, our toppings are: ham, cheese, olive, ...");
};

console.log(greetCustomer());


function getPizzaOrder(size = "large", crust = "thin", toppings = "ham, cheese, olive...", order = "One large thick crust pizza with ham, cheese, olive, ... coming up!") {
    
    console.log(size, crust, toppings);
    console.log(order);
  }
  
  getPizzaOrder();
 
function preparePizza(message = "...Cooking pizza..."){

    console.log(message);
}

preparePizza();


const x = { name: "Order up! Here's your large thin crust pizza with ham, cheese, olive, ... Enjoy!" };
const y = x;
x.name = "Order up! Here's your large thin crust pizza with ham, cheese, olive, ... Enjoy!";

console.log(y.name); 

preparePizza();
greetCustomer();
getPizzaOrder();



