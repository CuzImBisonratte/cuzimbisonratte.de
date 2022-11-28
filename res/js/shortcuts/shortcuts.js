// Key stroke listener

var shortcuts = {
    "alt+t": function() {
        cycleTheme();
    },
    "alt+s": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#main"
    },
    "alt+p": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#portfolio"
    },
    "alt+ü": function() {
        window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#about"
    },
    "alt+k": function() {
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
    if (e.ctrlKey) {
        key = "ctrl+" + key;
    }
    if (shortcuts[key]) {
        shortcuts[key]();
    }
}