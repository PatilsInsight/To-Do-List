var loggedIn = false;

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Forgot Password functionality not implemented.");
});

function login() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    // Perform authentication (dummy check for demo purposes)
    if (username === "user" && password === "pass") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("todoApp").style.display = "block";
        loggedIn = true;
    } else if (username === "") {
        document.getElementById("errorMessage").textContent = "Please Enter Username";
        return;
    }
    else if (password === "") {
        document.getElementById("errorMessage").textContent = "Please Enter Password";
        return;
    } else {
        document.getElementById("errorMessage").textContent = "Invalid Username or Password";
    }
}

function addTask() {
    if (!loggedIn) {
        document.getElementById("errorMessage").textContent = "Please login first";
        return;
    }

    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty.")
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    li.innerHTML += '<button onclick="updateTask(this)">Update</button>';
    li.innerHTML += '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
    document.getElementById("errorMessage").textContent = "";
}

function updateTask(button) {
    if (!loggedIn) {
        document.getElementById("errorMessage").textContent = "Please login first";
        return;
    }

    var newTaskText = prompt("Enter new task:");
    if (newTaskText === null || newTaskText.trim() === "") {
        return; // User canceled or entered an empty task
    }

    var li = button.parentNode;
    li.textContent = newTaskText;
    li.innerHTML += ' <button onclick="updateTask(this)">Update</button>';
    li.innerHTML += ' <button onclick="deleteTask(this)">Delete</button>';
}

function deleteTask(button) {
    if (!loggedIn) {
        document.getElementById("errorMessage").textContent = "Please login first";
        return;
    }

    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function logout() {
    loggedIn = false;
    document.getElementById("todoApp").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}