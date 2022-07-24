import { formInput, newProjectForm } from "./form";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";

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

const taskSubmit = () => {
  formInput.submit.addEventListener("click", () => {
    if (formInput.title.checkValidity()) {
      task.addTaskToArray(task.currentProject);
      console.log(task.currentProject);
      formInput.title.value = "";
      formInput.description.value = "";
      formInput.dueDate.value = "";
      arraytoDOM();
    } else {
      formInput.title.reportValidity();
    }
  });
};

const project = (() => {
  const projectList = [task.today];

  const addtoProjectList = () => {
    const title = newProjectForm.title.value;
    const newProject = projectFactory(title);
    projectList.push(newProject);
    console.log(projectList);
  };
  return { projectList, addtoProjectList };
})();

const projectSubmit = () => {
  newProjectForm.submit.addEventListener("click", () => {
    if (newProjectForm.title.checkValidity()) {
      project.addtoProjectList();
      newProjectForm.title.value = "";
      projectToDOM();
    } else {
      newProjectForm.title.reportValidity();
    }
  });
};
export { task, project, taskSubmit, projectSubmit };
