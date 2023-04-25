import {NewAnalysis} from "./NewAnalysis.js";

export class Index {
    static pageHTML = document.getElementById("pageHTML");

    static newAnalysis = new NewAnalysis(Index.pageHTML)

    static run() {
        let button = document.createElement("button");
        button.innerText = "Новый анализ";
        button.onclick = Index.newAnalysis.page;
        Index.pageHTML.append(button);
    }
}
Index.run()
