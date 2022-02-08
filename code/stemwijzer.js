var _startpagina = document.getElementById("start-container");
var _vragenpagina = document.getElementById("vragen-container");

var _progress = document.getElementById("progress-vragen");
var _counter = document.getElementById("count-vragen");
var _titel = document.getElementById("titel-vragen");
var _subtitel = document.getElementById("subtitel-vragen");

var _index = 0;

function stemwijzerMain() {
    if (_index >= 0) {
        _startpagina.style.visibility = "hidden";
        _vragenpagina.style.visibility = "visible";
        
        loadQuestions(_index)
    } else {
        _vragenpagina.style.visibility = "hidden";
        _startpagina.style.visibility = "visible";

        _index = 0;
    }
}

function loadQuestions(index) {
    index == 0 ? index = 1 : index; //ternary operater: soortgelijk aan if else; ? = true, : = else

    var _progressCalculated = index / subjects.length * 100

    _progress.style.width = _progressCalculated + "%";
    _counter.innerText = index + " / " + subjects.length;
    _titel.innerText = subjects[index].title
    _subtitel.innerText = subjects[index].statement
}

function questionBack() {
    _index--
    
    stemwijzerMain()
}