// Higher order functions operate on functions as their arguments
// or return functions
// Examples of higher order functions are: map(), reduce(), filter()

const weekTemps = [90, 95, 89, 91, 85];

// Filter takes in a callback function as an argument
const nineties = weekTemps.filter((temps) => temps >= 90);

console.log(nineties);
