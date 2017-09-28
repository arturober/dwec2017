"use strict";

function getProducts() {
    var http = new XMLHttpRequest();
    http.open('GET', 'http://arturober.com/productos/product', true);
    http.send();
    // http.timeout = 2;

    // http.addEventListener('abort', () => {
    //     console.error("Operation aborted");
    // });

    // http.abort();

    // http.addEventListener('timeout', (event) => {
    //     console.error("Timeout!!!");
    // });

    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            console.log(JSON.parse(http.responseText));
        }
    });
}

function addProduct(prodJSON) {
    var http = new XMLHttpRequest();
    http.open('POST', 'http://arturober.com/productos/product/json', true);
    http.setRequestHeader("Content-type", "application/json");  
    http.send(JSON.stringify(prodJSON));

    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            console.log(JSON.parse(http.responseText));
            getProducts();
        }
    });
}

window.addEventListener("load", event => {
    getProducts();

    let form = document.getElementById("addProduct");

    form.addEventListener("submit", event => {
        event.preventDefault();
        let data = {
            name: form.name.value,
            description: form.desc.value,
            photo: document.getElementById("preview").src
        }
        console.log("Send to server: ", data);
        addProduct(data);
    });

    form.image.addEventListener('change', () => {
        var file = form.image.files[0];
        var reader = new FileReader();

        if (file) { // File has been selected (convert to Base64)
            reader.readAsDataURL(file);
        }

        reader.addEventListener("load", () => { //Converted into Base64 event (async)
            document.getElementById("preview").src = reader.result;
        }, false);
    });

});
