function generateLeaderboard(students) {
   //Validation
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    if(students.some(student => !("name" in student) || !('score' in student) || typeof student.score !== 'number')){
      return 'Invalid'
    }

    // Logic
    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(({ name }) => name.toUpperCase());

    return names.slice(0, 3);

}


console.log(generateLeaderboard([
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]
))