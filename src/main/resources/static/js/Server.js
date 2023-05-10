import {Status} from "./enumerations/Status.js";

export class Server {

    async POST(object, url) {
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(object)
        });

        return await response.json();
    }

    async GET(url) {
        const response = await fetch(url);
        return await response.json();
    }

    async newAnalysis(values) {
        const response = await this.POST(values, `api/newAnalysis`)

        switch (response.status) {
            case Status.OK: return ""
            case Status.ERROR: return ""
        }
    }
}