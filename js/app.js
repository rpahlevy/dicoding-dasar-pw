window.onload = function () {
    includeHTML();
}

/**
 * Include html snippets via JS
 * Upgraded from: https://www.w3schools.com/howto/howto_html_include.asp
 */
includeHTML = function () {
    var attr = 'include-html';
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements with include html tag: */
    z = document.getElementsByTagName("*");
    for (elmnt of document.querySelectorAll('[' + attr + ']')) {
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(attr);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute(attr);
                    // includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            // return;
        }
    }
}