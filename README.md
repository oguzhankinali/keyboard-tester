# Klavye Test Merkezi (Keyboard Tester)

Bu proje; bilgisayar klavyenizdeki tuşların çalışıp çalışmadığını, tuş kodlarını (Key Code) ve aynı anda birden fazla tuşa basılma durumlarını (Multi-press) test etmenizi sağlayan dinamik ve modern bir web uygulamasıdır. 

##  Canlı Önizleme
Uygulamayı canlıda test etmek için [buraya tıklayabilirsiniz](https://oguzhankinali.github.io/keyboard-tester/).

##  Özellikler
* **Anlık Tuş Analizi:** Basılan tuşun karakter karşılığını ve işletim sistemi seviyesindeki `e.code` değerini anında gösterir.
* **Çoklu Tuş Desteği (Simultaneous Multi-press):** JavaScript `Set` veri yapısı kullanılarak, aynı anda basılı tutulan tüm tuşlar gerçek zamanlı olarak ekranda listelenir (`Ctrl + Shift + W` vb.).
* **Mekanik Tuş Sesi Etkileşimi:** Her tuşa basıldığında mekanik klavye tıklama sesi simüle edilir. 
* **Gelişmiş Ses Yönetimi (Mute/Unmute State):** Kullanıcı arayüzündeki buton aracılığıyla tuş sesleri dinamik olarak kapatılıp açılabilir.
* **Spam ve Odak Kaybı Koruması:** Klavye basılı tutulduğunda oluşan `e.repeat` tetiklemeleri engellenmiştir. Ayrıca tarayıcı sekmesi odağını kaybettiğinde (`blur` olayı) basılı kalan tuş listesi otomatik olarak temizlenir.

##  Kullanılan Teknolojiler
* **HTML5:** Temiz ve semantik içerik yapısı.
* **CSS3:** Koyu tema (Dark Mode) odaklı, minimalist ve modern kart tasarımları.
* **JavaScript (ES6+):** Gelişmiş Klavye Olayları (`keydown`, `keyup`), Durum Yönetimi (State Management) ve HTML5 Audio API.

##  Yerel Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak isterseniz:

1. Projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/oguzhankinali/keyboard-tester.git](https://github.com/oguzhankinali/keyboard-tester.git)
