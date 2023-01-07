const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
    console.log( item.scrollLeft);
    if ( item.scrollLeft===0 ) {
      
    }
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const menu_btn = document.querySelector(".berger");
const mobile_menu = document.querySelector(".nav-animation ");

menu_btn.addEventListener("click", function () {
  mobile_menu.classList.toggle("active");
  mobile_menu.classList.remove(".navbar-collapse");
});

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
startCountdown ()

function findJob() {
  const errorJob = document.querySelector(".error-job");
  const errorCat = document.querySelector(".error-cat");
  const errorMsg = document.querySelector(".error-msg");
errorMsg.classList.remove("show-error-msg");
errorCat.classList.remove("show-error-msg");
errorJob.classList.remove("show-error-msg"); 
  var loc = document.getElementById("Location").value;
  var cat = document.getElementById("All_Category").value;
  var job = document.getElementById("Job_Title").value;

  if (loc === "") {
    errorMsg.classList.add("show-error-msg");
    setTimeout(function () {  }, 1000);

  }

  if  (cat === "") {
    errorCat.classList.add("show-error-msg");
    setTimeout(function () { }, 1000);
  }

  if (job === "") {
    errorJob.classList.add("show-error-msg");
    setTimeout(function () {  }, 1000);
  } 



   else {
     
  if(job && loc && cat) {
   
      myModal.show()
 timeRre()
    //    
    //     "https://www.google.com/search?q=i+am+a+" +
    //      job +
    //     "+looking+for+a+" +
    //     cat +
    //     "+position+in+" +
    //     loc;   window.location.href =
  
    }
  }
}

