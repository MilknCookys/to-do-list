import { currentProject } from "./controller";

function deleteTaskFunction(event) {
  console.log("Task Deleted");

  const element = event.target.closest(".taskItem");
  const elementTaskID = Number(element.getAttribute("task-id"));

  for (let i = 0; i < currentProject.getProject().tasks.length; i++) {
    if (currentProject.getProject().tasks[i].id === elementTaskID) {
      currentProject.getProject().tasks.splice(i, 1);
      element.remove();
    }
  }
}

export { deleteTaskFunction };
