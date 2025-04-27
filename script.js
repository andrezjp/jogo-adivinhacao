let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultDiv = document.getElementById('result');
    const attemptsDiv = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDiv.innerHTML = 'Por favor, insira um número entre 1 e 100.';
        return;
    }

    attemptsLeft--;

    if (userGuess === secretNumber) {
        resultDiv.innerHTML = 'Parabéns! Você acertou!';
        resultDiv.style.color = 'green';
        attemptsDiv.innerHTML = '';
        disableInput();
    } else if (userGuess < secretNumber) {
        resultDiv.innerHTML = 'O número secreto é maior!';
        resultDiv.style.color = 'blue';
    } else {
        resultDiv.innerHTML = 'O número secreto é menor!';
        resultDiv.style.color = 'blue';
    }

    if (attemptsLeft === 0 && userGuess !== secretNumber) {
        resultDiv.innerHTML = 'Você esgotou suas tentativas! O número secreto era ' + secretNumber + '.';
        resultDiv.style.color = 'red';
        attemptsDiv.innerHTML = '';
        disableInput();
    } else {
        attemptsDiv.innerHTML = 'Tentativas restantes: ' + attemptsLeft;
    }

    document.getElementById('guess').value = '';
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
