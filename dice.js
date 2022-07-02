const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //obtenir un chiffre aléatoire entre les bornes

const rollDice4 = () => getRandomNumber(1, 4); //établissement des bornes pour un d4
const rollDice6 = () => getRandomNumber(1, 6); //établissement des bornes pour un d6
const rollDice8 = () => getRandomNumber(1, 8); //établissement des bornes pour un d8
const rollDice10 = () => getRandomNumber(1, 10); //établissement des bornes pour un d10
const rollDice12 = () => getRandomNumber(1, 12); //établissement des bornes pour un d12
const rollDice20 = () => getRandomNumber(1, 20); //établissement des bornes pour un d20
const rollDice100 = () => getRandomNumber(1, 100); //établissement des bornes pour un d100

//d4
document.getElementById("rolld4").addEventListener("click", function () {
    //aller chercher le nom du joueur
    const player1 = document.getElementById("player1").value;

    //lancer le dé pour le joueur
    const player1Score = rollDice4();

    //montrer le résultat sur la page
    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d4 !</p>
    <p>${player1Score}</p>
    `;
});

//d6
document.getElementById("rolld6").addEventListener("click", function () {
    const player1 = document.getElementById("player1").value;

    const player1Score = rollDice6();

    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d6 !</p>
    <p>${player1Score}</p>
    `;
});

//d8
document.getElementById("rolld8").addEventListener("click", function () {
    const player1 = document.getElementById("player1").value;

    const player1Score = rollDice8();

    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d8 !</p>
    <p>${player1Score}</p>
    `;
});

//d10
document.getElementById("rolld10").addEventListener("click", function () {
    const player1 = document.getElementById("player1").value;

    const player1Score = rollDice10();

    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d10 !</p>
    <p>${player1Score}</p>
    `;
});

//d12
document.getElementById("rolld12").addEventListener("click", function () {
    const player1 = document.getElementById("player1").value;

    const player1Score = rollDice12();

    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d12 !</p>
    <p>${player1Score}</p>
    `;
});

//d20
document.getElementById("rolld20").addEventListener("click", function () {
    const player1 = document.getElementById("player1").value;

    const player1Score = rollDice20();

    document.getElementById("results").innerHTML = `
    <p>${player1} a lancé le d20 !</p>
    <p>${player1Score}</p>
    `;
});
