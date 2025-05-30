let employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

let filtered = employees.filter(function(emp) {
  return emp.tasksCompleted > 5;
});

let performanceList = filtered.map(function(emp) {
  let performance = "";

  if (emp.rating > 4.5) {
    performance = "Excellent";
  } else if (emp.rating >= 3 && emp.rating <= 4.5) {
    performance = "Good";
  } else {
    performance = "Needs Improvement";
  }

  return {
    name: emp.name,
    performance: performance
  };
});

let sorted = performanceList.sort(function(a, b) {
  let order = {
    "Excellent": 1,
    "Good": 2,
    "Needs Improvement": 3
  };

  return order[a.performance] - order[b.performance];
});

console.log(sorted);
