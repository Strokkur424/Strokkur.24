/*
 * Yes, this was made using ChatGPT, as I couldn't figure out how to do it.
 * And yes, I will always be making these comments in places I used ChatGPT (because I honestly am not a fan of it. I have AI)
 *
 */


function loadContent() {
    // Get the path from the URL
    var path = window.location.pathname;

    // Remove leading and trailing slashes
    path = path.replace(/^\/|\/$/g, '');

    // If path is empty, default to index
    if (path === '') {
        path = 'index';
    }

    // Load the content based on the path
    var url = path + '.html';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

// Load content when the page loads
window.onload = loadContent;
// Load content when the URL changes (using History API)
window.onpopstate = loadContent;