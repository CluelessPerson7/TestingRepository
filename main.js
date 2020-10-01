var userName = prompt("Start your journey with a name");
var classList = ["Bruiser", "Mage", "Marksman", "Assassin", "Tank", "Enchanter"]
console.log("Hello " + userName + "!");
console.log("Pick a class");
var userClass = prompt(classList);
if (
  userClass === userClass[0] || 
  userClass === userClass[1] || 
  userClass === userClass[2] || 
  userClass === userClass[3] ||
  userClass === userClass[4] ||
  userClass === userClass[5]
) {
  console.log("Congratulations on picking your class! You are now a " + userClass);
} else {
  while (
    userClass != userClass[0] || 
    userClass != userClass[1] || 
    userClass != userClass[2] || 
    userClass != userClass[3] ||
    userClass != userClass[4] ||
    userClass != userClass[5]
  ) {
  console.log("That's not a class! Pick again.");
  userClass = prompt(classList);
  }
}

if (userClass = "Bruiser") {
  var classInfo = {
  strength: 20,
  dexterity: 20,
  intelligence: 20,
  arcana: 20,
  charisma: 20,
  skills: {
    smash: {
      damage: [15, 25, 35, 45, 55],
      mana: [10, 15, 20, 25, 30]
    }
    charge: {
      damage: [30, ],
      mana: []
    }
  }
  }
}

var storyNumber = Math.random(1, 4);
if (storyNumber = 1) {
  // Story #1 is a prison escape
  console.log("")
}
