"use strict";

import {HeadGeneralInformation} from "../entities/HeadGeneralInformation.js";
import {BodyGeneralInformation} from "../entities/BodyGeneralInformation.js";
import {Enumerations} from "../enumerations/Enumerations.js";
import {BorrowersIncome} from "../entities/BorrowersIncome.js";
import {Borrower} from "../entities/Borrower.js";
import {LoanConditions} from "../entities/LoanConditions.js";
import {FootGeneralInformation} from "../entities/FootGeneralInformation.js";

import {jsDatepicker} from "./jsDatepicker.js";

export class NewAnalysis {
    pageHTML;
    container;
    inputs = [];

    constructor(pageHTML, server) {
        this.pageHTML = pageHTML;
        this.pageHTML.className = "container";

        this.server = server;
    }

    page = () =>  {
        this.pageHTML.innerHTML = null;

        this.showHeadGeneralInformation();
        this.showBodyGeneralInformation();
        // this.showBorrowers();
        // this.showBorrowersIncome();
        // this.showLoanConditions();
        // this.showFootGeneralInformation();

        // this.showButtonAnalysis();
    }

    showHeadGeneralInformation() {
        let headGeneralInformation = new HeadGeneralInformation();
        this.showObject(headGeneralInformation);
    }

    showBodyGeneralInformation() {
        let bodyGeneralInformation = new BodyGeneralInformation();
        this.showObject(bodyGeneralInformation);
    }

    showBorrowers() {
        let borrower = new Borrower();
        let coBorrower = new Borrower();
        this.showObject(borrower);
        this.showObject(coBorrower);
    }

    showBorrowersIncome() {
        let borrowersIncome = new BorrowersIncome();
        this.showObject(borrowersIncome);
    }

    showFootGeneralInformation() {
        let footGeneralInformation = new FootGeneralInformation();
        this.showObject(footGeneralInformation);
    }

    showLoanConditions() {
        let loanConditions = new LoanConditions();
        this.showObject(loanConditions);
    }

    showObject(object) {
        let i = 0;
        let labels = object.getLabels();
        for (const objectKey in object) {
            let div = document.createElement("div");
            div.className = `box`;
            div.style.gridColumn = `span ${12 / Object.keys(object).length}`;
            this.pageHTML.append(div);

            let label = document.createElement("label");
            label.innerHTML = labels[i];
            div.append(label);

            let enumeration = Enumerations.getEnumeration(objectKey);
            if (enumeration) {
                Enumerations.showEnumeration(div, enumeration);
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

                if (objectKey === "version" || objectKey === "date" || objectKey === "dateOfBirth") {
                    jsDatepicker(input);
                    input.value = object[objectKey].toLocaleDateString();
                }
            }
            ++i;
        }
    }

    showButtonAnalysis() {

        let button = document.createElement("button");
        button.innerText = "Анализ";
        button.onclick = this.request;

        this.pageHTML.append(button);
    }

    request = () => {
        this.server.newAnalysis(this.inputs.values())
    }
}