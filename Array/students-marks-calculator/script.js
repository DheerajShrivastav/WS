// ===== Array to store marks =====
var marks = [];

// ===== Add a mark to the array =====
function addMark() {
    var input = document.getElementById("markInput");
    var value = input.value.trim();

    // Don't add empty values
    if (value === "") {
        input.focus();
        return;
    }

    var mark = Number(value);

    // Validate the mark is a valid number
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Please enter a valid mark between 0 and 100.");
        return;
    }

    // Push the mark into the array
    marks.push(mark);

    // Clear input and refocus
    input.value = "";
    input.focus();

    // Show the marks
    renderMarks();
}

// ===== Render marks as tags =====
function renderMarks() {
    var container = document.getElementById("marksList");
    container.innerHTML = "";

    for (var i = 0; i < marks.length; i++) {
        var tag = document.createElement("span");
        tag.className = "mark-tag";
        tag.innerHTML = marks[i] + ' <span class="remove" onclick="removeMark(' + i + ')">&times;</span>';
        container.appendChild(tag);
    }
}

// ===== Remove a mark from the array =====
function removeMark(index) {
    var newMarks = [];
    for (var i = 0; i < marks.length; i++) {
        if (i !== index) {
            newMarks.push(marks[i]);
        }
    }
    marks = newMarks;

    renderMarks();
    // Clear results when marks change
    document.getElementById("results").innerHTML = "";
}

// ===== Calculate and display results =====
function calculate() {
    var resultsDiv = document.getElementById("results");

    if (marks.length === 0) {
        resultsDiv.innerHTML = "<p>No marks added yet. Please add some marks first.</p>";
        return;
    }

    // Calculate total
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    // Calculate average
    var average = total / marks.length;
    // Round to 2 decimal places
    average = Math.round(average * 100) / 100;

    // Find highest mark
    var highest = marks[0];
    for (var i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    // Find lowest mark
    var lowest = marks[0];
    for (var i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    // Display results
    resultsDiv.innerHTML =
        "<p>Total Marks: <span>" + total + "</span></p>" +
        "<p>Average Marks: <span>" + average + "</span></p>" +
        "<p>Highest Mark: <span>" + highest + "</span></p>" +
        "<p>Lowest Mark: <span>" + lowest + "</span></p>";
}

// ===== Reset everything =====
function resetAll() {
    marks = [];
    document.getElementById("markInput").value = "";
    document.getElementById("marksList").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("markInput").focus();
}

// Allow pressing Enter to add a mark
document.getElementById("markInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addMark();
    }
});
