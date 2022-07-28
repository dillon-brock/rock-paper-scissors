// import needed modules
import { getRandomThrow, score } from './utils.js';

// state
let choosing = true;
let wins = 0;
let draws = 0;
let totalGames = 0;
let result = 0;
let winner = '';

let userThrow = '';
let computerThrow = '';
let possibleThrows = ['rock', 'paper', 'scissors'];


// components
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

function handleThrow() {

    computerThrow = getRandomThrow(possibleThrows);
    result = score (userThrow, computerThrow);

    switch (result) {
        case 1:
            winner = 'user';
            wins++;
            break;
        case 0:
            winner = 'draw';
            draws++;
            break;
        case -1:
            winner = 'computer';
            break;
    }
    totalGames++;

    choosing = false;

    displaySection();
    displayResults();

}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    userThrow = 'rock';
    handleThrow();
});
paperButton.addEventListener('click', () => {
    userThrow = 'paper';
    handleThrow();
});
scissorsButton.addEventListener('click', () => {
    userThrow = 'scissors';
    handleThrow();
});

function displaySection() {

    const resultsSection = document.getElementById('results-section');
    const chooseSection = document.getElementById('choose-section');

    const userThrowSection = document.getElementById('user-throw-section');
    const computerThrowSection = document.getElementById('computer-throw-section');

    const resultsText = document.getElementById('results-text');
    const userThrowText = document.getElementById('user-throw');
    const computerThrowText = document.getElementById('computer-throw');

    const userThrowImage = document.getElementById('user-throw-image');
    const computerThrowImage = document.getElementById('computer-throw-image');

    if (choosing === true) {
        resultsSection.classList.add('hidden');
        chooseSection.classList.remove('hidden');
    }
    else {
        resultsSection.classList.remove('hidden');
        chooseSection.classList.add('hidden');

        switch (winner) {
            case 'user':
                userThrowSection.classList.add('win');
                userThrowSection.classList.remove('lose', 'draw');
                computerThrowSection.classList.add('lose');
                computerThrowSection.classList.remove('win', 'draw');
                resultsText.textContent = 'You won!';
                break;
            case 'draw':
                userThrowSection.classList.remove('win', 'lose');
                computerThrowSection.classList.remove('win', 'lose');
                userThrowSection.classList.add('draw');
                computerThrowSection.classList.add('draw');
                resultsText.textContent = "It's a draw!";
                break;
            case 'computer':
                userThrowSection.classList.remove('win', 'draw');
                userThrowSection.classList.add('lose');
                computerThrowSection.classList.remove('lose', 'draw');
                computerThrowSection.classList.add('win');
                resultsText.textContent = 'You lost!';
                break;

        }

        userThrowText.textContent = userThrow;
        computerThrowText.textContent = computerThrow;

        userThrowImage.src = './assets/' + userThrow + '.png';
        computerThrowImage.src = './assets/' + computerThrow + '.png';
    }
}

const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', () => {
    choosing = true;
    displaySection();
});

function displayResults() {

    const winsDisplay = document.getElementById('wins-display');
    const drawsDisplay = document.getElementById('draws-display');
    const lossesDisplay = document.getElementById('losses-display');
    const totalGamesDisplay = document.getElementById('total-games-display');

    winsDisplay.textContent = wins;
    drawsDisplay.textContent = draws;
    lossesDisplay.textContent = totalGames - (wins + draws);
    totalGamesDisplay.textContent = totalGames;

}


// page load actions
displaySection();
displayResults();