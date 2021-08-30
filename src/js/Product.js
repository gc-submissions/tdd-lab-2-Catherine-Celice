


class Product {

    constructor(nameStr, priceNum, taxBool) {
        this.name = nameStr;
        this.price = priceNum;
        this.taxable = taxBool;
    }

    getPriceWithTax(){
        if(this.taxable) { return 1.1 * this.price;}
        else { return this.price;}

    }
    
}

module.exports = { Product };