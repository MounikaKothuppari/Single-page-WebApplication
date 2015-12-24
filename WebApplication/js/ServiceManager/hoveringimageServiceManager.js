function fnShowHoveringImage() {
    location.hash = "HoveringImage";
}

function fnGetHoveredImageFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Hovering-Image/Views/hoverimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "HoveringImage";
            }
        }
        fnShowHoveringImage();
    };

    oXhr.send();
}
