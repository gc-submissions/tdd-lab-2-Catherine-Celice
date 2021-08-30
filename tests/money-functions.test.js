

// In money-functions.test.js, write the following test cases for the formatCurrency function.
// ● Given the amount 0, it returns "$0.00".
// ● Given the amount 1, it returns "$1.00".
// ● Given the amount 1.5 it returns "$1.50".
// ● Given the amount 0.01, it returns "$0.01".
// ● Given the amount 527.6789, it returns "$527.68".
// ● Given the amount -1, it returns "-$1.00".
// ● Add two more test cases with numbers that you choose.

const { ExternalModule } = require('webpack');
const { Product } = require('../src/js/Product');
const { Cart } = require('../src/js/Cart');
const {formatCurrency, getCoins} = require('../src/js/money-functions.js');

describe("formatCurrency", () => {
  
  test("formatCurrency inpts 0 and outputs $0.00", () => {
    const x = formatCurrency(0);
    expect(x).toEqual("$0.00");
  });

  test("formatCurrency inpts 1 and outputs $1.00", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });

  test("formatCurrency inpts 1.5 and outputs $1.50", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });

  test("formatCurrency inpts 0.01 and 0utputs $0.01", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });

  test("formatCurrency inpts 527.6789 and utputs $527.68", () => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });

  test("formatCurrency inpts -1 and utputs - $1.00", () => {
    expect(formatCurrency(-1)).toEqual("- $1.00");
  });

  test("formatCurrency inpts -0.52569 and utputs - $0.53", () => {
    expect(formatCurrency(-0.52569)).toEqual("- $0.53");
  });

  test("formatCurrency inpts -5.3 and utputs - $5.30", () => {
    expect(formatCurrency(-5.3)).toEqual("- $5.30");
  });


});



// In money-functions.test.js, write the following test cases for the getCoins function.
// ● 32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
// ● 10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
// ● 27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
// ● 68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.

describe("getCoins", () => {


  test("getCoins 32 cents is 1, 0, 1, 2", () => {
    expect(getCoins(32)).toEqual({'quarters': 1, 'dimes': 0, 'nickels': 1, 'pennies': 2})
  });

  test("getCoins 10 cents is 0, 1, 0, 0", () => {
    expect(getCoins(10)).toEqual({'quarters': 0, 'dimes': 1, 'nickels': 0, 'pennies': 0})
  });

  test("getCoins 27 cents is 1, 0, 0, 2", () => {
    expect(getCoins(27)).toEqual({'quarters': 1, 'dimes': 0, 'nickels': 0, 'pennies': 2})
  });

  test("getCoins 68 cents is 2, 1, 1, 3", () => {
    expect(getCoins(68)).toEqual({'quarters': 2, 'dimes': 1, 'nickels': 1, 'pennies': 3})
  });


  test("getCoins 99 cents is 3, 2, 0, 4", () => {
    expect(getCoins(99)).toEqual({'quarters': 3, 'dimes': 2, 'nickels': 0, 'pennies': 4})
  });

 
});




// describe("formatCurrency", () => {
//   test.todo("add formatCurrency tests here");
// });

// describe("getCoins", () => {
//   test.todo("add getCoins tests here");
// });