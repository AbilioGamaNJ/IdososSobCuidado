const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const feed = document.querySelector("#feed");

const toggleModal = () => {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade, modal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


