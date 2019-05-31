// JavaScript Algorithms and Data Structures
// ES6

// ---

// ES5 - 2009
// ES6 - 2015
// transpiler: turns +ES6 code into ES5 so it's supported by older browsers

// differences between 'var' and 'let'
// var allows overwritting declarations
// let shows an error if the same variable is declared
let variable = 'new';

// strict mode catches common coding mistakes and unsafe actions
'use strict'; // activates strict mode

// scopes of 'var' and 'let' keywords
// var is declared globally or locally if its inside a function
// let does the same, only that the scope is limited to that block/statement/expression

// const variables are constants, so they are read-only and can't be changed
// a common practice is to name const variables with uppercase and underscores
const PI = 3.14;

// objects and arrays with const declaration are still mutable

// prevent object mutation
// this way, any way to try and change the object will return an error
Object.freeze(object); // makes object inmutable

// example start
  function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);

    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
// example end

// arrow functions
  // ES6 shortcut for inline functions
// ES5 way
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// ES6 way
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
// ES6 simplified
const arrowFunction = () => 'value';

// array concatenation
array1.concat(array2); // returns both arrays together

// higher order functions
// map(), filter(), reduce(), useful to process collections of data
array.filter(element => condition); // returns array filtered by condition
array.map(element => modification); // returns array with modification
array.reduce();
// example
posts.filter(post => post.thumbnail !== null);

// default parameters for functions
// default will be used if the specified parameter is not specified
function myFunction(parameter = 'default') { };
function greeting(name = 'no-name') {
  return 'Hello ' + name;
}
console.log(greeting('Luke')); // Hello Luke
console.log(greeting()); // Hello no-name

// rest operator with function parameters
// rest operator allows to take a variable number of arguments, these are stored in an array
function howMany(...args) {
  return args.length;
}
console.log(howMany('1', 'what')); // 2

// spread operator to evaluate arrays in-place
// useful to copying an array like:
const arrayCopy = [...arrayOriginal];
const array = [1, 2, 3, 4];
// computing the maximun value in an array
// ES5 way
// Math.max expects comma-separated arguments
// .apply(null, array) is needed to change from array to comma separated
var maximus = Math.max.apply(null, array); // 4
// ES6 way
let maximus = Math.max(...array); // 4

// REST OPERATOR -> from comma separated to array
// SPREAD OPERATOR -> from array to comma separated

// use destructuring assignment to assign variables from objects
// we often need to assign variables that come from object properties
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// ES5 way
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
// ES6 way
const { x, y, z } = voxel; // x = 3.6 and so on
// if we want another name for the variable
const { x:xAxis, y:yAxis, z: zAxis} = voxel; // xAxis = 3.6 and so on

// use destructuring assignment to assign variables from nested objects
// a destructuring can be used inside a destructuring
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;

// use destructuring assignment to assign variables from arrays
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
// using commas to reach desired index
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
// useful for swapping
let a = 1; let b = 4;
[a, b] = [b, a]; // a = 4, b = 1

// use destructuring assignment with the rest operator to reassign array elements
// result can also be acomplished with to array.slice()
const [a, b, ...array] = [1, 2, 3, 4, 5];
// a = 1, b = 2, array = [3, 4, 5]

// use destructuring assignment to pass an object as a function's parameter
const profileUpdate = ({ name, age, nationality, location }) => {
  // code
}

// template literals
let templateLiteral = `String with ${variable}`;

// simple fields: concise object literal declarations
// ES5 way
function getMousePosition(x, y) {
  x: x,
  y: y
};
// ES6 way
const getMousePosition = (x, y) => ({ x, y });

// declarative functions for objects
// ES5 way
const object = {
  property: 'value',
  objectFunction: function() {
    return 'output';
  }
}
// ES6 way
const object = {
  property: 'value',
  objectFunction() {
    return 'output';
  }
}

// Class syntax to define a constructor function
// class facilitates creating objects
// ES5 way
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
// ES6 way
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// object getters and setters
// getters obtain values from object, meant to return a value
// setters set a value for an object, mean to modify
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const theBook = new Book('anonymous');
console.log(theBook.writer); // anonymous
theBook.writer = 'new anonymous'; // setter function
console.log(theBook.writer); // new anonymous, getter function

// example
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(t) {
      this._temp = t,
      this._celcius = false
    }

    get temperature() {
      return this._temp;
    }

    set temperature(newTemperature) {
      if (this._celcius){
        this._temp = ((newTemperature * 9.0) / 5) + 32;
        this._celcius = false;
      } else {
        this._temp = (5 / 9) * (newTemperature - 32);
      }
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
// endof example

// differences between import and require
// ES5 way
require(); // used to import functions and code in external files and modules
// problem: files and modules can be large and only certain part of code is the one needed
// ---
// ES6 way
// import allows us to choose which parts of a module or file to load into a given file, which saves time and memory
import { functionName } from 'file_path'; // import syntax

// using export to reuse a code block
// export allows to use import in other files
export { functionName }; // function export
export const name = value; // variable export
export { functionName, name } // export of both

// import everything from a file
import * from as desiredObjectName from 'file_path'; // named export

// create an export fallback using export default
export default functionName; // default export

// import from a default export 
import functionName from 'file_path'; // doesn't use curly braces
