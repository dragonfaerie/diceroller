function diceRoller() {
  var diceType = document.forms["formA"]["diceType"].value;
  var numDice = document.forms["formA"]["numDice"].value;
  var diceRoll;
  var totalRoll = 0;
  var rollText = "";
  document.forms["formB"]["indResult"].value = "";
  document.forms["formB"]["totResult"].value = "";

  for (var i = 0; i < numDice; i++) {
    diceRoll = 1 + Math.round(diceType * Math.random());
    if (diceRoll > diceType) {
      diceRoll = diceRoll - 1;
    }

    if (rollText == "") {
      rollText = rollText + diceRoll;
    } else {
      rollText = rollText + ", " + diceRoll;
    }
    totalRoll = totalRoll + diceRoll;
  }

  document.forms["formB"]["indResult"].value = rollText;
  document.forms["formB"]["totResult"].value = totalRoll;
}
