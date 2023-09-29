// script.js

function createDivs(category, score) {
  header = document.getElementById("summary");
  divs = document.createElement("div");
  divs.classList.add("summary-description");
  spanCategory = document.createElement("span");
  spanCategory.id = category.toLowerCase();
  spanCategory.textContent = category;
  spanScore = document.createElement("span");
  spanScore.classList.add("score");
  spanScore.textContent = score + String.fromCharCode(160);
  span = document.createElement("span");
  span.textContent = " / 100";
  spanScore.appendChild(span);
  divs.appendChild(spanCategory);
  divs.appendChild(spanScore);
  header.insertAdjacentElement("afterend", divs);
}

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    for (let i = data.length - 1; i >= 0; i--) {
      createDivs(data[i].category, data[i].score);
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
