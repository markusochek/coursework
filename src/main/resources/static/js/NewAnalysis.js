import {GeneralInformation} from "./entities/GeneralInformation.js";
import {FullName} from "./entities/FullName.js";

import {AnalysisStatus} from "./enums/AnalysisStatus.js";
import {LoanProgram} from "./enums/LoanProgram.js";
import {View} from "./enums/View.js";
import {Region} from "./enums/Region.js";

export class NewAnalysis {
    static pageHTML;

    constructor(pageHTML) {
        NewAnalysis.pageHTML = pageHTML;
    }

    page() {
        let generalInformation = new GeneralInformation(
            new Date(2022, 8, 2),
            new Date(2023, 3, 28),
            AnalysisStatus.ОФОРМЛЕНИЕ,
            LoanProgram.ИПОТЕКА_ДО_6_МЕСЯЦЕВ,
            View.КПК,
            Region.УДМУРТСКАЯ_РЕСПУБЛИКА,
            false,
            new FullName("Сагалаев", " Эдуард", " Николаевич"),
            true);

        let button = document.createElement("button");
        button.innerText = "Анализ";
        button.onclick = NewAnalysis.request;

        NewAnalysis.pageHTML.innerHTML = null;
        NewAnalysis.pageHTML.append(button);
    }

    static request() {
        const authorizationLogin = document.getElementById("authorizationLogin");
        const authorizationPassword = document.getElementById("authorizationPassword");
        // server.authorization(authorizationLogin.value, authorizationPassword.value);
    }
}