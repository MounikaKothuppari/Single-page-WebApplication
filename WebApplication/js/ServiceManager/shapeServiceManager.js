function fnShowShape() {
    location.hash = "Shapes using Shadow";
}

function fnGetShapeFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Ribbon-Shape/Views/shape.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Shapes using Shadow";
            }
        }
        fnShowShape();
    };

    oXhr.send();
}
