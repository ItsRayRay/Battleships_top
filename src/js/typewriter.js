var i = 0;
var txt = "Lets Play Battleship! What's your name?"; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

export default function typeWriter() {

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    // if text is typing play sound
    if (
      txt.charAt(i) === " " ||
      txt.charAt(i) === "!" ||
      txt.charAt(i) === "." ||
      txt.charAt(i) === "?"
    ) {
      var audio = new Audio(
        "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
      );
      audio.play();
    }
  }

}
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
const modal = document.createElement("div");
modal.classList.add("nes-container", "is-rounded", "is-dark");
modal.id = "startscreen";
const nesContainerWIthTitle = document.createElement("div");
nesContainerWIthTitle.classList.add("nes-container", "with-title");
const nesInner = document.createElement("div");
nesInner.classList.add("nes-inner");
const p = document.createElement("p");
p.id = "demo";
const nesInput = document.createElement("div");
nesInput.classList.add("nes-input");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
const a = document.createElement("a");
a.classList.add("nes-btn");
a.href = "#";
a.innerHTML = "Start Game";

body.appendChild(container);
container.appendChild(modal);
modal.appendChild(nesContainerWIthTitle);
nesContainerWIthTitle.appendChild(nesInner);
nesInner.appendChild(p);
nesInner.appendChild(nesInput);
nesInput.appendChild(input);
nesInput.appendChild(a);

a.addEventListener("click", getPlayerName,);

function getPlayerName() {
  const name = input.value;
  console.log(name)
  return name
} 



a.addEventListener("click", function() {
  modal.style.display = "none";
  typeWriter();
})


//modal.style.display = "none";