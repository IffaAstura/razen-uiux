const form = document.querySelector(".booking-form");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const date = form.querySelector('input[type="date"]').value.trim();
  const time = form.querySelector("select").value;
  const seats = form.querySelectorAll("select")[1].value;
  const message = form.querySelector("textarea").value.trim();

  if (!name || !phone || !email || !date || !time || !seats) {
    alert("⚠️ Please fill in all data first!");
    return;
  }

  popupMessage.innerHTML = `
    Thank you, <span style="color:#f5b301">${name}</span>!<br><br>
    Your reservation has been received.<br><br>
    📅 <b>${date}</b> — ⏰ <b>${time}</b><br>
    👥 ${seats} seats<br><br>
    We will contact you at:<br>
    <span style="color:#f5b301">${email}</span>
  `;

  popup.classList.remove("hidden");

  form.reset();
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});