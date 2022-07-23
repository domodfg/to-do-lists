import "./style.css";
import { toDoFactory, projectFactory, task} from "./factory.js";
import { formInput, formSubmit } from "./form.js";
import { format } from "date-fns";

const container = document.querySelector(".container");
container.appendChild(formInput.form);
