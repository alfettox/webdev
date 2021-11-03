const quizData = [
    {
        question: 'Whats the correct spelling of to be at third person?',
        a: "am",
        b: "are",
        c: "is",
        d: "he",
        correct: "c",
    },
    {
        question: 'Whats the 3rd person present tense of to be',
        a: "have",
        b: "has",
        c: "had",
        d: "held",
        correct: "b",
    },
    {
        question: 'Whats the 3rd person present tense of to do in negative version',
        a: "do",
        b: "dont",
        c: "doesn't",
        d: "did",
        correct: "c"
    },
    {
        question: 'Whats my name',
        a: "Paolo",
        b: "Alessio",
        c: "Nicolo",
        d: "Giuliano",
        correct: "b" && "c",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () =>{
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">RESET</button>
            `;
        }
    }
});

//const progress_total = document.getElementById("progress_total");

//progress_total.innerText = currentQuiz;
