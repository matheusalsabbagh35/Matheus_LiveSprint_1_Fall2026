// LiveSprint 1 JavaScript //

// The Cat image reveal and hide
document.getElementById("cat-btn").addEventListener("click", function () {
  document.getElementById("cat-result").hidden = false;
});

document.getElementById("cat-hide").addEventListener("click", function () {
  document.getElementById("cat-result").hidden = true;
});

// The Dog image reveal and hide
document.getElementById("dog-btn").addEventListener("click", function () {
  document.getElementById("dog-result").hidden = false;
});

document.getElementById("dog-hide").addEventListener("click", function () {
  document.getElementById("dog-result").hidden = true;
});

// The Cow image reveal and hide
document.getElementById("cow-btn").addEventListener("click", function () {
  document.getElementById("cow-result").hidden = false;
});

document.getElementById("cow-hide").addEventListener("click", function () {
  document.getElementById("cow-result").hidden = true;
});
