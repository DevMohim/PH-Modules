interface Response<T> {
  data: T;
  message: string;
}



const userResponse: Response <string> = {
   data : '333',
   message : "data fetching successfull"
}

console.log(userResponse.message)