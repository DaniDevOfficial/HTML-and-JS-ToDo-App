// Theme changer
// send help where is theme defined
let themechanger = document.getElementById("theme")
let noDarkReader;
themechanger.addEventListener('click', function() {

    noDarkReader = document.getElementById("theme");

    if(noDarkReader.innerText === "Light-Theme"){

        noDarkReader.innerText = "Dark-Theme"
    }
    else if(noDarkReader.innerText === "Dark-Theme"){

        noDarkReader.innerText = "Light-Theme"
    }
    //Write the function to change css (it works)
});






