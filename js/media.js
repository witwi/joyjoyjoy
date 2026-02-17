const db = [
    {
        name: "Yume Nikki",
        desc: "<b>Любимое!</b><br><br>Сюрреалистичный симулятор ходьбы по снам.<br><br>Иногда играю на юно.",
        link: "https://store.steampowered.com/app/650700/Yume_Nikki/",
        img: "fd/yume.png"
    },
    {
        name: "Cat Soup",
        desc: "Короткометражное аниме (и манга) про двух котят. Очень красивое!",
        link: "https://read-nekojiru.neocities.org/about",
        img: "fd/neko.jpg"
    },
    { name: "Lain", desc: "<br><br><i>'No matter where you are, everyone is always connected.'</i>", link: "https://fauux.neocities.org/Love", img: "fd/lain.jpg" },
    { name: "Milk inside...", desc: "Короткая визуальная новелла. Основной акцент сделан на восприятии мира главной героиней и её внутренних монологах. Визуал очень специфический.", link: "https://store.steampowered.com/app/1392820/", img: "fd/milk.png" },
    { name: "Psychopomp", desc: "На лифтах под общественные здания. Никто больше ничего не скроет от меня.", link: "https://fadingclub.neocities.org/psychopomp", img: "fd/pomp.jpg" },
    { name: "OFF", desc: "<i>Purification in Progress.</i>", link: "https://offtherpg.com/", img: "fd/off.jpg" },
    { name: "Yume 2kki", desc: "Огромный фанатский проект по мотивам Yume Nikki.", link: "https://ynoproject.net/2kki/", img: "fd/2kki.jpg" },
    { name: ".flow", desc: "Более мрачная фан-игра по Yume Nikki.", link: "#", img: "fd/flow.jpg" },
    { name: "Omori", desc: "<i>'Waiting for something to happen?'</i>", link: "#" },
    { name: "Okegom", desc: "Игры от Deep-Sea Prisoner.<br><br><i>Moge-ge-ge!</i>", link: "#" },
    { name: "PaRappa", desc: "<i>'I gotta believe!'</i><br><br>Забавная ритм-игрa.", link: "#" },
    { name: "Evangelion", desc: "Мехи!", link: "#" },
    { name: "SS14", desc: "Симулятор смен на космической станции.", link: "#" },
    { name: "HLVRAI", desc: "<i>'Look Gordon, ropes!'</i><br><br>Комедийное шоу про Фримена и научную команду.", link: "#" },
    { name: "Postal", desc: "<i>'I regret nothing.'</i><br><br>Про плохую неделю в маленьком городе.", link: "#" },
    { name: "Hollow Knight", desc: "<i>'No cost too great.'</i><br><br>Красивая и сложная игра про павшее королевство жуков.", link: "#" },
    { name: "Cry of Fear", desc: "Психологический хоррор и город в Швеции.", link: "#" },
    { name: "Disco Elysium", desc: "<i>'Sunrise, Parabellum.'</i><br><br>РПГ про детектива-алкоголика и голоса в его голове.", link: "#" },
    { name: "TF2", desc: "<i>'I have yet to meet one that can outsmart bullet.'</i><br><br>Бессмертный командный шутер от Valve.", link: "#" },
    { name: "Isaac", desc: "Рогалик про мальчика в подвале.", link: "#" },
    { name: "L4D", desc: "<i>'Pills here!'</i><br><br>Классика зомби-шутеров.", link: "#" },
    { name: "Signalis", desc: "<i>'Remember our promise.'</i><br><br>Космический хоррор про репликантов.", link: "#" },
    { name: "Hello Charlotte", desc: "Сюрреалистичная серия игр про девочку Шарлотту.", link: "#" },
    { name: "DDLC", desc: "Визуальная новелла, психологический хоррор", link: "#" },
    { name: "Stardew Valley", desc: "Уютная ферма.", link: "#" },
    { name: "Terraria", desc: "<i>'You feel an evil presence watching you...'</i><br><br>2D песочница.", link: "#" },
    { name: "Witch's House", desc: "Хоррор на RPG Maker про ловушки в доме ведьмы.", link: "#" },
    { name: "Silent Hill", desc: "<i>'In my restless dreams, I see that town...'</i><br><br>Туманный город.", link: "#" },
    { name: "Mad Father", desc: "<i>'Father's dolls are so beautiful.'</i><br><br>Про девочку Аю и страшные секреты её отца.", link: "#" },
    { name: "Cruelty Squad", desc: "Тактический шутер в безумном мире будущего. Специфическая графика.", link: "#" },
    { name: "Girls' Last Tour", desc: "Постапокалипсис, где две девочки путешествуют по мертвому городу.", link: "#" },
    { name: "Litchi Club", desc: "История про клуб школьников и их механического бога.", link: "#" },
    { name: "MLP", desc: "<i>'Friendship is magic.'</i><br><br>Просто добрый мультик.", link: "#" },
    { name: "Higurashi", desc: "Когда плачут цикады. Деревенская мистика и временные петли.", link: "#" },
    { name: "Katawa Shoujo", desc: "<i>'Comfort is a slow death.'</i><br><br>Про школу для инвалидов.", link: "#" },
];

const rack = document.getElementById('rack');
const overlay = document.getElementById('overlay');
const winTitle = document.getElementById('win-title');
const fHeader = document.getElementById('f-header');
const fText = document.getElementById('f-text');
const infoPanel = document.getElementById('info-panel');
const cdArtLayer = document.getElementById('cd-art-layer');

let currentDrive = null;
let currentLink = "#";

for (let i = 0; i < db.length; i += 4) {
    const chunk = db.slice(i, i + 4);
    const tower = document.createElement('div');
    tower.className = 'tower-block';
    tower.innerHTML = `<div class="tower-header">IDE CHANNEL 0${Math.floor(i / 4)}</div>`;

    chunk.forEach(item => {
        const drive = document.createElement('div');
        drive.className = 'drive-unit';
        drive.innerHTML = `
                <div class="drive-tray">
                    <div class="led"></div>
                    <span style="margin-left:15px;">${item.name}</span>
                </div>
                <div class="btn-eject"></div>
            `;
        drive.onclick = () => openDrive(drive, item);
        tower.appendChild(drive);
    });
    rack.appendChild(tower);
}

function openDrive(driveEl, item) {
    if (currentDrive === driveEl) return;
    if (currentDrive) {
        currentDrive.classList.remove('ejected');
        currentDrive.classList.remove('reading');
    }
    currentDrive = driveEl;
    driveEl.classList.add('ejected');
    driveEl.classList.add('reading');
    setTimeout(() => {
        launchAutorun(item);
        driveEl.classList.remove('reading');
    }, 800);
}

function launchAutorun(item) {
    winTitle.innerText = `${item.name} Setup`;
    fHeader.innerText = item.name;
    fText.innerHTML = item.desc;
    currentLink = item.link;
    if (item.img && item.img.length > 0) {
        cdArtLayer.style.backgroundImage = `url('${item.img}')`;
    } else {
        cdArtLayer.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" font-size="20" fill="black" text-anchor="middle" dy=".3em" opacity="0.3">${item.name.substring(0, 8)}</text></svg>')`;
    }
    infoPanel.classList.remove('visible');
    overlay.classList.add('active');
}

function openLink() {
    if (currentLink && currentLink !== "#") {
        window.open(currentLink, '_blank');
    } else {
        alert('Ссылка не указана.');
    }
}

function closeWindow() {
    overlay.classList.remove('active');
    if (currentDrive) {
        currentDrive.classList.remove('ejected');
        currentDrive = null;
    }
}

function showInfo() { infoPanel.classList.add('visible'); }
function hideInfo() { infoPanel.classList.remove('visible'); }
