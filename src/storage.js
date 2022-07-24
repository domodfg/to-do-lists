import { project } from "./factory";

const storage = (() => {
  const store = () => {
    localStorage.setItem("projectStorage", JSON.stringify(project.projectList));
  };
  const projectStoreUnParsed = localStorage.getItem("projectStorage");
  const projectStoreParsed = JSON.parse(projectStoreUnParsed);
  return { projectStoreParsed, store };
})();

export { storage };
