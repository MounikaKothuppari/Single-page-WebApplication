function fnShowTextInColumn() {
    location.hash = "Text in Columns";
}

function fnGetTextInColumnFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Text-In-Column/Views/textcolumn.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Text in Columns";
            }
        }
        fnShowTextInColumn();
    };

    oXhr.send();
}
