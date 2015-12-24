function fnShowAboutus() {
    location.hash = "About";
}

function fnGetAboutusFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Aboutus/Circle-Image/Views/circleimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "About us"
            }
        }
        fnShowAboutus();
    };

    oXhr.send();
}
