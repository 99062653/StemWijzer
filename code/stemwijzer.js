var _startpagina = document.getElementById("start-container");
var _vragenpagina = document.getElementById("vragen-container");

var _titel = document.getElementById("titel-vragen");
var _subtitel = document.getElementById("subtitel-vragen");

function startQuestions() {
    console.log(subjects);
    
    _startpagina.style.visibility = "hidden";
    _vragenpagina.style.visibility = "visible"

}