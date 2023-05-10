export class GeneralInformation {
    version
    date
    analysisStatus
    loanProgram
    view
    region
    isSpecialProgramForMedicalWorkers
    executor
    committee

    constructor(version, date, analysisStatus, loanProgram, view, region, isSpecialProgramForMedicalWorkers, executor, committee) {
        this.version = version || "";
        this.date = date || "";
        this.analysisStatus = analysisStatus || null;
        this.loanProgram = loanProgram || null;
        this.view = view || null;
        this.region = region || null;
        this.isSpecialProgramForMedicalWorkers = isSpecialProgramForMedicalWorkers || false;
        this.executor = executor || "";
        this.committee = committee || false;
    }
    //
    // constructor() {
    //     this.version = "";
    //     this.date = "";
    //     this.analysisStatus = null;
    //     this.loanProgram = null;
    //     this.view = null;
    //     this.region = null;
    //     this.isSpecialProgramForMedicalWorkers = false;
    //     this.executor = "";
    //     this.committee = ;
    // }
}