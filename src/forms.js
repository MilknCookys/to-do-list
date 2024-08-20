function toggleAddProjectForm() {
  const addProjectFormContainer = document.getElementById(
    "addProjectFormContainer"
  );
  addProjectFormContainer.classList.toggle("hidden");
}

export { toggleAddProjectForm };
