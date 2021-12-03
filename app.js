// document.getElementById("count").innerText = 5

let count = 0;

function increment()
{   
    count += 1 ;
    document.getElementById("counter").textContent = count;
}

function save()
{
    let countStr = " " + count + " -";
    document.getElementById("save-el").textContent += countStr;
    count = 0;
    document.getElementById("counter").textContent = count;
}



