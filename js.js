function pizzaOven (crustType,sauceType,cheeses,toppings){
    const pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(pizza1)

const pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log(pizza2)

const ingredients = {
    crustType:["deep dish","hand tossed","Thin Crust"],
    sauceType:["traditional","marinara","garlic"],
    cheeses:["mozzarella","feta","Provolone"],
    toppings:["mushrooms", "olives", "onions","sausage","Chicken"]
} 


function randomPizza(ingredients){

    console.log(ingredients)
    const pizza = {};
    pizza.crustType = ingredients.crustType[Math.floor(Math.random()*(ingredients.crustType.length))];
    pizza.sauceType = ingredients.sauceType[Math.floor(Math.random()*(ingredients.sauceType.length))];
    pizza.cheeses = ingredients.cheeses[Math.floor(Math.random()*(ingredients.cheeses.length))];
    pizza.toppings = ingredients.toppings[Math.floor(Math.random()*(ingredients.toppings.length))];

    return pizza;

}

console.log(randomPizza(ingredients))