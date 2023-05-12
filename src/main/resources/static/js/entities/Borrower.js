import {FullName} from "./FullName.js";

export class Borrower {
	fullName;
	
	dateOfBirth;
	age;
	isSalaryProject;
	dependents;
	income;
	
	confirmation;
	
	isDelayOfMoreThan20Days;
	isBankrupt;
	scoring;

	constructor(fullName, dateOfBirth, age, isSalaryProject, dependents, income, confirmation, isDelayOfMoreThan20Days, isBankrupt, scoring) {
		this.fullName = fullName || new FullName();
		this.dateOfBirth = dateOfBirth || new Date();
		this.age = age || 0;
		this.isSalaryProject = isSalaryProject || false;
		this.dependents = dependents || 0;
		this.income = income || 0;
		this.confirmation = confirmation || null;
		this.isDelayOfMoreThan20Days = isDelayOfMoreThan20Days || false;
		this.isBankrupt = isBankrupt || false;
		this.scoring = scoring || 0;
	}

	toString() {
		return this.fullName.toString();
	};
}
