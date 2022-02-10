var _index = 0;
var _choices = [];

function stemwijzerMain() {
    const _startpagina = document.getElementById("start-container");
    const _vragenpagina = document.getElementById("vragen-container");
    const _allevragenpagina = document.getElementById("allevragen-container");
    const _resultpagina = document.getElementById("result-container");

    if (_index == subjects.length) {
        _vragenpagina.style.display = "none";
        _resultpagina.style.display = "block";
    } else {
        if (_index >= 0) {
            _startpagina.style.display = "none";
            _vragenpagina.style.display = "block";

            loadQuestions(_index)
        } else {
            _vragenpagina.style.display = "none";
            _startpagina.style.display = "block";

            _index = 0;
        }
    }
}

function loadQuestions(index) {
    const _progress = document.getElementById("progress-vragen");
    const _counter = document.getElementById("count-vragen");
    const _titel = document.getElementById("titel-vragen");
    const _subtitel = document.getElementById("subtitel-vragen");

    const _eensKnop = document.getElementById("agree-button");
    const _neitherKnop = document.getElementById("neither-button");
    const _oneensKnop = document.getElementById("disagree-button");
    var _indexCalculated = index + 1;

    if (_choices.length == 0) {
        for (var r = 0; r < subjects.length; r++) {
            _choices.push(null);
        }
    }
    console.log(_choices);

    _progress.style.width = _indexCalculated / subjects.length * 100 + "%";
    _counter.innerText = _indexCalculated + " / " + subjects.length;
    _titel.innerText = subjects[index].title;
    _subtitel.innerText = subjects[index].statement;
    _eensKnop.style.border = "none", _neitherKnop.style.border = "none",
    _oneensKnop.style.border = "none";

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
    dir == "next" ? _index++ : _index--;
    stemwijzerMain();
}