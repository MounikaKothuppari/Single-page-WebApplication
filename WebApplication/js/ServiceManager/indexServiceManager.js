function fnShowIndex() {


    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Views/index.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.body.innerHTML = oEv.currentTarget.responseText;
            }
        }

        window.location.href = "Views/index.html";
    };

    oXhr.send();
}
