let player = {
  name: "DWIGHT",
  choice: [
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fbear&psig=AOvVaw3aZQnZOlbsoPAZOday8chv&ust=1584655338050000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi5p6mDpegCFQAAAAAdAAAAABAD",
      status: "bears"
    },
    {
      img: "https://pbs.twimg.com/profile_images/490245981481336832/XDWbz6Zb.jpeg",
      status: "beats"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7wdRInRcJt7LHcV4XVaVTXJ-R22wm8oFTW4JzQ6baRvMUGB9e",
      status: "battlestar"
    }
  ]
}

function playBackRandom() {
  let choiceIndex = Math.floor(Math.random() * player.choice.length)
  let choice = player.choice[choiceIndex]
  return choice
}
function play(choice) {
  let Dwight = playBackRandom()
  console.log(Dwight);


  if (choice == Dwight.status) {
    return console.log("draw");
  }
  if (choice == "bears" && Dwight.status == "battlestar" || choice == "beats" && Dwight.status == "bears" || choice == "battlestar" && Dwight.status == "beats") {
    return console.log("you win");
  }
  return console.log("you loose");
}