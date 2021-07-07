namespace Loans {
	export interface Loan {
		principle: number;
		interestRate: number;
	}
	export interface ConventionalLoan extends Loan {
		numberOfMonths: number;
	}
}

namespace LoanPrograms {
	export function calculateInterestOnlyLoanPayment(
		loanTerms: Loans.Loan
	): string {
		let payment: number;
		payment =
			loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
		return 'The interest only loan payment is ' + payment.toFixed(2);
	}

	export function calculateConventionalLoanPayment(
		loanTerms: Loans.ConventionalLoan
	): string {
		let interest: number = calculateInterestRate(loanTerms.interestRate);
		let payment: number;
		payment =
			(loanTerms.principle * interest) /
			(1 - Math.pow(1 / (1 + interest), loanTerms.numberOfMonths));
		return 'The conventional loan payment is ' + payment.toFixed(2);
	}
	function calculateInterestRate(interestRate: number): number {
		let interest: number = interestRate / 1200;
		return interest;
	}
}

const interestOnlyPayment1 = LoanPrograms.calculateInterestOnlyLoanPayment({
	principle: 30000,
	interestRate: 5,
});
const conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({
	principle: 30000,
	interestRate: 5,
	numberOfMonths: 180,
});

console.log(interestOnlyPayment1);
console.log(conventionalLoanPayment);
