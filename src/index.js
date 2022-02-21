const messages = [
    "Karen",
    "Pedro", 
    "Alejandro", 
    "Rodolfo",
    "Ana",
    "Kevin",
    "Stiven",
    "Katherine",
    "Sharoll",
    "Adonay",
    "Isaida",
    "Eduber",
    "Yeneiris",
    "Laura",
    "Ashley",
    "Lina",
    "Dilan",
    "Fernando",
    "Jonathan",
    "Dylan",
    "Wendy",
    "Angelino"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};