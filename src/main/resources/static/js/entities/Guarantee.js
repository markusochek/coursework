import {FullName} from "./FullName.js";

export class Guarantee {
    isGuarantee;
    fullName;

    constructor(isGuarantee, fullName) {
        this.isGuarantee = isGuarantee || false;
        this.fullName = fullName || new FullName();
    }
}
