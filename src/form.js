import close from "./close-outline.png"
import tick from "./check-outline.png"

const formInput = (() => {
  const title = document.createElement("input");
  const titleLabel = document.createElement("label");
  title.setAttribute("required", "");
  title.setAttribute("id", "title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title: ";

  const description = document.createElement("input");
  const descriptionLabel = document.createElement("label");
  description.setAttribute("id", "description");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description: ";

  const priority = document.createElement("select");
  priority.textContent = "Priority";
  priority.setAttribute("id", "priority");
  const highPrio = document.createElement("option");
  highPrio.setAttribute("value", "High");
  highPrio.textContent = "High";
  const midPrio = document.createElement("option");
  midPrio.setAttribute("value", "Mid");
  midPrio.textContent = "Mid";
  const lowPrio = document.createElement("option");
  lowPrio.setAttribute("value", "Low");
  lowPrio.textContent = "Low";
  priority.appendChild(highPrio);
  priority.appendChild(midPrio);
  priority.appendChild(lowPrio);
  const prioLabel = document.createElement("label");
  prioLabel.setAttribute("for", "priority");
  prioLabel.textContent = "Priority: ";

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("class", "date");

  const submit = new Image()
  submit.src = tick;
  submit.setAttribute("type", "button");
  submit.setAttribute("class", "formSubmit");

  const cancel = new Image()
  cancel.src = close;
  cancel.setAttribute("type", "button");
  

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  const titleContainer = document.createElement("div");
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(description);

  const prioContainer = document.createElement("div");
  prioContainer.appendChild(prioLabel);
  prioContainer.appendChild(priority);

  form.appendChild(titleContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(prioContainer);
  form.appendChild(dueDate);
  form.appendChild(submit);
  form.appendChild(cancel);

  return {
    title,
    description,
    priority,
    dueDate,
    submit,
    cancel,
    form
  };
})();

const newProjectForm = (() => {
  const title = document.createElement("input");
  const titleLabel = document.createElement("label");
  title.setAttribute("required", "");
  title.setAttribute("id", "title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Project Title: ";

  const submit = new Image()
  submit.src = tick;
  submit.setAttribute("type", "button");
  submit.setAttribute("class", "projectSubmit");

  const cancel = new Image()
  cancel.src = close;
  cancel.setAttribute("type", "button");

  const form = document.createElement("form");
  form.setAttribute('class', 'projectForm')
  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(submit);
  form.appendChild(cancel);

  return {
    title,
    form,
    submit,
    cancel,
  };
})();

const addEventToCancel = (() => {
  formInput.cancel.addEventListener("click", () => {
    formInput.form.remove();
  });
  newProjectForm.cancel.addEventListener("click", () => {
    newProjectForm.form.remove();
  });
})();

export { formInput, newProjectForm };
