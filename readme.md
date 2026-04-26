# 🚀 JavaScript Notes for Beginners

This repository contains my structured notes and practice code while learning **JavaScript from basics to intermediate level**.
I am building these concepts step by step and applying them in real projects like a **Quiz App**.

---

## 📌 What is JavaScript?

JavaScript is a programming language used to make web pages interactive.
It runs inside the browser and allows dynamic content updates, event handling, and logic implementation.

---

## 🔹 Variables

```js
let name = "Amrutha";   // can be changed
const age = 20;         // cannot be changed
```

---

## 🔹 Data Types

```js
let name = "Amrutha";   // String
let age = 20;           // Number
let isStudent = true;   // Boolean
let x = null;           // Null
let y;                  // Undefined
```

---

## 🔹 Operators

```js
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a > b); // Comparison
```

---

## 🔹 Conditional Statements

```js
let age = 18;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
```

---

## 🔹 Loops

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## 🔹 Functions

```js
function greet(name) {
  return "Hello " + name;
}
```

### Arrow Function

```js
const greet = (name) => "Hello " + name;
```

---

## 🔹 Arrays

```js
let numbers = [1, 2, 3, 4];

numbers.push(5);   // add element
numbers.pop();     // remove element
```

---

## 🔹 Objects

```js
let student = {
  name: "Amrutha",
  age: 20
};
```

---

## 🔥 DOM Manipulation (Important)

```js
document.getElementById("demo").innerText = "Hello";
document.querySelector(".class").style.color = "red";
```

---

## 🔹 Event Handling

```js
function showMessage() {
  alert("Button Clicked!");
}
```

---

## 🔹 ES6 Features

```js
let name = "Amrutha";
console.log(`Hello ${name}`);
```

---

## 🔹 Asynchronous JavaScript

```js
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

---

## 🔹 Fetch API

```js
fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🔹 Local Storage

```js
localStorage.setItem("name", "Amrutha");
let data = localStorage.getItem("name");
```

---

## 🎯 Project Application

These concepts are being used to build:

* 🧠 Quiz App (MCQ based)
* 📊 Score Calculation
* ⏳ Timer-based interactions
* 📄 Result Summary

---

## 🚀 Future Improvements

* Add advanced JavaScript concepts
* Integrate backend (Node.js)
* Build full-stack applications

---

## 💡 Author

**Amrutha Varshini Kona**
Aspiring Software Developer 💻
