import { formInput, newProjectForm } from "./form";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";
import { storage } from "./storage";

const toDoFactory = (title, description, priority, dueDate) => {
  return { title, description, priority, dueDate };
};

const projectFactory = (title) => {
  const array = [];
  return { title, array };
};

const task = (() => {
  const today = projectFactory("today");
  const currentProject = localStorage.hasOwnProperty("projectStorage")
    ? storage.projectStoreParsed[0]
    : today;

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
      storage.store();
      formInput.title.value = "";
      formInput.description.value = "";
      formInput.dueDate.value = "";
      arraytoDOM();
      formInput.form.remove();
    } else {
      formInput.title.reportValidity();
    }
  });
};

const project = (() => {
  let projectList = localStorage.hasOwnProperty("projectStorage")
    ? storage.projectStoreParsed
    : [task.today];

  const addtoProjectList = () => {
    const title = newProjectForm.title.value;
    const newProject = projectFactory(title);
    projectList.push(newProject);
  };
  return { projectList, addtoProjectList };
})();

const projectSubmit = () => {
  newProjectForm.submit.addEventListener("click", (e) => {
    if (newProjectForm.title.checkValidity()) {
      project.addtoProjectList();
      storage.store();
      newProjectForm.title.value = "";
      projectToDOM();
      newProjectForm.form.remove();
    } else {
      newProjectForm.title.reportValidity();
    }
  });
  newProjectForm.title.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
      console.log('gay')
      e.preventDefault();
    }
  });
};

export { task, project, taskSubmit, projectSubmit };
