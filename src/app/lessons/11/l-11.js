/**
 * Lesson 11. 
 *  Object properties attributes.
 *  CommonJS Modules
 */

'use strict';

require('../../util/console');

const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 4100000,
  writable: true,
  configurable: true,
  enumerable: true
});

object1.property1 = 77;

// Print the properties to console using for...in loop
for (let propertyName in object1) {
  console.log(propertyName, '=', object1[propertyName]);
}

// Print the properties to console using for loop, Object.keys and Object.values
const keys = Object.keys(object1);
const values = Object.values(object1);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], '=', values[i]);
}

//
// Homework
//

console.h2('Homework Task 11.01');
// Points: 1
// We have an object named 'ukraine':
const Ukraine = {};

// Using Object.defineProperty method, define a new Ukraine property named 'birthDate',
// which is enumerable, but not configurable and it's value cannot be changed.
// Initial value of the property should be:
// new Date('August 24, 1991 00:00:00');

Object.defineProperty(Ukraine, 'birthDate', {
  value: new Date('August 24, 1991 00:00:00'),
  writable: false,
  configurable: false,
  enumerable: true
});

console.h2('Homework Task 11.02');
// Points: 1
// Using Object.defineProperty method, define a new Ukraine property named 'president',
// which is enumerable, configurable, and writable.
// Initial value of the property should be 'Kravchuk'.

Object.defineProperty(Ukraine, 'president', {
  value: 'Kravchuk',
  writable: true,
  configurable: true,
  enumerable: true
});

console.h2('Homework Task 11.03');
// Points: 2
// Print the properties of the Ukraine to console object using a for...in loop

for (let propertyName in Ukraine) {
  console.log(propertyName, '=', Ukraine[propertyName]);
}

console.h2('Homework Task 11.04');
// Points: 3
// Print the properties of the Ukraine to console object using a for loop, Object.keys and Object.values

const myKeys = Object.keys(Ukraine); 
const myValues = Object.values(Ukraine); 

for (let i = 0; i < myKeys.length; i++) { 
  console.log(myKeys[i], '=', myValues[i]);
}

console.h2('Homework Task 11.05');
// Points: 4
// Create a new Course module in a file named src/app/course/index.js
// Define a private property in it named startDate and give it initial value: new Date('May 7, 2018 00:00:00');
// Define a getStartDate method on it and export it
// Create a main applicaton module in the src/app/app.js file
// Import the Course as a module into app module and print the Course start date to the console
