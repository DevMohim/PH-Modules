"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Problem 1 : Gaming Age Rating Checker
 */
const getAgeRatingAccess = (age) => {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age >= 7 && age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age >= 13 && age <= 16) {
        return "T (Teen)";
    }
    return "M (Mature)";
};
// console.log(getAgeRatingAccess(5))
// console.log(getAgeRatingAccess(10))
// console.log(getAgeRatingAccess(15))
// console.log(getAgeRatingAccess(20))
/*
 * Problem 2 : Smart Home WiFi Signal Status
 */
const getSignalStatus = (strength) => {
    if (strength <= 20) {
        return "Weak";
    }
    else if (strength >= 21 && strength <= 50) {
        return "Fair";
    }
    else if (strength >= 51 && strength <= 80) {
        return "Good";
    }
    return "Excellent";
};
const formatPlayerCard = (player) => {
    const { username, level, region } = player;
    return `${username} is a Level ${level} player from ${region}.`;
};
const calculateTotalListeningTime = (tracks) => {
    if (tracks.length === 0) {
        return 0;
    }
    const totalTime = tracks.reduce((sum, track) => sum + track.minutes, 0);
    return totalTime;
};
const getPlayerStats = (player) => {
    const { name, scores } = player;
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const average = totalScore / scores.length;
    const rank = average >= 80 ? "MVP" : "Rookie";
    return {
        name,
        average,
        rank,
    };
};
const canAccessOfflineMod = (tier) => {
    if (tier === "premium" || tier === "pro") {
        return true;
    }
    return false;
};
const findMenuItemsByTag = (menus, tag) => {
    const filteredMenus = menus.filter((menu) => menu.tag === tag);
    return filteredMenus;
};
const renderNotification = (notification) => {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post`;
    }
    return `${notification.type}: ${notification.message} ${notification.actionUrl ? `(${notification.actionUrl})` : ""}`;
};
const updateStorageUsage = (currentUsageMB, action) => {
    if (action.type === "upload") {
        return action.sizeMB + currentUsageMB;
    }
    return Math.max(0, currentUsageMB - action.sizeMB);
};
const calculateRentalFee = (vehicle, minutes) => {
    // if(typeof vehicle !== 'string' || typeof minutes !== 'number'){
    //   return 'Invalid'
    // }
    // if(minutes === 0){
    //   return 
    // }
    let unlockFee;
    let costPerMinute;
    if (vehicle === "scooter") {
        unlockFee = 10;
        costPerMinute = 2;
    }
    else if (vehicle === 'ebike') {
        unlockFee = 15;
        costPerMinute = 3;
    }
    else {
        unlockFee = 25;
        costPerMinute = 5;
    }
    const finalFee = unlockFee + (costPerMinute * minutes);
    return finalFee;
};
// console.log(calculateRentalFee("scooter", 20));
// console.log(calculateRentalFee("ebike", 20));
// console.log(calculateRentalFee("moped", 20));
// console.log(calculateRentalFee(undefined));
//# sourceMappingURL=task.js.map