import {Guarantee} from "./Guarantee.js";

export class LoanConditions {
    costOfHousing;
    PV;

    typeOfRepayment;
    postponement;

    minLoanAmount;
    maxLoanAmount;
    loanAmount;
    term;

    repaymentPeriod;
    guarantee;
    additionalSupport;

    isRealEstateInsurance;
    isLifeInsurance;
    isDoubleBid;

    basicPercentage;
    percentageIncludingInsurance;
    maximumPayment;
    averageEPOnRequest;
    EPIncludingInsurance;

    constructor(
        costOfHousing, PV, typeOfRepayment, postponement, minLoanAmount, maxLoanAmount, loanAmount, term,
        repaymentPeriod, guarantee, additionalSupport, isRealEstateInsurance, isLifeInsurance, isDoubleBid,
        basicPercentage, percentageIncludingInsurance, maximumPayment, averageEPOnRequest, EPIncludingInsurance) {
        this.costOfHousing = costOfHousing || 0;
        this.PV = PV || 0;
        this.typeOfRepayment = typeOfRepayment || null;
        this.postponement = postponement || null;
        this.minLoanAmount = minLoanAmount || 0;
        this.maxLoanAmount = maxLoanAmount || 0;
        this.loanAmount = loanAmount || 0;
        this.term = term || 0;
        this.repaymentPeriod = repaymentPeriod || null;
        this.guarantee = guarantee || new Guarantee();
        this.additionalSupport = additionalSupport || null;
        this.isRealEstateInsurance = isRealEstateInsurance || false;
        this.isLifeInsurance = isLifeInsurance || false;
        this.isDoubleBid = isDoubleBid || false;
        this.basicPercentage = basicPercentage || 0;
        this.percentageIncludingInsurance = percentageIncludingInsurance || 0;
        this.maximumPayment = maximumPayment || 0;
        this.averageEPOnRequest = averageEPOnRequest || 0;
        this.EPIncludingInsurance = EPIncludingInsurance || 0;
    }
}
