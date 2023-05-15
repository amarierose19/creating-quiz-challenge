const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));


let currentQuestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        questions: "What is 5 + 10",
        choice1: "12",
        choice2: "11",
        choice3: "15",
        choice4: "100",
        answer: 3
    },
    {
        questions: "How many points are on a triangle?",
        choice1: "4",
        choice2: "3",
        choice3: "1",
        choice4: "6",
        answer: 2
    },
    {
        questions: "Who is the best Youtuber in the world (my opinion)?",
        choice1: "Logan Paul",
        choice2: "KSI",
        choice3: "Jake Paul",
        choice4: "CoryxKenshin",
        answer: 4
    },
    {
        questions: "What Pokemon game takes place in the Hoenn region?",
        choice1: "Emerald",
        choice2: "FireRed",
        choice3: "Platinum",
        choice4: "LeafGreen",
        answer: 1
    },
    {
        questions: "Who is the boss in the Regular Show?",
        choice1: "Skips",
        choice2: "Rigby",
        choice3: "Mordecai",
        choice4: "Benson",
        answer: 4
    },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestions();
};

getNewQuestions = () => {
    
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
       // GO TO THE END PAGE
       return window.location.assign("/end.html"); 
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestions = availableQuestions[questionIndex];
        question.innerText = currentQuestions.questions;
        choices.forEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestions['choice' + number];
       
       
        });

        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        getNewQuestions();

    });
})

startGame();