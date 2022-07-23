import { task, project } from "./factory.js";

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

const arraytoDOM = () => {
  const container = document.querySelector(".taskContainer");

  const existedTask = document.querySelectorAll(".task");
  existedTask.forEach((tasks) => {
    container.removeChild(tasks);
  });

  for (let i = 0; i < task.currentProject.array.length; i++) {
    const title = document.createElement("div");
    title.textContent = task.currentProject.array[i].title;

    const description = document.createElement("div");
    description.textContent = task.currentProject.array[i].description;

    const dueDate = document.createElement("div");
    dueDate.textContent = task.currentProject.array[i].dueDate;

    const remove = document.createElement("button");
    remove.setAttribute("id", i);
    remove.setAttribute("class", "remove");
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
      const removedTask = document.querySelectorAll('.task');
      task.currentProject.array.splice(remove.id, 1);
      container.removeChild(removedTask[remove.id]);
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

const projectToDOM = () => {
  const container = document.querySelector(".projectContainer");

  const existedProject = document.querySelectorAll(".project");
  existedProject.forEach((Project) => {
    container.removeChild(Project);
  });

  for (let i = 0; i < project.projectList.length; i++) {
    const title = document.createElement("a");
    title.textContent = project.projectList[i].title;
    title.setAttribute("id", i);
    title.addEventListener("click", () => {
      task.currentProject = project.projectList[title.id];
      arraytoDOM();
    });

    const remove = document.createElement("button");
    remove.setAttribute("id", i);
    remove.setAttribute("class", "projectRemove");
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
    const removedProject = document.querySelectorAll('.project');
      project.projectList.splice(remove.id, 1);
      container.removeChild(removedProject[remove.id]);
      updateProjectID();
      console.log(project.projectList);
    });

    const projectCard = document.createElement("div");
    projectCard.setAttribute("id", i);
    projectCard.setAttribute("class", "project");
    projectCard.appendChild(title);
    projectCard.appendChild(remove);

    container.appendChild(projectCard);
  }
};

const updateProjectID = () => {
  const allProject = document.querySelectorAll(".project");
  const allProjectRemove = document.querySelectorAll(".projectRemove");
  allProject.forEach((project, i) => {
    project.id = i;
  });
  allProjectRemove.forEach((remove, i) => {
    remove.id = i;
  });
};

export { arraytoDOM, projectToDOM };
