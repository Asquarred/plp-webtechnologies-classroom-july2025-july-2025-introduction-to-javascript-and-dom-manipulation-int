// =====================
// PART 1: Variables & Conditionals
// =====================
let userName = "Guest";
let isReturningVisitor = false;

if (isReturningVisitor) {
  console.log("Welcome back, " + userName + "!");
} else {
  console.log("Hello, new visitor! Enjoy exploring Savbim Caterers.");
}

// =====================
// PART 2: Functions
// =====================

// Function 1: Greet the user
function greetUser() {
  document.getElementById("output").innerText =
    "Hello, " + userName + "! Welcome to Savbim Caterers.";
}

// Function 2: Show a list of popular dishes using a loop
// function showPopularDishes() {
//   let dishes = ["Jollof Rice & Grilled Chicken", "Yam Porridge", "Peppered Snail"];
//   let output = "Our Top Dishes:\n";

//   // Loop through array
//   for (let i = 0; i < dishes.length; i++) {
//     output += (i + 1) + ". " + dishes[i] + "\n";
//   }

//   document.getElementById("output").innerText = output;
// }

function showPopularDishes() {
  let dishes = ["Jollof Rice & Grilled Chicken", "Yam Porridge", "Peppered Snail"];
  let output = "<strong>Our Top Dishes:</strong><ul>";

  for (let i = 0; i < dishes.length; i++) {
    output += "<li>" + dishes[i] + "</li>";
  }

  output += "</ul>";

  document.getElementById("output").innerHTML = output;
}

// =====================
// PART 3: Loops
// =====================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count: " + count);
  count++;
}

// =====================
// PART 4: DOM Interactions
// =====================

// 1. Greet button
document.getElementById("greetBtn").addEventListener("click", greetUser);

// 2. Show dishes button
document.getElementById("listBtn").addEventListener("click", showPopularDishes);

// 3. Toggle theme button
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
// 4. "Get a Quote Today" button
document.getElementById("quoteBtn").addEventListener("click", function (event) 
{
  event.preventDefault(); // Prevent page redirect for demo
  document.getElementById("output").innerText =
    "Thank you for your interest! Our team will reach out with a catering quote shortly.";
});
