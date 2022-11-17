const addRule = document.querySelector(".add-rule");
const closeSecond = document.querySelector("#close-second");
const closeFirst = document.querySelector(".btn-close");
const canvas = document.querySelector("#offcanvasRight");
const secondSection = document.querySelector(".second-section");
const backdrop = document.querySelector(".offcanvas-backdrop");
const tags = document.querySelector("#tags-input");
const form = document.querySelector("form");
const formSelect = document.querySelector(".form-select");
const container = document.querySelector("ul");

addRule.addEventListener("click", () => {
  document.querySelector("#tags-input").focus();
  secondSection.style.width = "650px";
  secondSection.style.overflow = "visible";
  canvas.style.marginRight = "650px";
});

closeSecond.addEventListener("click", () => {
  secondSection.style.width = "0px";
  secondSection.style.overflow = "hidden";
  canvas.style.marginRight = "0px";
});

closeFirst.addEventListener("click", () => {
  secondSection.style.width = "0px";
  canvas.style.marginRight = "0px";
  secondSection.style.overflow = "hidden";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const tagsContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const img = document.createElement("img");
  img.src = "icon - delete.svg";
  p.innerHTML = `On <span>${formSelect.value}</span> set the ${
    tags.value.split(",")?.length === 1 ? "tag" : "tags"
  }`;
  tags.value.split(",").forEach((tag) => {
    const span = document.createElement("span");
    span.innerText = tag.trim();
    span.classList.add("tag");
    tagsContainer.append(span);
  });
  div.append(p, tagsContainer);
  deleteButton.append(img);
  deleteButton.classList.add("delete-button");
  li.append(div, deleteButton);
  container.append(li);
  tags.value = "";
  formSelect.selectedIndex = 0;

  //delete rule
  let close = document.getElementsByClassName("delete-button");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      let div = this.parentElement;
      console.log(this.parentElement);
      div.style.display = "none";
    });
  }
});
