import { toggleAddProjectForm } from "./forms";
import { Project, projects } from "./project";
import { displayProjectCard } from "./view";
import { renderProjectView } from "./project-content";
import { clearRenderView } from "./project-content";

const addProjectFormButton = document.getElementById("addProject");
addProjectFormButton.addEventListener("click", toggleAddProjectForm);

const projectForm = document.getElementById("addProjectForm");
projectForm.addEventListener("submit", createProject);

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
    }
  }
}

function displayProject(event) {
  const element = event.target.closest(".project");
  const elementProjectID = Number(element.getAttribute("project-id"));

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === elementProjectID) {
      renderProjectView(projects[i]);
    }
  }
}

function onStart() {
  const defaultProject = new Project(
    "Default Project",
    "This is the default project."
  );

  displayProjectCard(defaultProject);
  renderProjectView(defaultProject);
}

onStart();

export { deleteProject, displayProject };
