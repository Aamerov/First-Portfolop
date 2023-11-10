import { projects } from "./data.js";

const section = document.getElementById("projects");

const span = (text, index) => {
  const node = document.createElement("span");

  node.textContent = text;
  node.style.setProperty("--index", index);

  return node;
};

const byLetter = (text) => [...text].map(span);

const { matches: motionOK } = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
);

if (motionOK) {
  const splitTargets = document.querySelectorAll("[split-by]");

  splitTargets.forEach((node) => {
    let nodes = byLetter(node.innerText);

    if (nodes) node.firstChild.replaceWith(...nodes);
  });
}

function getProjectsData() {
  let projectsHtml = "";
  projects.forEach((project) => {
    projectsHtml += `
    <a href="${project.link}" target="_blank" class="blog">
            <img src="${project.image}" alt="laptop" />
            <span>${project.date}</span>
            <h1>${project.title}</h1>
            <p>
              ${project.description}
            </p>
          </a>
    `;
  });

  return projectsHtml;
}

function render() {
  const projectsData = getProjectsData();
  section.innerHTML = projectsData;
}

render();
