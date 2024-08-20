class Task {
  #title;
  #description;
  #dueDate;
  #priority;

  constructor(title, description, dueDate, priority) {
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
}

export { Task };
