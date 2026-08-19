class Student{
   name:string 
   age:number 
   email:string 
   marks : number


   constructor(name:string , age: number , email:string , marks : number){
      this.name = name,
      this.age = age,
      this.email = email ,
      this.marks = marks
   }

}
const mohim = new Student("Mohim", 25 , 'mohim@gmail.com' , 95)
const manha = new Student("Manha", 1 , 'manha@gmail.com' , 98)
console.log(mohim , manha)