type UserRole = "Admin" | "Moderator" | "User"
interface User {
   name : string;
   role : UserRole;
   email : string;
}



interface Admin extends User {
   duty: string[]
}

const userInfo: Admin = {
  name: "Mohm",
  role: "Admin",
  email: "mohim@gmail.com",
  duty : ['create','update']
};