/** INSERT CUSTOM JS HERE **/
export default function () {
  const openModalButton = document.getElementById("video__icon");
  const closeModalButton = document.getElementById("modalVideo_close");

  const modalVideo = document.getElementById("modalVideo");

  openModalButton.addEventListener("click", () => {
    modalVideo.classList.add("activeModal");
  });

  closeModalButton.addEventListener("click", () => {
    modalVideo.classList.remove("activeModal");
  });
}
