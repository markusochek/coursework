export class BorrowersIncome {
	minimumIncome;
	FSSP;
	
	verificationResult;

	constructor(minimumIncome, FSSP, verificationResult) {
		this.minimumIncome = minimumIncome || 0;
		this.FSSP = FSSP || 0;
		this.verificationResult = verificationResult || null;
	}
}
