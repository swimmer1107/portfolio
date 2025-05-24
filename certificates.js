document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".cert-item img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      captionText.textContent = img.title;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
