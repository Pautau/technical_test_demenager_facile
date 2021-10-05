import { expect } from "@jest/globals";
const app = require('../src/app.ts')
var jsonTest = require('../src/resources/test.json');

// Statistics: getAges function
// Test if the function filter correctly the type of each value of the property "age" that isn't a number
describe('Statistics: Return an array of numbers only', () => {
  it('Should return true', () => {
    expect(!app.getAges(jsonTest).some(isNaN)).toEqual(true)
  })
})

// Statistics: getTotalAge function
// Test if it returns 253
// Because getTotalAge() use getAge() array, it will always be an array of numbers as parameter
describe('Statistics: Return total age of an array of numbers', () => {
  it('Should return 253', () => {
    expect(app.getTotalAge([
      59, 24, 16, 40, 50, 64
    ])).toEqual(253);
  })
})

// Statistics: getTotalAge function
// Test if it doesn't return 253
// Because getTotalAge() use getAge() array, it will always be an array of numbers as parameter
describe('Statistics: Return total age of an array of numbers', () => {
  it('Should not return 253', () => {
    expect(app.getTotalAge([
      12, 4, 6, 42, 21, 64
    ])).not.toEqual(253);
  })
})


// Age: findByAge function
// Test if it returns 2
describe('Age: Return every user aged "12" years', () => {
  it('Should return 2 entries', () => {
    expect(app.findByAge(jsonTest, "12").length).toEqual(2);
  })
})

// Age: findByAge function
// Test if it returns the length of the array
describe('Age: Return every user aged "un mot" years', () => {
  it('Should return ' + jsonTest.length, () => {
    expect(app.findByAge(jsonTest, "un mot").length).toEqual(jsonTest.length);
  })
})