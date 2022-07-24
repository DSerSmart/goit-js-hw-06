const ulEl = document.querySelectorAll(".item");
const ulLengEl = ulEl.length;
console.log(`Number of categories:${ulLengEl}`);

const mainUl = ulEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements:${element.lastElementChild.children.length}`);
});
