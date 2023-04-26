"use strict";
import {GeneralInformation} from "./entities/GeneralInformation.js";
import {FullName} from "./entities/FullName.js";

import {AnalysisStatus} from "./enums/AnalysisStatus.js";
import {LoanProgram} from "./enums/LoanProgram.js";
import {View} from "./enums/View.js";
import {Region} from "./enums/Region.js";

export class NewAnalysis {
    pageHTML;
    inputs = [];
    labels = [];

    constructor(pageHTML, server) {
        this.pageHTML = pageHTML;
        this.server = server;
    }

    page = () =>  {
    this.pageHTML.innerHTML = null;

    let generalInformation = new GeneralInformation(
        new Date(2022, 8, 2),
        new Date(2023, 3, 28),
        AnalysisStatus.DECORATION,
        LoanProgram.MORTGAGE_6_MONTHS,
        View.CREDIT_CONSUMER_COOPERATIVE,
        Region.UDMURT_REPUBLIC,
        false,
        new FullName("Сагалаев", " Эдуард", " Николаевич"),
        true);

        let generalInformationKeys = Object.keys(generalInformation)
        let generalInformationValues = Object.values(generalInformation)
        for(let i = 0; i < generalInformationKeys.length; i++) {
            let div = document.createElement("div");
            this.pageHTML.append(div);

            this.labels.push(document.createElement("label"));
            this.labels[i].innerHTML = generalInformationKeys[i];

            this.inputs.push(document.createElement("input"));
            this.inputs[i].placeholder = generalInformationKeys[i];
            this.inputs[i].value = generalInformationValues[i];

            div.append(this.labels[i])
            div.append(this.inputs[i])
        }


        let button = document.createElement("button");
        button.innerText = "Анализ";
        button.onclick = this.request;

        this.pageHTML.append(button);
    }

    request = () => {
        this.server.newAnalysis(this.inputs.values())
    }
}