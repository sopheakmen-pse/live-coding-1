const genders = ["Select Option", "Male", "Female", "unavailable"];
const skills = [
  { value: "", text: "Select Option" },
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
  { fullName: "Jackson Smith", age: 19, class: "WMAD", gender: "male" },
];

let teachers = [
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
  { fullName: "Jackson Smith", age: 19, class: "WMAD", gender: "male" },
];

const genderSelect = document.getElementById("gender");
const classSelect = document.getElementById("class");

for (let i = 0; i < genders.length; i++) {
  if (i === 0) {
    genderSelect.innerHTML += `<option value="${genders[i]}" disabled selected>${genders[i]}</option>`;
  } else {
    genderSelect.innerHTML += `<option value="${genders[i]}">${genders[i]}</option>`;
  }
}

for (let i = 0; i < skills.length; i++) {
  if (i === 0)
    classSelect.innerHTML += `<option value="${skills[i].value}" disabled selected>${skills[i].text}</option>`;
  else
    classSelect.innerHTML += `<option value="${skills[i].value}">${skills[i].text}</option>`;
}

genderSelect.addEventListener("change", handleFilterStudents);
classSelect.addEventListener("change", handleFilterStudents);

function handleFilterStudents(event) {
  const result1 = filterWithGender(teachers);
  const result2 = filterWithClass(result1);
  displayStudentList(result2);
}

function filterWithGender(data) {
  let results = [];
  const hasFilter = genderSelect.value !== genders[0];
  if (hasFilter) {
    for (let i = 0; i < data.length; i++) {
      const studentGender = data[i].gender.toUpperCase();
      const selectedGender = genderSelect.value.toUpperCase();
      if (studentGender === selectedGender) {
        results.push(data[i]);
      }
    }
  } else {
    return data;
  }
  return results;
}

function filterWithClass(data) {
  let results = [];
  const hasFilter = classSelect.value !== skills[0].value;
  if (hasFilter) {
    for (let i = 0; i < data.length; i++) {
      const studentClass = data[i].class.toUpperCase();
      const selectedClass = classSelect.value.toUpperCase();
      if (studentClass === selectedClass) {
        results.push(data[i]);
      }
    }
  } else {
    return data;
  }
  return results;
}

function displayStudentList(data) {
  const studentList = document.getElementById("student-list");
  let contentHTML = "";
  for (let i = 0; i < data.length; i++) {
    contentHTML += `
      <div class="student-card">
        <div>${data[i].fullName}</div>
        <div>${data[i].age}</div>
        <div>${data[i].gender}</div>
        <div>${data[i].class}</div>
      </div>
    `;
  }
  studentList.innerHTML = `
    <div style="margin-bottom: 16px;">Filter by ${classSelect.value ?? ""} ${
    genderSelect.value ?? ""
  }: ${data.length}</div>
    <div style="margin-bottom: 16px;">Total: ${students.length}</div>
    ${contentHTML}
  `;
}
