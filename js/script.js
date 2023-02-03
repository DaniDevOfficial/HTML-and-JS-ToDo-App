

// Here are the Functions to load and edit the array of tasks
let taskarray = ["snj", "Tasks"];
function render(){
  document.getElementById("tasks").replaceChildren()
  taskarray.forEach(function(element, i) {


    let newTask = document.createElement("div");
    let textnode = document.createTextNode(element);
    newTask.appendChild(textnode);
    newTask.classList.add("todotask");
    newTask.setAttribute("onclick", "edittask(event)")
  
    
  let deletebtn = document.createElement("button")
  deletebtn.innerText = "Delete"
  document.getElementById("tasks").appendChild(deletebtn);

  deletebtn.classList.add("todotask");
  deletebtn.addEventListener('click', function() {

    
    taskarray.splice(i, 1)
    render()
    alert("Task gelöscht")

    
  });
  deletebtn = document.createElement("button")
  deletebtn.innerText = "Abgabe"
  document.getElementById("tasks").appendChild(deletebtn);

  deletebtn.classList.add("todotask");
  deletebtn.addEventListener('click', function() {

    
    taskarray.splice(i, 1)

    render()
    alert("Task abgeschlossen")
  });






    document.getElementById("tasks").appendChild(newTask);
  });
}

render(); // So that the data get put into the list on first load




let target;
let edited;
function edittask(event){
  target = event.currentTarget
  id = target.dataset.id
  edited = prompt("Hier kannst du deine Task bearbeiten", target.innerText)
  if(edited==="" || edited==null){
    alert("Zum Bearbeiten etwas eigeben")
    return
  }
  
  target.innerText = edited
  taskarray[id] = edited;
}



const submitButton = document.querySelector('#submit');
let entryText;
const tasksContainer = document.getElementById('Tasks');
let singletask; 


// Creates a new Task

//submitButton.addEventListener('click', function() {
//  entry = document.getElementById("entryText")
//entryText = document.getElementById("entrytext").value;
//    if(entryText == ""){
//
//    alert("Bitte etwas in der task eingeben");
//    exit
//}
//  const newTask = document.createElement('div');
//  newTask.classList.add("todotask");
//  newTask.innerText= `${entryText}`;
//  document.getElementById("tasks").appendChild(newTask);
//
//  taskarray.push(entryText);
//  document.getElementById("entrytext").value = null;
//});
//
function enterkey(){
  if(event.keyCode == 13) {

  entry = document.getElementById("entryText")
  entryText = document.getElementById("entrytext").value;
      if(entryText == ""){
  
      alert("Bitte etwas in der task eingeben");
      exit
  }
    const newTask = document.createElement('div');
    newTask.classList.add("todotask");
    newTask.setAttribute("onclick", "editor(event)")
    newTask.innerText= `${entryText}`;
    document.getElementById("tasks").appendChild(newTask);
  
    taskarray.push(entryText);
    document.getElementById("entrytext").value = null;
    render();
}
}



