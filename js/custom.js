/** INSERT CUSTOM JS HERE **/
export default function () {
  const openModalButton = document.getElementById("video__icon");
  const closeModalButton = document.getElementById("modalVideo_close");
  const menuItems = document.getElementsByClassName("navbar__list--item");

  const modalVideo = document.getElementById("modalVideo");

  openModalButton.addEventListener("click", () => {
    modalVideo.classList.add("activeModal");
  });

  closeModalButton.addEventListener("click", () => {
    modalVideo.classList.remove("activeModal");
  });

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
