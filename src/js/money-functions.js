

// formatCurrency function
// ● In the file money-functions.js, create a formatCurrency function and export it.
// ● This function has one parameter:
// ○ amount (a number)
// ● The function formats the number by rounding and displaying it with 2 decimals (using
// toFixed). It also prepends a "$". It then returns the formatted string. (e.g. "$1.00",
// "$0.25")
// ● If the number is negative, the minus sign must be at the start of the string, before
// the "$". (e.g. "-$37.59")



function formatCurrency(amount){
    // const amt = amount.toFixed(2);
    //let amt_str = toString(Math.abs(amt));
    let amt_str = '';
    if(amount < 0){
        amt_str = "- $" + Math.abs(amount).toFixed(2);
    }else{
        amt_str = "$" + amount.toFixed(2);
    }
    return amt_str;
};

// ● In the file money-functions.js, create a getCoins function and export it.
// ● This function has one parameter:
// ○ cents (a number)
// ● The function determines how many quarters, dimes, nickels, and pennies are required
// to make up the given number of cents. It must find the combination of these coins with
// the minimum number of coins.
// ● It returns the result as an object with the names of the coins as keys. The following
// example would represent 1 quarter, 0 dimes, 1 nickel, and 2 pennies (32 cents).
// {
// quarters: 1,
// dimes: 0,
// nickels: 1,
// pennies: 2
// }

function getCoins(cents){
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;

    q = Math.floor(cents/25);
    cents = cents - (q * 25);

    d = Math.floor(cents/10);
    cents = cents - (d * 10);

    n = Math.floor(cents/5);
    cents = cents - (n * 5 );

    p = cents;

    change = {'quarters': q, 'dimes': d, 'nickels': n, 'pennies': p};
    return change;

};


module.exports = {formatCurrency, getCoins};
// module.exports.formatCurrency = formatCurrency;
// export default formatCurrency;

// exports.formatCurrency = formatCurrency;



