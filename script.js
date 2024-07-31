// ----------  Mobile Navbar ---------------

function toggleNav() {
  var navLists = document.getElementById("nav-lists-2");
  var body = document.getElementById("body");

  if (navLists.style.display === "block") {
    navLists.style.display = "none";
  } else {
    navLists.style.display = "block";
    body.style.overflowY = "visible";
  }
}

function menuclsbtn() {
  var navLists = document.getElementById("nav-lists-2");
  navLists.style.display = "none";
  body.style.overflowY = "none";
}

// -------------  Download Resume ------------

document.addEventListener("DOMContentLoaded", function () {
  var downloadButtons = document.getElementsByClassName("downloadResume");

  for (var i = 0; i < downloadButtons.length; i++) {
    downloadButtons[i].addEventListener("click", function () {
      var resumeUrl = "resume/vijay sudhakar resume.pdf";
      var downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download = "vijay sudhakar resume.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var eduExpContainer = document.getElementById("EduandExp");
  var education = document.querySelector(".education");
  var experience = document.querySelector(".experience");

  if (isInViewport(eduExpContainer)) {
    // Add class to trigger animation
    education.classList.add("active");
    experience.classList.add("active");
    // Remove event listener to avoid unnecessary checks
    window.removeEventListener("scroll", handleScroll);
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
