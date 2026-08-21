/*
 * Problem 1 — Wi-Fi Signal Status
 */

const getSignalStatus = (percentage: number): string => {
  if (typeof percentage !== "number" || Number.isNaN(percentage)) {
    return "Invalid Percentage";
  }

  if (percentage >= 0 && percentage <= 25) {
    return "Poor";
  } else if (percentage >= 26 && percentage <= 55) {
    return "Fair";
  } else if (percentage >= 56 && percentage <= 85) {
    return "Good";
  } else if (percentage <= 100) {
    return "Excellent";
  }

  return "Invalid percentage";
};

// console.log(getSignalStatus(15))
// console.log(getSignalStatus(40))
// console.log(getSignalStatus(70))
// console.log(getSignalStatus(95))
// // Edge case. Boundary number check
// console.log(getSignalStatus(25))
// console.log(getSignalStatus(55))
// console.log(getSignalStatus(85))
// console.log(getSignalStatus(77))

/*
 * Problem 2 - Movie Ticket Confirmation
 */
interface Ticket {
  name: string;
  movie: string;
  time: string;
}
const formatTicketConfirmation = (ticket: Ticket): string => {
  if (
    ticket === null ||
    Object.keys(ticket).length === 0 ||
    Array.isArray(ticket)
  ) {
    return "Invalid";
  }

  const { name, movie, time } = ticket;

  if (
    typeof name !== "string" ||
    typeof movie !== "string" ||
    typeof time !== "string"
  ) {
    return "Invalid";
  }

  return `${name}'s ticket for ${movie} is confirmed at ${time}.`;
};
// console.log(formatTicketConfirmation({ name: 'Mohim' , movie : "Spider Man Brand New Day", time : "9:00 PM" }));

/*
 * Problem 3 :  Daily Steps Tracker
 */

const calculateWeeklySteps = (steps: number[]): number => {
  if (steps.length === 0) {
    return 0;
  }

  const totalStep: number = steps.reduce(
    (total: number, step: number) => total + step,
    0,
  );

  return totalStep;
};

// console.log(calculateWeeklySteps([3000, 5200, 4100]));
// console.log(calculateWeeklySteps([7000, 6500]));
// console.log(calculateWeeklySteps(null));

/*
 * Problem 4 — Restaurant Order Total
 */
interface Order {
  name: string;
  price: number;
}

const calculateOrderTotal = (orders: Order[]): number => {
  if (orders.length === 0) {
    return 0;
  }

  const totalPrice: number = orders.reduce(
    (total: number, order: Order) => total + order.price,
    0,
  );

  return totalPrice;
};
// console.log(calculateOrderTotal([]));

/*
 * Problem 5 — Weather Advice Picker
 */

type Weather = "sunny" | "rainy" | "cloudy";

const getWeatherAdvice = (weather: Weather): string => {
  if (weather === "sunny") {
    return "Wear sunscreen";
  } else if (weather === "rainy") {
    return "Carry an umbrella";
  }

  return "Bring a light jacket";
};
// console.log(getWeatherAdvice("sunny"));
// console.log(getWeatherAdvice("rainy"));
// console.log(getWeatherAdvice("cloudy"));


/* 
* Problem 6 — Employee On-Duty Finder
 */
interface Emplooyes {
  name : string
  onDuty : boolean
}

const findOnDutyEmployees = (emplooyes : Emplooyes[]) : Emplooyes[] => {

  const onDutyEmplooye : Emplooyes[] = emplooyes.filter(emplooye => emplooye.onDuty === true )

  return onDutyEmplooye
}
// console.log(
//   findOnDutyEmployees([]),
// );


/* 
* Problem 7 — Delivery Distance Summary
 */

interface Distance {
  total : number
  average : number 
}
const getDistanceSummary = (distances : number[]) : Distance => {
  const total : number = distances.reduce((total :number , distance : number) => total +  distance , 0)

  const average : number = total / distances.length

  const obj : Distance = {
    total,
    average : isNaN(average) ? 0 : average
  }

  return obj
}


// console.log(getDistanceSummary([4, 6, 5, 9]));
// console.log(getDistanceSummary([10,10]));
// console.log(getDistanceSummary([]));