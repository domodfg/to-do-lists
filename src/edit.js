import { formInput } from "./form";

const edit = (() => {
  const editForm = formInput.form;

  const formEditButton = document.createElement("button");
  formEditButton.textContent = "Edit";
  formEditButton.setAttribute("class", ".formEdit");
  formEditButton.setAttribute("type", "button");



  const switchForm = () => {
    formEditButton.removeAttribute('id');
    editForm.appendChild(formEditButton);
  };
  
  return { editForm, switchForm, formEditButton };
})();

export { edit };
