var _index = 0;
var _choices = [];
var _parties = [];
var _selects = [];

function stemwijzerMain(result) {
    const _startpagina = document.getElementById("start-container");
    const _vragenpagina = document.getElementById("vragen-container");
    const _selectspagina = document.getElementById("selects-container");
    const _resultpagina = document.getElementById("result-container");

    if (result == true) {
        _selectspagina.style.display = "none";
        _resultpagina.style.display = "block";

        loadResult();
    } else {
        if (_index == subjects.length) {
            _vragenpagina.style.display = "none";
            _selectspagina.style.display = "block";

            loadSelects();
        } else {
            if (_index >= 0) {
                _startpagina.style.display = "none";
                _selectspagina.style.display = "none";
                _vragenpagina.style.display = "block";

                loadQuestions(_index)
            } else {
                _vragenpagina.style.display = "none";
                _startpagina.style.display = "block";

                _index = 0;
            }
        }
    }
}

function stemwijzerNav(dir, state) {
    dir == "next" ? saveResult(state) & _index++ : _index--;

    stemwijzerMain();
}

function loadQuestions(index) {
    const _progress = document.getElementById("progress-vragen");
    const _counter = document.getElementById("count-vragen");
    const _titel = document.getElementById("titel-vragen");
    const _subtitel = document.getElementById("subtitel-vragen");

    const _eensKnop = document.getElementById("agree-button");
    const _neitherKnop = document.getElementById("neither-button");
    const _oneensKnop = document.getElementById("disagree-button");
    var _indexCalculated = (index + 1);

    if (_choices.length == 0) {
        for (var r = 0; r < subjects.length; r++) {
            _choices.push({
                name: subjects[r].title,
                opinion: null
            });
        }
    }
    if (_parties.length == 0) {
        for (var r = 0; r < parties.length; r++) {
            _parties.push({
                name: parties[r].name,
                actualname: parties[r].long,
                secular: parties[r].secular,
                size: parties[r].size,
                similarities: 0
            })
        }
        console.log(_parties);
    }
    console.log(_choices);

    _progress.style.width = _indexCalculated / subjects.length * 100 + "%";
    _counter.innerText = _indexCalculated + " / " + subjects.length;
    _titel.innerText = subjects[index].title;
    _subtitel.innerText = subjects[index].statement;
    _eensKnop.style.border = "none", _neitherKnop.style.border = "none",
        _oneensKnop.style.border = "none";

    switch (_choices[index].opinion) {
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

function loadSelects() {
    const _table = document.getElementById("table-selects");

    if (_selects.length == 0) {
        for (var r = 0; r < subjects.length; r++) {
            _selects.push(null);
        }

        for (var r = 0; r < subjects.length; r++) {
            const _option = document.createElement("div");
            const _checkbox = document.createElement("input");

            _option.className = "select";
            _option.innerText = subjects[r].title;
            _option.id = "select_" + r;
            _checkbox.setAttribute("type", "checkbox");
            _checkbox.id = "subject_" + r;
            _option.appendChild(_checkbox);
            _table.appendChild(_option);
        }
    }
}   

function loadResult() {
    const _table = document.getElementById("table-results");
    for (var r = 0; r < subjects.length; r++) {
        for (var h = 0; h < subjects[r].parties.length; h++) {
            if (_choices[r].opinion == subjects[r].parties[h].position) {
                var _indexParty = _parties.findIndex(x => x.name === subjects[r].parties[h].name);

                if (_selects[r] == 1) {
                    _parties[_indexParty].similarities++
                    _parties[_indexParty].similarities++
                } else {
                   _parties[_indexParty].similarities++
                }
            }
        }
    }
    console.log(_parties);
}

function submitSelects() {
    for (var r = 0; r < subjects.length; r++) {
        var _checkboxes = document.getElementById("subject_" + r);

        if (_checkboxes.checked) {
            _selects[r] = 1;
        }
    }

    stemwijzerMain(true);
}

function saveResult(state) {
    switch (state) {
        case "pro":
            _choices[_index].opinion = "pro";
            break;
        case "constra":
            _choices[_index].opinion = "constra";
            break;
        case "neither":
            _choices[_index].opinion = "neither";
            break;
        case "none":
            _choices[_index].opinion = "none";
            break;
    }
}