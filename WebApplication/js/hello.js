window.onhashchange = fnHasChange;

function fnDoLoad() {

    fnMenuLoad();
    fnGetAboutusFromServer();
    fnHasChange();
}

function fnHasChange(oEv) {
    var sNewToken = location.hash

    switch (sNewToken) {
        case '#Animated-Human-Face':
            fnGetHumanFaceFromServer();
            break;
        case '#Blurred-Text':
            fnGetBlurredTextFromServer();
            break;
        case '#HoveringImage':
            fnGetHoveredImageFromServer();
            break;
        case '#HoverBox':
            fnGetHoverBoxFromServer();
            break;
        case '#Border-image':
            fnGetBorderImageFromServer();
            break;
        case '#Button-Shadow':
            fnGetButtonFromServer();
            break;
        case '#formatting first letter and first line of Pragraph':
            fnGetFirstLetterFromServer();
            break;
        case '#Formatting-Pragraph':
            fnGetPragraphFromServer();
            break;
        case '#maintaining height and width of <div>':
            fnGetDivFromServer();
            break;
        case '#Nested OrderList':
            fnGetOrderListFromServer();
            break;
        case '#Shapes using Shadow':
            fnGetShapeFromServer();
            break;
        case '#Text in Columns':
            fnGetTextInColumnFromServer();
            break;

        case '#Empty <div>':
            fnGetEmptyElementFromServer();
            break;

        case '#About':
            fnGetAboutusFromServer();
            break;
        default:

            break;
    }

}
