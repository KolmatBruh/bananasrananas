money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
upown = 0;
catown = 0;
workerown = 0;
catadd = 1;
workadd = 15;
cboost = 1;
wboost = 1;
catmax = 0;
workmax = 0;
wantedtoreset = 0;


// Function to navigate to the main menu
function goToMain() {
  window.location.href = 'index.html'; // Redirect to index.html
}

function closingCode() {
  if (confirm("You have closed the window, would you like to save?") === true) {
    save();
    return null;
  }
}

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//updates all values
function reloadall() {

 document.getElementById("total").innerHTML = 
      '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' + 
      ": " + addcomma(money);
  document.getElementById("click").innerHTML =
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    "/click: " + addcomma(moneyup) + " | " +
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    "/sec: " + addcomma(msec);

  document.getElementById("cat").innerHTML =
    catown + "-banana farmer: " + addcomma(catcost) + " | +" + addcomma(catadd) + "/sec";
    
  document.getElementById("worker").innerHTML =
    workerown + "-premium banana farmer: " + addcomma(workercost) + " | +" + addcomma(workadd) + "/sec";
    
  document.getElementById("upgrade").innerHTML =
    addcomma(upown) + "-manual labour upgrade: " + addcomma(upcost);
}


//overwrites save file


function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("catcost", catcost);
  localStorage.setItem("catadd", catadd);
  localStorage.setItem("workercost", workercost);
  localStorage.setItem("workadd", workadd);
  localStorage.setItem("catown", catown);
  localStorage.setItem("workerown", workerown);
  localStorage.setItem("upown", upown);
  localStorage.setItem("cboost", cboost);
  localStorage.setItem("wboost", wboost);
  localStorage.setItem("catmax", catmax);
  localStorage.setItem("workmax", workmax);
  localStorage.setItem("wantedtoreset", wantedtoreset);
}
//loads save file
function load() {
  money = parseInt(localStorage.getItem("money")) || 0;
  moneyup = parseInt(localStorage.getItem("moneyup")) || 1;
  msec = parseInt(localStorage.getItem("msec")) || 0;
  upcost = parseInt(localStorage.getItem("upcost")) || 15;
  catcost = parseInt(localStorage.getItem("catcost")) || 25;
  workercost = parseInt(localStorage.getItem("workercost")) || 250;
  catown = parseInt(localStorage.getItem("catown")) || 0;
  workerown = parseInt(localStorage.getItem("workerown")) || 0;
  upown = parseInt(localStorage.getItem("upown")) || 0;
  catadd = parseInt(localStorage.getItem("catadd")) || 1;
  workadd = parseInt(localStorage.getItem("workadd")) || 15;
  cboost = parseInt(localStorage.getItem("cboost")) || 1;
  wboost = parseInt(localStorage.getItem("wboost")) || 1;
  catmax = parseInt(localStorage.getItem("catmax")) || 0;
  workmax = parseInt(localStorage.getItem("workmax")) || 0;
  wantedtoreset = parseInt(localStorage.getItem("wantedtoreset")) || 0;

  reloadall();
}


//resets all values
function reset() {
  if (confirm("Are you sure you want to reset?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    catcost = 25;
    workercost = 250;
    catown = 0;
    workerown = 0;
    upown = 0;
    catadd = 1;
    workadd = 15;
    wantedtoreset = 0
    reloadall();
  }
}

function clearData() {
  console.log("Clear function called"); // Debugging line
  if (confirm("This will clear EVERYTHING, including the loaded save and the saved file. Are you sure you want to FULLY reset?") === true) {
    // Reset in-memory variables
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    catcost = 25;
    catadd = 1;
    workercost = 250;
    workadd = 15;
    catown = 0;
    workerown = 0;
    upown = 0;
    cboost = 1;
    wboost = 1;
    catmax = 0;
    workmax = 0;
    wantedtoreset = 0;

    // Clear localStorage
    localStorage.clear(); // This clears all local storage
    // or you can keep the specific items like before

    // Update the UI
    reloadall();
  }
}

function win() {
  if (wantedtoreset == 0) {
    if (confirm("You win! Do you want to reset?") === true) { // Correct
      reset();
    } else {
      wantedtoreset = 1;
    }
  }
}
//timer
function myTimer() {
    money += msec;
     document.getElementById("total").innerHTML = 
      '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' + 
      ": " + addcomma(money);

    if (upown > 49 && catown > 49 && workerown > 49) {
        win();
    }
}

setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  money += moneyup;
     document.getElementById("total").innerHTML = 
      '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' + 
      ": " + addcomma(money);

}
//upgrade function
function upgrade(name) {
  if (name == "clicker cat") {
    if (money >= catcost && catown < 50) {
      
      if (catown <= 13) {
        msec += catadd;
        catadd++;
        cboost = 1;
      } else if (catown == 14) {
        msec += catadd;
        catadd++;
        cboost = 200;
      } else if (catown <= 23) {
        msec += 200 * catadd;
        catadd++;
        cboost = 200;
      } else if (catown == 24) {
        msec += 200 * catadd;
        catadd++;
        cboost = 5000;
      } else if (catown <= 48) {
        msec += 5000 * catadd;
        catadd++;
        cboost = 5000;
      } else if (catown == 49) {
        msec += 5000 * catadd;
        catadd++;
        cboost = 15000;
      } else {
        msec += 15000 * catadd;
        catadd++;
        cboost = 15000;
      }
      catown += 1;
      money -= catcost;
      catcost = catcost * 2;
      document.getElementById("cat").innerHTML =
        catown + "-banana farmer: " + addcomma(catcost) + " | +" + addcomma(catadd * cboost) + "/sec";
    } else if (catown == 50) {
      document.getElementById("cat").innerHTML =
        catown + "-banana farmer: MAX | +15% click/sec";
    }
  }

  if (name == "worker") {
    if (money >= workercost && workerown < 50) {
      
      if (workerown <= 13) {
        msec += workadd;
        workadd++;
        wboost = 1;
      } else if (workerown == 14) {
        msec += workadd;
        workadd++;
        wboost = 200;
      } else if (workerown <= 23) {
        msec += 200 * workadd;
        workadd++;
        wboost = 200;
      } else if (workerown == 24) {
        msec += 200 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown <= 48) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown == 49) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 15000;
      } else {
        msec += 15000 * workadd;
        workadd++;
        wboost = 15000;
      }
      workerown += 1;
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = 
        workerown + "-premium banana farmer: " + addcomma(workercost) + " | +" + addcomma(workadd * wboost) + "/sec";
    } else if (workerown == 50) {
      document.getElementById("worker").innerHTML =
        workerown + "-premium banana farmer: MAX | +35% click/sec";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-manual labour upgrade: " + addcomma(upcost);
      if (catown == 50) {
        msec -= catmax;
        catmax = Math.floor(moneyup * 0.15);
        msec += catmax;
      }
      
      if (workerown == 50) {
        msec -= workmax;
        workmax = Math.floor(moneyup * 0.35);
        msec += workmax;
      }
    }
  }

document.getElementById("click").innerHTML =
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    "/click: " + addcomma(moneyup) + " | " +
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    "/sec: " + addcomma(msec);

  document.getElementById("total").innerHTML =
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    ": " + addcomma(money);

}


