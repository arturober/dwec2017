export class Http {
    static ajax(method: string, url: string, data: any = null): Promise<any> { // Returns Promise<Object> with the server's resturned JSON
        return new Promise((resolve, reject) => {
            var http = new XMLHttpRequest();
            http.open(method, url, true);
            http.setRequestHeader("Content-type", "application/json");
            if(localStorage.getItem("token")) {
                http.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            }
            http.send(JSON.stringify(data));
                    
            http.addEventListener('load', (event) => {
                if (http.status === 200) {
                    try {
                        resolve(JSON.parse(http.responseText));
                    } catch(error) {
                        reject(`Server response is not valid JSON: ${http.responseText}`);
                    }
                } else {
                    reject(`${http.status}: ${http.statusText}`);
                }
            });

            http.addEventListener('error', (event) => {
                reject(`Error in AJAX call to ${url} by ${method}`);
            });
        });    
    }
}
