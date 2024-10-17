// DOM Elements
const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("list");
const likesList = document.querySelector(".likes");

let count = 0;
let isPaused = false;
let intervalId;
let likeCounts = {}; 

window.addEventListener("DOMContentLoaded", () => {
  startTimer();
});

function startTimer() {
  intervalId = setInterval(() => {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }, 1000);
}

plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

heartBtn.addEventListener("click", () => {
  if (!likeCounts[count]) {
    likeCounts[count] = 1;
  } else {
    likeCounts[count]++;
  }

  const existingLike = document.getElementById(like-${count});
  if (existingLike) {
    existingLike.textContent = ${count} has been liked ${likeCounts[count]} times;
  } else {
    const newLike = document.createElement("li");
    newLike.id = like-${count};
    newLike.textContent = ${count} has been liked 1 time;
    likesList.appendChild(newLike);
  }
});

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(intervalId);
    pauseBtn.textContent = "resume";
    toggleButtons(true);
  } else {
    startTimer();
    pauseBtn.textContent = "pause";
    toggleButtons(false);
  }
});

function toggleButtons(disable) {
  plusBtn.disabled = disable;
  minusBtn.disabled = disable;
  heartBtn.disabled = disable;
}

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = document.createElement("p");
  newComment.textContent = commentInput.value;
  commentsList.appendChild(newComment);
  commentForm.reset();
});