const input = document.getElementById("input")
const taskitem = document.getElementById("taskitem")
function addTodo(){
    if(input.value === ""){
        // alert("You Must Write Something!");
        alert("তুই কিছু লিখতে হোইবো নাইলে আই কাম করতান নো 🙄🤣");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskitem.appendChild(li);
        let img = document.createElement("img");
        img.src = "Image/delete.png";
        li.appendChild(img)
    }
    input.value = "";
}

taskitem.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();    
    }
}, false);