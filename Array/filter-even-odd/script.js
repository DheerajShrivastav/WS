// ===== Array to store all numbers =====
var numbers = [];

// ===== Add a number to the array =====
function addNumber() {
    var input = document.getElementById("numberInput");
    var value = input.value.trim();

    if (value === "") {
        input.focus();
        return;
    }

    var num = Number(value);

    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    // Push number into the array
    numbers.push(num);

    // Clear input and refocus
    input.value = "";
    input.focus();

    // Show both even and odd after adding
    showEven();
    showOdd();
}

// ===== Filter and show even numbers =====
function showEven() {
    var evenNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    var evenBox = document.getElementById("evenBox");

    if (evenNumbers.length === 0) {
        evenBox.textContent = "";
    } else {
        evenBox.textContent = evenNumbers.join(", ");
    }
}

// ===== Filter and show odd numbers =====
function showOdd() {
    var oddNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }

    var oddBox = document.getElementById("oddBox");

    if (oddNumbers.length === 0) {
        oddBox.textContent = "";
    } else {
        oddBox.textContent = oddNumbers.join(", ");
    }
}

// ===== Clear everything =====
function clearAll() {
    numbers = [];
    document.getElementById("numberInput").value = "";
    document.getElementById("evenBox").textContent = "";
    document.getElementById("oddBox").textContent = "";
    document.getElementById("numberInput").focus();
}

// Allow pressing Enter to add a number
document.getElementById("numberInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addNumber();
    }
});
