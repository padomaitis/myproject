import { fetchData } from "./fetch-service.js";

function renderExperiences(experiences) {
  const main = document.querySelector("main");

  const ul = document.createElement("ul");

  experiences.forEach((el) => {
    const li = document.createElement("li");

    li.textContent = `${el.companyName} - ${el.position}`;

    ul.appendChild(li);
  });

  main.appendChild(ul);
}

const url = "https://zany-skitter-caper.glitch.me/experiences";
fetchData(url, renderExperiences);
