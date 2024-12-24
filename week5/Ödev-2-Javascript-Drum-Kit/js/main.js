const keySoundMap={
    A: "asset/sounds/boom.wav",
    S: "asset/sounds/clap.wav",
    D: "asset/sounds/hihat.wav",
    F: "asset/sounds/kick.wav",
    G: "asset/sounds/openhat.wav",
    H: "asset/sounds/ride.wav",
    J: "asset/sounds/snare.wav",
    K: "asset/sounds/tink.wav",
    L: "asset/sounds/tom.wav",
    
}

//Tüm Butonları Seçmek için
const buttons = document.querySelectorAll("button");


//Buton tıklama olayını dinleme
buttons.forEach((button)=> {
    button.addEventListener("click", ()=>{
        const key = button.textContent;
        playSound(key);
    });

});

//Klavyeden tuşlara basıldığında sesi çalma
document.addEventListener("keydown" , (event) =>{
    const key = event.key.toUpperCase();
    if (keySoundMap[key]){
        playSound(key);
    }
});

//Ses oynatma fonksiyonu
function playSound(key){
    const soundPath=keySoundMap[key];
    if(soundPath){
        const audio = new Audio(soundPath);
        audio.play();
    }
}