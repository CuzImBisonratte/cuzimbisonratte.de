// Key stroke listener

var shortcuts = {
    "shift+t": function() {
        cycleTheme();
    },
    "shift+s": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#main"
    },
    "shift+p": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#portfolio"
    },
    "shift+ü": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#about"
    },
    "shift+k": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#contact"
    }
}

onkeydown = function(e) {
    var key = e.key.toLowerCase();
    if (e.altKey) {
        key = "alt+" + key;
    }
    if (e.shiftKey) {
        key = "shift+" + key;
    }
    if (shortcuts[key]) {
        shortcuts[key]();
    }
}