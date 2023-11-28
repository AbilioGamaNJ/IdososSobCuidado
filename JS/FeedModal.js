const openModalFeedButton = document.querySelector("#open-modal-feed");
const closeModalFeedButton = document.querySelector("#close-modal-feed");
const modalFeed = document.querySelector("#modalFeed");


const toggleModalFeed = () => {
    fadeFeed.classList.toggle("hideFeed");
    modalFeed.classList.toggle("hideFeed");
}

[openModalFeedButton, closeModalFeedButton, fadeFeed].forEach((el) => {
    el.addEventListener("click", () => toggleModalFeed());
});