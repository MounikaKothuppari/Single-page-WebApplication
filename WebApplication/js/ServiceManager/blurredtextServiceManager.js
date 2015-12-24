function fnShowBlurredText() {
    location.hash = "Blurred-Text";
}

function fnGetBlurredTextFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Text-Blur/Views/text-blur.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Blurred-Text";
            }
        }
        fnShowBlurredText();
    };

    oXhr.send();
}
