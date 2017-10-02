"use strict";

const SERVER = 'http://arturober.com/productos';
let products = [];

function ajax(method, url, data = null) {
    return new Promise((resolve, reject) => {
        var http = new XMLHttpRequest();
        http.open(method, url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(data);
    
        http.addEventListener('load', (event) => {
            if (http.status === 200) {
                resolve(JSON.parse(http.responseText));
            } else {
                reject(`${http.status}: ${http.statusText}`);
            }
        });

        http.addEventListener('error', (error) => {
            reject(`${http.status}: ${http.statusText}`);
        });
    });  
}

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
        deleteProduct(p);
    });

    tr.appendChild(tdPhoto);
    tr.appendChild(tdName)
    tr.appendChild(tdDesc);
    tr.appendChild(tdDelete);
    tr.id = `p${p.id}`;
    container.appendChild(tr);
}

function deleteProduct(p) {
    ajax('DELETE', `${SERVER}/product/${p.id}`)
        .then(data => {
            if(data.ok) {
                let tr = document.getElementById(`p${p.id}`);
                tr.parentElement.removeChild(tr);
                let index = products.indexOf(p);
                if(index >= 0) products.splice(index, 1);
            }
        }).catch(error => console.error(error));
}

function getProducts() {
    ajax('GET', `${SERVER}/product`).then(data => {
        products = data.products;
        replaceProducts();
    });
}

function addProduct(prodJSON) {
    ajax('POST', `${SERVER}/product/json`, JSON.stringify(prodJSON))
        .then(data => {
            products.push(data.product);
            replaceProducts();
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
