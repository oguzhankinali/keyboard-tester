const harf = document.querySelector("#keyText");
const tus = document.querySelector("#codeText");
const basilanTuslar = document.querySelector("#pressedKeys");
const keyDisplay = document.querySelector("#keyDisplay");
const audioToggleBtn = document.querySelector("#audioToggleBtn"); // 👈 Element seçildi

const clickSes = new Audio("click.mp3");
const tusKumesi = new Set();

// 🔊 SES DURUMU (State Management): İlk başta ses açık (false)
let isMuted = false;

// ==========================================
// 1. Dinleyicileri Tetikleme 
// ==========================================
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
audioToggleBtn.addEventListener("click", toggleAudio); // 👈 Buton dinleyicisi

// ==========================================
// 2. Ses Açma / Kapama Fonksiyonu
// ==========================================
function toggleAudio() {
    audioToggleBtn.blur();
    isMuted = !isMuted;

    if (isMuted) {
        audioToggleBtn.textContent = "Sesi Aç";
        audioToggleBtn.classList.add("muted");
    } else {
        audioToggleBtn.textContent = "Sesi Kapat";
        audioToggleBtn.classList.remove("muted");
    }
}

// ==========================================
// 3. Sadece Arayüzü Güncelleyen Fonksiyon 
// ==========================================
function updateUI(mainText, subText, codeText, allKeysText) {
    keyDisplay.textContent = mainText;
    if (harf) harf.textContent = subText;
    tus.textContent = codeText;
    basilanTuslar.textContent = allKeysText;
}

// ==========================================
// 4. Çoklu Tuş Metnini Hazırlayan Fonksiyon 
// ==========================================
function getFormattedKeys() {
    if (tusKumesi.size === 0) {
        return "Henüz bir tuşa basmadınız.";
    }
    return Array.from(tusKumesi).join(" + ");
}

// ==========================================
// 5. Olay Dinleyicileri 
// ==========================================
function handleKeyDown(e) {
    if (e.repeat) return; // Klavye spam koruması

    // 🔊 SES KONTROLÜ: Eğer isMuted true ise sesi çalma, aşağıya geç!
    if (!isMuted) {
        clickSes.currentTime = 0;
        clickSes.play();
    }

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