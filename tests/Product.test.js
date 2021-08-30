
const { ExternalModule } = require('webpack');
const { Product } = require('../src/js/Product');
describe("Product", () => {
  test("sets properties on class", () => {
    expect(new Product('Megan', 1234, true)).toEqual({"name": "Megan", "price": 1234, "taxable": true});
    expect(new Product('Cooper', 1, false)).toEqual({"name": "Cooper", "price": 1, "taxable": false});
  })
  // This was already in the code -- test.todo("add Product tests here");

/* test("Given a taxable price, getPriceWithTax returns the price + 10%", () => {
  // const productWithTax = new Product('shirt', 1, true);
  // expect(productWithTax.getPriceWithTax().toEqual(2222));
  const productWithTax2 = new Product('shirt', 3, true);
  expect(productWithTax2.getPriceWithTax()).toBeCloseTo(0.3);
  
}) */

// Given a Product with taxable false, getPriceWithTax returns just the price. (Write two
//   test cases with different prices.)

test("Given a non-taxable price, getPriceWithTax returns just the price.", () => {

  const productWoTax = new Product('pants', 5, false);
  // expect(productWoTax.getPriceWithTax().toEqual(6));
  expect(productWoTax.getPriceWithTax()).toEqual(5);
  
})

});



// On the Exam, put one expect per test since the instrctions say 2 test "cases".  At least do this for the exam.


// Given a Product with taxable true, getPriceWithTax returns the price + 10%.
// Remember to use toBeCloseTo with floating point numbers. (Write two test cases with
// different prices.)

