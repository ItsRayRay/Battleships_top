var i = 0;
var txt = "Lets Play Battleship! What's your name?"; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

export default function typeWriter() {



  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    // if text is typing play sound
    if (txt.charAt(i) === ' ' || txt.charAt(i) === '!' || txt.charAt(i) === '.' || txt.charAt(i) === '?')  { 
      var audio = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      audio.play();
    }
  }
}