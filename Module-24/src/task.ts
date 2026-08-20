/*
 * Problem 1 : Gaming Age Rating Checker
 */
const getAgeRatingAccess = (age: number): string => {
  if (age < 7) {
    return "E (Everyone)";
  } else if (age >= 7 && age <= 12) {
    return "E10+ (Everyone 10+)";
  } else if (age >= 13 && age <= 16) {
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
const getSignalStatus = (strength: number): string => {
  if (strength <= 20) {
    return "Weak";
  } else if (strength >= 21 && strength <= 50) {
    return "Fair";
  } else if (strength >= 51 && strength <= 80) {
    return "Good";
  }

  return "Excellent";
};

// console.log(getSignalStatus(10))
// console.log(getSignalStatus(35))
// console.log(getSignalStatus(65))
// console.log(getSignalStatus(95))

// Boundary values check
// console.log(getSignalStatus(20))
// console.log(getSignalStatus(21))
// console.log(getSignalStatus(80))
// console.log(getSignalStatus(81))

/*
 * Problem 3 : Esports Player Profile Card
 */

interface Player {
  username: string;
  level: number;
  region: string;
}

const formatPlayerCard = (player: Player): string => {
  const { username, level, region } = player;
  return `${username} is a Level ${level} player from ${region}.`;
};

// console.log(
//   formatPlayerCard({
//     username: "Dr.Strenge",
//     level: 85,
//     region: "Asia",
//   }),
// );

/*
 * Problem 4 : Music App Listening Time Tracker
 */
interface Track {
  title: string;
  minutes: number;
}
const calculateTotalListeningTime = (tracks: Track[]): number => {
  if (tracks.length === 0) {
    return 0;
  }

  const totalTime: number = tracks.reduce(
    (sum: number, track: Track) => sum + track.minutes,
    0,
  );

  return totalTime;
};

// console.log(
//   calculateTotalListeningTime([
//     { title: "Flowers", minutes: 3 },
//     { title: "Anti-Hero", minutes: 4 },
//   ])
// )

/*
 * Problem 5 : Esports Tournament Player Stats
 */
interface Players {
  name: string;
  scores: number[];
}

interface Result {
  name: string;
  average: number;
  rank: string;
}

const getPlayerStats = (player: Players): Result => {
  const { name, scores } = player;

  const totalScore = scores.reduce(
    (sum: number, score: number) => sum + score,
    0,
  );

  const average: number = totalScore / scores.length;

  const rank: string = average >= 80 ? "MVP" : "Rookie";

  return {
    name,
    average,
    rank,
  };
};

// console.log(
//   getPlayerStats({
//     name: "Zex",
//     scores: [60, 55, 70, 50],
//   }),
// );

/*
 * Problem 6 : Music App Feature Access
 */
type Tier = "free" | "pro" | "premium";

const canAccessOfflineMod = (tier: Tier): boolean => {
  if (tier === "premium" || tier === "pro") {
    return true;
  }

  return false;
};

// console.log(canAccessOfflineMod("free"));
// console.log(canAccessOfflineMod("pro"));
// console.log(canAccessOfflineMod("premium"));

/*
 * Problem 7 : Food Delivery Menu Filter
 */
interface Menu {
  name: string;
  price: number;
  tag: string;
}

const findMenuItemsByTag = (menus: Menu[], tag: string): Menu[] => {
  const filteredMenus: Menu[] = menus.filter((menu) => menu.tag === tag);

  return filteredMenus;
};

// console.log(
//   findMenuItemsByTag([
//     { name: "Veggie Bowl", price: 350, tag: "vegan" },
//     { name: "Tofu Wrap", price: 300, tag: "vegan" },
//     { name: "Chicken Wings", price: 450, tag: "spicy" },
//     { name: "Beef Burger", price: 500, tag: "spicy" },
//   ] , "gauten-free"),
// );

/*
 * Problem 8 : Notification Center Renderer
 */

interface LikeNotification {
  type: "like";
  fromUser: string;
}

interface SystemNotification {
  type: "system";
  message: string;
  actionUrl?: string;
}

const renderNotification = (
  notification: LikeNotification | SystemNotification,
): string => {
  if (notification.type === "like") {
    return `${notification.fromUser} liked your post`;
  }

  return `${notification.type}: ${notification.message} ${
    notification.actionUrl ? `(${notification.actionUrl})` : ""
  }`;
};

// console.log(renderNotification({ type: "like", fromUser: "Aisha" }));

// console.log(
//   renderNotification({
//     type: "system",
//     message: "Maintenance complete.",
//   }),
// );

// console.log(
//   renderNotification({
//     type: "system",
//     message: "Your subscription is expiring soon.",
//     actionUrl: "/billing",
//   }),
// );

/*
 * Problem 9 :Cloud Storage Usage Tracker
 */

interface UploadAction {
  type: "upload";
  sizeMB: number;
}

interface DeleteAction {
  type: "delete";
  sizeMB: number;
}

const updateStorageUsage = (
  currentUsageMB: number,
  action: UploadAction | DeleteAction,
): number => {
  if (action.type === "upload") {
    return action.sizeMB + currentUsageMB;
  }

  return Math.max(0, currentUsageMB - action.sizeMB);
};

// console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }))
// console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
// console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }))

/*
 * Problem 10 : EV Scooter Rental Fee Calculator
 */
type VehicleType = "scooter" | "ebike" | "moped";

const calculateRentalFee = (vehicle: VehicleType, minutes: number): number => {

  // if(typeof vehicle !== 'string' || typeof minutes !== 'number'){
  //   return 'Invalid'
  // }


  // if(minutes === 0){
  //   return 
  // }

  let unlockFee : number;
  let costPerMinute : number ;
  if (vehicle === "scooter") {
    unlockFee = 10;
    costPerMinute =2
  } else if( vehicle === 'ebike'){
    unlockFee = 15
    costPerMinute = 3
  } else {
    unlockFee = 25
    costPerMinute = 5
  }

  const finalFee : number = unlockFee + (costPerMinute * minutes)
  return finalFee
};


// console.log(calculateRentalFee("scooter", 20));
// console.log(calculateRentalFee("ebike", 20));
// console.log(calculateRentalFee("moped", 20));
// console.log(calculateRentalFee(undefined));