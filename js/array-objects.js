let students = [
  { fullName: "John Doe", age: 20, class: "WMAD" },
  { fullName: "Jane Smith", age: 21, class: "HR" },
  { fullName: "Michael Johnson", age: 22, class: "SALE" },
  { fullName: "Emily Brown", age: 19, class: "FILM" },
  { fullName: "David Lee", age: 20, class: "WMAD" },
  { fullName: "Sarah Williams", age: 21, class: "HR" },
  { fullName: "James Taylor", age: 22, class: "SALE" },
  { fullName: "Michelle Clark", age: 19, class: "FILM" },
  { fullName: "Daniel Martinez", age: 20, class: "WMAD" },
  { fullName: "Amanda Garcia", age: 21, class: "HR" },
  { fullName: "Christopher Rodriguez", age: 22, class: "SALE" },
  { fullName: "Ashley Hernandez", age: 19, class: "FILM" },
  { fullName: "Matthew Lopez", age: 20, class: "WMAD" },
  { fullName: "Jessica Perez", age: 21, class: "HR" },
  { fullName: "Ryan Gonzalez", age: 22, class: "SALE" },
  { fullName: "Jennifer Flores", age: 19, class: "FILM" },
  { fullName: "Kevin Washington", age: 20, class: "WMAD" },
  { fullName: "Melissa Martinez", age: 21, class: "HR" },
  { fullName: "Jason Young", age: 22, class: "SALE" },
  { fullName: "Stephanie King", age: 19, class: "FILM" },
  { fullName: "Daniel Brown", age: 20, class: "WMAD" },
  { fullName: "Laura Davis", age: 21, class: "HR" },
  { fullName: "Chris Wilson", age: 22, class: "SALE" },
  { fullName: "Emily Thompson", age: 19, class: "FILM" },
  { fullName: "Michael Harris", age: 20, class: "WMAD" },
  { fullName: "Taylor Martinez", age: 21, class: "HR" },
  { fullName: "Rachel Johnson", age: 22, class: "SALE" },
  { fullName: "Steven Miller", age: 19, class: "FILM" },
  { fullName: "Samantha Moore", age: 20, class: "WMAD" },
];

let filterWMAD = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].class === "WMAD") {
    // Add student object to filterWMAD Array
    filterWMAD.push(students[i]);
  }
}

console.log(filterWMAD);
