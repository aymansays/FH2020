function ready() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];

    html.style.background = "red"
    body.innerHTML = "<h1>Ready</h1>"
}

function set() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];

    html.style.background = "orange"
    body.innerHTML = "<h1>Set</h1>"
}

function go() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];

    html.style.background = "green"
    body.innerHTML = "<h1>GO</h1>"
}

function button() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];

    html.style.background = "white"
    body.innerHTML = "<button onclick=\"setTimeout(ready, 0); setTimeout(set, 3000); setTimeout(go, 6000); setTimeout(button, 10000)\">Again Please</button>"
}
