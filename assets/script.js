let loadmorebtn = document.querySelector(".loadmorebtn");
let currentItem = 3;
loadmorebtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".cards .card")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
