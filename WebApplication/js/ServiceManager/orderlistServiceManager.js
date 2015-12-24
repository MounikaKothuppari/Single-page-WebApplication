function fnShowOrderList() {
    location.hash = "Nested OrderList";
}

function fnGetOrderListFromServer() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', '../Modules/Order-List/Views/orderList.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
                document.title = "Nested OrderList";
            }
        }
        fnShowOrderList();
    };

    oXhr.send();
}
