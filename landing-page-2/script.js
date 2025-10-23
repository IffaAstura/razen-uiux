const form = document.querySelector(".booking-form");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closePopup = document.getElementById("close-popup");
const subscribeBtn = document.getElementById("subscribe-btn");
const subscribeEmail = document.getElementById("subscribe-email");
const menuButtons = document.querySelectorAll(".display-btn");
const menuLists = document.querySelectorAll(".display-list");

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

subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = subscribeEmail.value.trim();

  if (!email) {
    popup.querySelector("h2").textContent = "Error!";
    popupMessage.innerHTML = `⚠️ Please enter your email before subscribing.`;
  } else {
    popup.querySelector("h2").textContent = "Subscription Confirmed!";
    popupMessage.innerHTML = `
      Thank you for subscribing!<br>
      We’ll send updates to <span style="color:#f5b301">${email}</span>.
    `;
    subscribeEmail.value = "";
  }

  popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    menuLists.forEach((list) => {
      if (list.dataset.category === btn.dataset.category) {
        list.classList.remove("hidden");
      } else {
        list.classList.add("hidden");
      }
    });
  });
});
