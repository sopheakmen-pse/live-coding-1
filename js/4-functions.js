// function declaration
function greeting() {
  console.log("Hello Luis!");
}
// greeting();

// function declaration with return statements
function add() {
  const x = 2000 + 3000 + "3000";
  return x;
}
const x = add();
// let z = x + 4000;
// console.log("z: " + z);

function createDiv(id) {
  //   return "<div id=" + id + ">This is div " + id + ".</div>";
  return `<div id="${id}">This is div ${id}</div>`;
}

// let div1 = createDiv("div1");
// let div2 = createDiv("div2");
// let div3 = createDiv("div3");
// let div4 = createDiv("div4");
// console.log(div1, div2, div3, div4);

// function declaration with parameters
function multiply2Values(a, b) {
  return a * b;
}

console.log(multiply2Values(2, 3));
console.log(multiply2Values(5, 3));
console.log(multiply2Values(20, 3));
console.log(multiply2Values(2, 30));

// arrow function

// arrow function with return statements

// arrow function with parameters
const doSomthing = () => {
  console.log("Do something");
};
doSomthing();
