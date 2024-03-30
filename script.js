const menu = document.querySelector("#menu")
const sidebar = document.querySelector(".sidebar")

menu.onfocus = function () {
  sidebar.classList.toggle("active")
}
