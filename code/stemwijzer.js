var _startpagina = document.getElementById("start-container");
var _vragenpagina = document.getElementById("vragen-container");

var _progress = document.getElementById("progress-vragen");
var _counter = document.getElementById("count-vragen");
var _titel = document.getElementById("titel-vragen");
var _subtitel = document.getElementById("subtitel-vragen");

function stemwijzerQuestions() {
    var _index = 0;
    
    if (_index == 0) {
        _startpagina.style.visibility = "hidden";
        _vragenpagina.style.visibility = "visible";
        loadQuestions(_index)
    } else {
        _vragenpagina.style.visibility = "hidden";
        _startpagina.style.visibility = "visible";
    }
}

function loadQuestions(index) {
    console.log(subjects[index])

    _counter.innerText = (index + 1) + " / " + subjects.length;
    _titel.innerText = subjects[index].title
    _subtitel.innerText = subjects[index].statement
}