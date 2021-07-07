"use strict";
exports.__esModule = true;
exports.calculateConventionalLoanPayment = exports.calculateInterestOnlyLoanPayment = void 0;
function calculateInterestOnlyLoanPayment(loanTerms) {
    var payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
} //que calcula o pagamento de um empréstimo somente de juros.
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
function calculateConventionalLoanPayment(loanTerms) {
    var interest = calculateInterestRate(loanTerms.interestRate);
    var payment;
    payment =
        (loanTerms.principle * interest) /
            (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return 'The conventional loan payment is ' + payment.toFixed(2);
} //que calcula o pagamento de um empréstimo convencional.
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
function calculateInterestRate(interestRate) {
    var interest = interestRate / 1200;
    return interest;
}
