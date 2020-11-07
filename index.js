window.addEventListener('load', (event) => {
    const modalElement = document.querySelector(".modal");
    const closeModalButton = document.querySelector(".modal__button-close");
    closeModalButton.addEventListener('click', () => {
        modalElement.classList.add('hidden');
    })
});