const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');

    if (board[cellIndex] !== '' || !gameActive) return;

    board[cellIndex] = currentPlayer;
    event.target.querySelector('i').classList.add(`fa-${currentPlayer === 'X' ? 'times' : 'circle'}`);
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            alert(`Player ${board[a]} wins!`);
            return;
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        alert('It\'s a draw!');
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.querySelector('i').className = 'fa');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
