"use strict";

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 0)
                reject(`${num} can't be negative!!`);
            else
                resolve(num * 10);
        }, 3000);
    });
}

function halfCheck(num) {
    return checkNumber(num).then(n => {
        if(n > 100)
            throw n + " is greater than 100!";
        return n / 2;
    });
}

halfCheck(5).then(num => console.log(num));
halfCheck(-45)
    .then(num => console.log(num))
    .catch(error => console.log(error));

halfCheck(77)
    .then(num => console.log(num))
    .catch(error => console.log(error));
