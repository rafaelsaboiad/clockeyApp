import { writeUserData, getDatabase, ref, onValue, get, child } from "./firebase.js";

var userInput = sessionStorage.getItem("userInput");

document.querySelector('.userOutput').innerHTML = userInput;

function writeDataOnDb() {
    writeUserData(userInput);
    console.log("Data saved");
}

console.log(userInput);

    const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/' + userInput)).then((snapshot) => {
            if (snapshot.exists()) {
            console.log(snapshot.val());
                var senha = prompt('Usuário encontrado, digite a senha');
                if (senha != 'admin'){
                    alert('Senha incorreta');
                    window.location.href = "index.html";
                }
        } else {
            console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

writeDataOnDb();