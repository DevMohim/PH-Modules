function filterActiveUsers(users) {
  // Validation
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }
  if (
    users.some(
      (user) => !("isActive" in user) || Object.keys(user).length === 0,
    )
  ) {
    return "Invalid";
  }
  // Logic
  return users.filter((user) => user.isActive === true);
}

console.log(
  filterActiveUsers([
    { name: "A", isActive: true },
    { name: "B", isActive: false },
  ]),
);
console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{ name: "A" }, { name: "B" }]));
console.log(filterActiveUsers([{}, {}, {}]));
