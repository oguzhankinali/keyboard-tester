const harf = document.querySelector("#keyText");
const tus = document.querySelector("#codeText");
const basilanTuslar = document.querySelector("#pressedKeys");
const keyDisplay = document.querySelector("#keyDisplay");

const clickSes = new Audio("click.mp3");

const tusKumesi = new Set();

// ==========================================
// 1. Dinleyicileri Tetikleme 
// ==========================================
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// ==========================================
// 2. Sadece Arayüzü Güncelleyen Fonksiyon 
// ==========================================
function updateUI(mainText, subText, codeText, allKeysText) {
    keyDisplay.textContent = mainText;
    harf.textContent = subText;
    tus.textContent = codeText;
    basilanTuslar.textContent = allKeysText;
}

// ==========================================
// 3. Çoklu Tuş Metnini Hazırlayan Fonksiyon 
// ==========================================
function getFormattedKeys() {
    if (tusKumesi.size === 0) {
        return "Henüz bir tuşa basmadınız.";
    }
    return Array.from(tusKumesi).join(" + ");
}

// ==========================================
// 4. Olay Dinleyicileri 
// ==========================================
function handleKeyDown(e) {
    clickSes.currentTime = 0;
    clickSes.play();
    const currentKey = (e.key === " ") ? "Space" : e.key;
    const formattedKey = currentKey.toUpperCase();

    tusKumesi.add(e.code);

    updateUI(formattedKey, formattedKey, e.code, getFormattedKeys());
}

function handleKeyUp(e) {
    tusKumesi.delete(e.code);
    basilanTuslar.textContent = getFormattedKeys();
}



window.addEventListener("blur", () => {
    tusKumesi.clear();
    basilanTuslar.textContent = "Henüz bir tuşa basmadınız.";
});