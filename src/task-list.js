import { createSVGElement } from "./view";
import { deleteTaskFunction } from "./delete-task";

const deleteIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

function taskList(project) {
  const taskListContainer = document.createElement("div");
  taskListContainer.id = "taskListContainer";

  return taskListContainer;
}

function renderTaskItems(project) {
  function log() {
    console.log("Task Deleted");
  }

  const taskListContainer = document.getElementById("taskListContainer");
  taskListContainer.replaceChildren();

  project.tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");

    const taskHeader = document.createElement("div");
    taskHeader.classList.add("taskHeader");

    const taskTitle = document.createElement("h2");
    taskTitle.classList.add("taskTitle");
    taskTitle.innerText = task.title;

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("taskDueDate");
    taskDueDate.innerText = task.dueDate;

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("taskDescription");
    taskDescription.innerText = task.description;

    const taskFooter = document.createElement("div");
    taskFooter.classList.add("taskFooter");

    const taskPriorityContainer = document.createElement("div");
    taskPriorityContainer.classList.add("taskPriorityContainer");

    const taskPriority = document.createElement("div");
    taskPriority.classList.add("taskPriority");

    switch (task.priority) {
      case "high":
        taskPriority.classList.add("priorityHigh");
        break;
      case "medium":
        taskPriority.classList.add("priorityMedium");
        break;
      case "low":
        taskPriority.classList.add("priorityLow");
        break;
    }

    const taskActions = document.createElement("div");
    taskActions.classList.add("taskActions");

    const deleteTask = createSVGElement(deleteIconSVG, "deleteTask");
    taskActions.appendChild(deleteTask);
    deleteTask.id = "deleteTask";

    console.log(deleteTask);

    const taskID = task.id;
    taskItem.setAttribute("task-id", taskID);

    // Append elements to their respective parents
    taskPriorityContainer.appendChild(taskPriority);
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(taskDueDate);
    taskItem.appendChild(taskHeader);
    taskItem.appendChild(taskDescription);
    taskFooter.appendChild(taskPriorityContainer);
    taskFooter.appendChild(taskActions);
    taskItem.appendChild(taskFooter);
    taskListContainer.appendChild(taskItem);

    deleteTask.addEventListener("click", deleteTaskFunction);
  });
}

export { taskList, renderTaskItems };
