var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

// function executes and then stops at a certain condition
setInterval( () => {

  if (count < 1000) {
    count++;
    counter.innerText = count
  }
}, 1)