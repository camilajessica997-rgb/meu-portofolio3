
/* Seleciona o botão do menu */
const menuBtn = document.getElementById("menu-btn");

/* Seleciona a lista de links */
const navLinks = document.getElementById("nav-links");

/* Abre e fecha o menu ao clicar no botão */
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

/* Fecha o menu após clicar em um link */
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
