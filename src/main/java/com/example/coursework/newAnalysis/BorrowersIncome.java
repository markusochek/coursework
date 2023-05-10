package com.example.coursework.newAnalysis;

import enums.VerificationResult;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BorrowersIncome {
	private Borrower borrower;
	private Borrower coBorrower;
	private double minimumIncome;
	private double FSSP;
	
	private VerificationResult verificationResult;
}
