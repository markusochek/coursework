package com.example.coursework.newAnalysis;

import enums.Confirmation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.GregorianCalendar;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Borrower {
	private FullName fullName;
	
	private GregorianCalendar dateOfBirth;
	private int age;
	private boolean isSalaryProject;
	private int dependents;
	private double income;
	
	private Confirmation confirmation;
	
	private boolean isDelayOfMoreThan20Days;
	private boolean isBankrupt;
	private int scoring;
}
