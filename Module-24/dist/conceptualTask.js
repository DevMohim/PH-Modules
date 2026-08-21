"use strict";
/*
 * Problem 1 — Wi-Fi Signal Status
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (percentage) => {
    if (typeof percentage !== "number" || Number.isNaN(percentage)) {
        return "Invalid Percentage";
    }
    if (percentage >= 0 && percentage <= 25) {
        return "Poor";
    }
    else if (percentage >= 26 && percentage <= 55) {
        return "Fair";
    }
    else if (percentage >= 56 && percentage <= 85) {
        return "Good";
    }
    else if (percentage <= 100) {
        return "Excellent";
    }
    return "Invalid percentage";
};
const formatTicketConfirmation = (ticket) => {
    if (ticket === null ||
        Object.keys(ticket).length === 0 ||
        Array.isArray(ticket)) {
        return "Invalid";
    }
    const { name, movie, time } = ticket;
    if (typeof name !== "string" ||
        typeof movie !== "string" ||
        typeof time !== "string") {
        return "Invalid";
    }
    return `${name}'s ticket for ${movie} is confirmed at ${time}.`;
};
// console.log(formatTicketConfirmation({ name: 'Mohim' , movie : "Spider Man Brand New Day", time : "9:00 PM" }));
/*
 * Problem 3 :  Daily Steps Tracker
 */
const calculateWeeklySteps = (steps) => {
    if (steps.length === 0) {
        return 0;
    }
    const totalStep = steps.reduce((total, step) => total + step, 0);
    return totalStep;
};
const calculateOrderTotal = (orders) => {
    if (orders.length === 0) {
        return 0;
    }
    const totalPrice = orders.reduce((total, order) => total + order.price, 0);
    return totalPrice;
};
const getWeatherAdvice = (weather) => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    }
    else if (weather === "rainy") {
        return "Carry an umbrella";
    }
    return "Bring a light jacket";
};
const findOnDutyEmployees = (emplooyes) => {
    const onDutyEmplooye = emplooyes.filter(emplooye => emplooye.onDuty === true);
    return onDutyEmplooye;
};
const getDistanceSummary = (distances) => {
    const total = distances.reduce((total, distance) => total + distance, 0);
    const average = total / distances.length;
    const obj = {
        total,
        average: isNaN(average) ? 0 : average
    };
    return obj;
};
// console.log(getDistanceSummary([4, 6, 5, 9]));
// console.log(getDistanceSummary([10,10]));
// console.log(getDistanceSummary([]));
//# sourceMappingURL=conceptualTask.js.map