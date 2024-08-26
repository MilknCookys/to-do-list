function taskIDGenerator(project) {
  const id = Math.floor(Math.random() * 1000);

  if (project.tasks.length === 0) {
    return id;
  } else {
    for (let i = 0; i < project.tasks.length; i++) {
      if (tasks[i].id === id) {
        console.log("ID already exists");
        return taskIDGenerator();
      } else {
        console.log("ID is unique");
        return id;
      }
    }
  }
}

class Task {
  #title;
  #description;
  #dueDate;
  #priority;
  #id;

  constructor(title, description, dueDate, priority, project) {
    let currentProject = project;

    if (typeof title !== "string") {
      console.error(`Title must be a string: ${title}`);
    }

    if (typeof description !== "string") {
      console.error(`Description must be a string: ${description}`);
    }

    if (typeof dueDate !== "string") {
      console.error(`Due date must be a string: ${dueDate}`);
    }

    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#id = taskIDGenerator(currentProject);
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    this.#dueDate = value;
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    this.#priority = value;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }
}

export { Task };
