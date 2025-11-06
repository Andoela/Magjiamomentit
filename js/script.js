

// Mesazh popup për abonim me sukses
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeEmail = document.getElementById("subscribeEmail");
const popupMessage = document.getElementById("popupMessage");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const emailValue = subscribeEmail.value.trim();

    if (emailValue === "") {
      popupMessage.textContent = "Ju lutem shkruani emailin për t’u abonuar!";
      popupMessage.style.backgroundColor = "#e74c3c";
      popupMessage.classList.add("show");
    } else {
      popupMessage.textContent = "Ju u abonuat me sukses! Faleminderit.";
      popupMessage.style.backgroundColor = "#4CAF50";
      popupMessage.classList.add("show");
      subscribeEmail.value = "";
    }
    setTimeout(() => {
      popupMessage.classList.remove("show");
    }, 3500);
  });
}