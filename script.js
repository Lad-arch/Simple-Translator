// Словарь, реализованный через Map
const dictionary = new Map([
    
    ["hi", "прив."],
    ["hello", "привет"],
    ["world", "мир"],
    ["apple", "яблоко"],
    ["cat", "кот"],
    ["dog", "собака"],
    ["car", "машина"],
    ["love", "любовь"],
    ["friend", "друг"],
    ["school", "школа"],
    ["computer", "компьютер"],

    ["привет", "hello"],
    ["мир", "world"],
    ["яблоко", "apple"],
    ["кот", "cat"],
    ["собака", "dog"],
    ["машина", "car"],
    ["любовь", "love"],
    ["друг", "friend"],
    ["школа", "school"],
    ["компьютер", "computer"]
]);

const wordInput = document.getElementById('word-input');
const resultElement = document.getElementById('result');
const suggestionsElement = document.getElementById('suggestions');

// Функция отображения подсказок
function showSuggestions(input) {
    const suggestions = [];
    const lowerInput = input.toLowerCase();

    if (lowerInput) {
        for (const [word, translation] of dictionary) {
            if (word.startsWith(lowerInput)) {
                suggestions.push({ word, translation });
            }
        }
    }

    // Очистить текущие подсказки
    suggestionsElement.innerHTML = "";

    if (suggestions.length > 0) {
        suggestions.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.word} — ${item.translation}`;
            li.addEventListener('click', () => {
                wordInput.value = item.word;
                resultElement.textContent = `Translation: ${item.translation}`;
                suggestionsElement.innerHTML = ""; // Очистить подсказки
            });
            suggestionsElement.appendChild(li);
        });
    }
}

// Событие на ввод текста
wordInput.addEventListener('input', () => {
    const word = wordInput.value.trim().toLowerCase();

    if (word === "") {
        resultElement.textContent = "Enter the word to translate";
        suggestionsElement.innerHTML = ""; // Очистить подсказки
    } else if (dictionary.has(word)) {
        resultElement.textContent = `Translation: ${dictionary.get(word)}`;
        showSuggestions(word);
    } else {
        resultElement.textContent = "Translation not found";
        showSuggestions(word);
    }
});
