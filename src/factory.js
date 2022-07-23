import { formInput, newProjectForm } from "./form";

const toDoFactory = (title, description, priority, dueDate) => {
  return { title, description, priority, dueDate };
};

const projectFactory = (title) => {
  const array = [];
  return { title, array };
};

const task = (() => {
  const today = projectFactory("today");
  const currentProject = today;

  const addTaskToArray = (project) => {
    const title = formInput.title.value;
    const description = formInput.description.value;
    const priority = formInput.priority.value;
    const dueDate = formInput.dueDate.value;
    const newTask = toDoFactory(title, description, priority, dueDate);
    project.array.push(newTask);
  };

  return {
    today,
    addTaskToArray,
    currentProject,
  };
})();

const project = (() => {
  const projectList = [task.today];

  const addtoProjectList = () => {
    const title = newProjectForm.title.value;
    const newProject = projectFactory(title);
    projectList.push(newProject);
    console.log(projectList);
  };
  return { addtoProjectList };
})();
export { toDoFactory, projectFactory, task, project };
