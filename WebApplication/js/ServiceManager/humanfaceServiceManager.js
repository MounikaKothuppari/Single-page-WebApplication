function fnShowHumanFace() {
    location.hash = "Animated-Human-Face";
}

function fnGetHumanFaceFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Human-Face/Views/Human_Face.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Animated-Human-Face";
            }
        }
        fnShowHumanFace();
    };

    oXhr.send();
}
