var _startpagina = document.getElementById("stemwijzer-container");
var _vragenpagina = document.getElementById("vragen-container");

function changeElement(element, element2) {
    if (element.style.visibility != "hidden") {
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        element.style.transition = "visibility 0s 0.5s, opacity 0.5s linear"

        element2.style.visibility = "visible";
        element2.style.opacity = "1";
        element2.style.transition = "visibility 0s 1s, opacity 1s linear"
    } else {
        element2.style.visibility = "hidden";
        element2.style.opacity = "0";
        element2.style.transition = "visibility 0s 0.5s, opacity 0.5s linear"

        element.style.visibility = "visible";
        element.style.opacity = "1";
        element.style.transition = "visibility 0s 1s, opacity 1s linear"
    }
}

function startQuestions() {
    changeElement(_startpagina, _vragenpagina)

}

function backQuestion() {
    changeElement(_vragenpagina, _startpagina)
}