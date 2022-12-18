


window.addEventListener("load", function (): void {

    let enter: HTMLInputElement = (document.getElementById("inputbox") as HTMLInputElement);

    enter.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            enter.value = "";
        }
    });


    function addTask(): void {



        let div: HTMLDivElement = document.createElement("div");
        div.className = "toDoItem";

        let label: HTMLLabelElement = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        document.getElementById("tasks").appendChild(div);
        div.appendChild(label);
        div.appendChild(checkbox);

        
    }
})