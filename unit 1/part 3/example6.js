"use strict";

const SERVER = 'http://arturober.com/productos';
let products = [];

function replaceProducts() {
    let container = document.getElementById("productContainer");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    products.forEach(p => {
        appendProduct(p, container);
    });
}

function appendProduct(p, container) {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerText = p.name;

    let tdDesc = document.createElement("td");
    tdDesc.innerText = p.description;

    let tdPhoto = document.createElement("td");

    let img = document.createElement("img");
    img.src = `${SERVER}/img/${p.photo}`;
    tdPhoto.appendChild(img);

    let tdDelete = document.createElement("td");
    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    tdDelete.appendChild(buttonDelete);

    buttonDelete.addEventListener('click', event => {
        deleteProduct(p.id);
    });

    tr.appendChild(tdPhoto);
    tr.appendChild(tdName)
    tr.appendChild(tdDesc);
    tr.appendChild(tdDelete);
    tr.id = `p${p.id}`;
    container.appendChild(tr);
}

function deleteProduct(id) {
    var http = new XMLHttpRequest();
    http.open('DELETE', `${SERVER}/product/${id}`, true);
    http.send();

    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            let tr = document.getElementById(`p${id}`);
            tr.parentElement.removeChild(tr);
        }
    });
}

function getProducts() {
    var http = new XMLHttpRequest();
    http.open('GET', `${SERVER}/product`, true);
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
            products = JSON.parse(http.responseText).products;
            replaceProducts();
        }
    });
}

function addProduct(prodJSON) {
    var http = new XMLHttpRequest();
    http.open('POST', `${SERVER}/product/json`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(prodJSON));

    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            let p = JSON.parse(http.responseText).product;
            appendProduct(p, document.getElementById("productContainer"));
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

    document.getElementById("orderName").addEventListener('click', e => {
        products.sort((p1,p2) => p1.name.localeCompare(p2.name));
        replaceProducts();
    });

});
