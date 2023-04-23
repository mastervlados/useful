let flag = true;
const message = "Введите температуру в градусах Цельсия";
let userInputCelsiusDegree;

while (flag) {
    userInputCelsiusDegree = parseInt(prompt(message));
    if (Number.isInteger(userInputCelsiusDegree)) {
        flag = false;
    } else {
        console.log("Error getting value. Must be int.");
    }     
}

const getFahrenheitDegree = (9 / 5) * userInputCelsiusDegree + 32;

alert(`Цельсий: ${userInputCelsiusDegree}, Фаренгейт: ${getFahrenheitDegree.toFixed(1)}`);