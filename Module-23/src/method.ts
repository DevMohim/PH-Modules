class QminCafe {
   title :  string
   soldItems : any = []

   // Special method --> constructor
   constructor(title:string){
      this.title = title
   }

   // method 1 --> sell method
   sell(name:string , price:number){
      return this.soldItems.push({name, price})
   }


   // method 2 --> total amount of sell
   totalAmount(){
      const total =  this.soldItems.reduce((acc : number,item : {name:string , price: number}) => acc + item.price,0)
      return total
   }


}

const cafe1 = new QminCafe('Qmin')
cafe1.sell("Hot dog" , 170)
cafe1.sell("Chiken Burger" , 120)
console.log(cafe1.totalAmount())