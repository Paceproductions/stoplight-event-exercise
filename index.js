// use CMD + / to write comments
// write out your step-by-step before coding
// write one statement (sometimes less than a line), log, check (repeat all the time)

(function() {
  'use strict';

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  stopButton.addEventListener("click",function () {
    stopLight.classList.toggle("stop")
    console.log("<textContent> bulb on");
  })

  slowButton.addEventListener('click',function () {
    slowLight.classList.toggle("slow");
  })

    goButton.addEventListener("click", function () {
      goLight.classList.toggle("go");
  })

// - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
//- When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

const mouseEnter = function (event) {
  console.log(`Entered ${event.target.textContent} button`);
};

const mouseLeave = function (event) {
  console.log(`Left ${event.target.textContent} button`);
};

stopButton.addEventListener("mouseenter", mouseEnter);
stopButton.addEventListener("mouseleave", mouseLeave);
slowButton.addEventListener("mouseenter", mouseEnter);
slowButton.addEventListener("mouseleave", mouseLeave);
goButton.addEventListener("mouseenter", mouseEnter);
goButton.addEventListener("mouseleave", mouseLeave);


// When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
// When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.



})();
