// import needed modules
import { getRandomThrow, score } from './utils.js';

// state
let choosing = true;
let wins = 0;
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
            break;
        case -1:
            winner = 'computer';
            break;
    }
    totalGames++;

    choosing = false;

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

function displayResults() {

    console.log(choosing);

    const resultsSection = document.getElementById('results-section');
    const chooseSection = document.getElementById('choose-section');

    const userThrowSection = document.getElementById('user-throw-section');
    const computerThrowSection = document.getElementById('computer-throw-section');

    if (choosing === true) {
        resultsSection.classList.add('hidden');
        chooseSection.classList.remove('hidden');
        console.log('should show choosing section');
    }
    else {
        resultsSection.classList.remove('hidden');
        chooseSection.classList.add('hidden');
        console.log('should show results section');
        switch (winner) {
            case 'user':
                userThrowSection.classList.add('win');
                userThrowSection.classList.remove('lose');
                computerThrowSection.classList.add('lose');
                computerThrowSection.classList.remove('win');
                break;
            case 'draw':
                userThrowSection.classList.remove('win');
                userThrowSection.classList.remove('lose');
                computerThrowSection.classList.remove('win');
                computerThrowSection.classList.remove('lose');
                break;
            case 'computer':
                userThrowSection.classList.remove('win');
                userThrowSection.classList.add('lose');
                computerThrowSection.classList.remove('lose');
                computerThrowSection.classList.add('win');
                break;

        }
    }
}

const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', () => {
    choosing = true;
    displayResults();
});

// page load actions
displayResults();

