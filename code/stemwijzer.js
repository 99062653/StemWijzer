var _index = 0;
var _choices = [];

var _startpagina = document.getElementById("start-container");
var _vragenpagina = document.getElementById("vragen-container");

var _progress = document.getElementById("progress-vragen");
var _counter = document.getElementById("count-vragen");
var _titel = document.getElementById("titel-vragen");
var _subtitel = document.getElementById("subtitel-vragen");

var _eensKnop = document.getElementById("agree-button");
var _neitherKnop = document.getElementById("neither-button");
var _oneensKnop = document.getElementById("disagree-button");
var _skipKnop = document.getElementById("skip-button");

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
    if (_choices.length == 0) {
        for (var r = 0; r < subjects.length; r++) {
            _choices.push(null);
        }
    }
    console.log(_choices);
    _progress.style.width = index / subjects.length * 100 + "%";
    _counter.innerText = index + " / " + subjects.length;
    _titel.innerText = subjects[index].title;
    _subtitel.innerText = subjects[index].statement;
    _eensKnop.style.border = "none", _neitherKnop.style.border = "none", 
    _oneensKnop.style.border = "none", _skipKnop.style.border = "none";

    switch (_choices[index]) {
        case "pro":
            _eensKnop.style.border = "3px solid #000";
            break;
        case "constra":
            _oneensKnop.style.border = "3px solid #000";
            break;
        case "neither":
            _neitherKnop.style.border = "3px solid #000";
            break;
        case "none":
            _skipKnop.style.border = "3px solid #000";
            break;
    }
}

function questionsNav(dir, state) {
    switch (state) {
        case "pro":
            _choices[_index] = "pro";
            break;
        case "constra":
            _choices[_index] = "constra";
            break;
        case "neither":
            _choices[_index] = "neither";
            break;
        case "none":
            _choices[_index] = "none";
            break;
    }
    dir == "next" ? _index++ : _index--; //ternary operator: ? = true : = else 
    stemwijzerMain();
}