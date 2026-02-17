    const STORAGE_KEY = 'lovetosleep_username';
    const siteLaunchDate = new Date('2026-01-25T14:40:00');

const rawGreetings = [
        "15M 7 on 1 Comp StOmP No AiR NO ZeRG RUSH!!1!\" - %username% 1597.",
        "An nescis, mi fili, quantilla sapientia mundus regatur?",
        "Who in the world has Chinese food for breakfast? The Chinese?",
        "%username%, %username%…",
        "*** STOP (0x0000000A, 0x0000000A, 0x0000000A, 0x0000000A) IRQ_NOT_LESS_OR_EQUAL, %username%.",
        "Artichokes play football. Purple monkeys dance invisibly.",
        "Bite my shiny metal ass, %username%.",
        "Cпасибо, что зашли, %username%.",
        "Don’t panic, %username%!",
        "F5, %username%.",
        "If you got cojones, come on, mette mano.",
        "Jah’d never let us down, %username%.",
        "Russian sounds sexy, %username%!",
        "Solutions are not the answer, %username%.",
        "Soviet Russia owns teh Intarnet, %username%.",
        "Tetris is so unrealistic, %username%",
        "They killed %username%. Bastards!",
        "You found piles and piles of gold! Keep Clicking! Click like the wind!",
        "You have completed more work units than 89,795% of our users, %username%.",
        "fapfapfapfapfapfap, %username%!",
        "hakkabah hakkabah we hate the usa hakkabah marrakesh hakkabah, %username%.",
        "А мы построим свой Лунапарк, %username%! С блэкджеком и шлюхами!",
        "А ты знаешь, в чем соль, %username%?",
        "А ты пробовал лизать октаэдр, %username%?",
        "А что ты можешь противопоставить бездушной американской машине, %username%?",
        "Аллах прекрасен и любит всё прекрасное, %username%.",
        "Анекдоты о блондинках высмеивают арийский тип, %username%!",
        "Береги колени, %username%",
        "Благословен ты в городе, и благословен на поле, %username%.",
        "В наборе детских кубиков буквы «Х», «У» и «Й» всегда находятся на одном кубике, %username%",
        "В среду выборы, %username%",
        "Ваш горизонт завален, %username%.",
        "Вообще-то я не религиозный человек, но если ты есть там наверху, спаси меня, %username%.",
        "Вред от курения вообще не доказан, это просто байка, %username%.",
        "Все что вы здесь видете, далжно оставатся сикретам, %username%.",
        "Вы ввели неправильное имя или пароль, %username%, попробуйте еще раз.",
        "Вы не дождетесь новых приветствий, %username%.",
        "Вы не ошиблись дверью, %username%?",
        "Вы тоже имеете право на личную жизнь, %username%.",
        "Высокохохолковый пингвин, %username%, это единственный пингвин в мире, который может шевелить своим хохолком.",
        "Где мой йогурт, %username%?",
        "Геббельс был ученым, поэтом и музыкантом, %username%.",
        "Глаз страуса больше, чем его мозг, %username%.",
        "Если руки золотые, то не важно откуда они растут, %username%.",
        "Затоптать муравья не так просто, как кажется, %username%.",
        "Здравствуйте, %username%.",
        "Из человека получается семь кусков мыла, %username%!",
        "Индейка - единственный зверь хитрее человека, %username%.",
        "Кто спит - тот видит только сны, %username%.",
        "Куда вы дели мой ваучер, %username%?",
        "Купите икону «Неупиваемая чаша» и молитесь, %username%!",
        "lovetosleep - простреленное колено Израилево, %username%.",
        "Мы верим в ваc, %username%. Нет, правда.",
        "Мы надеемся, что вы любите Новое Правительство, %username%.",
        "Надеюсь, приятно проводите время, %username%.",
        "Надо делать то, что нужно людям, а не то, чем мы занимаемся, %username%.",
        "Не верьте тому, что пишут перед вашим псевдонимом, %username%.",
        "Нет, %username%, учёные не такие дураки!",
        "Носороги не играют в игры, %username%.",
        "Ну и отлично, %username%!",
        "Он выпустил на свободу Разум биологов, %username%!",
        "Патрис Лумумба родился 2 июля, %username%!",
        "Дима жив, %username%",
        "Передайте женщине соль, %username%.",
        "Подростки - не целевая аудитория табачных компаний, %username%.",
        "Попытка - первый шаг к провалу, %username%.",
        "По тебе плачет эстрада, %username%.",
        "Прислушивайтесь к голосам в вашей голове, %username%.",
        "Продолжайте кликать %username%! Во имя всего святого, продолжайте кликать!",
        "Реквизит должен быть съеден, %username%",
        "Самоубийцы дискредитировали самоубийство, %username%.",
        "Сегодня вас ждёт приятная неожиданность, %username%!",
        "Слово «ЙА» - можно написать одной буквой, %username%.",
        "Тут никого нет, %username%! Никого! Никого, кроме тебя!",
        "У нас тут все либо умные, либо красивые, а вы хоть разорвитесь, %username%.",
        "Хочешь новых прикольных рингтонов? Выпрыгни в окно, %username%!",
        "Я слежу за тобой, %username%. И ты мне нравишься. (NOT GAY)",
        "%username% ненавидит детский сад",
        "%username%, вы самое слабое звено! Прощайте."
    ];

    const loginWrapper = document.getElementById('login-wrapper');
    const mainWrapper = document.getElementById('main-wrapper');
    const greetingDisplay = document.getElementById('greeting-display');
    const usernameInput = document.getElementById('username-input');
    const loginBtn = document.getElementById('login-btn');
    const authForm = document.getElementById('auth-form');
    const uptimeCounter = document.getElementById('uptime-counter');
    const logoutLink = document.getElementById('logout-link');

    const settingsTrigger = document.getElementById('settings-trigger');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsCloseBtn = document.getElementById('settings-close-btn');
    const changeNickForm = document.getElementById('change-nick-form');
    const newNickInput = document.getElementById('new-nick-input');
    
    const subtextUsername = document.getElementById('subtext-username');

    function init() {
        const storedName = localStorage.getItem(STORAGE_KEY);
        if (storedName) {
            showMain(storedName);
        } else {
            showLogin();
        }
        setInterval(updateUptime, 47);
    }

    function showLogin() {
        loginWrapper.classList.remove('hidden');
        mainWrapper.classList.add('hidden');
        setTimeout(() => usernameInput.focus(), 100);
    }

    function showMain(name) {
        loginWrapper.classList.add('hidden');
        mainWrapper.classList.remove('hidden');
        
        let greetingTemplate = rawGreetings[Math.floor(Math.random() * rawGreetings.length)];
        let finalGreeting = greetingTemplate.replace(/%username%/g, name).replace(/\$username/g, name);
        greetingDisplay.textContent = finalGreeting;

        subtextUsername.textContent = name;
    }

    function handleLogin() {
        const name = usernameInput.value.trim();
        if (name) {
            localStorage.setItem(STORAGE_KEY, name);
            showMain(name);
        } else {
            alert('Представьтесь, это важно.');
        }
    }

// ненужная параша нахуй с корабля    loginBtn.addEventListener('click', handleLogin);
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });

    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if(confirm('Вы действительно хотите покинуть lovetosleep?')) {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    });

    function updateUptime() {
        const now = new Date();
        let diff = now - siteLaunchDate;

        const msec = diff % 1000;
        const totalSeconds = Math.floor(diff / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const totalDays = Math.floor(totalHours / 24);
        
        const years = Math.floor(totalDays / 365);
        const remainingDaysAfterYears = totalDays % 365;
        const months = Math.floor(remainingDaysAfterYears / 30);
        const weeks = Math.floor((remainingDaysAfterYears % 30) / 7);
        const days = (remainingDaysAfterYears % 30) % 7;

        const nano = Math.floor(Math.random() * 999);

        function declOfNum(number, titles) {  
            const cases = [2, 0, 1, 1, 1, 2];  
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
        }

        const strYears = `${years} ${declOfNum(years, ['год', 'года', 'лет'])}`;
        const strMonths = `${months} ${declOfNum(months, ['месяц', 'месяца', 'месяцев'])}`;
        const strWeeks = `${weeks} ${declOfNum(weeks, ['неделя', 'недели', 'недель'])}`;
        const strDays = `${days} ${declOfNum(days, ['день', 'дня', 'дней'])}`;
        const strHours = `${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])}`;
        const strMin = `${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
        const strSec = `${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`;
        const strMs = `${msec} мс`;
        const strNano = `<span class="nano">${nano} нс</span>`;

        uptimeCounter.innerHTML = `${strYears}, ${strMonths}, ${strWeeks}, ${strDays}, ${strHours}, ${strMin}, ${strSec}, ${strMs}, ${strNano}`;
    }

    settingsTrigger.addEventListener('mouseenter', () => settingsTrigger.style.background = '#fff');
    settingsTrigger.addEventListener('mouseleave', () => settingsTrigger.style.background = '#f7f7f7');
    
    settingsTrigger.addEventListener('click', () => {
        settingsPanel.classList.toggle('open');
    });

    settingsCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        settingsPanel.classList.remove('open');
    });

    changeNickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newNick = newNickInput.value.trim();
        if(newNick) {
            localStorage.setItem(STORAGE_KEY, newNick);
            showMain(newNick); 
            newNickInput.value = '';
            settingsPanel.classList.remove('open');
        }
    });

    init();
