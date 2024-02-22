const quizQuestions=[
    {
        question:"What is the correct way to call the random method on the Math global object?",
        choices:["Math.random() "," Math(random) ","random.Math() ","math.random() "],
        answer:"Math.random()",
    },
    {
        question:"Which of the following is an example of a single line comment?",
        choices:["// Is this a comment? ","console.log('Is this a comment?'); ","console.log() ","// Is this a comment? "],
        answer:"// Is this a comment? ",
    },
    {
        question:"What is the correct way to call a string’s built-in method?",
        choices:["toUpperCase('codecademy'); "," toUpperCase.'codecademy'() ","'codecademy'.toUpperCase();","'codecademy'.topupercase() "],
        answer:"'codecademy'.toUpperCase(); ",
    },
];

function displayQuestion() {
    const questionIndex= Math.floor(Math.random() * quizQuestions.length);
    const correctAnswer = quizQuestions[questionIndex];
    console.log(correctAnswer.question);
    correctAnswer.choices.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    const userAnswer = (console.log("Enter your answer (by entering the option number):"));
    if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer <= correctAnswer.choices.length) {
        const selectedOption = correctAnswer.choices[userAnswer - 1];
        if (selectedOption === correctAnswer.answer) {
            console.log("Correct answer!");
            return 1;
        } else {
            console.log("Incorrect answer. The Answer is:", correctAnswer.answer);
            return 0;
        }
    } else {
        console.log("Invalid input. Please enter a valid option number.");
        return 0;
    }
}

function AnswerQuestions() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        score += displayQuestion();
    }
    console.log("Quiz completed! Your final score is:", score, "out of", quizQuestions.length);
}

AnswerQuestions();
