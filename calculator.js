var flag = false;//  Judge the new expression or modified expression

function display(currentString) {
    if (currentString.length > 26) {
        document.getElementById("info").innerHTML = "27 characters at most!";
        document.getElementById("info").style.background = "#FFE0E0";
        currentString = currentString.substring(0, 26);
    }
    document.getElementById("iBox").value = currentString;
}

function getString(key) {
    document.getElementById("info").innerHTML = "";
    document.getElementById("info").style.background = "#FFFFFF";
    if (flag) {
        flag = false;
        if (key == "+" || key == "-" || key == "*" || key == "/") {
            return document.getElementById("oBox").value;
        }
        return "";
    } else {
        return document.getElementById("iBox").value;
    }
}

window.onload = function() {
    document.getElementById("_7").onclick = function() {
        var currentString = getString();
        currentString += 7;
        display(currentString);
    }
    document.getElementById("_8").onclick = function() {
        var currentString = getString();
        currentString += 8;
        display(currentString);
    }
    document.getElementById("_9").onclick = function() {
        var currentString = getString();
        currentString += 9;
        display(currentString);
    }
    document.getElementById("_/").onclick = function() {
        var currentString = getString("/");
        currentString += '÷';
        display(currentString);
    }
    document.getElementById("_4").onclick = function() {
        var currentString = getString();
        currentString += 4;
        display(currentString);
    }
    document.getElementById("_5").onclick = function() {
        var currentString = getString();
        currentString += 5;
        display(currentString);
    }
    document.getElementById("_6").onclick = function() {
        var currentString = getString();
        currentString += 6;
        display(currentString);
    }
    document.getElementById("_*").onclick = function() {
        var currentString = getString("*");
        currentString += '×';
        display(currentString);
    }
    document.getElementById("_1").onclick = function() {
        var currentString = getString();
        currentString += 1;
        display(currentString);
    }
    document.getElementById("_2").onclick = function() {
        var currentString = getString();
        currentString += 2;
        display(currentString);
    }
    document.getElementById("_3").onclick = function() {
        var currentString = getString();
        currentString += 3;
        display(currentString);
    }
    document.getElementById("_-").onclick = function() {
        var currentString = getString("-");
        currentString += '-';
        display(currentString);
    }
    document.getElementById("_0").onclick = function() {
        var currentString = getString();
        currentString += 0;
        display(currentString);
    }
    document.getElementById("_.").onclick = function() {
        var currentString = getString();
        currentString += '.';
        display(currentString);
    }
    document.getElementById("_+").onclick = function() {
        var currentString = getString("+");
        currentString += '+';
        display(currentString);
    }
    document.getElementById("_(").onclick = function() {
        var currentString = getString();
        currentString += '(';
        display(currentString);
    }
    document.getElementById("_)").onclick = function() {
        var currentString = getString();
        currentString += ')';
        display(currentString);
    }
    document.getElementById("_←").onclick = function() {
        flag = false;
        document.getElementById("info").innerHTML = "";
        document.getElementById("info").style.background = "#FFFFFF";
        var currentString = document.getElementById("iBox").value;
        document.getElementById("iBox").value = currentString.substring(0, currentString.length - 1);
    }
    document.getElementById("_CE").onclick = function() {
        document.getElementById("info").innerHTML = "";
        document.getElementById("info").style.background = "#FFFFFF";
        document.getElementById("iBox").value = "";
        document.getElementById("oBox").value = "";
    }
    document.getElementById("_=").onclick = function() {
        var currentString = document.getElementById("iBox").value;
        var tempString = currentString.split("÷");
        flag = true;
        currentString = tempString.join("/");
        tempString = currentString.split("×");
        currentString = tempString.join("*");
        try {
            currentString = eval(currentString);
            if (typeof currentString != "undefined") {

                //  Deal with accuracy error, 5 digit after decimal point at most
                //var m = Math.pow(10, 5);
                //currentString = parseInt(currentString * m, 10) / m;
                //  End of solution
                document.getElementById("oBox").value = currentString;
            }
        }
        catch (err) {
            if (err instanceof SyntaxError) {
                document.getElementById("info").innerHTML = "Invalid Expression!";
                document.getElementById("info").style.background = "#FFE0E0";
            }
        }
    }
}
