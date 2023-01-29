var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount1 = localStorage.getItem("page_view1");

// Check if page_view entry is present
if (visitCount1) {
  visitCount1 = Number(visitCount1) + 1;
  localStorage.setItem("page_view1", visitCount1);
} else {
  visitCount1 = 1;
  localStorage.setItem("page_view1", 1);
}
counterContainer.innerHTML = visitCount1;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount1 = 1;
  localStorage.setItem("page_view1", 1);
  counterContainer.innerHTML = visitCount1;
});