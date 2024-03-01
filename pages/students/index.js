const genders = ["Select Gender", "Male", "Female", "unavailable"];
const skills = [
  { value: "WMAD", text: "Web And Mobile Development" },
  { value: "HR", text: "Human Resource" },
  { value: "SALE", text: "Sale" },
  { value: "FILM", text: "Film" },
];
let students = [
  { fullName: "John Smith", age: 20, class: "WMAD", gender: "male" },
  { fullName: "Emily Johnson", age: 22, class: "HR", gender: "female" },
  { fullName: "Michael Williams", age: 21, class: "SALE", gender: "male" },
  { fullName: "Jessica Brown", age: 19, class: "FILM", gender: "female" },
  { fullName: "Daniel Jones", age: 23, class: "WMAD", gender: "male" },
  { fullName: "Sarah Davis", age: 20, class: "HR", gender: "female" },
  { fullName: "Christopher Martinez", age: 22, class: "SALE", gender: "male" },
  { fullName: "Amanda Wilson", age: 21, class: "FILM", gender: "female" },
  { fullName: "Matthew Anderson", age: 19, class: "WMAD", gender: "male" },
  { fullName: "Elizabeth Taylor", age: 23, class: "HR", gender: "female" },
  { fullName: "David Garcia", age: 20, class: "SALE", gender: "male" },
  { fullName: "Olivia Brown", age: 22, class: "FILM", gender: "female" },
  { fullName: "William Rodriguez", age: 21, class: "WMAD", gender: "male" },
  { fullName: "Sophia Martinez", age: 19, class: "HR", gender: "female" },
  { fullName: "James Lee", age: 23, class: "SALE", gender: "male" },
  { fullName: "Isabella Hernandez", age: 20, class: "FILM", gender: "female" },
  { fullName: "Ethan Young", age: 22, class: "WMAD", gender: "male" },
  { fullName: "Mia Moore", age: 21, class: "HR", gender: "female" },
  { fullName: "Alexander Thomas", age: 19, class: "SALE", gender: "male" },
  { fullName: "Charlotte Allen", age: 23, class: "FILM", gender: "female" },
  { fullName: "Ryan White", age: 20, class: "WMAD", gender: "male" },
  { fullName: "Madison Harris", age: 22, class: "HR", gender: "female" },
  { fullName: "Noah King", age: 21, class: "SALE", gender: "male" },
  { fullName: "Abigail Scott", age: 19, class: "FILM", gender: "female" },
  { fullName: "Logan Green", age: 23, class: "WMAD", gender: "male" },
  { fullName: "Ella Baker", age: 20, class: "HR", gender: "female" },
  { fullName: "Benjamin Young", age: 22, class: "SALE", gender: "male" },
  { fullName: "Grace Clark", age: 21, class: "FILM", gender: "female" },
  { fullName: "Jackson Adams", age: 19, class: "WMAD", gender: "male" },
];

const genderSelect = document.getElementById("gender");
for (let i = 0; i < genders.length; i++) {
  genderSelect.innerHTML += `<option value="${genders[i]}">${genders[i]}</option>`;
}

genderSelect.addEventListener("change", filterGender);

function filterGender(event) {
  console.log(event.target.value);
  console.log(genderSelect.value);
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === genderSelect.value.toLowerCase()) {
      console.log(students[i]);
    }
  }
}
