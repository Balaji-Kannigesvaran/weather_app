var counter = 0;
// Function to increment count
const handleIncrement = () => {
  counter++;
  // totalCount.innerHTML = counter;
  console.log(counter);
};

$(document).ready(function () {
  $('.show').on('click', function() {
    $('.toggle').toggleClass('toggle--show');
  });  
});



 function dropdown(){
    div = document.getElementById("myDiv"); 
   // div.style.display="none";
    div.style.visibility="hidden";
//   console.log("hello world");
//   div = document.getElementById("myDiv");
                
//   div.style.top = parseInt(div.style.top) + 10 + "px";
//   div.style.left = parseInt(div.style.left) + 10 + "px";
 }
document.addEventListener('click', function(e){
  myDiv.style.setProperty('top', e.clientY + 'px');
  myDiv.style.setProperty('left', e.clientX + 'px');
});


// Live Clock Js
var clock = document.getElementById("clock");

function currentTime() {
  clock = document.getElementById("clock");
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
}

setInterval(function () {
  currentTime();
}, 1000);

