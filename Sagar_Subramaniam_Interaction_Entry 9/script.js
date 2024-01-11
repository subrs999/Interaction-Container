let farmCrops = 0;
let digWater = 0;
let mine = 0;
let animals = 0;
let buildings = 0;
let machines = 0;
let food = 0;
let procreation = 0;

let intervalFarm = null;
let intervalWater = null;
let intervalMine = null;
let intervalAnimals = null;
let intervalBuildings = null;
let intervalFood = null;
let intervalMachines = null;
let intervalProcreation = null;

function startFarming() {
  intervalFarm = setInterval(function() {
    if (digWater > 0) {
      digWater--;
      farmCrops++;
      document.getElementById('digWater').innerText = digWater;
      document.getElementById('farmCrops').innerText = farmCrops;
    }
  }, 100);
}

function stopFarming() {
  clearInterval(intervalFarm);
  intervalFarm = null;
}

function startDigging() {
  intervalWater = setInterval(function() {
    digWater++;
    document.getElementById('digWater').innerText = digWater;
  }, 100);
}

function stopDigging() {
  clearInterval(intervalWater);
  intervalWater = null;
}

function startMining() {
  intervalMine = setInterval(function() {
    mine++;
    document.getElementById('mine').innerText = mine;
  }, 100);
}

function stopMining() {
  clearInterval(intervalMine);
  intervalMine = null;
}

function startHavingAnimals() {
  intervalAnimals = setInterval(function() {
    if (digWater > 0 && farmCrops > 0) {
      digWater--;
      farmCrops--;
      animals++;
      document.getElementById('digWater').innerText = digWater;
      document.getElementById('farmCrops').innerText = farmCrops;
      document.getElementById('animals').innerText = animals;
    }
  }, 100);
}

function stopHavingAnimals() {
  clearInterval(intervalAnimals);
  intervalAnimals = null;
}

function startBuilding() {
  intervalBuildings = setInterval(function() {
    if (mine > 0) {
      mine--;
      buildings++;
      document.getElementById('mine').innerText = mine;
      document.getElementById('buildings').innerText = buildings;
    }
  }, 100);
}

function stopBuilding() {
  clearInterval(intervalBuildings);
  intervalBuildings = null;
}

function startEating() {
  intervalFood = setInterval(function() {
    if (animals > 0 && farmCrops > 0) {
      animals--;
      farmCrops--;
      food++;
      document.getElementById('animals').innerText = animals;
      document.getElementById('farmCrops').innerText = farmCrops;
      document.getElementById('food').innerText = food;
    }
  }, 100);
}

function stopEating() {
  clearInterval(intervalFood);
  intervalFood = null;
}

function startGettingMachines() {
  intervalMachines = setInterval(function() {
    if (buildings > 0 && mine > 0) {
      buildings--;
      mine--;
      machines++;
      document.getElementById('buildings').innerText = buildings;
      document.getElementById('mine').innerText = mine;
      document.getElementById('machines').innerText = machines;
    }
  }, 100);
}

function stopGettingMachines() {
  clearInterval(intervalMachines);
  intervalMachines = null;
}

function startProcreation() {
  intervalProcreation = setInterval(function() {
    if (digWater > 0 && buildings > 0 && animals > 0 && farmCrops > 0) {
      digWater--;
      buildings--;
      animals--;
      farmCrops--;
      procreation++;
      document.getElementById('digWater').innerText = digWater;
      document.getElementById('buildings').innerText = buildings;
      document.getElementById('animals').innerText = animals;
      document.getElementById('farmCrops').innerText = farmCrops;
      document.getElementById('procreation').innerText = procreation;
    }
  }, 100);
}

function stopProcreation() {
  clearInterval(intervalProcreation);
  intervalProcreation = null;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    if (intervalFarm === null && digWater > 0) {
      startFarming();
      stopDigging();
      stopMining();
      stopHavingAnimals();
      stopBuilding();
      stopEating();
      stopGettingMachines();
      stopProcreation();
      digWater--; // Decrement water for farming crops
      document.getElementById('digWater').innerText = digWater;
    }
  }

  if (event.key === 'w' || event.key === 'W') {
    if (intervalWater === null) {
      startDigging();
      stopFarming();
      stopMining();
      stopHavingAnimals();
      stopBuilding();
      stopEating();
      stopGettingMachines();
      stopProcreation();
    }
  }

  if (event.key === 'm' || event.key === 'M') {
    if (intervalMine === null) {
      startMining();
      stopFarming();
      stopDigging();
      stopHavingAnimals();
      stopBuilding();
      stopEating();
      stopGettingMachines();
      stopProcreation();
    }
  }

  if (event.key === 'a' || event.key === 'A') {
    if (intervalAnimals === null && digWater > 0 && farmCrops > 0) {
      startHavingAnimals();
      stopFarming();
      stopDigging();
      stopMining();
      stopBuilding();
      stopEating();
      stopGettingMachines();
      stopProcreation();
      digWater--; // Decrement water for having animals
      farmCrops--; // Decrement crops for having animals
      document.getElementById('digWater').innerText = digWater;
      document.getElementById('farmCrops').innerText = farmCrops;
    }
  }

  if (event.key === 'b' || event.key === 'B') {
    if (intervalBuildings === null && mine > 0) {
      startBuilding();
      stopFarming();
      stopDigging();
      stopMining();
      stopHavingAnimals();
      stopEating();
      stopGettingMachines();
      stopProcreation();
      mine--; // Decrement minerals for building
      document.getElementById('mine').innerText = mine;
    }
  }

  if (event.key === 'e' || event.key === 'E') {
    if (intervalFood === null && animals > 0 && farmCrops > 0) {
      startEating();
      stopFarming();
      stopDigging();
      stopMining();
      stopHavingAnimals();
      stopBuilding();
      stopGettingMachines();
      stopProcreation();
      animals--; // Decrement animals for eating
      farmCrops--; // Decrement crops for eating
      document.getElementById('animals').innerText = animals;
      document.getElementById('farmCrops').innerText = farmCrops;
    }
  }

  if (event.key === 'x' || event.key === 'X') {
    if (intervalMachines === null && buildings > 0 && mine > 0) {
      startGettingMachines();
      stopFarming();
      stopDigging();
      stopMining();
      stopHavingAnimals();
      stopBuilding();
      stopEating();
      stopProcreation();
      buildings--; // Decrement buildings for machines
      mine--; // Decrement minerals for machines
      document.getElementById('buildings').innerText = buildings;
      document.getElementById('mine').innerText = mine;
    }
  }

  if (event.key === 'p' || event.key === 'P') {
    if (intervalProcreation === null && digWater > 0 && buildings > 0 && animals > 0 && farmCrops > 0) {
      startProcreation();
      stopFarming();
      stopDigging();
      stopMining();
      stopHavingAnimals();
      stopBuilding();
      stopEating();
      stopGettingMachines();
      digWater--; // Decrement water for procreation
      buildings--; // Decrement buildings for procreation
      animals--; // Decrement animals for procreation
      farmCrops--; // Decrement crops for procreation
      document.getElementById('digWater').innerText = digWater;
      document.getElementById('buildings').innerText = buildings;
      document.getElementById('animals').innerText = animals;
      document.getElementById('farmCrops').innerText = farmCrops;
    }
  }
});

document.addEventListener('keyup', function(event) {
  if ((event.key === 'f' || event.key === 'F') && intervalFarm !== null) {
    stopFarming();
  }

  if ((event.key === 'w' || event.key === 'W') && intervalWater !== null) {
    stopDigging();
  }

  if ((event.key === 'm' || event.key === 'M') && intervalMine !== null) {
    stopMining();
  }

  if ((event.key === 'a' || event.key === 'A') && intervalFarm !== null) {
    stopHavingAnimals();
  }

  if ((event.key === 'b' || event.key === 'B') && intervalWater !== null) {
    stopBuilding();
  }

  if ((event.key === 'e' || event.key === 'E') && intervalMine !== null) {
    stopEating();
  }

  if ((event.key === 'x' || event.key === 'X') && intervalFarm !== null) {
    stopGettingMachines();
  }

  if ((event.key === 'p' || event.key === 'P') && intervalWater !== null) {
    stopProcreation();
  }
});
