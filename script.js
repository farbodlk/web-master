const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
const menu_btn = document.querySelector(".berger");
const mobile_menu = document.querySelector(".nav-animation ");
const search = {};
const errorJob = document.querySelector(".error-job");
const errorCat = document.querySelector(".error-cat");
const errorMsg = document.querySelector(".error-msg");
productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
    console.log(item.scrollLeft);
    if (item.scrollLeft === 0) {
    }
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

menu_btn.addEventListener("click", function () {
  mobile_menu.classList.toggle("active");
  mobile_menu.classList.remove(".navbar-collapse");
});

function findJob() {
  errorMsg.classList.remove("show-error-msg");
  errorCat.classList.remove("show-error-msg");
  errorJob.classList.remove("show-error-msg");
  var loc = document.getElementById("Location").value;
  var cat = document.getElementById("All_Category").value;
  var job = document.getElementById("Job_Title").value;

  if (loc === "") {
    errorMsg.classList.add("show-error-msg");
    setTimeout(function () {}, 1000);
  }

  if (cat === "") {
    errorCat.classList.add("show-error-msg");
    setTimeout(function () {}, 1000);
  }

  if (job === "") {
    errorJob.classList.add("show-error-msg");
    setTimeout(function () {}, 1000);
  } else {
    if (job && loc && cat) {
      myModal.show();
      delayRedirect(job, cat, loc);
    }
  }
}

function delayRedirect(j, c, l) {
  var seconds = 5;

  var lblCount = document.getElementById("lblCount");

  lblCount.innerHTML = seconds;

  page = setInterval(function () {
    seconds--;
    lblCount.innerHTML = seconds;
    if (seconds == 0) {
      window.location.href =
        "https://www.google.com/search?q=i+am+a+" +
        j +
        "+looking+for+a+" +
        c +
        "+position+in+" +
        l;
    }
  }, 1000);
}
const myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", (event) => {
  clearInterval(page);
});
