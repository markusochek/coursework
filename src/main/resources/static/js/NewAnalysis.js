"use strict";
import {HeadGeneralInformation} from "./entities/HeadGeneralInformation.js";
import {FullName} from "./entities/FullName.js";

import {AnalysisStatus} from "./enumerations/AnalysisStatus.js";
import {LoanProgram} from "./enumerations/LoanProgram.js";
import {View} from "./enumerations/View.js";
import {Region} from "./enumerations/Region.js";
import {Enumerations} from "./enumerations/Enumerations.js";
import {BorrowersIncome} from "./entities/BorrowersIncome.js";
import {Borrower} from "./entities/Borrower.js";
import {FootGeneralInformation} from "./entities/FootGeneralInformation.js";

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

        // this.showHeadGeneralInformation();
        // this.showBorrowers();
        // this.showBorrowersIncome();
        // this.showFootGeneralInformation();

        this.showButtonAnalysis();
    }

    showHeadGeneralInformation() {
        // let headGeneralInformation = new HeadGeneralInformation(
        //     new Date(2022, 8, 2),
        //     new Date(2023, 3, 28),
        //     AnalysisStatus.DECORATION,
        //     LoanProgram.MORTGAGE_6_MONTHS,
        //     View.CREDIT_CONSUMER_COOPERATIVE,
        //     Region.UDMURT_REPUBLIC,
        //     false,
        //     new FullName("Сагалаев", " Эдуард", " Николаевич"),
        //     true);

        let headGeneralInformation = new HeadGeneralInformation();
        this.showObject(headGeneralInformation);
    }

    showObject(object) {
        for (const objectKey in object) {
            let div = document.createElement("div");
            this.pageHTML.append(div);

            let label = document.createElement("label");
            label.innerHTML = objectKey;
            div.append(label);

            let enumeration = Enumerations[objectKey.at(0).toUpperCase() + objectKey.slice(1)]
            if (enumeration) {
                let select = document.createElement("select");

                for (const enumerationKey in enumeration) {
                    let option = document.createElement("option");
                    option.value = enumeration[enumerationKey];
                    option.textContent = enumeration[enumerationKey];
                    select.append(option);
                }
                div.append(select);

            } else if (typeof object[objectKey] === "boolean") {
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
                input.placeholder = object;
                input.value = object[objectKey];

                div.append(input);
            }
        }
    }

    request = () => {
        this.server.newAnalysis(this.inputs.values())
    }

    showBorrowersIncome() {
        // let borrowersIncome = new BorrowersIncome(
        //     new Borrower(),
        //     new Borrower(),
        //     0,
        //     0,
        //     false);

        let borrowersIncome = new BorrowersIncome();
        this.showObject(borrowersIncome);
    }

    showFootGeneralInformation() {
        // let headGeneralInformation = new HeadGeneralInformation(
        //     new Date(2022, 8, 2),
        //     new Date(2023, 3, 28),
        //     AnalysisStatus.DECORATION,
        //     LoanProgram.MORTGAGE_6_MONTHS,
        //     View.CREDIT_CONSUMER_COOPERATIVE,
        //     Region.UDMURT_REPUBLIC,
        //     false,
        //     new FullName("Сагалаев", " Эдуард", " Николаевич"),
        //     true);

        let footGeneralInformation = new FootGeneralInformation();
        this.showObject(footGeneralInformation);
    }

    showButtonAnalysis() {

        let button = document.createElement("button");
        button.innerText = "Анализ";
        button.onclick = this.request;

        this.pageHTML.append(button);
    }

    showBorrowers() {
        let borrower = new Borrower();
        let coBorrower = new Borrower();
        this.showObject(borrower);
        this.showObject(coBorrower);
    }
}