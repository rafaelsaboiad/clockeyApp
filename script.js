import { writeUserData } from "./firebase.js";

document.querySelector('#botao').addEventListener('click', function() {
    window.location.href = 'index.html';
    var userInput = document.getElementById("userInput").value;
    sessionStorage.setItem("userInput", userInput);
    writeUserData(userInput);
});

var input2 = document.getElementById("userInput");

input2.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('#botao').click();
    }
});