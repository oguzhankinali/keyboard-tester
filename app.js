const harf = document.querySelector("#keyText");
const tus = document.querySelector("#codeText");
const basilanTuslar = document.querySelector("#pressedKeys");
const keyDisplay = document.querySelector("#keyDisplay");

const activeKeys = new Set();

document.addEventListener("keydown", (e) => {
    const currentKey = e.key === " " ? "Space" : e.key;
    keyDisplay.textContent = currentKey;

    harf.textContent = currentKey;
    tus.textContent = e.code;

    activeKeys.add(e.code);
    basilanTuslar.textContent = Array.from(activeKeys).join(" + ");

    keyDisplay.style.transform = "scale(0.95)";
    setTimeout(() => {
        keyDisplay.style.transform = "scale(1)";
    }, 100);
});

document.addEventListener("keyup", (e) => {
    activeKeys.delete(e.code);
    if (activeKeys.size === 0) {
        basilanTuslar.textContent = "Henüz bir tuşa basılmadı";
    } else {
        basilanTuslar.textContent = Array.from(activeKeys).join(" + ");
    }
});