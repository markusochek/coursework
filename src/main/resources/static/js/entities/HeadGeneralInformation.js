export class HeadGeneralInformation {
    version
    date
    analysisStatus
    loanProgram
    view
    region
    isSpecialProgramForMedicalWorkers

    constructor(version, date, analysisStatus, loanProgram, view, region, isSpecialProgramForMedicalWorkers) {
        this.version = version || new Date();
        this.date = date || new Date();
        this.analysisStatus = analysisStatus || null;
        this.loanProgram = loanProgram || null;
        this.view = view || null;
        this.region = region || null;
        this.isSpecialProgramForMedicalWorkers = isSpecialProgramForMedicalWorkers || false;
    }
}