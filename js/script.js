


let taskarray = [];

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
}
}
let target;
let edited;
function editor(event){
  target = event.currentTarget
  console.log("it works");
  edited = prompt("Hier kannst du deine Task bearbeiten", target.innerText)
  if(edited==="" && edited==null){

    exit
  }
  else{
  target.innerText = `${edited}`
  }}
