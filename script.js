var lines = [
  "Hi Teacher Hazar! I’m a crepe, and Leyla sent me because she’s too embarrassed to say this out loud.",
  "First, thank you for your kind message. She read it about 12 times. I counted. I’m a crepe, I have nothing else to do.",
  "She’s sorry her joke came at the wrong moment. She never meant to interrupt your lesson, and she’s willing to fix anything you think she should.",
  "She heard you: jokes are welcome, as long as they don’t interrupt the material. So no, she’s not turning into a serious crepe.",
  "She really cares about your class. It’s where coding started to make sense to her.",
  "She respects you, and she genuinely admires your bright personality. She also says you’re the best coding teacher she’s had. Glazed, but true.",
  "Thank you for believing in her. She says there’s no pressure about your high expectations. I say there’s a little pressure.",
  "Her promise: jokes only at the right moment, full attention when you explain, and homework done on time. Or at least done.",
  "Thank you for your patience, Teacher Hazar. I heard you like crepes, so I’m extra nervous right now.",
  "So... are we good? Please say yes. I’m getting cold."
];
var moods = ["happy", "happy", "nervous", "happy", "happy", "happy", "nervous", "happy", "nervous", "sad"];

var i = 0;
var crepe = document.getElementById("crepe");
var text = document.getElementById("text");
var next = document.getElementById("next");
var end = document.getElementById("end");
var gift = document.getElementById("gift");
var box = document.getElementById("box");
var hint = document.getElementById("hint");
var prize = document.getElementById("prize");
var reply = document.getElementById("reply");

function show() {
  text.textContent = lines[i];
  crepe.className = moods[i] + " hop";
  setTimeout(function () { crepe.classList.remove("hop"); }, 300);
}
show();
next.onclick = function () {
  i = i + 1;
  show();
  if (i == lines.length - 1) {
    next.hidden = true;
    end.hidden = false;
  }
};
document.getElementById("yes").onclick = function () {
  text.textContent = "Yay! Thank you, Teacher Hazar! 🥞💛";
  crepe.className = "happy hop";
  end.hidden = true;
  gift.hidden = false;
  reply.hidden = false;
  confetti();
};
document.getElementById("wait").onclick = function () {
  text.textContent = "No problem. I’ll wait. I’m a crepe, I have all day.";
};

var taps = 0;
box.onclick = function () {
  taps = taps + 1;
  box.className = "shake";
  setTimeout(function () { box.className = ""; }, 300);
  if (taps == 1) hint.textContent = "It’s stuck. Again!";
  if (taps == 2) hint.textContent = "Almost there... one more!";
  if (taps == 3) {
    gift.hidden = true;
    prize.hidden = false;
    confetti();
  }
};

function confetti() {
  var icons = ["🥞", "💖", "🍓", "🙌"];
  for (var k = 0; k < 30; k++) {
    var s = document.createElement("span");
    s.className = "fall";
    s.textContent = icons[k % 4];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() + "s";
    document.body.appendChild(s);
  }
}