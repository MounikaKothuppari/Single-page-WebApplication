function fnShowEmpty() {
    location.hash = "Empty <div>";
}


function fnGetEmptyElementFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Empty-div/Views/nonempty.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Empty <div>";
            }
        }
        fnShowEmpty();
    };

    oXhr.send();
}
