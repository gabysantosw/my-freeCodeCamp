// JAVASCRIPT ALGORITHMS AND DATA STRUCTURES

// >>> BASIC JAVASCRIPT <<< //
//=========================//

// javascript is a high level programming language

// --- COMMENTS -----------------------------
// javascript one line comment
/* javascript multiple lines comment */

// --- DATA TYPES -----------------------------
// undefined, null, boolean, string, symbol, number, object

// --- VARIABLES ---------------------------
// variables allow computers to store and manipulate data
var name; // variable declaration
var name = "val" // variable initialization
name = 'value'; // value assigment

// undefined - initial value of variables
// NaN - output when using an undefined variable in a mathematical operation

// --- NUMBER --------------------------
// number - represent numeric data
// operators: + , - , * , / , %
// arithmetic operators: ++, --
// += , -= , *= , /=

// --- STRINGS --------------------------
// scaping special characters - \ is used
// \n - newline , \r - carriage return , \t = tab , \b - backspace , \f - form feed
// concatenation operator - + , +=
// bracket notation - string[0] // first character
// string methods
string.length; // - returns number of elements in a string

// --- FUNCTIONS ---------------------------
// javscript function
function name(input) {
  return output;
}

// --- ARRAYS -------------------------------
// allows to store several pieces of data
var animal = ['dog', 'cat', 'bird'];
// array indexes
array[0]; // first element of array
// methods
array.push(); // pushes element to the end of arrays
array.pop(); // deletes last element
array.shift(); // deletes first element
array.unshift('value'); // adds element to the beginning of the array

// --- FUNCTIONS -------------
//calling
name(input);
console.log('message'); // prints into the js console
// functions with parameters
function name(firstName, lastName) {
  console.log(firstName, lastName);
}
name('john', 'doe'); // passing arguments

// --- GLOBAL SCOPE --------------------
// scope refers to visibility of variables
// variables outside any function have a GLOBAL scope
// they can be used anywhere in the js code

// --- LOCAL SCOPE -----------------------
// variables declared within a function have LOCAL scope
// the are only usable within that function
// if there are two variables with the same name
// the LOCAL one has precedence over the global

// --- FUNCTIONS --------------
// returning values
function timesFive(num) {
  return num * 5;
}
var a = timesfive(5); // = 25
// when theres no return assigned, the default is undef
// a function ends when it reaches a return statement

// --- QUEUE -------------------------
// in CS a queue is an abstract DATA STRUCTURE
// in a queue items are kept in order
// new items can be added to the end of queue
// old items are taken off the start of queue a

// --- CONDITIONAL IF -----------
if(a) { // execute code if a === true
}

// --- COMPARISON OPERATORS -------------
// these always return a boolean
// == equality, === strict equality, != inequality, !== strict inequality, > greater than, >= greater than or equal to, < less than, <= less than or equal
// logical operators
// && and, || or

// --- TYPEOF OPERATOR ---------------------
// returns the type of the argument
typeof(3); // number

// --- CONDITIONAL IF ELSE --------------------
if(true) { // do this
} else { // do that
}

// --- CONDITIONAL ELSE IF ---------------------
if(condition1) { // do this
} else if (condition2) { // do that
} else { // the rest
}

// --- CONDITIONAL SWITCH ------------------------
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  case valueN:
    statementN;
    break;
  default:
    defaultStatement;
    break;
}

// --- RETURNS ------------------
function isEqual(a, b) {
  return a === b; // no if else needed
}
// when a return is reached execution stops

// --- OBJECTS ---------------------------
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "top enemies": ["Water", "Dogs"]
};
// accessing/updating properties
cat.name; // dot notation
cat["top enemies"]; // bracket notation
// adding properties
cat.color = "black"; // if propertie doesn't exist, its created
// deleting properties
delete cat.color;
// testing
cat.hasOwnProperty('legs'); // true
// complex object
// allows for combinations of data structures
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }
];
// accessing nested arrays
ourMusic[0].formats[0]; // CD
// accessing nested objects
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

// --- JSON -------------------------
// Javascript Object Notation
{ // example
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
// methods
JSON.parse(string); // turns json string into object if formating is correct
JSON.stringify(object); // converts object to string

// to ITERATE same code multiple times
// --- WHILE LOOPS ----------------
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

// --- FOR LOOPS -------------------
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
// useful for odd/even numbering :
i += 2; // increment by 2

// --- DO WHILE LOOPS -----------
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// --- RANDOM NUMBERS --------
Math.random(); //random decimal 0-0,999..
Math.floor(); // rounds number down
Math.floor(Math.random()*10); // 0-9
Math.floor(Math.random() * (max - min + 1)) + min); // within range

// --- STRING TO INTEGER ------
parseInt('0101'); // 101

// --- BINARY TO INTEGER ------
parseInt(string, radix); // radix of 2
// for binary
parseInt('11', 2); // 3

// --- TERNARY OPERATOR -------
condition ? statement-if-true : statement-if-false;
return a > b ? 'a > b' : 'a < b';
