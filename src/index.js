import "./style.css";
import { toDoFactory, projectFactory} from "./factory.js";
import { formInput } from "./form.js";
import { format } from "date-fns";

const container = document.querySelector(".container");
container.appendChild(formInput.form);

