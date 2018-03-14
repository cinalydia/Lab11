/*eslint-env browser*/

function init() {
    "use strict";
    //get login button out of DOM
    var btnLogin = window.document.getElementById("login");
    //handle click event, add a call back function
    login.addEventListener("click", function () {
        window.open("login.html", "login", "width=400, height=400");
    });
    //function will display whatever user puts in the textbox
    /*function showValues(id, value) {
        //id represents id of textbox that contains the value, value contains value within textbox
        var newValue = window.document.getElementById(id).value = value;//newValue contains the id of the text box itself and its value
    }*/
}
window.addEventListener("load", init);