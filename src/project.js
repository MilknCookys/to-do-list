import { Task } from "./task";

const projects = [];

class Project {
  #name;
  #description;
  constructor(name, description) {
    if (typeof name !== "string" && name) {
      console.error(`Name must be a string: ${name}`);
    }

    if (typeof description !== "string" && description) {
      console.error(`Description must be a string: ${description}`);
    }

    this.#name = name;
    this.#description = description;
    this.tasks = [];
    projects.push(this);
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.tasks.push(task);
  }
}

const testProject = new Project("Project 1");
testProject.addTask("Task 1", "Description 1", "2022-01-01", "High");

export { Project, projects };
