var questions = [
  {
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    answers: [
      { text: "Declares a constant variable", correct: false },
      { text: "Declares a global variable", correct: false },
      { text: "Declares a function", correct: false },
      { text: "Declares a block-scoped variable", correct: true },
    ],
  },
  {
    question: "What does the '=== ' operator in JavaScript check for?",
    answers: [
      { text: "Equality in value and type", correct: true },
      { text: "Equality in value", correct: false },
      { text: "Equality in type", correct: false },
      { text: "Inequality", correct: false },
    ],
  },
  {
    question: "How can you add a comment in JavaScript?",
    answers: [
      { text: "<!-- This is a comment -->", correct: false },
      { text: "// This is a comment", correct: true },
      { text: "/* This is a comment */", correct: false },
      { text: "-- This is a comment", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    answers: [
      { text: "Sets an interval for a function", correct: false },
      { text: "Adds a timeout to network requests", correct: false },
      { text: "Delays the execution of a function", correct: true },
      { text: "Executes a function immediately", correct: false },
    ],
  },
  {
    question: "What is the result of the expression: 5 + '5' in JavaScript?",
    answers: [
      { text: "10", correct: false },
      { text: "'55'", correct: false },
      { text: "Error", correct: false },
      { text: "55", correct: true },
    ],
  },
  {
    question: "What is jQuery?",
    answers: [
      { text: "A JavaScript framework", correct: true },
      { text: "A programming language", correct: false },
      { text: "An HTML preprocessor", correct: false },
      { text: "A database management system", correct: false },
    ],
  },
  {
    question: "How do you select an element with the id 'example' in jQuery?",
    answers: [
      { text: "$('element#example')", correct: false },
      { text: "$('#example')", correct: true },
      { text: "$('id=example')", correct: false },
      { text: "$('.example')", correct: false },
    ],
  },
  {
    question: "What does the jQuery function 'fadeOut' do?",
    answers: [
      { text: "Adds a fade-in effect to an element", correct: false },
      { text: "Slides an element up", correct: false },
      { text: "Adds a fade-out effect to an element", correct: true },
      { text: "Changes the font color of an element", correct: false },
    ],
  },
  {
    question: "What is the purpose of the jQuery function 'append'?",
    answers: [
      { text: "Appends a new element to the beginning", correct: false },
      { text: "Prepends a new element", correct: false },
      { text: "Removes an element from the DOM", correct: false },
      { text: "Appends a new element to the end", correct: true },
    ],
  },
  {
    question:
      "In jQuery, how can you check if an element has a specific class?",
    answers: [
      { text: "$('element').hasClass('class')", correct: true },
      { text: "$('element').find('class')", correct: false },
      { text: "$('element').hasClass('element')", correct: false },
      { text: "$('element').hasClass('')", correct: false },
    ],
  },
  {
    question: "What does the JavaScript keyword 'const' do?",
    answers: [
      { text: "Declares a constant variable", correct: true },
      { text: "Declares a block-scoped variable", correct: false },
      { text: "Declares a global variable", correct: false },
      { text: "Declares a function", correct: false },
    ],
  },
  {
    question: "What is the purpose of the JavaScript 'map' function?",
    answers: [
      { text: "Adds a new element to an array", correct: false },
      { text: "Finds the maximum element in an array", correct: false },
      { text: "Checks if an array includes a specific value", correct: false },
      { text: "Applies a function to each element of an array", correct: true },
    ],
  },
  {
    question: "What does the JavaScript function 'toggleClass' do?",
    answers: [
      { text: "Toggles between adding and removing a class", correct: true },
      { text: "Adds a new class to an element", correct: false },
      { text: "Checks if an element has a specific class", correct: false },
      { text: "Removes a class from an element", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
    answers: [
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "assign", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'filter' function in JavaScript?",
    answers: [
      { text: "Sorts elements in an array", correct: false },
      { text: "Filters elements based on a condition", correct: true },
      { text: "Adds a new element to an array", correct: false },
      { text: "Reverses the order of elements in an array", correct: false },
    ],
  },
  {
    question: "How do you declare a function in JavaScript?",
    answers: [
      { text: "function: myFunction() { }", correct: false },
      { text: "declare function myFunction() { }", correct: false },
      { text: "function myFunction() { }", correct: true },
      { text: "var myFunction = function() { }", correct: false },
    ],
  },
  {
    question: "What does the 'typeof' operator in JavaScript do?",
    answers: [
      { text: "Checks if a variable is defined", correct: false },
      { text: "Returns the type of a variable", correct: true },
      { text: "Converts a variable to a boolean", correct: false },
      { text: "Checks if a variable is null", correct: false },
    ],
  },
  {
    question: "What is an arrow function in JavaScript?",
    answers: [
      { text: "A function with arrow-shaped brackets", correct: false },
      { text: "A function that uses the '=>'' syntax", correct: true },
      { text: "A function with conditional statements", correct: false },
      { text: "A function that returns a boolean value", correct: false },
    ],
  },
  {
    question: "How do you loop through elements in an array in JavaScript?",
    answers: [
      { text: "for (i = 0; i < array.length; i++)", correct: true },
      { text: "while (i < array.length) { i++ }", correct: false },
      { text: "foreach (element in array)", correct: false },
      { text: "loop (array) { }", correct: false },
    ],
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      { text: "Refers to the previous element", correct: false },
      { text: "Refers to the parent element", correct: false },
      { text: "Refers to the current element", correct: true },
      { text: "Refers to the next element", correct: false },
    ],
  },
  {
    question:
      "How can you prevent the default behavior of an event in JavaScript?",
    answers: [
      { text: "event.preventDefault()", correct: true },
      { text: "event.stopDefault()", correct: false },
      { text: "event.cancelDefault()", correct: false },
      { text: "event.prevent()", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'splice' method in JavaScript?",
    answers: [
      { text: "Joins two arrays", correct: false },
      {
        text: "Removes elements from an array and, if necessary, inserts new elements in their place",
        correct: true,
      },
      { text: "Sorts elements in an array", correct: false },
      { text: "Reverses the order of elements in an array", correct: false },
    ],
  },
  {
    question: "How do you create a new object in JavaScript?",
    answers: [
      { text: "new Object()", correct: true },
      { text: "createObject()", correct: false },
      { text: "Object.create()", correct: false },
      { text: "{}", correct: false },
    ],
  },
  {
    question: "What does the 'bind' method do in JavaScript?",
    answers: [
      { text: "Binds a function to a specific value or object", correct: true },
      { text: "Creates a new function", correct: false },
      { text: "Binds an event listener to an element", correct: false },
      { text: "Binds a variable to a function", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'spread' operator in JavaScript?",
    answers: [
      { text: "Joins two arrays", correct: false },
      {
        text: "Copies the properties of one object to another object",
        correct: true,
      },
      { text: "Performs mathematical operations", correct: false },
      { text: "Converts a string to an array", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'reduce' method in JavaScript?",
    answers: [
      {
        text: "Combines elements of an array into a single value",
        correct: true,
      },
      { text: "Filters elements based on a condition", correct: false },
      { text: "Sorts elements in an array", correct: false },
      { text: "Adds a new element to an array", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'Promise' object in JavaScript?",
    answers: [
      {
        text: "Represents a one-time event that will occur in the future",
        correct: false,
      },
      {
        text: "Represents a value that may be available now, or in the future, or never",
        correct: false,
      },
      {
        text: "Represents the eventual completion or failure of an asynchronous operation and its resulting value",
        correct: true,
      },
      { text: "Represents a synchronous operation", correct: false },
    ],
  },
  {
    question: "What does the 'async' keyword do in JavaScript?",
    answers: [
      {
        text: "Defines a function as asynchronous, allowing the use of the 'await' keyword",
        correct: true,
      },
      { text: "Declares a variable as asynchronous", correct: false },
      { text: "Creates an asynchronous event listener", correct: false },
      {
        text: "Enables asynchronous execution of the entire script",
        correct: false,
      },
    ],
  },
  {
    question: "How do you handle errors in asynchronous JavaScript code?",
    answers: [
      { text: "Using try-catch blocks", correct: true },
      { text: "By ignoring errors", correct: false },
      { text: "Using the 'finally' block", correct: false },
      { text: "By logging errors to the console", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'fetch' API in JavaScript?",
    answers: [
      {
        text: "Fetches resources from the server using asynchronous requests",
        correct: true,
      },
      { text: "Fetches elements from the DOM", correct: false },
      { text: "Fetches elements from an array", correct: false },
      { text: "Fetches data from local storage", correct: false },
    ],
  },
];
