import {NewAnalysis} from "./NewAnalysis.js";
import {Server} from "./Server.js";

export class Index {
    static pageHTML = document.createElement("pageHTML");

    static server = new Server()
    static newAnalysis = new NewAnalysis(Index.pageHTML, Index.server)

    static run() {
        document.body.append(Index.pageHTML);
        let button = document.createElement("button");
        button.innerText = "Новый анализ";
        button.onclick = Index.newAnalysis.page;
        Index.pageHTML.appendChild(button);
    }
}
Index.run()
