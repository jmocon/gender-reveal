// Scale the invitation card to fit the screen, so the page never scrolls
(function () {
  var card = document.querySelector(".card");
  if (!card) return;
  var root = document.documentElement;
  var gutter = 16;

  function fit() {
    var w = card.offsetWidth;
    var h = card.offsetHeight;
    if (!w || !h) return;
    var s = Math.min((window.innerWidth - gutter * 2) / w, (window.innerHeight - gutter * 2) / h);
    root.style.setProperty("--fit", Math.max(s, 0.1).toFixed(4));
  }

  root.classList.add("fit");
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", fit);
  window.addEventListener("load", fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();

// Countdown to Saturday, December 12, 2026, 5:00 PM Philippine time (UTC+8)
(function () {
  var el = document.getElementById("countdown");
  if (!el) return;

  var start = new Date("2026-12-12T17:00:00+08:00");
  var end = new Date("2026-12-12T23:59:59+08:00");

  function update() {
    var now = new Date();
    if (now > end) {
      el.textContent = "Thank you for celebrating with us!";
      return;
    }
    var ms = start - now;
    if (ms <= 0) {
      el.textContent = "Today's the day!";
      return;
    }
    var days = Math.floor(ms / 86400000);
    var hours = Math.floor((ms % 86400000) / 3600000);
    if (days >= 1) {
      el.textContent = days + (days === 1 ? " day" : " days") + " to go";
    } else {
      el.textContent = hours <= 0 ? "Starting soon!" : hours + (hours === 1 ? " hour" : " hours") + " to go";
    }
  }

  update();
  setInterval(update, 60000);
})();
