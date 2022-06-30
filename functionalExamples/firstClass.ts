// In JavaScript functions are first class citizens
// meaning they can be treated like any other variable
// i.e. You can assign a function to a variable,
// pass it as a function, return it as a function.

const sayHowdy = () => {
  return 'Howdy!';
};

const cowboyGreeting = (greetingMessage, name) => {
  return greetingMessage + ' ' + name;
};

const result = cowboyGreeting(sayHowdy(), 'Tommy');
console.log(result);
