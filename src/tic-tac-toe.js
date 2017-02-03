const X = 'x';
const O = 'o';
const EMPTY = null;
const SIZE = 3;

class TicTacToe {
    constructor() {
        this.currentPlayer = X;

        this.field = [];
        for (var i = 0; i < SIZE; i++) {
            this.field[i] = [];
            for (var j = 0; j < SIZE; j++) {
                this.field [i][j] = EMPTY;
            }
        this.count = 0;    
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === EMPTY) {
            this.field [rowIndex][columnIndex] = this.currentPlayer;
            this.count ++;
            if (this.currentPlayer === X)
                this.currentPlayer = O;
            else this.currentPlayer = X;
        }
    }

    isFinished() {
        return this.getWinner() === X || this.getWinner() === O || this.isDraw();
    }

    getWinner() {
        var isWinner = true;
        var winner;
        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE - 1; j++) {
                if(this.field[i][j] === this.field[i][j + 1] && this.field[i][j] != EMPTY) {
                    isWinner = true;
                    winner = this.field [i][j];
                }
                else {
                    isWinner = false;
                    break;
                }
            }
            if (isWinner) {
                return winner;
            }
        }

        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE - 1; j++) {
                if(this.field[j][i] === this.field[j + 1][i] && this.field[j][i] != EMPTY) {
                    isWinner = true;
                    winner = this.field [j][i];
                }
                else {
                    isWinner = false;
                    break;
                }
            }
            if (isWinner) {
                return winner;
            }
        }

        for (var i = 0; i < SIZE - 1; i++) {
            if (this.field[i][i] === this.field[i + 1][i + 1] && this.field[i][i] != EMPTY) {
                isWinner = true;
                winner = this.field[i][i];
            }
            else {
                isWinner = false;
                break;
            }
        }
        if (isWinner) {
            return winner;
        }

        for (var i = 0; i < SIZE - 1; i++) {
            if (this.field[2 - i][i] === this.field[1 - i][1 + i] && this.field[2 - i][i] != EMPTY) {
                isWinner = true;
                winner = this.field[2 - i][i];
            }
            else {
                isWinner = false;
                break;
            }
        }
        if (isWinner) {
            return winner;
        }

        return null;
    }

    noMoreTurns() {
        if (this.count >= 9)
            return true;
        else return false;
    }

    isDraw() {
        if (this.noMoreTurns()) {
             return this.getWinner() === null;
        }
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
