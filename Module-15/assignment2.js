//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  //Validation
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  // Validation
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeight = 0;
  for (const weight of weights) {
    if (typeof weight !== "number") {
      return "Invalid";
    }
    totalWeight += weight;
  }

  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  // Validation
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  const freeToken = 500;

  const extraUsedToken = tokensUsed - freeToken;

  const extraCost = Math.floor(extraUsedToken / 100) * 5;

  if (tokensUsed <= 500) {
    return 0;
  } else {
    return extraCost;
  }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
  // Validation
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let highRatedRestaurant = restaurants[0];

  for (const restaurant of restaurants) {
    if (
      typeof restaurant.name !== "string" ||
      typeof restaurant.rating !== "number"
    ) {
      return "Invalid";
    }
    if (restaurant.rating > highRatedRestaurant.rating) {
      highRatedRestaurant = restaurant;
    }
  }
  return highRatedRestaurant.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total = total + times[i];
  }

  return total / times.length;
}
