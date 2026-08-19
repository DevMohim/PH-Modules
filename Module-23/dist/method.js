"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QminCafe {
    title;
    soldItems = [];
    // Special method --> constructor
    constructor(title) {
        this.title = title;
    }
    // method 1 --> sell method
    sell(name, price) {
        return this.soldItems.push({ name, price });
    }
    // method 2 --> total amount of sell
    totalAmount() {
        const total = this.soldItems.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
}
const cafe1 = new QminCafe('Qmin');
cafe1.sell("Hot dog", 170);
cafe1.sell("Chiken Burger", 120);
console.log(cafe1.totalAmount());
//# sourceMappingURL=method.js.map