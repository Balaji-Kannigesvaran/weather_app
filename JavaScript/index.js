var counter = 0;
// Function to increment count
const handleIncrement = () => {
  counter++;
  // totalCount.innerHTML = counter;
  console.log(counter);
};

// $(".toggle-btn").on("click", function () {
//   console.log("clicked the button");
//   $(".visibility").toggleClass(".hide");
// });

// mockapi call

const AIR_KEY = "427f7ef80457a39a26407e17ef0d604339190901";
const API_KEY = "20a36f8e1152244bbbd9ac296d3640f2";
const lat = 44.34;
const log = 10.99;
var aqi = "";
var sunrise = "";

fetch(`https://api.waqi.info/feed/geo:${lat};${log}/?token=${AIR_KEY}`)
  .then((res) => res.json())
  .then((res) => {
    aqi = res.data.aqi;
    document.getElementById("aqi").innerText = aqi;

    if (aqi >= 0 && aqi <= 50) {
      document.querySelector("#air_quality_status").innerText = `Good`;
    }

    console.log("aqi is =" + aqi);
    console.log(res);
  });

fetch  

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
