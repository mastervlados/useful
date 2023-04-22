function getRandomInt(dimension) {
    return Math.floor(Math.random() * dimension);
}
  
function greeting(userName) {
    const labels = [
        `Hello, ${userName}! How's going?`,
        `Yo, ${userName}! How you feel it?`,
        `JavaScript is solute you, ${userName}! How is it possible?`,
        `Good to see you again, ${userName}.`,
    ]
    const getRandomIndex = getRandomInt(labels.length); // 0, 1 or 2
    alert(labels[getRandomIndex]);
}

const userInputName = prompt("Введите свое имя:");
greeting(userInputName);