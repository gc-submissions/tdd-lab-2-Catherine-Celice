
// In Cart.test.js, write the following test cases for the Cart class.
// 1. Confirm that the constructor correctly sets the items property to an empty array.
// (Remember to use toEqual instead of toBe when comparing arrays or objects.)
// 2. Calling add once adds one product to the items array. Make sure the correct product
// object was added.
// 3. Calling add twice leaves a total of two Products in the items array. Make sure the
// correct product objects were added.
// 4. getItemCount returns the length of the items array. You will have to call the add
// method one or more times to fill the array. (Write two test cases with different amounts
// of items.)
// 5. getTotalBeforeTax returns the sum of the price of all Products in the items array.
// (Write two test cases with different mixes of taxable and non-taxable products and with
// different numbers of products.)
// 6. getTotalWithTax returns the sum of the getPriceWithTax() method of all Products
// in the items array. Remember to use toBeCloseTo with floating point numbers. (Write
// two test cases with different mixes of taxable and non-taxable products and with
// different numbers of products.)
// 7. getTax returns the difference between getTotalWithTax and getTotalBeforeTax. As
// before, add some sample items in order to get some numbers to work with.
// continued on


const { ExternalModule } = require('webpack');
const { Product } = require('../src/js/Product');
const { Cart } = require('../src/js/Cart');


describe("Cart", () => {
  
  test("sets Cart properties here", () => {
    testCart = new Cart();
    expect(testCart.items).toEqual([]);
  });

  test("Calling add once should add the correct product.", () => {
    const addProd = new Cart();
    product = new Product("shirt", 5, true);
    addProd.add(product);
   
    expect(addProd.items).toEqual([{"name": "shirt", "price": 5, "taxable": true}]);
    
    
  });

  test("Calling add twice should result in the cart having both objects.", () => {
    const theCart = new Cart();
    const prod1 = new Product("scarf", 10, false);
    const prod2 = new Product("leggings", 20, true);
    theCart.add(prod1);
    theCart.add(prod2);
    expect(theCart.items).toEqual([{name: "scarf", price: 10, taxable: false}, {name: "leggings", price: 20, taxable: true}]);
  });

  test("getItemCount returns the number of items in the Cart array - 1 itemgetItemCount retunrs the number of items in the Cart array - 1 item", () => {
    const theCart1 = new Cart();
    const aprod1 = new Product("scarf", 10, false);
    theCart1.add(aprod1);
    let count = theCart1.getItemCount();
    expect(count).toEqual(1);
  });

  test("getItemCount returns the number of items in the Cart array - 3 items", () => {
    const theCart3 = new Cart;
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, true);
    theCart3.add(p1);
    theCart3.add(p2);
    theCart3.add(p3);
    expect(theCart3.getItemCount()).toEqual(3);
  });

  test("getTotalBeforeTax returns the sum of the price of all Products in the items array - first batch should pass", () => {
    const theCart = new Cart;
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, true);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    let totalPrice = theCart.getTotalBeforeTax()
    expect(totalPrice).toEqual(1030);
  });

  test("getTotalBeforeTax returns the sum of the price of all Products in the items array - second batch should pass", () => {
    const theCart = new Cart;
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, false);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    let totalPrice = theCart.getTotalBeforeTax()
    expect(totalPrice).toEqual(1030);
  });


  // next batch
  test("getTotalWithTax returns the sum of the price of all Products in the items array - first batch should pass", () => {
    const theCart = new Cart();
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, true);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    // console.log(theCart.items[2]);
    // console.log(theCart.items[2].price)
    // console.log(theCart.items[2].getPriceWithTax());
    let amt = theCart.getTotalWithTax();
    expect(amt).toBeCloseTo(1132);
  });


  test("getTotalWithTax returns the sum of the price of all Products in the items array - second batch should pass", () => {
    const theCart = new Cart;
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, false);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    expect(theCart.getTotalWithTax()).toEqual(1032);
  });


  
  test("get Tax retruns the tax -- ie the difference between the before tax and with tax functions - batch 1, 2 taxable items", () => {
    const theCart = new Cart();
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, true);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    expect(theCart.getTax()).toEqual(102);
  });


  test("get Tax retruns the tax -- ie the difference between the before tax and with tax functions - batch 2, 1 taxable item", () => {
    const theCart = new Cart;
    const p1 = new Product("scarf", 10, false);
    const p2 = new Product("leggings", 20, true);
    const p3 = new Product("horse", 1000, false);
    theCart.add(p1);
    theCart.add(p2);
    theCart.add(p3);
    expect(theCart.getTax()).toEqual(2);
  });


}); // end of Cart tests


// The Original Code in this file:
// describe("Cart", () => {
//   test.todo("add Cart tests here");
// });