import "./style.css";
import { task, project, taskSubmit, projectSubmit } from "./factory.js";
import { formInput, newProjectForm } from "./form.js";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";
import { edit } from "./edit";

const container = document.querySelector(".container");
const current = document.querySelector(".currentProject");
const createTask = document.createElement("button");
createTask.textContent = "New Tasks";
createTask.addEventListener("click", () => {
  container.appendChild(formInput.form);
  formInput.form.appendChild(formInput.submit);
  taskSubmit();
  projectSubmit();
});

container.appendChild(newProjectForm.form);
container.appendChild(createTask);

const userInterface = (() => {
  const currentProjectTitle = document.createElement("p");
  currentProjectTitle.textContent = task.currentProject.title;
  const appendTitle = () => current.appendChild(currentProjectTitle);
  return { currentProjectTitle, appendTitle };
})();

arraytoDOM();
projectToDOM();
userInterface.appendTitle();

export { userInterface };
