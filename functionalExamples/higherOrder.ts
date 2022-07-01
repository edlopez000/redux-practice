// Higher order functions operate on functions as their arguments
// or return functions
// Examples of higher order functions are: map(), reduce(), filter()

// This explains the funky looking connect() function used at the end of some older Redux code
// connect() is actually a Higher Order Component: https://reactjs.org/docs/higher-order-components.html
// Note: connect() is being pushed aside for the Hooks based API

const weekTemps = [90, 95, 89, 91, 85];

// Filter takes in a callback function as an argument
const nineties = weekTemps.filter((temps) => temps >= 90);

console.log(nineties);
