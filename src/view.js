import { deleteProject } from "./controller";

const deleteProject2 = deleteProject;

function createSVGElement(svgContent, className) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, "image/svg+xml");
  const svgElement = doc.documentElement;

  if (className) {
    svgElement.classList.add(className);
  }

  return svgElement;
}

function displayProjectCard(project) {
  console.log(project);

  const projectCard = document.createElement("div");
  projectCard.classList.add("project");

  projectCard.setAttribute("project-id", project.id);

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("projectTitle");

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("projectDescription");

  const projectActions = document.createElement("div");
  projectActions.classList.add("projectActions");

  const deleteIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
  const visibilityIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`;

  const deleteProject = createSVGElement(deleteIconSVG, "deleteProject");
  const viewProject = createSVGElement(visibilityIconSVG, "viewProject");

  projectActions.appendChild(deleteProject);
  projectActions.appendChild(viewProject);

  projectTitle.innerText = project.name;
  projectDescription.innerText = project.description;

  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(projectActions);

  document.getElementById("sideBar").appendChild(projectCard);

  deleteProject.addEventListener("click", deleteProject2);
}

export { displayProjectCard };
