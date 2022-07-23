import { formInput } from "./form";

const toDoFactory = (title, description, priority, dueDate) => {
  return { title, description, priority, dueDate };
};

const projectFactory = (title) => {
  const array = [];
  return { title, array };
};

const task = (() => {
 
  const inputToTask = () => {
    const title = formInput.title.value;
    const description = formInput.description.value;
    const priority = formInput.priority.value;
    const dueDate = formInput.dueDate.value;
    const newTask = toDoFactory(title, description, priority, dueDate);
    return {newTask}
  };

  const today = projectFactory('today')
  const currentProject = today;

  const addTaskToArray = (project) => {
    const newTask = inputToTask();
    project.array.push(newTask)
  };

  return {
    inputToTask, 
    addTaskToArray,
    currentProject,
  };
})();
export { toDoFactory, projectFactory, task };
