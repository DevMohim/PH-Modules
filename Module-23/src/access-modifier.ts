//access modifier 3 type --> public, private , protected
class BkashAccount {
   public phone : string 
   private balance : number 
   private pin : number 
   protected paymentHistory : any = []



   constructor(phone : string ,balance : number ,pin : number ){
      this.phone = phone
      this.balance = balance
      this.pin = pin
   }


   getBalance(pin:number){
      if(pin !== this.pin){
         return "Incorrect PIN"
      }

      return this.balance
   }
}

const bkashAcc = new BkashAccount('+8801793075097' , 495 , 1278)
const balance = bkashAcc.getBalance(1278)
console.log(balance)