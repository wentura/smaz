function toggleMenu() {
  var x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    // let y = document.getElementById("carousel");
    // y.style.visibility = "hidden";
    x.style.display = "block";
  }
}
console.log("toggle loaded");
