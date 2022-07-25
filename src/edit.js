import { formInput } from "./form";
import finished from "./playlist-edit.png";

const edit = (() => {
  const editForm = formInput.form;

  const formEditButton = new Image();
  formEditButton.src = finished;
  formEditButton.setAttribute("class", ".formEdit");
  formEditButton.setAttribute("type", "button");

  const switchForm = () => {
    formEditButton.removeAttribute("id");
    editForm.removeChild(formInput.cancel);
    editForm.appendChild(formEditButton);
    editForm.appendChild(formInput.cancel);
  };

  return { editForm, switchForm, formEditButton };
})();

export { edit };
