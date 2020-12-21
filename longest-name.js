const instructorWithLongestName = function (instructors) {
  let longestInstructorName = {};
  longestInstructorName = instructors.reduce(function (a, b) {
    return a.name.length > b.name.length ? a : b;
  });
  return longestInstructorName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
