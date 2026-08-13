function studentIntroduction(student) {
   const { name, age, course } = student;
  //Validation
  if (typeof student !== "object" || Array.isArray(student)) {
    return "Invalid";
  }
  if(!name || !age || !course ){
   return 'Invalid'
  }

  //Logic

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}

console.log(
  studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }),
);
console.log(
  studentIntroduction({}),
);
console.log(
  studentIntroduction([]),
);
