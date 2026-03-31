// Array to store names
var names = [];

function addName() {
    var input = document.getElementById("nameInput");
    var name = input.value.trim();

    if (name === "") {
        return;
    }

    names.push(name);
    input.value = "";
    displayNames();
}

function sortNames() {
    // Simple bubble sort (beginner-friendly)
    for (var i = 0; i < names.length - 1; i++) {
        for (var j = 0; j < names.length - 1 - i; j++) {
            if (names[j].toLowerCase() > names[j + 1].toLowerCase()) {
                // Swap
                var temp = names[j];
                names[j] = names[j + 1];
                names[j + 1] = temp;
            }
        }
    }
    displayNames();
}

function resetNames() {
    names = [];
    displayNames();
}

function displayNames() {
    var listDiv = document.getElementById("namesList");

    if (names.length === 0) {
        listDiv.textContent = "";
        return;
    }

    // Join names with comma and space
    var text = "";
    for (var i = 0; i < names.length; i++) {
        text = text + names[i];
        if (i < names.length - 1) {
            text = text + ", ";
        }
    }

    listDiv.textContent = text;
}
