function hideMenu() {
  const ul = document.querySelector("ul");
  ul.style.left = "-1700px";
  ul.style.transition = "1s";
}
function showMenu() {
  const ul = document.querySelector("ul");
  ul.style.right = "0";
  ul.style.transition = "1s";
}
