"use strict";
import {GeneralInformation} from "./entities/GeneralInformation.js";
import {FullName} from "./entities/FullName.js";

import {AnalysisStatus} from "./enumerations/AnalysisStatus.js";
import {LoanProgram} from "./enumerations/LoanProgram.js";
import {View} from "./enumerations/View.js";
import {Region} from "./enumerations/Region.js";
import {Enumerations} from "./enumerations/Enumerations.js";
import {BorrowersIncome} from "./entities/BorrowersIncome";

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

    // let generalInformation = new GeneralInformation(
    //     new Date(2022, 8, 2),
    //     new Date(2023, 3, 28),
    //     AnalysisStatus.DECORATION,
    //     LoanProgram.MORTGAGE_6_MONTHS,
    //     View.CREDIT_CONSUMER_COOPERATIVE,
    //     Region.UDMURT_REPUBLIC,
    //     false,
    //     new FullName("Сагалаев", " Эдуард", " Николаевич"),
    //     true);
        this.showGeneralInformation();

        let borrowersIncome = new BorrowersIncome();

        let button = document.createElement("button");
        button.innerText = "Анализ";
        button.onclick = this.request;

        this.pageHTML.append(button);
    }

    showGeneralInformation() {
        let generalInformation = new GeneralInformation();

        for (const generalInformationKey in generalInformation) {
            let div = document.createElement("div");
            this.pageHTML.append(div);

            let label = document.createElement("label");
            label.innerHTML = generalInformationKey;
            div.append(label);

            let enumeration = Enumerations[generalInformationKey.at(0).toUpperCase() + generalInformationKey.slice(1)]
            if (enumeration) {
                let select = document.createElement("select");

                for (const enumerationKey in enumeration) {
                    let option = document.createElement("option");
                    option.value = enumeration[enumerationKey];
                    option.textContent = enumeration[enumerationKey];
                    select.append(option);
                }

                div.append(select);
            } else if (typeof generalInformation[generalInformationKey] === "boolean") {
                let select = document.createElement("select");

                let option = document.createElement("option");
                option.value = "false";
                option.textContent = "Нет";
                select.append(option);

                option = document.createElement("option");
                option.value = "true";
                option.textContent = "Да";
                select.append(option);

                div.append(select);
            } else {
                let input = document.createElement("input");
                input.placeholder = generalInformationKey;
                input.value = generalInformation[generalInformationKey];

                div.append(input);
            }
        }
    }

    request = () => {
        this.server.newAnalysis(this.inputs.values())
    }
}