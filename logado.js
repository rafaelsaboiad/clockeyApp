import { writeUserData } from "./firebase.js";

var userInput = sessionStorage.getItem("userInput");

document.querySelector('.userOutput').innerHTML = userInput;

function writeDataOnDb() {
    writeUserData(userInput);
    console.log("Data saved");
}

writeDataOnDb();