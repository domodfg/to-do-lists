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

  const submit = document.createElement("button");
  submit.setAttribute("type", "button");
  submit.textContent = "Submit";
  const cancel = document.createElement("button");
  cancel.setAttribute("type", "button");
  cancel.textContent = "Cancel";

  const form = document.createElement("form");
  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(descriptionLabel);
  form.appendChild(description);
  form.appendChild(prioLabel);
  form.appendChild(priority);
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
    form,
  };
})();

export { formInput };
