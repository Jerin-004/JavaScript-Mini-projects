
let textSet = []
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const linksFromTheLocalStorage = JSON.parse(localStorage.getItem("myLinks"))  //used to convert it into an array
// tabs = [
//     {url:"https://python-fan-page.web.app/"}
// ]

if(linksFromTheLocalStorage) {  //truthy
    textSet = linksFromTheLocalStorage
    renderLeads(textSet)
}

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    textSet = []
    renderLeads(textSet)
})

tabBtn.addEventListener("click",function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        textSet.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(textSet))
        renderLeads(textSet)
    })
    
})

inputBtn.addEventListener("click", function() {
    textSet.push(inputEl.value)
    inputEl.value= ""

    localStorage.setItem("myLinks", JSON.stringify(textSet))  // used to convert it into a string
    
    renderLeads(textSet)
})

function renderLeads(textSet) {

    let listItems = ""
    for (let index = 0; index < textSet.length; index++) {
        listItems += "<li><a href='" + textSet[index] + "' target='_blank'>" + textSet[index] + "</a></li>" //ignore the stringed tags
    }
    ulEl.innerHTML = listItems
    
}

//fasly value
// 0
// ""
// null
// undefined
// NaN

//[0]  truthy
    
