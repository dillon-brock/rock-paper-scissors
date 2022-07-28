export function getRandomThrow(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const compThrow = arr[random];
    return compThrow;
}

export function score(userThrow, computerThrow) {
    let gameResult;
    if (userThrow === computerThrow) {
        return 0;
    }
    else {
        switch (userThrow) {
            case 'rock':
                switch (computerThrow) {
                    case 'paper':
                        gameResult = -1;
                        break;
                    case 'scissors':
                        gameResult = 1;
                        break;
                }
                break;
            case 'paper':
                switch (computerThrow) {
                    case 'rock':
                        gameResult = 1;
                        break;
                    case 'scissors':
                        gameResult = -1;
                        break;
                }
                break;
            case 'scissors':
                switch (computerThrow) {
                    case 'rock':
                        gameResult = -1;
                        break;
                    case 'paper':
                        gameResult = 1;
                        break;
                }
                break;
        }
    }
    return gameResult;
}