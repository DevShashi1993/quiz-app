let questionsData = [
  {
    qid: 101,
    qtnCategory: "1",
    question: "C# is an alias of C++",
    options: ["False", "True"],
    correct_answer: 1,
  },
  {
    qid: 102,
    question: "How do you create a variable with the floating number 2.8?",
    options: [
      "double x = 2.8D;",
      "byte x = 2.8;",
      "int x = 2.8D;",
      "int x = 2.8;",
    ],
    correct_answer: 1,
  },
  {
    qid: 103,
    question:
      "The value of a string variable can be surrounded by single quotes.",
    options: ["True", "False"],
    correct_answer: 2,
  },
  {
    qid: 104,
    question:
      "What is the correct way to create an object called myObj of MyClass?",
    options: [
      "new myObj = MyClass();",
      "class myObj = new MyClass();",
      "class MyClass = new myObj();",
      "MyClass myObj = new MyClass();",
    ],
    correct_answer: 4,
  },
  {
    qid: 105,
    question:
      "What is the name of the 'special' class that represents a group of constants?",
    options: ["enum", "special", "void", "const"],
    correct_answer: 1,
  },
  {
    qid: 106,
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
    correct_answer: 2,
  },
  {
    qid: 107,
    question: "How can you detect the client's browser name?",
    options: [
      "navigator.appName",
      "browser.name",
      "client.navName",
      "this.browser.name",
    ],
    correct_answer: 1,
  },
  {
    qid: 108,
    question: "Is JavaScript case-sensitive?",
    options: ["No", "Yes"],
    correct_answer: 2,
  },
  {
    qid: 109,
    question:
      "What is the correct jQuery code to set the background color of all p elements to red?",
    options: [
      '$("p").layout("background-color","red");',
      '$("p").manipulate("background-color","red");',
      '$("p").style("background-color","red");',
      '$("p").css("background-color","red");',
    ],
    correct_answer: 4,
  },
  {
    qid: 110,
    question:
      "Which jQuery method is used to perform an asynchronous HTTP request?",
    options: [
      "jQuery.ajaxAsync()",
      "jQuery.ajaxSetup()",
      "jQuery.ajax() ",
      "jQuery.ajaxAwait()",
    ],
    correct_answer: 3,
  },
  {
    qid: 111,
    question: "Which statement is true for a PRIMARY KEY constraint?",
    options: [
      "Primary key defines a realtionship between two tables.",
      "A table in SQL must have a primary key associated with it to uniquely identify its records.",
      "A table in SQL is indexed by default based on its primary key.",
      "Primary key may or may not be unique but can be comprised of multiple fields.",
    ],
    correct_answer: 3,
  },
  {
    qid: 112,
    question: "Which statement is false for a FOREIGN KEY constraint?",
    options: [
      "Foreign key defines a relationship between two tables.",
      "Foreign Key is automatically created when two tables are joined.",
      "Foreign Key uniquely identifies all the records in the referenced table.",
      "Foreign key may or may not be unique but can be comprised of multiple fields.",
    ],
    correct_answer: 2,
  },
  {
    qid: 113,
    question: 'Query to select all records with "xyz" in their name?',
    options: [
      'SELECT * FROM people WHERE name = "%xyz%";',
      'SELECT * FROM people WHERE name LIKE "%xyz%";',
      'SELECT * FROM people WHERE name IN ("xyz");',
      'SELECT * FROM people WHERE name = "_xyz_"',
    ],
    correct_answer: 2,
  },
  {
    qid: 114,
    question: "SQL query used to fetch unique values from a field?",
    options: [
      "SELECT UNIQUE COLUMN_NAME FROM table_name;",
      "SELECT DISTINCT COLUMN_NAME FROM table_name;",
      "SELECT COLUMN_NAME FROM table_name WHERE COUNT(COLUMN_NAME) = 1;",
      "SELECT UNIQUE COLUMN_NAME FROM table_name WHERE COUNT(COLUMN_NAME) = 1;",
    ],
    correct_answer: 2,
  },
  {
    qid: 115,
    question: "Which of the following is known as a virtual table in SQL?",
    options: ["Local temporary tables", "Global temporary tables", "VIEW", "NONE"],
    correct_answer: 3,
  },
  {
    qid: 116,
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: ["In the <body> section", "At the end of the document", "In the <head> section", "All of the above"],
    correct_answer: 3,
  },
  {
    qid: 117,
    question: "Which property is used to change the background color?",
    options: [
      "bgcolor",
      "background-color",
      "backgroundColor",
      "bg-color",
    ],
    correct_answer: 2,
  },
  {
    qid: 118,
    question: "Which Tag Is Used If You Want To Indicate The Importance Of The Phrase?",
    options: ["<h1>", "<em>", "<strong>", "<h2>"],
    correct_answer: 2,
  },
  {
    qid: 119,
    question: "Apart From <b> Tag, What Other Tag Makes Text Bold ?",
    options: [
      "<emp>",
      "<black>",
      "<fat>",
      "<strong>",
    ],
    correct_answer: 4,
  },
  {
    qid: 120,
    question:
      "How Can You Make A Bulleted List With Numbers?",
    options: ["<dl>", "<list>", "<ol>", "<ul>"],
    correct_answer: 3,
  },
];

export default questionsData;
