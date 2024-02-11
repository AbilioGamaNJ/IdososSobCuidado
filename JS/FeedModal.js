const openModalFeedButton = document.querySelector("#open-modal-feed");
const closeModalFeedButton = document.querySelector("#close-modal-feed");
const modalFeed = document.querySelector("#modalFeed");
const fadeFeed = document.querySelector("#fadeFeed");
const toggleModalFeed = () => {
    fadeFeed.classList.toggle("hideFeed");
    modalFeed.classList.toggle("hideFeed");
}

[openModalFeedButton, closeModalFeedButton, fadeFeed].forEach((element) => {
    element.addEventListener("click", () => toggleModalFeed());
}); 

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});