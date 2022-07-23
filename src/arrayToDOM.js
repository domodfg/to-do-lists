import { task } from "./factory.js";

const arraytoDOM = () => {
  const container = document.querySelector(".container");
  
  const existedTask = document.querySelectorAll(".task");
  existedTask.forEach((tasks) => {
    container.removeChild(tasks);
  });

  for (let i = 0; i < task.currentProject.array.length; i++) {
    const title = document.createElement("div");
    title.textContent = task.currentProject.array[i].newTask.title;

    const description = document.createElement("div");
    description.textContent = task.currentProject.array[i].newTask.description;

    const dueDate = document.createElement("div");
    dueDate.textContent = task.currentProject.array[i].newTask.dueDate;

    const taskCard = document.createElement("div");
    taskCard.setAttribute("id", i);
    taskCard.setAttribute("class", "task");
    taskCard.appendChild(title);
    taskCard.appendChild(dueDate);

    container.appendChild(taskCard);
  }
};

export { arraytoDOM };
