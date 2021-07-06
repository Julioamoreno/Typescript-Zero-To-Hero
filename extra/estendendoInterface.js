"use strict";
let iceCream = {
    flavor: 'baunilha',
    scoops: 5,
};
let myIceCream = {
    sauce: 'caramel',
    flavor: 'vanilla',
    scoops: 2,
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + 'is too many scoops';
    }
    return 'Your order will be ready soon!';
}
