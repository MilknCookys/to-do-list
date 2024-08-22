import { Task } from "./task";

let projects = [];

function projectIDGenerator() {
  const id = Math.floor(Math.random() * 1000);

  if (projects.length === 0) {
    return id;
  } else {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        console.log("ID already exists");
        return projectIDGenerator();
      } else {
        console.log("ID is unique");
        return id;
      }
    }
  }
}

class Project {
  #name;
  #description;
  #id;
  constructor(name, description) {
    if (typeof name !== "string" && name) {
      console.error(`Name must be a string: ${name}`);
    }

    if (typeof description !== "string" && description) {
      console.error(`Description must be a string: ${description}`);
    }

    this.#name = name;
    this.#description = description;
    this.#id = projectIDGenerator();
    this.tasks = [];
    projects.push(this);
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueate, priority);
    this.tasks.push(task);
  }
}

export { Project, projects };
