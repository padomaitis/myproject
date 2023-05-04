import defFn, { fetchData as fetchDataWithNewName } from "./fetch-service.js";

function renderExperiences(experiences) {
  const main = document.querySelector("main");

  const ul = document.createElement("div");

  experiences.forEach((el) => {
    const li = document.createElement("h2");

    li.textContent = `${el.companyName} - ${el.position}`;

    ul.appendChild(li);
  });

  main.appendChild(ul);
}

const url = "https://zany-skitter-caper.glitch.me/experiences";
defFn();
fetchDataWithNewName(url, renderExperiences);
