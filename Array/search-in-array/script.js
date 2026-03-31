// Predefined array of car brand names
var cars = ["Maruti", "Hyundai", "Tata", "Mahindra", "Audi", "BMW", "Honda", "Toyota", "Kia", "Ford"];

// Display the array on page load
displayArray("");

function searchArray() {
    var input = document.getElementById("searchInput").value.trim();
    var resultDiv = document.getElementById("result");

    if (input === "") {
        resultDiv.textContent = "Please enter a search term.";
        resultDiv.className = "not-found";
        displayArray("");
        return;
    }

    // Search through the array (case-insensitive)
    var found = false;
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].toLowerCase() === input.toLowerCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        resultDiv.textContent = cars[i];
        resultDiv.className = "found";
    } else {
        resultDiv.textContent = "No matches found";
        resultDiv.className = "not-found";
    }

    displayArray(input);
}

function displayArray(searchTerm) {
    var container = document.getElementById("arrayDisplay");
    container.innerHTML = "";

    for (var i = 0; i < cars.length; i++) {
        var item = document.createElement("span");
        item.className = "array-item";
        item.textContent = cars[i];

        // Highlight the matched item
        if (searchTerm !== "" && cars[i].toLowerCase() === searchTerm.toLowerCase()) {
            item.className = "array-item highlight";
        }

        container.appendChild(item);
    }
}
