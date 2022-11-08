//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { userInput } from "./logado.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzHUA6XVvGzNo3wnWDZkqmIhbi4nyCpMs",
    authDomain: "clockeydb.firebaseapp.com",
    databaseURL: "https://clockeydb-default-rtdb.firebaseio.com",
    projectId: "clockeydb",
    storageBucket: "clockeydb.appspot.com",
    messagingSenderId: "788888204067",
    appId: "1:788888204067:web:2d3a66f6f94baf58e81296",
    measurementId: "G-TKKR9BL59N"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(username) {
    const db = getDatabase();
    set(ref(db, username), {
        username: {userInput},
    });
}

export { writeUserData };

