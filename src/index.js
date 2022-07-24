import "./style.css";
import { task, project, taskSubmit, projectSubmit } from "./factory.js";
import { formInput, newProjectForm } from "./form.js";
import { arraytoDOM, projectToDOM } from "./arrayToDOM.js";
import { edit } from "./edit";
import { storage } from "./storage";

const container = document.querySelector(".container");
const current = document.querySelector(".currentProject");
const createTask = document.createElement("button");
createTask.textContent = "New Tasks";
createTask.addEventListener("click", () => {
  formInput.title.value = "";
  formInput.description.value = "";
  formInput.dueDate.value = "";
  formInput.submit.classList.remove("hidden");
  edit.formEditButton.classList.add("hidden");
  container.appendChild(formInput.form);
  console.log(project.projectList);
});

container.appendChild(newProjectForm.form);
container.appendChild(createTask);
taskSubmit();
projectSubmit();

const userInterface = (() => {
  const currentProjectTitle = document.createElement("p");
  currentProjectTitle.textContent = task.currentProject.title;
  const appendTitle = () => current.appendChild(currentProjectTitle);
  return { currentProjectTitle, appendTitle };
})();

projectToDOM();
arraytoDOM();
userInterface.appendTitle();

export { userInterface };
