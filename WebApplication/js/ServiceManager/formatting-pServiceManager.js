function fnShowPragraph() {
    location.hash = "Formatting-Pragraph";
}

function fnGetPragraphFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Formatting-P/Views/formating.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Formatting-Pragraph";
            }
        }
        fnShowPragraph();
    };

    oXhr.send();
}
