import "./style.css";
import { task, project, taskSubmit, projectSubmit } from "./factory.js";
import { formInput, newProjectForm } from "./form.js";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";
import { edit } from "./edit";

const taskContainer = document.querySelector(".taskContainer");
const projectContainer = document.querySelector(".projectList");
const current = document.querySelector(".currentProject");
const createTask = document.querySelector(".createTask");
const createProject = document.querySelector(".createProject");
createTask.addEventListener("click", () => {
  formInput.title.value = "";
  formInput.description.value = "";
  formInput.dueDate.value = "";
  formInput.submit.classList.remove("hidden");
  edit.formEditButton.classList.add("hidden");
  taskContainer.appendChild(formInput.form);
});

createProject.addEventListener("click", () => {
  projectContainer.appendChild(newProjectForm.form);
});

taskSubmit();
projectSubmit();

const userInterface = (() => {
  const currentProjectTitle = document.createElement("p");
  currentProjectTitle.textContent = task.currentProject.title;
  const appendTitle = () => current.appendChild(currentProjectTitle);
  const displayIfEmpty = () => {
    if (taskContainer.childNodes.length === 0) {
      const congrat = document.createElement('div');
      congrat.setAttribute('class', 'congrat task')
      congrat.textContent="Yay! nothing more to do!"
      taskContainer.appendChild(congrat);
    } 
  }
  return { currentProjectTitle, appendTitle, displayIfEmpty };
})();

projectToDOM();
arraytoDOM();
userInterface.appendTitle();
userInterface.displayIfEmpty();

export { userInterface };
