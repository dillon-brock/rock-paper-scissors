// IMPORT code to test here
import { score } from '../utils.js';

const test = QUnit.test;

test('scores games where user wins as 1', (expect) => {
    
    expect.equal(score('rock', 'scissors'), 1);
    expect.equal(score('paper', 'rock'), 1);
    expect.equal(score('scissors', 'paper'), 1);

});

test('scores games where computer wins as -1', (expect) => {

    expect.equal(score('rock', 'paper'), -1);
    expect.equal(score('paper', 'scissors'), -1);
    expect.equal(score('scissors', 'rock'), -1);

});

test('scores games where user and computer draw as 0', (expect) => {

    expect.equal(score('rock', 'rock'), 0);
    expect.equal(score('paper', 'paper'), 0);
    expect.equal(score('scissors', 'scissors'), 0);


});
