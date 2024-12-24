// Kullanıcı Adını Alma Ve Ekrana Yazdırma :

const userName = prompt("Adınız Nedir ?");
document.getElementById("myName").textContent = userName;

// Saat Ve Tarih Fonksiyonu :

function showTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString("tr-TR", { weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById("myClock").textContent = currentTime;
    setTimeout(showTime, 1000);

}
showTime();

