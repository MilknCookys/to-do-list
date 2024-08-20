import { toggleAddProjectForm } from "./forms";
import { Project, projects } from "./project";

const addProjectFormButton = document.getElementById("addProject");
addProjectFormButton.addEventListener("click", toggleAddProjectForm);

const createProjectButton = document.getElementById("createProject");
// createProjectButton.addEventListener("submit", createProject);
createProjectButton.addEventListener("click" || "submit", createProject);

function createProject(event) {
  const form = document.getElementById("addProjectForm");
  if (form.checkValidity()) {
    event.preventDefault();

    console.log("createProject");
    const projectName = document.getElementById("projectName").value;
    const projectDescription =
      document.getElementById("projectDescription").value;
    const project = new Project(projectName, projectDescription);
    projects.push(project);
    console.log(projects);
    form.reset();
  } else {
    console.log("Invalid form");
  }
}
