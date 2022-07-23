import "./style.css";
import { toDoFactory, projectFactory, task} from "./factory.js";
import { formInput, formSubmit, newProjectForm } from "./form.js";
import { format } from "date-fns";
import { project } from "./projectList.js";

const container = document.querySelector(".container");
container.appendChild(formInput.form);
container.appendChild(newProjectForm.form);
