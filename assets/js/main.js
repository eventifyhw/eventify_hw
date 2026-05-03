// Scroll to top button
const scroll_top = document.getElementById("scroll_top");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
});

scroll_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// filter categories button
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".badge-container .card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
      const categories = card.getAttribute("data-category").split(" ");
      if (category === "all" || categories.includes(category)) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  });
});

// Dark mode toggle
const toggleBtn = document.querySelector("#toggle input");
const label = document.querySelector("#toggle label");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.checked = true;
  label.textContent = "🌙";
} else {
  label.textContent = "☀️";
}

toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    label.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    label.textContent = "☀️";
  }
});
