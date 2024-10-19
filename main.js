var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("side-menu");
var msg = document.getElementById("msg");
window.addEventListener("resize", function () {
  var video = document.getElementById("bgVideo");
  var videoSmall = document.getElementById("bgVideoSmall");

  if (window.innerWidth <= 600) {
    video.style.display = "none"; // Hide large video
    videoSmall.style.display = "block"; // Show small video
  }
  else {
    video.style.display = "block"; // Show large video
    videoSmall.style.display = "none"; // Hide small video
  }
});

// Call it on page load to set the initial state
window.dispatchEvent(new Event("resize"));
//
function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
//


function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

//

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzd1wCFtAL8WW2_cMGKIytLfNDR5OFr_h6bmhdTg9IVAE1lil63_ba5DJg5hhMDVbGJ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});
