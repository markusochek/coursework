package com.example.coursework.newAnalysis;

import enums.AdditionalSupport;
import enums.Postponement;
import enums.RepaymentPeriod;
import enums.TypeOfRepayment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoanConditions {
    private int costOfHousing;
    private double PV;

    private TypeOfRepayment typeOfRepayment;
    private Postponement postponement;

    private double minLoanAmount;
    private double maxLoanAmount;
    private double loanAmount;
    private int term;

    private RepaymentPeriod repaymentPeriod;
    private Guarantee guarantee;
    private AdditionalSupport additionalSupport;

    private boolean isRealEstateInsurance;
    private boolean isLifeInsurance;
    private boolean isDoubleBid;

    private double basicPercentage;
    private double percentageIncludingInsurance;
    private double maximumPayment;
    private double averageEPOnRequest;
    private double EPIncludingInsurance;
}
