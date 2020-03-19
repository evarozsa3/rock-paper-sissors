let player = {
  name: "DWIGHT",
  choice: [
    {
      img: "https://gastoniagrizzlies.com/wp-content/uploads/2017/02/Bear-With-Funny-Face-Expression.jpg",
      status: "bears"
    },
    {
      img: "https://pbs.twimg.com/profile_images/490245981481336832/XDWbz6Zb.jpeg",
      status: "beats"
    },
    {
      img: "https://i.pinimg.com/originals/45/f4/3b/45f43b05b4c26ee7d7ea70a94a8fd57f.jpg",
      status: "battlestar"
    }
  ]
}



function playBackRandom() {
  let choiceIndex = Math.floor(Math.random() * player.choice.length)
  let choice = player.choice[choiceIndex]
  document.getElementById('dwightImg').innerHTML = `<img class="img-fluid pl-5 pt-5" src="${choice.img}">`
  return choice
}
function play(choice) {
  let Dwight = playBackRandom()
  console.log(Dwight);
  if (choice == "bears") {
    document.getElementById('jimImg').innerHTML = `<img class="img-fluid pl-5 pt-5"
      src="https://gastoniagrizzlies.com/wp-content/uploads/2017/02/Bear-With-Funny-Face-Expression.jpg"
      alt="">`
  }
  else if (choice == "beats") {
    document.getElementById('jimImg').innerHTML = `<img class="img-fluid pl-5 pt-5"
      src="https://pbs.twimg.com/profile_images/490245981481336832/XDWbz6Zb.jpeg"
      alt="">`
  }
  else if (choice == "battlestar") {
    document.getElementById('jimImg').innerHTML = `<img class="img-fluid pl-5 pt-5"
      src="https://i.pinimg.com/originals/45/f4/3b/45f43b05b4c26ee7d7ea70a94a8fd57f.jpg"
      alt="">`
  }
  if (choice == Dwight.status) {
    // return console.log("draw");
    document.getElementById('conclusion').innerHTML = `<h1>DRAW</h1>`
  }
  else if (choice == "bears" && Dwight.status == "battlestar" || choice == "beats" && Dwight.status == "bears" || choice == "battlestar" && Dwight.status == "beats") {
    // return console.log("you win");
    document.getElementById('conclusion').innerHTML = `<h1>JIM WINS</h1>`
  }
  else {
    // return console.log("you loose");
    document.getElementById('conclusion').innerHTML = `<h1>DWIGHT WINS</h1>`
  }
}

