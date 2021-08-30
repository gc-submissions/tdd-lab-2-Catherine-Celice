// In the file Cart.js, create a Cart class and export it.
// ● The constructor has no parameters. It always sets an items property to an empty array.
// This array will later have Products added to it.
// ● It has several methods
// ○ add(product) - This takes a product parameter (of type Product) and adds it to
// the items array.
// ○ getItemCount() - This has no parameters and returns the length of the items
// array.
// ○ getTotalBeforeTax() - This has no parameters and returns the sum of the
// price of all Products in the items array.
// ○ getTotalWithTax() - This has no parameters and returns the sum of the
// getPriceWithTax() method of all Products in the items array.
// ○ getTax() - This has no parameters. It subtracts the results of getTotalWithTax
// and getTotalBeforeTax and returns the result.

const { Product } = require('./Product');

class Cart {
    //super();
    constructor(){
        this.items = [];
    
    };

    add(product){
        
        //const product = {"name": name, "price": price, "taxable": tax}
        this.items.push(product);
    };

    getItemCount(){
        return this.items.length;
    };

    getTotalBeforeTax(){
        let total = 0;
        // for(let i in this.items){
        //     total = total + i.items.price;
        // };
        for(let i = 0; i < this.items.length; i++){
            total = total + this.items[i].price;
        }
        return total;
    };

    getTotalWithTax(){
        let total = 0;

        for(let i = 0; i < this.items.length; i++){
            total = total + this.items[i].getPriceWithTax();
            //console.log(total);
        };
        return total;

    };

    getTax(){
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    };

}; // end of class def

module.exports = { Cart };



// test lines


// const taxCarta = new Cart;
// taxCarta.add({"name": "scarf", "price": 10, "taxable": false});
// taxCarta.add({"name": "leggings", "price": 20, "taxable": true});
// taxCarta.add({"name": "horse", "price": 1000, "taxable": true});

// console.log(taxCarta.getTotalWithTax());