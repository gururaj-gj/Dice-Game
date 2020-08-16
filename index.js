var randomnumber = Math.floor(Math.random() * 6) + 1;
var getimage = "images/dice" + randomnumber + ".png";
var images = document.querySelectorAll("img")[0];
images.setAttribute("src", getimage);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var getimage = "images/dice" + randomnumber2 + ".png";
var images = document.querySelectorAll("img")[1];
images.setAttribute("src", getimage);

if (randomnumber > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomnumber < randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else if (randomnumber === randomnumber2) {
  document.querySelector("h1").innerHTML = "You both are same";
}
