console.log("hola mundo");

document.querySelector("input#lenguaje").value = navigator.languages;

document.querySelector("a#open__offcanvas").addEventListener("click", () => {
    document.querySelector("aside#offcanvas").classList.toggle("show");
});

document.querySelector("button.close").addEventListener("click", () => {
    document.querySelector("aside#offcanvas").classList.toggle("show");
});

