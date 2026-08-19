"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//access modifier 3 type --> public, private , protected
class BkashAccount {
    phone;
    balance;
    pin;
    paymentHistory = [];
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }
    getBalance(pin) {
        if (pin !== this.pin) {
            return "Incorrect PIN";
        }
        return this.balance;
    }
}
const bkashAcc = new BkashAccount('+8801793075097', 495, 1278);
const balance = bkashAcc.getBalance(1278);
console.log(balance);
//# sourceMappingURL=access-modifier.js.map