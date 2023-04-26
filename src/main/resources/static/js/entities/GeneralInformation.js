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