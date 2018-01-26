// alerts are annoying, lets use consol.log
console.log('Welcome');
/*
This will now log to your console
*/

// Create a function that updates a DOM element
function change(){
  // function body. where it all goes down
  document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in javascript
var name='Lucille'; // Store a string in a var
var numberOfWidgets = 10; // Number
var isCodingCool = true; // Boolean

// store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 2];
console.log(characters[0]);

var animals = ['dog', 'cat', 'mouse'];
var numberOfPets = 12;
var areTheyFluffy = true;
console.log(animals[0]);

// Multi-dimentional array
var meat = ['ham','bolona','turkey'];
var fruit = ['oranges','apples','grapes'];
var food = [meat, fruit];
console.log(food[1][0]); // logs 'oranges' to the console

// var food = [['ham'], ['oranges']] // could also be written like this

// Object:
var user = {
  firstName:'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true
};
// access properties of our user obj using dot notation
console.log(user.firstName); // log 'Lucille'

// can also access properties on objs using bracket notation
console.log(user['firstName']); // log 'Lucille'

console.log(user['has-feet']); // need to use square bracket for special characters

// two vars, each containing a #
var num1 = 100;
var num2 = 50;
console.log('the result is:' + num1 - num2); // outputs 50 to console
console.log('my num1 is' + num1 + 'that is my number');

var string1 = 'Carrie'
var string2 = 'Smith'
alert(string1 + ' ' + string2);

var me = {
  firstName = 'Caroline',
  lastName = 'Smith',
  fingerCount = 10
};
