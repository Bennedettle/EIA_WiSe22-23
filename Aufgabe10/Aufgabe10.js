window.addEventListener("load", function () {
    let enter = document.getElementById("inputbox");
    enter.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            enter.value = "";
        }
    });
    function addTask() {
        let div = document.createElement("div");
        div.className = "newTask";
        let label = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        let trashbutton = document.createElement("i");
        trashbutton.className = "fas fa-trash";
        document.getElementById("tasks").appendChild(div);
        div.appendChild(label);
        div.appendChild(checkbox);
        div.appendChild(trashbutton);
        taskNumber++;
        taskCount();
        function deleteTask(div) {
            div.remove();
            taskNumber--;
            taskCount();
        }
        trashbutton.addEventListener("click", function (event) {
            deleteTask(div);
        });
    }
    let taskNumber = 0;
    function taskCount() {
        if (taskNumber == 1) {
            document.getElementById("number").innerText = taskNumber + " Task";
        }
        else {
            document.getElementById("number").innerText = taskNumber + " Tasks";
        }
    }
});
//# sourceMappingURL=Aufgabe10.js.map