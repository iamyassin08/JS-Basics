// A higher-order function in JavaScript is a function that either:

// ** Takes  A FUNCTION AS A PARAMETER OR RETURNS A FUNCTION.

// Takes one or more functions as arguments.
// Returns a function as its result.
// Why Do We Need Higher-Order Functions?
// Higher-order functions are powerful tools for several reasons:

// Code Reusability: They allow you to write more generic and reusable code. By accepting functions as arguments, 
// you can create flexible and adaptable functions that work with different operations.

// Abstraction: They help abstract away complex logic into smaller, more manageable functions. This leads to cleaner and more readable code.

// Functional Programming: They are fundamental to functional programming paradigms, enabling operations like mapping, filtering, and reducing over collections.

// Composition: Higher-order functions can help with composing functions together, allowing you to build complex behavior from simpler, reusable functions.

// How Can You Use Higher-Order Functions to Your Advantage?
// Here are a few practical examples of how higher-order functions can be used:

// 1. Function as an Argument
// You can pass functions as arguments to other functions. This is useful for applying different operations or callbacks.

// Example: Array Methods

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Here, map is a higher-order function that takes a function (num => num * 2) and applies it to each element in the array.

// 2. Function as a Return Value
// A higher-order function can return a new function. This allows for function customization or creating function factories.

// Example: Function Factory

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15

// Here, multiplier returns a new function that multiplies its argument by the given factor.

// 3. Creating Composable Functions
// Higher-order functions can be used to compose new functions from existing ones.

// Example: Function Composition

const add = x => y => x + y;
const multiply = x => y => x * y;

const addThenMultiply = (a, b, c) => multiply(c)(add(a)(b));

console.log(addThenMultiply(2, 3, 4)); // (2 + 3) * 4 = 20

// In this example, add and multiply are composed to create a new function that first adds two numbers and then multiplies the result by another number.

// 4. Callbacks and Event Handlers
// Higher-order functions are crucial for handling asynchronous operations and events.

// Example: Event Handling

function handleClick(callback) {
    document.getElementById('myButton').addEventListener('click', callback);
}

handleClick(() => {
    console.log('Button was clicked!');
});

// Here, handleClick takes a callback function and sets it up as an event handler for a button click.

// Summary
// Higher-order functions in JavaScript provide a powerful way to create flexible, reusable, and composable code. 
// They allow functions to be passed as arguments, returned as values, and used to handle various operations in a more abstract and modular manner. 
// This leads to cleaner code, better abstraction, and the ability to build complex behaviors from simple building blocks.