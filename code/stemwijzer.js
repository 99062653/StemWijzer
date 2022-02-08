var _startpagina = document.getElementById("start-container");
var _vragenpagina = document.getElementById("vragen-container");

var _progress = document.getElementById("progress-vragen");
var _counter = document.getElementById("count-vragen");
var _titel = document.getElementById("titel-vragen");
var _subtitel = document.getElementById("subtitel-vragen");

function stemwijzerQuestions() {
    var _index = 0;

    _startpagina.style.visibility = "hidden";
    _vragenpagina.style.visibility = "visible";
    loadQuestions(_index)

}

function loadQuestions(index) {
    if (index == 0) {
        index = 1;
    } else {
        index = index;
    }

    var _progressCalculated = index / subjects.length * 100

    _progress.style.width = _progressCalculated + "%";
    _counter.innerText = index + " / " + subjects.length;
    _titel.innerText = subjects[index].title
    _subtitel.innerText = subjects[index].statement
}