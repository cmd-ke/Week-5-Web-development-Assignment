
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


let a = 10, b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);





function showGreeting() {
  document.getElementById("greeting").innerText = "Hello, welcome to JavaScript!";
}


function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log("Total with tax:", calculateTotal(100, 0.15)); // Example usage



function showNumbers() {
  let list = document.getElementById("number-list");
  list.innerHTML = ""; // clear list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
}


let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}



document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("dom-text").classList.toggle("highlight");
});


document.getElementById("toggleBtn").addEventListener("dblclick", function() {
  document.getElementById("dom-text").innerText = "Double-click detected! Text changed!";
});

function addNewItem() {
  let ul = document.getElementById("dynamic-list");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
}
