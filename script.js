document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // EMAIL SUBSCRIBE
  // ======================
  window.notifyUser = function () {
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const button = document.getElementById("notifyBtn");

    if (email.value === "" || !email.value.includes("@")) {
      message.style.color = "red";
      message.textContent = "Please enter a valid email address.";
      return;
    }

    button.disabled = true;
    button.textContent = "Joining...";

    setTimeout(() => {
      button.textContent = "Joined ✓";
      message.style.color = "green";
      message.textContent =
        "You’re on the waitlist. We’ll notify you soon.";
    }, 1500);
  };

  // ======================
  // COUNTDOWN TIMER
  // ======================
  const launchDate = new Date("2026-03-01").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff < 0) return;

    document.getElementById("days").innerText =
      Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText =
      Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").innerText =
      Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").innerText =
      Math.floor((diff / 1000) % 60);
  }, 1000);

  // ======================
  // SCROLL REVEAL
  // ======================
  const reveals = document.querySelectorAll(".reveal");

  function revealSections() {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add("active");
      }
    });
  }

  // show on load
  revealSections();

  // show on scroll
  window.addEventListener("scroll", revealSections);

});
