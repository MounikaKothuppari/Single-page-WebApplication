function fnShowBorderImage() {
    location.hash = "Border-image";
}

function fnGetBorderImageFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/BorderImage/Views/borderimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Border-image";
            }
        }
        fnShowBorderImage();
    };

    oXhr.send();
}
