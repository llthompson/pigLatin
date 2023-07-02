const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const pigLatin = (word) => {
    const lowerWord = word.toLowerCase().trim();
    const firstLetter = lowerWord[0];
    const isVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);

    if (isVowel) {
        return `${lowerWord}yay`;
    } else {
        let prefix = '';
        let suffix = lowerWord;
        while (CONSONANTS.includes(suffix[0])) {
            prefix += suffix[0];
            suffix = suffix.substring(1);
        }
        return `${suffix}${prefix}ay`;
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
}

function playGame() {
    const input = document.getElementById('user-input').value;
    const getResult = pigLatin(input);
    displayResult(getResult);
}

document.getElementById('lets-go').addEventListener('click', playGame);

const resetGame = () => {
    document.getElementById('user-input').value = '';
    document.getElementById('result').textContent = '';
}