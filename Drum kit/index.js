// making click for all
var arr = document.querySelectorAll("button");

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", handleclick);
}

function handleclick() {
  console.log("i got clicked");
  //    var audio = new Audio('sounds/crash.mp3');
  // audio.play();
    playsound(this.innerHTML);
    animationkey(this.innerHTML);
}

function handlepress(){
document.addEventListener("keydown", function (event) {
    var stringkey = event.key
 
  playsound(event.key);
  animationkey(event.key)
});

}
handlepress();



function playsound(target) {
    switch (target) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log("not valid button");
        break;
    }
  }


function animationkey (target){
    var activebtn=document.querySelector(`.${target}`).classList.add("pressed")
    setTimeout(() => {
        document.querySelector(`.${target}`).classList.remove("pressed")
    }, 100);
}
