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

    const remove = document.createElement("button");
    remove.setAttribute("id", i);
    remove.setAttribute("class", "remove");
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
      const removedTask = document.getElementById(remove.id);
      task.currentProject.array.splice(remove.id, 1);
      container.removeChild(removedTask);
      updateID();
      console.log(task.currentProject);
    });

    const taskCard = document.createElement("div");
    taskCard.setAttribute("id", i);
    taskCard.setAttribute("class", "task");
    taskCard.appendChild(title);
    taskCard.appendChild(dueDate);
    taskCard.appendChild(remove);

    container.appendChild(taskCard);
  }
};


const updateID = () => {
  const allTask = document.querySelectorAll(".task");
  const allRemove = document.querySelectorAll(".remove");
  allTask.forEach((task, i) => {
    task.id = i;
  });
  allRemove.forEach((remove, i) => {
    remove.id = i;
  });
};

export { arraytoDOM };
