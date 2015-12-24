function fnShowDiv() {
    location.hash = "maintaining height and width of <div>";
}

function fnGetDivFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Maintain-HW/Views/maintain-hw.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Maintaining height and width of <div>";
            }
        }
        fnShowDiv();
    };

    oXhr.send();
}
