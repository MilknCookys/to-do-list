import { taskList } from "./task-list";
import { addTaskForm } from "./forms";
import { displayTaskForm } from "./controller";

const displayedProject = (function () {
  let displayedProject;
  return {
    getProject: function () {
      return displayedProject;
    },
    setProject: function (project) {
      displayedProject = project;
    },
  };
})();

function createSVGElement(svgContent, idName) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, "image/svg+xml");
  const svgElement = doc.documentElement;

  if (idName) {
    svgElement.id = idName;
  }
  svgElement.addEventListener("click", displayTaskForm);

  return svgElement;
}

function renderProjectView(project) {
  displayedProject.setProject(project);

  const content = document.getElementById("content");

  content.replaceChildren();

  const projectContainer = document.createElement("div");
  projectContainer.id = "projectContainer";

  const projectHeader = document.createElement("div");
  const projectDetails = document.createElement("div");
  const projectTitle = document.createElement("h1");
  const projectDescription = document.createElement("h3");

  projectHeader.classList.add("projectHeader");
  projectDetails.classList.add("projectDetails");
  projectTitle.classList.add("projectTitle");
  projectDescription.classList.add("projectDescription");

  const addIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
  const addIcon = createSVGElement(addIconSVG, "addTask");

  projectTitle.innerText = project.name;
  projectDescription.innerText = project.description;

  projectDetails.appendChild(projectTitle);
  projectDetails.appendChild(projectDescription);

  projectHeader.appendChild(projectDetails);
  projectHeader.appendChild(addIcon);
  content.appendChild(projectHeader);
  content.appendChild(projectContainer);

  projectContainer.appendChild(taskList());
  projectContainer.appendChild(addTaskForm());
}

function clearRenderView(project) {
  const content = document.getElementById("content");
  if (displayedProject.getProject() === project) {
    content.replaceChildren();
    displayedProject.setProject(null);
  }
}

export { renderProjectView, clearRenderView };
