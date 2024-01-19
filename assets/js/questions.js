// An array of questions and answers which can be dynamically drawn from.
var questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Colorful Style Sheet", correct: false },
      { text: "Creative Style Sheet", correct: false },
    ],
  },
  {
    question: "What does HTML do?",
    answers: [
      { text: "Styles the content of a web page", correct: false },
      { text: "Handles user interactions on a web page", correct: false },
      { text: "Defines the structure of a web page", correct: true },
      { text: "Manages server-side operations", correct: false },
    ],
  },
  {
    question: "What does CSS do?",
    answers: [
      { text: "Defines the behavior of a web page", correct: false },
      { text: "Manages server-side scripting", correct: false },
      { text: "Handles database operations", correct: false },
      { text: "Styles the presentation of a web page", correct: true },
    ],
  },
  {
    question: "What does JavaScript do?",
    answers: [
      { text: "Adds interactivity to a web page", correct: true },
      { text: "Defines the layout of a web page", correct: false },
      { text: "Manages server-side logic", correct: false },
      { text: "Handles document structure", correct: false },
    ],
  },
  {
    question: "What does XML stand for?",
    answers: [
      { text: "Extra Modern Language", correct: false },
      { text: "Extensible Markup Language", correct: true },
      { text: "Expressive Markup Language", correct: false },
      { text: "External Markup Language", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <head> element in HTML?",
    answers: [
      { text: "Defines the main content of a page", correct: false },
      { text: "Specifies a header for a document", correct: false },
      { text: "Contains metadata about the document", correct: true },
      { text: "Represents a navigation menu", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    answers: [
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
      { text: "<dl>", correct: false },
      { text: "<ul>", correct: true },
    ],
  },
  {
    question: "What does the HTML attribute 'alt' stand for in the <img> tag?",
    answers: [
      { text: "Alternative", correct: true },
      { text: "Altitude", correct: false },
      { text: "Alignment", correct: false },
      { text: "Attribute", correct: false },
    ],
  },
  {
    question: "In HTML, what is the purpose of the <footer> element?",
    answers: [
      { text: "Represents a section of content", correct: false },
      { text: "Specifies a footer for a document", correct: true },
      { text: "Defines the main content of a page", correct: false },
      { text: "Represents a sidebar in a document", correct: false },
    ],
  },
  {
    question: "What is the purpose of the CSS property 'margin'?",
    answers: [
      { text: "Defines the background color of an element", correct: false },
      { text: "Specifies the font size of text", correct: false },
      { text: "Sets the space between elements' borders", correct: true },
      { text: "Manages the visibility of an element", correct: false },
    ],
  },
  {
    question: "How can you select all paragraphs in CSS?",
    answers: [
      { text: "p:all", correct: false },
      { text: "paragraph:all", correct: false },
      { text: "p *", correct: false },
      { text: "p", correct: true },
    ],
  },
  {
    question: "What does the CSS property 'float' do?",
    answers: [
      { text: "Moves an element to the right or left", correct: true },
      { text: "Changes the opacity of an element", correct: false },
      { text: "Increases the font weight of text", correct: false },
      { text: "Adds a shadow to an element", correct: false },
    ],
  },
  {
    question:
      "Which CSS pseudo-class is used to select an element when it is being hovered over?",
    answers: [
      { text: ":active", correct: false },
      { text: ":hover", correct: true },
      { text: ":focus", correct: false },
      { text: ":visited", correct: false },
    ],
  },
  {
    question: "How can you center an element horizontally in CSS?",
    answers: [
      { text: "text-align: center;", correct: false },
      { text: "align: center;", correct: false },
      { text: "margin: auto;", correct: true },
      { text: "position: center;", correct: false },
    ],
  },
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
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<hlink>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    question: "What does the CSS property 'box-sizing' control?",
    answers: [
      { text: "Element's position", correct: false },
      { text: "Element's color", correct: false },
      { text: "Element's width and height", correct: true },
      { text: "Element's font size", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'map' function in JavaScript?",
    answers: [
      { text: "Adds a new element to an array", correct: false },
      { text: "Finds the maximum element in an array", correct: false },
      { text: "Checks if an array includes a specific value", correct: false },
      { text: "Applies a function to each element of an array", correct: true },
    ],
  },
  {
    question: "What does the jQuery function 'toggleClass' do?",
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
];
