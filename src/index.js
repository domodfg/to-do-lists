import "./style.css";
import { toDoFactory, projectFactory, task, project } from "./factory.js";
import { formInput, formSubmit, newProjectForm } from "./form.js";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";

const container = document.querySelector(".container");
const current = document.querySelector(".currentProject");
container.appendChild(formInput.form);
container.appendChild(newProjectForm.form);

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
