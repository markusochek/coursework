import {FullName} from "./FullName.js";

export class FootGeneralInformation {
    executor
    committee

    constructor(executor, committee) {
        this.executor = executor || new FullName();
        this.committee = committee || false;
    }
}