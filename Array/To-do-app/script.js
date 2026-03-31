// ===== Array to store all todos =====
var todos = [];

// Current filter state
var currentFilter = "all";

// ===== Add a new todo =====
function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value.trim();

    // Don't add empty todos
    if (text === "") {
        input.focus();
        return;
    }

    // Create a todo object and push it into the array
    var todo = {
        id: Date.now(),       // unique id using timestamp
        text: text,
        completed: false
    };

    todos.push(todo);

    // Clear the input field
    input.value = "";
    input.focus();

    // Re-render the list
    renderTodos();
}

// ===== Remove a todo from the array =====
function deleteTodo(id) {
    // Build a new array without the deleted item
    var newTodos = [];
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id !== id) {
            newTodos.push(todos[i]);
        }
    }
    todos = newTodos;

    renderTodos();
}

// ===== Toggle completed status =====
function toggleComplete(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].completed = !todos[i].completed;
            break;
        }
    }

    renderTodos();
}

// ===== Filter todos =====
function filterTodos(filter) {
    currentFilter = filter;

    // Update active class on filter buttons
    var buttons = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Set the clicked button as active
    if (filter === "all") {
        buttons[0].classList.add("active");
    } else if (filter === "pending") {
        buttons[1].classList.add("active");
    } else {
        buttons[2].classList.add("active");
    }

    renderTodos();
}

// ===== Render todos to the page =====
function renderTodos() {
    var list = document.getElementById("todoList");
    list.innerHTML = "";

    // Decide which todos to show based on filter
    var filtered = [];
    for (var i = 0; i < todos.length; i++) {
        if (currentFilter === "all") {
            filtered.push(todos[i]);
        } else if (currentFilter === "pending" && todos[i].completed === false) {
            filtered.push(todos[i]);
        } else if (currentFilter === "completed" && todos[i].completed === true) {
            filtered.push(todos[i]);
        }
    }

    // If no todos, show empty message
    if (filtered.length === 0) {
        list.innerHTML = '<div class="empty-state">No tasks to show 🎉</div>';
    } else {
        // Loop through filtered array and create list items
        for (var i = 0; i < filtered.length; i++) {
            var todo = filtered[i];

            var li = document.createElement("li");
            if (todo.completed) {
                li.className = "completed";
            }

            // Todo text (click to toggle)
            var span = document.createElement("span");
            span.className = "todo-text";
            span.textContent = todo.text;
            span.setAttribute("onclick", "toggleComplete(" + todo.id + ")");

            // Action buttons container
            var actions = document.createElement("div");
            actions.className = "actions";

            // Complete/Undo button
            var completeBtn = document.createElement("button");
            completeBtn.className = "btn-complete";
            completeBtn.innerHTML = todo.completed ? "↩" : "✓";
            completeBtn.title = todo.completed ? "Mark as pending" : "Mark as completed";
            completeBtn.setAttribute("onclick", "toggleComplete(" + todo.id + ")");

            // Delete button
            var deleteBtn = document.createElement("button");
            deleteBtn.className = "btn-delete";
            deleteBtn.innerHTML = "✕";
            deleteBtn.title = "Delete task";
            deleteBtn.setAttribute("onclick", "deleteTodo(" + todo.id + ")");

            actions.appendChild(completeBtn);
            actions.appendChild(deleteBtn);

            li.appendChild(span);
            li.appendChild(actions);
            list.appendChild(li);
        }
    }

    // Update summary
    updateSummary();
}

// ===== Update the summary bar =====
function updateSummary() {
    var total = todos.length;
    var completedCount = 0;

    for (var i = 0; i < todos.length; i++) {
        if (todos[i].completed) {
            completedCount++;
        }
    }

    var pendingCount = total - completedCount;

    var summary = document.getElementById("summary");
    summary.textContent = "Total: " + total + " | Pending: " + pendingCount + " | Completed: " + completedCount;
}

// ===== Allow pressing Enter to add a todo =====
document.getElementById("todoInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

// Initial render
renderTodos();
