import { task, project } from "./factory.js";
import { userInterface } from "./index.js";
import { formInput } from "./form.js";
import { edit } from "./edit.js";
import { storage } from "./storage.js";

const updateID = () => {
  const allTask = document.querySelectorAll(".task");
  const allRemove = document.querySelectorAll(".remove");
  const allEdit = document.querySelectorAll(".edit");
  allTask.forEach((task, i) => {
    task.id = i;
  });
  allRemove.forEach((remove, i) => {
    remove.id = i;
  });
  allEdit.forEach((edit, i) => {
    edit.id = i;
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
    title.setAttribute("class", "title");

    const description = document.createElement("div");
    description.textContent = task.currentProject.array[i].description;

    const dueDate = document.createElement("div");
    dueDate.textContent = task.currentProject.array[i].dueDate;

    const remove = document.createElement("button");
    remove.setAttribute("id", i);
    remove.setAttribute("class", "remove");
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
      const removedTask = document.querySelectorAll(".task");
      task.currentProject.array.splice(remove.id, 1);
      container.removeChild(removedTask[remove.id]);
      updateID();
      storage.store();
      console.log(task.currentProject);
    });

    const taskCard = document.createElement("div");
    taskCard.setAttribute("id", i);
    taskCard.setAttribute("class", "task");
    taskCard.appendChild(title);
    taskCard.appendChild(dueDate);
    taskCard.appendChild(remove);

    const editButton = document.createElement("button");
    editButton.setAttribute("id", i);
    editButton.setAttribute("class", "edit");
    editButton.textContent = "edit";

    editButton.addEventListener("click", () => {
      taskCard.appendChild(edit.editForm);
      edit.switchForm();
      edit.formEditButton.setAttribute("id", editButton.id);
      edit.formEditButton.classList.remove("hidden");
      formInput.submit.classList.add("hidden");
    });

    taskCard.appendChild(editButton);
    container.appendChild(taskCard);
  }
};

const addEventTOEdit = (() => {
  edit.formEditButton.addEventListener("click", () => {
    const newTitle = formInput.title.value;
    const description = formInput.description.value;
    const priority = formInput.priority.value;
    const dueDate = formInput.dueDate.value;
    task.currentProject.array[edit.formEditButton.id].title = newTitle;
    task.currentProject.array[edit.formEditButton.id].description = description;
    task.currentProject.array[edit.formEditButton.id].priority = priority;
    task.currentProject.array[edit.formEditButton.id].dueDate = dueDate;
    storage.store();
    console.log(task.currentProject.array);
    arraytoDOM();
  });
})();

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
    title.setAttribute("class", "projectTitle");
    title.addEventListener("click", () => {
      task.currentProject = project.projectList[title.id];
      userInterface.currentProjectTitle.textContent = task.currentProject.title;
      arraytoDOM();
    });

    const remove = document.createElement("button");
    remove.setAttribute("id", i);
    remove.setAttribute("class", "projectRemove");
    remove.textContent = "remove";
    remove.addEventListener("click", () => {
      const removedProject = document.querySelectorAll(".project");
      project.projectList.splice(remove.id, 1);
      container.removeChild(removedProject[remove.id]);
      storage.store();
      updateProjectID();
      task.currentProject = task.today;
      userInterface.currentProjectTitle.textContent = task.currentProject.title;
      arraytoDOM();
    });

    const projectCard = document.createElement("div");
    projectCard.setAttribute("id", i);
    projectCard.setAttribute("class", "project");
    projectCard.appendChild(title);
    if (i > 0) {
      projectCard.appendChild(remove);
    }
    container.appendChild(projectCard);
  }
};

const updateProjectID = () => {
  const allProject = document.querySelectorAll(".project");
  const allProjectRemove = document.querySelectorAll(".projectRemove");
  const allProjectTitle = document.querySelectorAll(".projectTitle");
  allProject.forEach((project, i) => {
    project.id = i;
  });
  allProjectRemove.forEach((ProjectRemove, i) => {
    ProjectRemove.id = i + 1;
  });
  allProjectTitle.forEach((Title, i) => {
    Title.id = i;
  });
};

export { arraytoDOM, projectToDOM };
