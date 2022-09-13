let myLis = document.querySelectorAll("li");
experiment = document.querySelector(".experiment");

// add class active when i clicked on li and storage the color
myLis.forEach((elm) => {
  elm.classList.remove("active");
  elm.addEventListener("click", function (e) {
    myLis.forEach((el) => {
      el.classList.remove("active");
    });
    window.localStorage.lastColor = this.getAttribute("data-color");
    experiment.style.backgroundColor = window.localStorage.getItem("lastColor");
    if (
      window.localStorage.getItem("lastColor") ===
      e.target.getAttribute("data-color")
    ) {
      e.target.classList.add("active");
    }
  });
});

experiment.style.backgroundColor = window.localStorage.getItem("lastColor");

function addClassActive() {
  myLis.forEach((e) => {
    if (
      window.localStorage.getItem("lastColor") === e.getAttribute("data-color")
    ) {
      e.classList.add("active");
    }
  });
}

// add class active
window.onload = addClassActive();
