// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAdzZ8jHpHWYtSqyXtZ2y5Ch4b3tl1eDOQ",
//   authDomain: "windows-10-calculator-remake.firebaseapp.com",
//   projectId: "windows-10-calculator-remake",
//   storageBucket: "windows-10-calculator-remake.appspot.com",
//   messagingSenderId: "757229947792",
//   appId: "1:757229947792:web:c64d71400d2f1588538115",
//   measurementId: "G-LN3F6EC9QH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function changeMode()
{
    alert("InDev..");  // under working progress
}

let value;
let totalVal;
function numbers(val) {
    value= val;
    document.getElementById("type-area").value += value;
    totalVal = document.getElementById("type-area").value;
}
totalVal = value 



function operators(op) {
    document.getElementById("type-area").value += op;
}

let answer = 0;
function symbols(sy) {



    if (sy== '1/x') {
        totalVal = 1/totalVal;
        document.getElementById("type-area").value = totalVal;
    }

    else if (sy == 'x2'){
        totalVal = totalVal **2;
        document.getElementById("type-area").value = totalVal;
    }

    else if(sy == 'sqrt2') {
        totalVal = Math.sqrt(totalVal);
        document.getElementById("type-area").value = totalVal;
    }
    
    
}

function clearEverything() {
    document.getElementById("type-area").value = " ";
    totalVal = 0;
}

function backSpace() {
    document.getElementById("type-area").value = document.getElementById("type-area").value.substring(0,document.getElementById("type-area").value.length -1);
}

function calculate() {
   totalVal = eval(document.getElementById("type-area").value);
   document.getElementById("type-area").value = totalVal;
}

