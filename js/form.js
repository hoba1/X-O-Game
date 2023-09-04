let form = document.querySelector("form");
let xname = document.querySelector("#X-name");
let oname = document.querySelector("#O-name");

form.onsubmit = function(){
    if(xname != "" && oname!= ""){
        localStorage.setItem("X",xname.value);
        localStorage.setItem("O",oname.value);
    }
}
