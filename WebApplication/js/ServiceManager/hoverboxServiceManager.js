function fnShowHoverBox() {
    location.hash = "HoverBox";
}

function fnGetHoverBoxFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Hover-Box/Views/hovershape.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "HoverBox";
            }
        }
        fnShowHoverBox();
    };

    oXhr.send();
}
