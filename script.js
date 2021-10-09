const kickIt = document.querySelector(".keypress");
const keyPressed = document.getElementById("keyPressed");

const sound = (key) => {
  const audio = new Audio();
  audio.src = "./sound/" + key + ".mp3";
  audio.play();
};

// Pour la fonction Apply
const inputs = document.querySelectorAll(
  '#keyBindingTableEdit input[type="text"]'
);

let inputsValue = "";
let soundEnabled = true;

//---------- DIALOG ----------//

// Get the dialogBtn
const dialogBtn = document.getElementById("dialogBtn");

// Get the dialogAlert
const dialogAlert = document.getElementById("dialogAlert");

//---------- MODAL ----------//

// Get the modal
const modal = document.getElementById("editModal");

// Get the button that opens the modal
const editBtn = document.getElementById("edit");

// When the user clicks on the button EDIT, open the modal
editBtn.onclick = function () {
  soundEnabled = false;
  modal.style.display = "block";
};

// When the user clicks on cancelEdit button, close the modal
cancelEdit.onclick = function () {
  soundEnabled = true;
  modal.style.display = "none";
};

//---------- SOUND ----------//

document.addEventListener("keypress", (e) => {
  if (soundEnabled == true) {
    keyPressed.textContent = e.key;

    switch (e.key) {
      case leftBass.textContent.toLowerCase():
      case rightBass.textContent.toLowerCase():
        sound("bass");
        break;
      case leftSnare.textContent.toLowerCase():
      case rightSnare.textContent.toLowerCase():
        sound("snare");
        break;
      case leftGhost.textContent.toLowerCase():
      case rightGhost.textContent.toLowerCase():
        sound("ghost");
        break;
      case leftHiHat.textContent.toLowerCase():
      case rightHiHat.textContent.toLowerCase():
        sound("hihatclose");
        break;
      case leftHiHatOpened.textContent.toLowerCase():
      case rightHiHatOpened.textContent.toLowerCase():
        sound("hihatopen");
        break;
      case leftHiHatPress.textContent.toLowerCase():
      case rightHiHatPress.textContent.toLowerCase():
        sound("hihatpress");
        break;
      case leftHighTom.textContent.toLowerCase():
      case rightHighTom.textContent.toLowerCase():
        sound("hightom");
        break;
      case leftMidTom.textContent.toLowerCase():
      case rightMidTom.textContent.toLowerCase():
        sound("midtom");
        break;
      case leftFloorTom.textContent.toLowerCase():
      case rightFloorTom.textContent.toLowerCase():
        sound("floortom");
        break;
      case leftRide.textContent.toLowerCase():
      case rightRide.textContent.toLowerCase():
        sound("ride");
        break;
      case leftLeftCrash.textContent.toLowerCase():
      case rightLeftCrash.textContent.toLowerCase():
        sound("leftcrash");
        break;
      case leftRightCrash.textContent.toLowerCase():
      case rightRightCrash.textContent.toLowerCase():
        sound("rightcrash");
        break;
      case leftChina.textContent.toLowerCase():
      case rightChina.textContent.toLowerCase():
        sound("china");
        break;
      default:
        keyPressed.textContent = "Missed!";
        // sound("fart");
        break;
    }
  } else {
    return;
  }
});

//---------- ResetKeyBinging function ----------//
//---------- pour simplifier la gestion des touches, retirer les touches en dur de l'HTML et jouer le reset au chargement de la page ----------//

resetKeyBinding.onclick = () => {
  dialogBtn.style.display = "block";

  document.getElementById(
    "dialogBtnVarContent"
  ).innerHTML = `<h3>Reset key binding</h3>
  <p>Reset key binding to default?</p>`;

  confirmBtn.onclick = function () {
    leftBass.innerHTML = "F";
    rightBass.innerHTML = "L";

    leftSnare.innerHTML = "B";
    rightSnare.innerHTML = ";";

    leftGhost.innerHTML = "V";
    rightGhost.innerHTML = ":";

    leftHiHat.innerHTML = "D";
    rightHiHat.innerHTML = "M";

    leftHiHatOpened.innerHTML = "S";
    rightHiHatOpened.innerHTML = "ù";

    leftHiHatPress.innerHTML = "Q";
    rightHiHatPress.innerHTML = "";

    leftHighTom.innerHTML = "G";
    rightHighTom.innerHTML = "H";

    leftMidTom.innerHTML = "J";
    rightMidTom.innerHTML = "K";

    leftFloorTom.innerHTML = "N";
    rightFloorTom.innerHTML = ",";

    leftRide.innerHTML = "E";
    rightRide.innerHTML = "P";

    leftLeftCrash.innerHTML = "R";
    rightLeftCrash.innerHTML = "O";

    leftRightCrash.innerHTML = "T";
    rightRightCrash.innerHTML = "I";

    leftChina.innerHTML = "Y";
    rightChina.innerHTML = "U";

    dialogBtn.style.display = "none";

    dialogAlert.style.display = "block";

    document.getElementById(
      "dialogAlertVarContent"
    ).innerHTML = `<h3>Success !</h3>
    <p>The key binding has been reseted!</p>`;

    okBtn.onclick = () => {
      dialogAlert.style.display = "none";
    };
  };

  cancelBtn.onclick = function () {
    dialogBtn.style.display = "none";
  };
};

//---------- ResetEdit function ----------//
//---------- pour simplifier la gestion des touches, déclarer des constantes defaultLeft... ----------//
// Il y a surement une carte à jouer avec inputs.defaultValue)
// document.querySelectorAll('#keyBindingTable input').reset();

resetEdit.onclick = () => {
  dialogBtn.style.display = "block";

  document.getElementById(
    "dialogBtnVarContent"
  ).innerHTML = `<h3>Reset key binding edition</h3>
  <p>Reset key binding edition to default?</p>`;

  confirmBtn.onclick = function () {
    document.getElementById("leftBassEdit").value = "F";
    document.getElementById("rightBassEdit").value = "L";

    document.getElementById("leftSnareEdit").value = "B";
    document.getElementById("rightSnareEdit").value = ";";

    document.getElementById("leftGhostEdit").value = "V";
    document.getElementById("rightGhostEdit").value = ":";

    document.getElementById("leftHiHatEdit").value = "D";
    document.getElementById("rightHiHatEdit").value = "M";

    document.getElementById("leftHiHatOpenedEdit").value = "S";
    document.getElementById("rightHiHatOpenedEdit").value = "ù";

    document.getElementById("leftHiHatPressEdit").value = "Q";
    document.getElementById("rightHiHatPressEdit").value = "";

    document.getElementById("leftHighTomEdit").value = "G";
    document.getElementById("rightHighTomEdit").value = "H";

    document.getElementById("leftMidTomEdit").value = "J";
    document.getElementById("rightMidTomEdit").value = "K";

    document.getElementById("leftFloorTomEdit").value = "N";
    document.getElementById("rightFloorTomEdit").value = ",";

    document.getElementById("leftRideEdit").value = "E";
    document.getElementById("rightRideEdit").value = "P";

    document.getElementById("leftLeftCrashEdit").value = "R";
    document.getElementById("rightLeftCrashEdit").value = "O";

    document.getElementById("leftRightCrashEdit").value = "T";
    document.getElementById("rightRightCrashEdit").value = "I";

    document.getElementById("leftChinaEdit").value = "Y";
    document.getElementById("rightChinaEdit").value = "U";

    dialogBtn.style.display = "none";

    dialogAlert.style.display = "block";

    document.getElementById(
      "dialogAlertVarContent"
    ).innerHTML = `<h3>Success!</h3>
    <p>The key binding edition table has been reseted!</p>`;

    okBtn.onclick = () => {
      dialogAlert.style.display = "none";
    };
  };

  cancelBtn.onclick = function () {
    dialogBtn.style.display = "none";
  };
};

//---------- Apply function ----------//

applyEdit.onclick = () => {
  inputs.forEach((input) => {
    inputsValue += input.value;
  });

  function hasDuplicates(inputsValue) {
    return new Set(inputsValue).size !== inputsValue.length;
  }

  if (hasDuplicates(inputsValue)) {
    dialogAlert.style.display = "block";

    document.getElementById(
      "dialogAlertVarContent"
    ).innerHTML = `<h3>Warning!</h3>
    <p>Please remove dupplicated keys!</p>`;

    okBtn.onclick = () => {
      dialogAlert.style.display = "none";
    };

    inputsValue = "";
    return;
  } else {
    modal.style.display = "none";

    leftBass.innerHTML = document.getElementById("leftBassEdit").value;
    rightBass.innerHTML = document.getElementById("rightBassEdit").value;

    leftSnare.innerHTML = document.getElementById("leftSnareEdit").value;
    rightSnare.innerHTML = document.getElementById("rightSnareEdit").value;

    leftGhost.innerHTML = document.getElementById("leftGhostEdit").value;
    rightGhost.innerHTML = document.getElementById("rightGhostEdit").value;

    leftHiHat.innerHTML = document.getElementById("leftHiHatEdit").value;
    rightHiHat.innerHTML = document.getElementById("rightHiHatEdit").value;

    leftHiHatOpened.innerHTML = document.getElementById(
      "leftHiHatOpenedEdit"
    ).value;
    rightHiHatOpened.innerHTML = document.getElementById(
      "rightHiHatOpenedEdit"
    ).value;

    leftHiHatPress.innerHTML =
      document.getElementById("leftHiHatPressEdit").value;
    rightHiHatPress.innerHTML = document.getElementById(
      "rightHiHatPressEdit"
    ).value;

    leftHighTom.innerHTML = document.getElementById("leftHighTomEdit").value;
    rightHighTom.innerHTML = document.getElementById("rightHighTomEdit").value;

    leftMidTom.innerHTML = document.getElementById("leftMidTomEdit").value;
    rightMidTom.innerHTML = document.getElementById("rightMidTomEdit").value;

    leftFloorTom.innerHTML = document.getElementById("leftFloorTomEdit").value;
    rightFloorTom.innerHTML =
      document.getElementById("rightFloorTomEdit").value;

    leftRide.innerHTML = document.getElementById("leftRideEdit").value;
    rightRide.innerHTML = document.getElementById("rightRideEdit").value;

    leftLeftCrash.innerHTML =
      document.getElementById("leftLeftCrashEdit").value;
    rightLeftCrash.innerHTML =
      document.getElementById("rightLeftCrashEdit").value;

    leftRightCrash.innerHTML =
      document.getElementById("leftRightCrashEdit").value;
    rightRightCrash.innerHTML = document.getElementById(
      "rightRightCrashEdit"
    ).value;

    leftChina.innerHTML = document.getElementById("leftChinaEdit").value;
    rightChina.innerHTML = document.getElementById("rightChinaEdit").value;

    soundEnabled = true;
    inputsValue = "";

    dialogAlert.style.display = "block";

    document.getElementById(
      "dialogAlertVarContent"
    ).innerHTML = `<h3>Success !</h3>
    <p>The new key bindings has been applied!</p>`;

    okBtn.onclick = () => {
      dialogAlert.style.display = "none";
    };
  }
};
