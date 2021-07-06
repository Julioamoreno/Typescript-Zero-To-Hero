"use strict";
function loanCalculator(principle, interestRate, months = 12) {
    let interest = interestRate / 1200;
    let payment;
    payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
    return payment.toFixed(2);
}
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);
