
const { ExternalModule } = require('webpack');
const {getScore} = require('../src/js/Yahtzee.js');

describe("Yahtzee Scoring", () => {
  
    test("ones from [3, 1, 2, 1, 4]", () => {
      const x = [3, 1, 2, 1, 4];
      expect(getScore(x, "ones")).toEqual(2);
    });

    test("Twos from [4, 2, 2, 6, 2]", () => {
        const x = [4, 2, 2, 6, 2];
        expect(getScore(x, "Twos")).toEqual(6);
      }); 


    test("threes from [4, 5, 6, 1, 2]", () => {
        const x = [4, 5, 6, 1, 2];
        expect(getScore(x, "threes")).toEqual(0);
    }); 

    test("fours from [3, 6, 5, 1, 4]", () => {
        const x = [3, 6, 5, 1, 4];
        expect(getScore(x, "fours")).toEqual(4);
    }); 

    test("Fives from [5, 5, 3, 5, 5]", () => {
        const x = [5, 5, 3, 5, 5];
        expect(getScore(x, "Fives")).toEqual(20);
    }); 

    test("Sixes from [4, 6, 6, 2, 1]", () => {
        const x = [4, 6, 6, 2, 1];
        expect(getScore(x, "Sixes")).toEqual(12);
    }); 

    test("Pairs with 1 pair from [3, 5, 3, 1, 4]", () => {
        const x = [3, 5, 3, 1, 4];
        expect(getScore(x, "Pair")).toEqual(6);
    }); 

    test("pairs with 2 pairs from [3, 5, 3, 5, 4]", () => {
        const x = [3, 5, 3, 5, 4];
        expect(getScore(x, "pair")).toEqual(10);
    }); 

    test("two pairs from [1, 2, 4, 4, 1]", () => {
        const x = [1, 2, 4, 4, 1];
        expect(getScore(x, "two pairs")).toEqual(10);
    }); 

    test("three of a kind from [5, 4, 5, 5, 4]", () => {
        const x = [5, 4, 5, 5, 4];
        expect(getScore(x, "three of a kind")).toEqual(15);
    }); 

    test("Three of a kind from [6, 1, 5, 6, 6]", () => {
        const x = [6, 1, 5, 6, 6];
        expect(getScore(x, "Three of a kind")).toEqual(18);
    }); 

    test("Four of a kind from [4, 6, 4, 4, 4]", () => {
        const x = [4, 6, 4, 4, 4];
        expect(getScore(x, "Four of a kind")).toEqual(16);
    }); 

    test("four of a kind from [3, 3, 3, 3, 3]", () => {
        const x = [3, 3, 3, 3, 3];
        expect(getScore(x, "four of a kind")).toEqual(12);
    }); 

    test("small straight from [3, 1, 4, 2, 5]", () => {
        const x = [3, 1, 4, 2, 5];
        expect(getScore(x, "small straight")).toEqual(15);
    }); 

    test("small straight from [3, 1, 4, 1, 5]", () => {
        const x = [3, 1, 4, 1, 5];
        expect(getScore(x, "small straight")).toEqual(0);
    }); 

    test("Large straight from [6, 5, 3, 4, 2]", () => {
        const x = [6, 5, 3, 4, 2];
        expect(getScore(x, "Large straight")).toEqual(20);
    }); 

    test("Large straight from [6, 5, 3, 4, 1]", () => {
        const x = [6, 5, 3, 4, 1];
        expect(getScore(x, "Large straight")).toEqual(0);
    }); 

    test("full house from [5, 3, 3, 5, 3]", () => {
        const x = [5, 3, 3, 5, 3];
        expect(getScore(x, "full house")).toEqual(19);
    }); 

    test("Full house from [2, 2, 2, 2, 2]", () => {
        const x = [2, 2, 2, 2, 2];
        expect(getScore(x, "Full house")).toEqual(0);
    }); 

    test("yahtzee from [2, 2, 2, 2, 2]", () => {
        const x = [2, 2, 2, 2, 2];
        expect(getScore(x, "yahtzee")).toEqual(50);
    }); 

        test("yahtzee from [2, 2, 2, 1, 2]", () => {
        const x = [2, 2, 2, 1, 2];
        expect(getScore(x, "yahtzee")).toEqual(0);
    });

    test("Chance from [3, 1, 4, 3, 6]", () => {
        const x = [3, 1, 4, 3, 6];
        expect(getScore(x, "Chance")).toEqual(17);
    }); 



});



