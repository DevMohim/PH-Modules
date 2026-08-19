"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//access modifier 3 type --> public, private , protected
class BkashAccount {
    _phone;
    _balance;
    _pin;
    _paymentHistory = [];
    constructor(phone, balance, pin) {
        this._phone = phone;
        this._balance = balance;
        this._pin = pin;
    }
    getBalance(pin) {
        if (pin !== this.pin) {
            return "Incorrect PIN";
        }
        return this._balance;
    }
    // use setter for new pin set
    set pin(newPin) {
        if (typeof newPin !== "number") {
            throw new Error("Enter a valid PIN ");
        }
        this._pin = newPin;
    }
}
const bkashAcc = new BkashAccount("+8801793075097", 495, 1278);
const balance = bkashAcc.getBalance(1278);
bkashAcc.pin = 1289;
console.log(bkashAcc.pin);
//# sourceMappingURL=getter-setter.js.map