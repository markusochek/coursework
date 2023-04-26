package com.example.coursework.newAnalysis;

import enums.AnalysisStatus;
import enums.LoanProgram;
import enums.Region;
import enums.View;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.GregorianCalendar;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GeneralInformation {
	private GregorianCalendar version;
	private GregorianCalendar date;
	
	private AnalysisStatus analysisStatus;
	private LoanProgram loanProgram;
	private View view;
	private Region region;
	private boolean isSpecialProgramForMedicalWorkers;

	private FullName executor;
	private boolean committee;
}
