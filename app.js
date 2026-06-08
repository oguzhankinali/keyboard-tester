const harf = document.querySelector("#keyText");
const tus = document.querySelector("#codeText")
const basilanTuslar = document.querySelector("#pressedKeys")
const keyDisplay = document.querySelector("#keyDisplay")


document.addEventListener("keydown", f);

function f(e) {
    console.log(e.key);
}