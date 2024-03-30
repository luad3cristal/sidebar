const menu = document.querySelector("#menu")
const sidebar = document.querySelector(".sidebar")
const hidden = document.querySelector(".hidden")

menu.onfocus = function () {
  sidebar.classList.toggle("active")
  hidden.classList.toggle("hidden")
}
