import { toggleAddProjectForm } from "./forms";
import { Project, projects } from "./project";
import { displayProjectCard } from "./view";

const addProjectFormButton = document.getElementById("addProject");
addProjectFormButton.addEventListener("click", toggleAddProjectForm);

const createProjectButton = document.getElementById("addProjectForm");
// createProjectButton.addEventListener("submit", createProject);
createProjectButton.addEventListener("submit", createProject);

function createProject(event) {
  const form = document.getElementById("addProjectForm");
  if (form.checkValidity()) {
    event.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const projectDescription =
      document.getElementById("projectDescription").value;
    const project = new Project(projectName, projectDescription);
    projects.push(project);
    console.log(projects);
    form.reset();

    displayProjectCard(project);
  } else {
    console.log("Invalid form");
  }
}

function deleteProject(event) {
  let project = event.target.parentElement.parentElement;

  const projectID = project.getAttribute("project-id");

  console.log(projectID);

  const element = event.target.parentElement.parentElement;

  element.remove();

  let projects2 = projects.filter((project) => project.id !== projectID);

  console.log(projects2);
}

export { deleteProject };
