"use strict";


const days = document.querySelector(`.days`);
const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);
const countDownDisplay = document.querySelector(`.inline`);
const expiredTitle = document.querySelector(`.expired`);


countDownDisplay.classList.remove(`hidden`);

let countDownDate = new Date("May 2, 2024 12:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;

  if(distance < 0){
    clearInterval(x);
    countDownDisplay.classList.add(`hidden`);
    expiredTitle.classList.remove(`hidden-2`);
  }
  
}, 1000);