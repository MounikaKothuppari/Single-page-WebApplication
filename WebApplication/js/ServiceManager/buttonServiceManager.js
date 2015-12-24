function fnShowButton() {
    location.hash = "Button-Shadow";
}

function fnGetButtonFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Button/Views/button.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Button-Shadow";
            }
        }
        fnShowButton();
    };

    oXhr.send();
}
