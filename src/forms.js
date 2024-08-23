function toggleAddProjectForm() {
  const addProjectFormContainer = document.getElementById(
    "addProjectFormContainer"
  );
  addProjectFormContainer.classList.toggle("hidden");
}

// function toggleAddTaskForm() {
//   const form = document.getElementById("taskForm");
//   form.classList.toggle("hidden");
// }

function addTaskForm() {
  // Create form element
  const form = document.createElement("form");
  form.classList.add("hidden");
  form.setAttribute("id", "taskForm");

  // Helper function to create input container
  function createInputContainer(labelText, inputType, inputName, inputId) {
    const container = document.createElement("div");
    container.classList.add("inputContainer");

    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    const input = document.createElement(inputType);
    input.setAttribute("name", inputName);
    input.setAttribute("id", inputId);

    container.appendChild(label);
    container.appendChild(input);

    return container;
  }

  // Task Name
  const taskNameContainer = createInputContainer(
    "Task Name",
    "input",
    "name",
    "taskName"
  );
  taskNameContainer.querySelector("input").setAttribute("required", "required");

  form.appendChild(taskNameContainer);

  // Task Notes
  const taskNotesContainer = createInputContainer(
    "Task Notes",
    "textarea",
    "notes",
    "taskNotes"
  );
  form.appendChild(taskNotesContainer);

  // Task Deadline
  const taskDeadlineContainer = createInputContainer(
    "Task Deadline",
    "input",
    "deadline",
    "deadline"
  );
  taskDeadlineContainer.querySelector("input").setAttribute("type", "date");
  form.appendChild(taskDeadlineContainer);

  // Priority Container
  const priorityContainer = document.createElement("div");
  priorityContainer.setAttribute("id", "priorityContainer");

  const priorities = ["high", "medium", "low"];
  const priorityLabels = ["High", "Medium", "Low"];

  priorities.forEach((priority, index) => {
    const priorityItem = document.createElement("div");

    const label = document.createElement("label");
    label.setAttribute("for", priority);
    label.textContent = priorityLabels[index];

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", priority);
    input.setAttribute("name", "priority");
    input.setAttribute("value", priority);

    priorityItem.appendChild(label);
    priorityItem.appendChild(input);
    priorityContainer.appendChild(priorityItem);
  });

  form.appendChild(priorityContainer);

  // Add Task Button
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.textContent = "Add Task";

  form.appendChild(addButton);

  return form;
}

export { toggleAddProjectForm, addTaskForm };
