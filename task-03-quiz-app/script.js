const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Markup", "None"],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "Java", "CSS", "Python"],
        answer: 2
    },
    {
        question: "Which is not a programming language?",
        options: ["Java", "Python", "HTML", "C++"],
        answer: 2
    }
];
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
    });
}
function selectAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
function showResult() {
    document.querySelector(".quiz-container").innerHTML =
        `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

loadQuestion();
