import greet from "./greet.js";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const greetMessage = greet("Abhishek");
console.log(greetMessage);
