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
        div.className = "toDoItem";
        let label = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        document.getElementById("tasks").appendChild(div);
        div.appendChild(label);
        div.appendChild(checkbox);
    }
});
//# sourceMappingURL=Aufgabe10.js.map