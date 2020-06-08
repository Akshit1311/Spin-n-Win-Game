const prizes = [
  {
    id: 0,
    msg: "CB BOOK",
  },
  {
    id: 1,
    msg: "CB TSHIRT",
  },
  {
    id: 2,
    msg: "2 EXTRA SPINS",
  },
  {
    id: 3,
    msg: "AMAZON VOUCHER",
  },
  {
    id: 4,
    msg: "50% OFF",
  },
  {
    id: 5,
    msg: "NETFLIX SUBS",
  },
  {
    id: 6,
    msg: "100% OFF",
  },
  {
    id: 7,
    msg: "CB SWAGPACK",
  },
  {
    id: 8,
    msg: "70% OFF",
  },
  {
    id: 9,
    msg: "HARD LUCK",
  },
  {
    id: 10,
    msg: "35% OFF",
  },
  {
    id: 11,
    msg: "3000 CB CREDITS",
  },
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum = Math.random() * 12;
  prizeNum = Math.floor(prizeNum);
  console.log(prizeNum);
  return prizeNum;
}

// console.log(prizeNum);

function removeClass() {
  prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");
  //   document.getElementById("spinner").classList.add("shake");

  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  $(".pop-up-content").fadeIn();

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    document.getElementById("arrow").classList.add("float");
    activeBtn = false;
  }, 2000);

  prizeText = prizes[prize].msg;

  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
  $(".pop-up").fadeIn();
}

function spin() {
  activeBtn = true;
  audio.play();

  //   document.getElementById("spinner").classList.remove("shake");
  document.getElementById("arrow").classList.remove("float");
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;

  setTimeout(removeClass, 5000);
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
