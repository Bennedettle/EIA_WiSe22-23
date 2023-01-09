


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
        div.className = "newTask";

        let label: HTMLLabelElement = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        let trashbutton: HTMLElement = document.createElement("i")
        trashbutton.className = "fas fa-trash"

        document.getElementById("tasks").appendChild(div);
        div.appendChild(label);
        div.appendChild(checkbox);
        div.appendChild(trashbutton)

        taskNumber++
        taskCount()



        function deleteTask(div: HTMLDivElement): void {
            div.remove();


            taskNumber--
            taskCount()

        }

        trashbutton.addEventListener("click", function (event: MouseEvent): void {
            deleteTask(div);

        })





    }

    let taskNumber: number = 0

    function taskCount(): void {
        if (taskNumber == 1) {
        document.getElementById("number").innerText = taskNumber + " Task";
      } else {
        document.getElementById("number").innerText = taskNumber + " Tasks";
      }

    
    }
    
})
