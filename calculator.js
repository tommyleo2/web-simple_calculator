function display(currentString) {
    if (currentString.length > 21) {
        alert("The display box displays 21 characters at most!\nExceeding numbers are deleted automatically!");
        currentString = currentString.substring(0, 21);
    }
    document.getElementById("ioBox").value = currentString;
}

window.onload = function() {
    document.getElementById("_7").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 7;
        display(currentString);
    }
    document.getElementById("_8").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 8;
        display(currentString);
    }
    document.getElementById("_9").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 9;
        display(currentString);
    }
    document.getElementById("_/").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += '÷';
        display(currentString);
    }
    document.getElementById("_4").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 4;
        display(currentString);
    }
    document.getElementById("_5").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 5;
        display(currentString);
    }
    document.getElementById("_6").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 6;
        display(currentString);
    }
    document.getElementById("_*").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += '*';
        display(currentString);
    }
    document.getElementById("_1").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 1;
        display(currentString);
    }
    document.getElementById("_2").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 2;
        display(currentString);
    }
    document.getElementById("_3").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 3;
        display(currentString);
    }
    document.getElementById("_-").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += '-';
        display(currentString);
    }
    document.getElementById("_0").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += 0;
        display(currentString);
    }
    document.getElementById("_.").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += '.';
        display(currentString);
    }
    document.getElementById("_+").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        currentString += '+';
        display(currentString);
    }
    document.getElementById("_(").onclick = function() {
         var currentString = document.getElementById("ioBox").value;
        currentString += '(';
        display(currentString);
    }
    document.getElementById("_)").onclick = function() {
         var currentString = document.getElementById("ioBox").value;
        currentString += ')';
        display(currentString);
    }
    document.getElementById("_←").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        document.getElementById("ioBox").value = currentString.substring(0, currentString.length - 1);
    }
    document.getElementById("_CE").onclick = function() {
        document.getElementById("ioBox").value = "";
    }
    document.getElementById("_=").onclick = function() {
        var currentString = document.getElementById("ioBox").value;
        var tempString = currentString.split("÷");
        currentString = tempString.join("/");
        try {
            currentString = eval(currentString);
        }
        catch (err) {
            if (err instanceof SyntaxError) {
                alert("Invalid expression!");
            }
        }
        if (typeof currentString != "undefined") {
            document.getElementById("ioBox").value = currentString;
        }
    }
}
