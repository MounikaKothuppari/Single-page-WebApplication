function fnShowFirstLetter() {
    location.hash = "formatting first letter and first line of Pragraph";
}

function fnGetFirstLetterFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/FirstLetter/Views/firstletter.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "formatting first letter and first line of Pragraph";
            }
        }
        fnShowFirstLetter();
    };

    oXhr.send();
}
