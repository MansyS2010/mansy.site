function hidepanel() {
  var x = document.getElementById("sidePanel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}