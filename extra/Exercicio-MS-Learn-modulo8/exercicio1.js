var LoanPrograms;
(function (LoanPrograms) {
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment =
            loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment =
            (loanTerms.principle * interest) /
                (1 - Math.pow(1 / (1 + interest), loanTerms.numberOfMonths));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
var interestOnlyPayment1 = LoanPrograms.calculateInterestOnlyLoanPayment({
    principle: 30000,
    interestRate: 5
});
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({
    principle: 30000,
    interestRate: 5,
    numberOfMonths: 180
});
console.log(interestOnlyPayment1);
console.log(conventionalLoanPayment);
