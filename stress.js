money = 10;
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
paused = false;

maththinghaha = 4;
maththinghaha2 = 0
maththinghaha3 = 0

// Function to navigate to the main menu
function goToMain() {
  window.location.href = 'index.html'; // Redirect to index.html
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
    "/sec: -" + addcomma(moneyup * 2);

  document.getElementById("cat").innerHTML =
    catown + "-debt: " + addcomma(catcost);
    
  document.getElementById("worker").innerHTML =
    workerown + "-taxes: " + addcomma(workercost);
    
document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-manual labour upgrade: " + addcomma(upcost) + " | next upgrade you will lose " + addcomma(maththinghaha3) + "/sec";
}

function death() {
	paused = true;
 if (confirm("you died lol") === true) {
	 paused = false;
    money = 10;
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
  } else {
	  paused = false;
	    money = 10;
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


//resets all values
function reset() {
	paused = true;
  if (confirm("Are you sure you want to reset?") === true) {
	  paused = false;
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

function win() {
  if (wantedtoreset == 0) {
	paused = true
    if (confirm("You paid your debt and taxes! Do you want to reset?") === true) { // Correct
      reset();
    } else {
	  paused = false
      wantedtoreset = 1;
    }
  }
}
//timer
function myTimer() {
	if (paused === false) {
	    money -= moneyup * 2
	}
	document.getElementById("total").innerHTML = 
      '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' + 
      ": " + addcomma(money);
    if (money <= 0) {
	  death()
    } 
    if (upown > 49 && catown > 49 && workerown > 49) {
        win();
    }
}

setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  if (paused === false) {
  money += moneyup;
     document.getElementById("total").innerHTML = 
      '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' + 
      ": " + addcomma(money);
  }
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
        catown + "-debt: " + addcomma(catcost);
    } else if (catown == 50) {
      document.getElementById("cat").innerHTML =
        catown + "-debt: MAX";
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
        workerown + "-taxes: " + addcomma(workercost);
    } else if (workerown == 50) {
      document.getElementById("worker").innerHTML =
        workerown + "-taxes: PAID";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
 const increase = upcost / 15; // How much moneyup will increase
    moneyup += increase;           // Update moneyup
    money -= upcost;               // Deduct money
    upown += 1;                    // Increment upgrade ownership
    upcost *= 5;                   // Increase the upgrade cost

    // Update maththinghaha and maththinghaha3
    maththinghaha = increase;                // Current increase
    maththinghaha2 = moneyup;                // Updated moneyup
    maththinghaha3 = (moneyup + (upcost / 15)) * 2;

      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-manual labour upgrade: " + addcomma(upcost) + " | next upgrade you will lose " + addcomma(maththinghaha3) + "/sec";
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
    "/sec: -" + addcomma(moneyup * 2);

  document.getElementById("total").innerHTML =
    '<img src="bananapicturelol.jpg" width="30" alt="bananas" style="vertical-align: middle;"/> ' +
    ": " + addcomma(money);

}


