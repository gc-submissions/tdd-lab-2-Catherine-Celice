

function getScore(hand, category){

    let score = 0;
    let count = 0;
    let max = 0;
    let numPair = 0;
    let pair1 = 0;
    let pair2 = 0;
    let tempHand = [];
    let tempArray = [];

    switch(category){
        
        case "ones":
        case "Ones":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 1){count++;}
            };
            score = count;
            break;

        case "twos":
        case "Twos":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 2){count++;}
            };
            score = count * 2;
            break;
        
        case "threes":
        case "Threes":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 3){count++;}
            };
            score = count * 3;
            break;

        case "fours":
        case "Fours":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 4){count++;}
            };
            score = count * 4;
            break;

        case "fives":
        case "Fives":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 5){count++;}
            };
            score = count * 5;
            break;
        
        case "sixes":
        case "Sixes":
            count = 0;
            for (let i = 0; i < 5; i++){
                if(hand[i] === 6){count++;}
            };
            score = count * 6;
            break;
        
        case "pair":
        case "Pair":
            max = 0;
            for (let i = 0; i < 4; i++){
                for (let j = i+1; j < 5; j++){
                    if(hand[j] === hand[i]){
                        if(max < hand[j]){
                            max = hand[j];
                        };
                    };
                };
            };
            score = 2*max;
            break;

        case "two pairs":           // I need to NOT count 2 pair when they are 3 of a kind
        case "Two pairs":
            numPair = 0;
            pair1 = 0;
            pair2 = 0;
            for(let i = 0; i<4; i++){
                for(let j = i+1; j<5; j++){
                    if(hand[j] === hand[i]){
                        if(pair1 === 0){ 
                            pair1 = hand[i];
                            numPair = 1;
                            break;
                        }else if(pair2 === 0){
                            pair2 = hand[i];
                            numPair = 2;
                            break;
                        };
                    };
                };
            };
            if(numPair === 2){
                score = 2*pair1 + 2*pair2;
            };
            return score;
            break;

        case "three of a kind":
        case "Three of a kind":
            let triple = 0;

            for(let i = 0; i < 3; i++){
                for(let j = i+1; j < 4; j++){
                    for(let k = j+1; k < 5; k++){
                        if(hand[k] === hand[j] && hand[j] === hand[i]){
                            triple = hand[k];
                        }
                    }
                }
            }
            score = 3*triple;
            break;
        
        case "four of a kind":         // needs to be finished - double-check this to see if it makes sense
        case "Four of a kind":
            tempHand.length = 0;
            tempHand = sortArray(hand);

            let fourOfAKind = true;
            let fourStart = 0;
            if(tempHand[1] === tempHand[0]){
                four = tempHand[0];
            } else if(tempHand[2] === tempHand[1]){
                    four = tempHand[1];
                    fourStart = 1;
            }else if(tempHand[2] === tempHand[0]){
                    four = tempHand[0];
                    fourStart = 0;
            }else {
                fourOfAKind = false;
                four = 0;
            };

            if(fourOfAKind){
                for(let i = fourStart; i<(fourStart + 4); i++){
                    if(tempHand[i] !== four){
                        fourOfAKind = false;
                    };
                };
            };

            if(fourOfAKind){
                score = 4*four;
            } else {
                score = 0;
            };
            break;

        case "small straight":
        case "Small straight":
            tempHand.length = 0;
            tempHand = sortArray(hand);
            score = 15;

            for(let i = 0; i<5; i++){
                if(tempHand[i] !== (i+1)){
                    score = 0;
                    break;
                };
            };

            break;

        case "large straight":
        case "Large straight":
            tempHand.length = 0;
            tempHand = sortArray(hand);
            score = 20;
            for(let i = 0; i<5; i++){
                if(tempHand[i] !== (i+2)){
                    score = 0;
                    break;
                };
            };
            break;

        case "full house":
        case "Full house":
            tempArray.length = 0;
            tempHand = sortArray(hand);
            if(tempHand[4] === tempHand[0]){
                score = 0;
            } else if(tempHand[0] === tempHand[1] && tempHand[3] === tempHand[4] && (tempHand[2] === tempHand[1] || tempHand[2] === tempHand[3])){
                score = sumArray(tempHand);
            };
            break;

        case "yahtzee":
        case "Yahtzee":
            if(hand[0] === hand[1] && hand[2] === hand[0] && hand[3] === hand[0] && hand[4] === hand[0]){
                score = 50;
            };
            break;

        case "chance":
        case "Chance":
            score = hand[0];
            for(let i = 1; i<5; i++){
                score = score + hand[i];
            }
            break;
        
        default:
            score = 0;


    }
  
    return score;

}


function sortArray(hand){
    let returnArray = [];
    let tempArray = hand;
    let ind = 0;
    let min = 0;

    for(i = 1; i <= 5; i++){
        min = Math.min(...tempArray);
        returnArray.push(min);
        ind = tempArray.indexOf(min);
        tempArray.splice(ind, 1);
    };

    return returnArray;
};


function sumArray(arr){
    let sum = arr[0];
    for(let i = 1; i<5; i++){
        sum = sum + arr[i];
    };
    return sum;
};


module.exports = {getScore};




