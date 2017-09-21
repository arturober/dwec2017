"use strict";

// Window's full width and height (excludes Window Manager’s upper decoration bar)
console.log(window.outerWidth + " - " + window.outerHeight);

// window.open("https://google.es");

// screen object properties
console.log(window.screen.width + " - " + window.screen.height); // Screen width and height (screen resolution)
console.log(window.screen.availWidth + " - " + window.screen.availHeight); // Excludes Operating System bars

// navigator object properties
console.log(window.navigator.userAgent); // Prints browser information
// window.navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
// });

console.log(history);



