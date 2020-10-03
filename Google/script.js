const logo = document.getElementById("logo")
const main = document.querySelector("main")
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")
var search = false

addEventListener("submit", pesquisar)  

logo.addEventListener("click", pesquisar)

function pesquisar () {
    if (search == true) {
        main.classList.toggle("back")
        nav.classList.toggle("back")
        footer.classList.toggle("back")
        search = false
    }
    main.classList.toggle("search")
    nav.classList.toggle("search")
    footer.classList.toggle("search")
    search = true
}