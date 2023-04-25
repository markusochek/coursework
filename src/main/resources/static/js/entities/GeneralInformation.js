import {AnalysisStatus} from '../enums/AnalysisStatus.js'
import {LoanProgram} from "../enums/LoanProgram.js";
import {View} from "../enums/View.js";
import {Region} from "../enums/Region.js";
import {FullName} from "./FullName";

export class GeneralInformation {
    private version: Date;
    private date: Date;

    private analysisStatus: AnalysisStatus;
    private loanProgram: LoanProgram;
    private view: View;
    private region: Region;
    private isSpecialProgramForMedicalWorkers: boolean;

    private executor: FullName;
    private committee: boolean;

    constructor(version: Date, date: Date, analysisStatus: AnalysisStatus, loanProgram: LoanProgram, view: View, region: Region, isSpecialProgramForMedicalWorkers: boolean, executor: FullName, committee: boolean) {
        this.version = version;
        this.date = date;
        this.analysisStatus = analysisStatus;
        this.loanProgram = loanProgram;
        this.view = view;
        this.region = region;
        this.isSpecialProgramForMedicalWorkers = isSpecialProgramForMedicalWorkers;
        this.executor = executor;
        this.committee = committee;
    }
}