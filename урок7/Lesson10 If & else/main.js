const quizData = [
    {
        question:"What does HTML stand for?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup laguage",
        c: "Hyperloop Machine Language",
        correct: "b",
    },
    {
        question: "What doaes CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cars Suvs Sailboats",
        c: "Central Style Sheets",
        correct: "a",
    },
    {
        question: "What year did JavaScript appear?",
        a: "1889",
        b: "2005",
        c: "1995",
        correct: "c",
    },
    {
        question: "Who is the author of the JvaScript language?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        correct: "b",
    },
    {
        question: "What language is this project written in?",
        a: "JvaScript",
        b: "Body",
        c: "C++",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = documet.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();
    
    const currentQuizData = quizData[currrentQuiz];

    question.answerElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.array.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
        score++;
    }

    currentQuiz++;

    if(currentQuiz <quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h2>You answered corectly at ${score}/${quizData.length} questions</h2>
        <button onclick="location.reload()">Reload</button>`
    }
}

});