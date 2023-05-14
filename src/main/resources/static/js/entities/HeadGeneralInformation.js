import {WrapperDate} from "./WrapperDate.js";

export class HeadGeneralInformation {
    version
    date
    analysisStatus
    loanProgram
    view
    region
    isSpecialProgramForMedicalWorkers

    constructor(version, date, analysisStatus, loanProgram, view, region, isSpecialProgramForMedicalWorkers) {
        this.version = WrapperDate(version) || WrapperDate(new Date());
        this.date = WrapperDate(date) || WrapperDate(new Date());
        this.analysisStatus = analysisStatus || null;
        this.loanProgram = loanProgram || null;
        this.view = view || null;
        this.region = region || null;
        this.isSpecialProgramForMedicalWorkers = isSpecialProgramForMedicalWorkers || false;
    }
}