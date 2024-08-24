import { toggleAddProjectForm, toggleAddTaskForm } from "./forms";
import { Project, projects } from "./project";
import { displayProjectCard } from "./view";
import { renderProjectView, clearRenderView } from "./project-content";
import { Task } from "./task";
import { renderTaskItems } from "./task-list";

const addProjectFormButton = document.getElementById("addProject");
addProjectFormButton.addEventListener("click", toggleAddProjectForm);

const projectForm = document.getElementById("addProjectForm");
projectForm.addEventListener("submit", createProject);

const currentProject = (function () {
  let displayedProject;

  function setProject(project) {
    displayedProject = project;
  }

  function getProject() {
    return displayedProject;
  }

  return { setProject, getProject };
})();

function createProject(event) {
  if (projectForm.checkValidity()) {
    event.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const projectDescription =
      document.getElementById("projectDescription").value;
    const project = new Project(projectName, projectDescription);
    console.log(projects);
    projectForm.reset();

    displayProjectCard(project);
    renderProjectView(project);
    toggleAddProjectForm();
  } else {
    console.log("Invalid form");
  }
}

function deleteProject(event) {
  const element = event.target.closest(".project");
  const elementProjectID = Number(element.getAttribute("project-id"));

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === elementProjectID) {
      clearRenderView(projects[i]);
      element.remove();
      projects.splice(i, 1);

      // Diplsay previous project

      if (projects[i - 1] === undefined) {
        return;
      }
      renderProjectView(projects[i - 1]);
      renderTaskItems(projects[i - 1]);
    }
  }
}

function displayProject(event) {
  const element = event.target.closest(".project");
  const elementProjectID = Number(element.getAttribute("project-id"));

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === elementProjectID) {
      currentProject.setProject(projects[i]);
      renderProjectView(projects[i]);
      renderTaskItems(projects[i]);
    }
  }
}

function displayTaskForm(event) {
  toggleAddTaskForm();
}

function createTask(event) {
  if (taskForm.checkValidity()) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const taskNotes = document.getElementById("taskNotes").value;
    const taskDeadline = document.getElementById("deadline").value;

    console.log(document.querySelector("input[name='priority']:checked").value);

    const taskPriority = document.querySelector(
      "input[name='priority']:checked"
    ).value;

    const task = new Task(taskName, taskNotes, taskDeadline, taskPriority);
    currentProject
      .getProject()
      .addTask(taskName, taskNotes, taskDeadline, taskPriority);

    taskForm.reset();

    renderTaskItems(currentProject.getProject());
  } else {
    console.log("Invalid form");
  }

  console.log(projects);
}

function onStart() {
  const defaultProject = new Project(
    "Default Project",
    "This is the default project."
  );

  currentProject.setProject(defaultProject);

  displayProjectCard(defaultProject);
  renderProjectView(defaultProject);
}

onStart();
console.log(currentProject.getProject());

export { deleteProject, displayProject, displayTaskForm, createTask };
