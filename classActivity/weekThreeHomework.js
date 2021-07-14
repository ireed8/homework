const pizzaToppings = ["Ham", "Cheese", "Onions", "Olive"];
for (let name of pizzaToppings) {
  console.log(name);
}

let greetCustomer = function() { 
  let eat = `Welcome to Pizza House, our toppings are `;
  for (let name of pizzaToppings) {
    eat += `${name}, `
  }
console.log(eat);
}
greetCustomer();

const x = "ham, cheese, ...onions";
const getPizzaOrder =  {
  x: "One large thick crust pizza with `x` coming up!",
  y: "One large thick crust pizza with `y` coming up!",
  pizzaToppings: "One large thick crust pizza with ham, cheese, onions coming up!",
};



function pizzaOrder(pizza) {
  console.log(pizza) 
}

function preparePizza(pizza) {"...cooking pizza..."
  let pizzaOrder = "...cooking pizza..." + pizza;
  console.log(pizzaOrder);
};

preparePizza("large, thick, ham, cheese, onions", pizzaOrder);


const servePizza = function (name, timeOfDay) {
  return `Order up!, $(name), Here's your large thick crust pizza with x, y, z, ... Enjoy!" $(timeOfDay)`;
};

let greetCustomer = function() { 
  let eat = `Welcome to Pizza House, our toppings are `;
  for (let name of pizzaToppings) {
    eat += `${name}, `
  }
console.log(eat);
}
greetCustomer();
//let takeOrder =  getPizzaOrder(size, crust, ham, cheese, onions);

//preparePizza();

//console.log(`...Cooking pizza...`);
//let finishedPizza = preparePizza(takeOrder);

//function servePizza(pizza); {
  //console.log("Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!");
//}

//getPizzaOrder.x;
//getPizzaOrder[x];
//getPizzaOrder["x"];


  //function getPizzaOrder(name) { return ${name}, size, crust, ...toppings; }
//function preparePizza(name) { return ${name}, `One large thick crust pizza with x, y, z, ... coming up!`; } 

//function preparePizza(message = "...Cooking pizza..."){

  //  console.log(message);
//}

//preparePizza();


//const x = { name: "Order up! Here's your large thin crust pizza with ham, cheese, olive, ... Enjoy!" };
//const y = x;
//x.name = "Order up! Here's your large thin crust pizza with ham, cheese, olive, ... Enjoy!";

//console.log(y.name); 

//preparePizza();
//greetCustomer();
//getPizzaOrder();
