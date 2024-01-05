const inputBox = document.getElementById("input-box");
const listContiner = document.getElementById("list-container");

function addTask(){
    if(inputBox === ""){
        alert("type something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContiner.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.className.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContiner.innerHTML);
}
function showTask(){
    listContiner.innerHTML = localStorage.getItem("data");
}
showTask();