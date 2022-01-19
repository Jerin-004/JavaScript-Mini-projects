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
    return null;  // under working progress
}

let value;
let totalVal;
function numbers(val) {
    value= val;
    document.getElementById("type-area").textContent += value;
    totalVal = document.getElementById("type-area").textContent;
}
totalVal = value 



function operators(op) {
    document.getElementById("type-area").textContent += op;
}

let answer = 0;
function symbols(sy) {



    if (sy== '1/x') {
        answer = 1/totalVal;
        document.getElementById("type-area").textContent = answer;
        // answer = "0";
    }

    else if (sy == 'x2'){
        answer = totalVal **2;
        document.getElementById("type-area").textContent = answer;
        // answer = "0";
    }

    else if(sy == 'sqrt2') {
        answer = Math.sqrt(totalVal);
        document.getElementById("type-area").textContent = answer;
        // answer = "0";

    }
    
    
}

function clearEverything() {
    document.getElementById("type-area").textContent = "0";
    totalVal = 0;
}

function backSpace() {
    document.getElementById("type-area").textContent = document.getElementById("type-area").textContent.substring(0,document.getElementById("type-area").textContent.length -1)
    totalVal = '0';
}


// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement
//     this.currentOperandTextElement = currentOperandTextElement
//     this.clear()
//   }

//   clear() {
//     this.currentOperand = ''
//     this.previousOperand = ''
//     this.operation = undefined
//   }

//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1)
//   }

//   appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }

//   chooseOperation(operation) {
//     if (this.currentOperand === '') return
//     if (this.previousOperand !== '') {
//       this.compute()
//     }
//     this.operation = operation
//     this.previousOperand = this.currentOperand
//     this.currentOperand = ''
//   }

//   compute() {
//     let computation
//     const prev = parseFloat(this.previousOperand)
//     const current = parseFloat(this.currentOperand)
//     if (isNaN(prev) || isNaN(current)) return
//     switch (this.operation) {
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '÷':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentOperand = computation
//     this.operation = undefined
//     this.previousOperand = ''
//   }

//   getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }

//   updateDisplay() {
//     this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
//   }
// }


// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })

// operationButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.chooseOperation(button.innerText)
//     calculator.updateDisplay()
//   })
// })

// equalsButton.addEventListener('click', button => {
//   calculator.compute()
//   calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//   calculator.clear()
//   calculator.updateDisplay()
// })

// deleteButton.addEventListener('click', button => {
//   calculator.delete()
//   calculator.updateDisplay()
// })



