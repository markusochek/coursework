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
        const data = await this.POST(values, `api/newAnalysis`)
        switch (data.status) {
            case 'OK': {
                console.log('YEEESSSSS');
                break;
            }
            case 'ERROR': {
                console.error('ERROR gamerEnterSession');
                break;
            }
        }
    }
}