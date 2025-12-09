document.addEventListener('DOMContentLoaded', () => {
    // 安全なHOMEボタン設定
    setTimeout(setupAllHomeButtons, 100);
    // --- Global Data ---
    let cardFeaturesData = {};
    let cardImplicationsData = {};

    // --- ESSENCE JOURNEY Questions (5 Main Levels x 3 Sub-stages) ---
    const questions = {
        "1-1": [
            "理想のデートはどんな場所？",
            "小さな幸せを感じるのはどんな瞬間？",
            "最近ハマってることは何？",
            "お気に入りの食べ物と飲み物は？",
            "好きな映画のジャンルは？",
            "どんな音楽でリラックスする？",
            "どんな天気の日にデートしたい？",
            "好きな香水や匂いは？",
            "どんな場所でリラックスできる？",
            "最近買ったお気に入りのものは？"
        ],
        "1-2": [
            "ペットを飼うとしたら何がいい？",
            "得意料理は何？",
            "カラオケの十八番は？",
            "最近笑った面白い出来事は？",
            "変な夢見たことある？",
            "どんなカフェが好き？",
            "やってみたいスポーツは？",
            "どんな本や漫画にハマってる？",
            "休日は何してる？",
            "朝起きて最初にすることは？"
        ],
        "1-3": [
            "海と山どちらが好き？",
            "コーヒーと紅茶どっち？",
            "甘いものと辛いものどっち？",
            "映画館と家での鑑賞どっち？",
            "朝型？夜型？",
            "アウトドア？インドア？",
            "大勢の飲み会と少人数どっち？",
            "LINEと電話どっち？",
            "お酒飲む？好きなお酒は？",
            "最近新しく始めたことある？"
        ],
        "2-1": [
            "どんな人に惹かれる？",
            "子供の頃の夢と今の現実のギャップは？",
            "人間関係で一番大事にしてることは？",
            "自分の性格の良いところと悪いところは？",
            "友達の前と恋人の前で性格変わる？",
            "結婚って必要だと思う？",
            "理想の家族ってある？",
            "仕事で一番大事だと思うことは？",
            "どんな時に心が温まる？",
            "憧れる人っている？"
        ],
        "2-2": [
            "自分が一番カッコいいと思う瞬間は？",
            "一番リラックスできるのはいつ？",
            "これから絶対叶えたい夢は？",
            "友達に感謝した瞬間は？",
            "自分を変えたいと思う瞬間は？",
            "恋がしたくなるのはどんな時？",
            "家族の大切さを感じる瞬間は？",
            "人生楽しいと思える瞬間は？",
            "大金があったら何に使う？",
            "人生で一番大切なものは何？"
        ],
        "2-3": [
            "昔の自分は今の自分をどう思うと思う？",
            "人生を変えた人はいる？",
            "人生のターニングポイントはいつ？",
            "今一番の悩みは？",
            "性格で一番直したいところは？",
            "人生で一番後悔してることは？",
            "今の環境から逃げたいと思うことある？",
            "価値観がガラッと変わった出来事は？",
            "将来に不安感じることある？",
            "本当の自分を分かってくれる人はいる？"
        ],
        "3-1": [
            "誰にも言えない秘密ある？",
            "人には見せない意外な一面は？",
            "自分の一番やばい欠点は？",
            "人生で一番恥ずかしかった経験は？",
            "初恋の思い出は？",
            "今まで一番ドキドキした恋愛は？",
            "恋愛での大失敗は？",
            "元カレ/元カノ何人いる？",
            "本音隠す時ってどんな時？",
            "自分偽る時ってある？"
        ],
        "3-2": [
            "人を裏切ってしまったことある？",
            "誰かのものを盗んだことある？",
            "嘘ついて得したことある？",
            "人に言えない悪いことしたことある？",
            "ずる賢い方法で楽したことある？",
            "誰かを意地悪したことある？",
            "約束破ったことある？",
            "誰かを騙したことある？",
            "人のせいにしたことある？",
            "バレなければいいと思ってやったことある？"
        ],
        "3-3": [
            "人生で一番やばかった経験は？",
            "忘れられない傷ついた言葉は？",
            "自分の心の闇認めてる？",
            "誰にも理解されないって感じることある？",
            "自分が嫌いになることある？",
            "やり直したい黒歴史は？",
            "死にたいと思ったことある？",
            "絶対許せないことって何？",
            "罪悪感で苦しんでることある？",
            "本当の自分見せるの怖い？"
        ],
        "4-1": [
            "酔っ払うとどんな自分が顔を出す？",
            "一人の時の自分と人といる時の自分、どっちが本物？",
            "自分の中の一番汚い部分って何？",
            "誰にも見せたくない自分の一面は？",
            "嫌いな人の真似してしまったことある？",
            "自分が親になったら絶対やりそうな嫌なこと",
            "自分の中の悪魔が囁く時ってある？",
            "完全に一人だったらやってしまいそうなこと",
            "自分が一番恐れてることって何？",
            "抑圧してる感情ってある？"
        ],
        "4-2": [
            "酔った時に本性が出た経験ある？",
            "無意識に親と同じことしてしまった経験",
            "夢の中の自分はどんなことしてる？",
            "怒りで我を忘れたことある？",
            "誰かを憎んだ経験ある？",
            "自分を完全に失った瞬間ってある？",
            "心の奥で望んでるけど絶対言えないこと",
            "自分の影の部分と向き合ったことある？",
            "無意識に人を傷つけてしまった経験",
            "抑圧された記憶が蘇ったことある？"
        ],
        "4-3": [
            "自分の中の破壊衝動を感じたことある？",
            "誰かに依存してしまった経験ある？",
            "完全に理性を失った瞬間ってある？",
            "自分の醜い嫉妬心と向き合ったことある？",
            "無意識の偏見に気づいたことある？",
            "自分が加害者になった経験ある？",
            "トラウマが人格に与えた影響を感じる？",
            "自分の中の子供っぽい部分が暴走したことある？",
            "コントロールできない衝動ってある？",
            "自分の深層心理が怖いと思ったことある？"
        ],
        "5-1": [
            "触れられると嬉しい場所は？",
            "好きなスキンシップは？",
            "理想のキスってどんな感じ？",
            "好きな人の前で緊張する時は？",
            "抱きしめられたい時ってある？",
            "言われて嬉しい甘い言葉は？",
            "耳元で囁かれたい言葉は？",
            "二人きりの時何したい？",
            "どんな匂いにドキッとする？",
            "触りたくなる瞬間ってある？"
        ],
        "5-2": [
            "愛を感じる瞬間っていつ？",
            "一緒に叶えたい夢ってある？",
            "全部話したくなる時ってある？",
            "どんな未来想像してる？",
            "手繋ぎたくなる場所は？",
            "恋しくなる瞬間ってある？",
            "どんな約束したい？",
            "理想の夜の過ごし方は？",
            "打ち明けたい秘密ある？",
            "伝えたい愛の言葉は？"
        ],
        "5-3": [
            "ロマンティックな夜ってどんなの？",
            "見つめ合いたくなる瞬間は？",
            "行きたい秘密の場所は？",
            "甘えたくなる時ってある？",
            "永遠に刻みたい時間は？",
            "心に響く声ってある？",
            "理想の旅行先は？",
            "許されたい瞬間ってある？",
            "愛の証って何だと思う？",
            "完全に一つになりたい時は？"
        ],
        "6-1": [
            "最近いつエッチなことした？（一人含む）",
            "どんな服着てる人に興奮する？",
            "エッチな夢見たことある？",
            "どんな音でムラムラする？",
            "見ただけで興奮する体の部位は？",
            "どんな場所でエッチしてみたい？",
            "どんな匂いでエッチな気分になる？",
            "どんな仕草で興奮する？",
            "一番エッチな夜の過ごし方は？",
            "朝から興奮したことある？"
        ],
        "6-2": [
            "首筋キスされてゾクッとした経験ある？",
            "筋肉にドキッとした経験ある？",
            "チラ見えでムラムラした経験ある？",
            "腰のラインに釘付けになった経験ある？",
            "太ももがセクシーに見えた経験ある？",
            "キスしたくてたまらなくなった経験ある？",
            "どんなプレイの経験ある？",
            "コスプレで興奮した経験ある？",
            "一番興奮したシチュエーションは？",
            "ロールプレイの経験ある？"
        ],
        "6-3": [
            "縛りプレイの経験ある？",
            "コスプレエッチの経験ある？",
            "おもちゃ使ったプレイの経験ある？",
            "目隠しプレイの経験ある？",
            "痛いプレイの経験ある？",
            "アダルト系のもの見た経験ある？",
            "エッチの時何考えてる？",
            "一番興奮したのはどんな時？",
            "ドラッグ的な快感感じた経験ある？",
            "禁断の関係の経験ある？"
        ]
    };

    let currentLevel = 1;
    let currentSubLevel = 1;

    // --- Data Loading ---
    async function loadCardData() {
        try {
            const [featuresRes, implicationsRes] = await Promise.all([
                fetch('カードの特徴.txt'),
                fetch('カードの暗示.txt')
            ]);

            if (!featuresRes.ok || !implicationsRes.ok) {
                throw new Error('Failed to load card data files.');
            }

            const featuresText = await featuresRes.text();
            const implicationsText = await implicationsRes.text();

            cardFeaturesData = parseFeaturesText(featuresText);
            cardImplicationsData = parseImplicationsText(implicationsText);
            
        } catch (error) {
            console.error("Error loading card data:", error);
        }
    }

    function parseFeaturesText(text) {
        const data = {};
        // Split by newline and "## " to handle different line endings
        const cardBlocks = text.split(/\r?\n## /);
        cardBlocks.forEach(block => {
            if (block.trim() === '' || !block.includes('・')) return;
            
            const lines = block.split(/\r?\n/);
            const titleLine = lines.find(l => l.includes('・'));
            if (!titleLine) return;

            const cardId = parseInt(titleLine.split('・')[0], 10);

            if (!isNaN(cardId)) {
                data[cardId] = {
                    theme: lines.find(l => l.startsWith('### テーマ'))?.replace('### テーマ', '').trim() || '',
                    traits: lines.find(l => l.startsWith('### 特徴'))?.replace('### 特徴', '').trim() || '',
                    advice: lines.find(l => l.startsWith('### アドバイス'))?.replace('### アドバイス', '').trim() || ''
                };
            }
        });
        return data;
    }

    function parseImplicationsText(text) {
        const data = {};
        // Split by newline and "## "
        const cardBlocks = text.split(/\r?\n## /);
        cardBlocks.forEach(block => {
            if (block.trim() === '' || !block.startsWith('CARD')) return;

            const lines = block.split(/\r?\n/);
            const titleLine = lines[0];
            const cardId = parseInt(titleLine.replace('CARD', '').trim(), 10);

            if (!isNaN(cardId)) {
                data[cardId] = {
                    upright: lines.find(l => l.startsWith('### 正位置'))?.replace('### 正位置', '').trim() || '',
                    reversed: lines.find(l => l.startsWith('### 逆位置'))?.replace('### 逆位置', '').trim() || ''
                };
            }
        });
        return data;
    }

    // --- Elements ---
    const titleScreen = document.getElementById('title-screen');
    const startBtn = document.getElementById('start-btn');
    const inputScreen = document.getElementById('input-screen');
    const resultScreen = document.getElementById('result-screen');
    const calcBtn = document.getElementById('calc-btn');
    const appBg = document.getElementById('app-background');

    // Inputs
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const ageSelect = document.getElementById('age');

    // BY View
    const bySection = document.getElementById('by-section');
    const byImage = document.getElementById('by-image');
    const byName = document.getElementById('by-name');
    const byTheme = document.getElementById('by-theme');

    // TY View
    const tySection = document.getElementById('ty-section');
    
    // New thumbnail elements
    const thumbMinus2 = document.getElementById('thumb-minus2');
    const thumbMinus1 = document.getElementById('thumb-minus1');
    const thumbCurrent = document.getElementById('thumb-current');
    const thumbPlus1 = document.getElementById('thumb-plus1');
    const thumbPlus2 = document.getElementById('thumb-plus2');
    
    // Main card elements
    const mainTyImage = document.getElementById('main-ty-image');
    const mainTyLabel = document.getElementById('main-ty-label');
    const mainTyName = document.getElementById('main-ty-name');
    const mainTyTheme = document.getElementById('main-ty-theme');
    
    // Navigation buttons
    const toTyBtn = document.getElementById('to-ty-btn');
    const toByBtn = document.getElementById('to-by-btn');
    const homeBtn = document.getElementById('home-btn');
    const homeBtnTy = document.getElementById('home-btn-ty');
    const prevYearBtn = document.getElementById('prev-year-btn');
    const nextYearBtn = document.getElementById('next-year-btn');
    
    // Global variables for extended year navigation
    let currentAge = 30;
    let birthYearNum = 0;
    let displayAge = 30; // 表示中の年齢（1歳ずつ変更）
    let currentCardIndex = 0; // 表示中のカード番号（0-21で順番移動）
    let displayMode = 'age'; // 'age' or 'card'
    
    // TY Modal elements
    const cardModal = document.getElementById('card-modal');
    const closeModal = document.getElementById('close-modal');
    const modalCardImage = document.getElementById('modal-card-image');
    const modalCardName = document.getElementById('modal-card-name');
    const modalCardTheme = document.getElementById('modal-card-theme');
    
    // Birth Card Modal elements
    const birthCardModal = document.getElementById('birth-card-modal');
    const closeBirthModal = document.getElementById('close-birth-modal');
    const birthModalCardImage = document.getElementById('birth-modal-card-image');
    const birthModalCardName = document.getElementById('birth-modal-card-name');
    const birthModalCardTheme = document.getElementById('birth-modal-card-theme');
    
    // QA Screen elements
    const qaScreen = document.getElementById('qa-screen');
    const calculatorBtn = document.getElementById('calculator-btn');
    const essenceBtn = document.getElementById('essence-btn');
    const levelSelector = document.getElementById('level-selector');
    const qaMain = document.getElementById('qa-main');
    const currentQuestion = document.getElementById('current-question');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const backToLevelsBtn = document.getElementById('back-to-levels-btn');
    const qaHomeBtn = document.getElementById('qa-home-btn');
    
    // Shichusuimei Screen elements
    const shichusuimeiBtn = document.getElementById('shichusuimei-btn');
    const shichusuimeiScreen = document.getElementById('shichusuimei-screen');
    const shichusuimeiInput = document.getElementById('shichusuimei-input');
    const adultScreen = document.getElementById('adult-screen');
    const fateRouletteScreen = document.getElementById('fate-roulette-screen');
    const shichusuimeiResult = document.getElementById('shichusuimei-result');
    const sYearSelect = document.getElementById('s-year');
    const sMonthSelect = document.getElementById('s-month');
    const sDaySelect = document.getElementById('s-day');
    const shichusuimeiCalcBtn = document.getElementById('shichusuimei-calc-btn');
    const shichusuimeiBackBtn = document.getElementById('shichusuimei-back-btn');
    const shichusuimeiHomeBtn = document.getElementById('shichusuimei-home-btn');

    // --- Initialization ---
    async function initializeApp() {
        initSelects();
        // Data is now loaded from data.js
    }

    // セレクトボックスの選択肢生成
    function initSelects() {
        const currentYear = new Date().getFullYear();
        const selects = [
            { el: yearSelect, start: 1940, end: currentYear + 1, default: 1990, suffix: '' },
            { el: monthSelect, start: 1, end: 12, default: 1, suffix: '' },
            { el: daySelect, start: 1, end: 31, default: 1, suffix: '' },
            { el: ageSelect, start: 0, end: 100, default: 30, suffix: ' 歳' },
            { el: sYearSelect, start: 1940, end: currentYear + 1, default: 1990, suffix: '' },
            { el: sMonthSelect, start: 1, end: 12, default: 1, suffix: '' },
            { el: sDaySelect, start: 1, end: 31, default: 1, suffix: '' },
        ];

        selects.forEach(({ el, start, end, default: def, suffix }) => {
            if (!el) return;
            for(let i = start; i <= end; i++) {
                const opt = document.createElement('option');
                opt.value = i;
                opt.text = i + suffix;
                if(i === def) opt.selected = true;
                el.appendChild(opt);
            }
        });
    }
    initializeApp();
    
    // --- Navigation Logic ---

    // Entrance button events
    calculatorBtn.addEventListener('click', () => {
        changeScreen(inputScreen, 'images/back.jpg', 0.6);
    });
    
    essenceBtn.addEventListener('click', () => {
        changeScreen(qaScreen, 'images/qaback1.jpg', 0.7);
    });

    shichusuimeiBtn.addEventListener('click', () => {
        changeScreen(shichusuimeiScreen, 'images/journey2.jpg', 0.7);
    });

    function changeScreen(targetScreen, bgImage, bgOpacity) {
        titleScreen.style.opacity = '0';
        setTimeout(() => {
            titleScreen.classList.remove('active');
            targetScreen.classList.add('active');
            appBg.style.backgroundImage = `url('${bgImage}')`;
            appBg.style.opacity = bgOpacity;
        }, 500);
    }

    // Input -> Result
    calcBtn.addEventListener('click', () => {
        const y = parseInt(yearSelect.value);
        const m = parseInt(monthSelect.value);
        const d = parseInt(daySelect.value);
        const age = parseInt(ageSelect.value);

        const byNum = calculateBY(y, m, d);
        showResult(byNum, age);
    });

    // --- Shichusuimei Logic ---
    shichusuimeiCalcBtn.addEventListener('click', () => {
        const y = parseInt(sYearSelect.value);
        const m = parseInt(sMonthSelect.value);
        const d = parseInt(sDaySelect.value);
        calculateAndShowShichusuimei(y, m, d);
    });

    shichusuimeiBackBtn.addEventListener('click', () => {
        shichusuimeiResult.style.display = 'none';
        shichusuimeiInput.style.display = 'flex';
    });

    function calculateAndShowShichusuimei(y, m, d) {
        const nenchu = getNenchu(y, m, d);
        const gekichu = getGekichu(y, m, d);
        const nichu = getNichu(y, m, d);

        updateShichusuimeiCard('surface', nenchu);
        updateShichusuimeiCard('hope', gekichu);
        updateShichusuimeiCard('essence', nichu);
        updateShichusuimeiCard('hidden', nichu); // 隠れは本質と同じものを表示

        shichusuimeiInput.style.display = 'none';
        shichusuimeiResult.style.display = 'block';
    }

    function updateShichusuimeiCard(type, kanshiIndex) {
        const kanshi = KANSHI_DATA[kanshiIndex];
        document.getElementById(`result-${type}-name`).textContent = kanshi.name;
        document.getElementById(`result-${type}-animal`).textContent = kanshi.animal;
    }

    // --- 四柱推命 干支計算関数 ---
    function getNenchu(year, month, day) {
        // 節月を考慮し、立春(2/4頃)より前なら前年扱い
        const isPreviousYear = month === 1 || (month === 2 && day < SETSUIRI_DATA[2]);
        const targetYear = isPreviousYear ? year - 1 : year;
        // (targetYear - 4) % 60 でも良いが、基準年を明確にする
        // 1924年が甲子(インデックス0)
        let index = (targetYear - 1924) % 60;
        return index < 0 ? index + 60 : index;
    }

    function getGekichu(year, month, day) {
        // 節入り日より前なら前月扱い
        const targetMonth = day < SETSUIRI_DATA[month] ? month - 1 : month;
        const adjustedMonth = targetMonth === 0 ? 12 : targetMonth;

        const nenkanIndex = JIKKAN.indexOf(KANSHI_DATA[getNenchu(year, month, day)].name[0]);
        
        // 月干支の開始インデックス (年の十干ごと)
        const monthStartIndex = [2, 4, 6, 8, 10, 0, 2, 4, 6, 8];
        const gekkanBase = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1]; // 寅月(2月)からのインデックス
        
        let gekkanIndex = ( (nenkanIndex % 5) * 2 + gekkanBase[adjustedMonth-1] ) % 10;

        // 月の十二支は固定 (寅月から始まる)
        const junishiIndex = (adjustedMonth + 1) % 12;

        // 干支インデックスを探索
        const gekkan = JIKKAN[gekkanIndex];
        const junishi = JUNISHI[junishiIndex];
        return KANSHI_DATA.findIndex(k => k.name === gekkan + junishi);
    }

    function getNichu(year, month, day) {
        // 1900年1月0日を基準とするユリウス通日もどき
        if (month <= 2) {
            year--;
            month += 12;
        }
        const dayCount = Math.floor(365.25 * year) + Math.floor(year / 400) - Math.floor(year / 100) + Math.floor(30.6 * (month + 1)) + day - 428;
        // 1924/1/1が甲子(0)から44番目「戊戌」
        const index = (dayCount + 44) % 60;
        return index < 0 ? index + 60 : index;
    }


    // --- Calculation Logic (Personal Arcana) ---
    function sumDigits(num) {
        return String(num).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }

    function calculateBY(y, m, d) {
        let sum = 0;
        const allDigits = (String(y) + String(m) + String(d)).split('');
        allDigits.forEach(n => sum += parseInt(n));

        if (sum === 22) return 0;
        if (sum >= 3 && sum <= 21) return sum;
        
        let finalSum = sumDigits(sum);
        if (finalSum === 22) return 0;
        while (finalSum > 21) {
            finalSum = sumDigits(finalSum);
        }
        return finalSum;
    }

    function calculateTY(age, byNum) {
        const sum = byNum + age;
        return sum % 22;
    }

    // --- Display Logic ---
    function getCardData(num) {
        return tarotData.find(c => c.id === num) || tarotData[0];
    }

    function showResult(byNum, age) {
        // Store global values
        currentAge = age;
        birthYearNum = byNum;
        
        // Update BY
        const byCard = getCardData(byNum);
        byImage.src = `images/${byCard.file}`;
        byName.textContent = byCard.name;
        byTheme.textContent = byCard.theme;
        
        // BYカードにクリックイベント追加（Birth Card用モーダル）
        byImage.onclick = () => showBirthCardModal(byCard.id);

        // TY表示の初期化
        displayAge = age; // 表示年齢を初期化
        currentCardIndex = calculateTY(age, birthYearNum); // 計算されたカードから開始
        displayMode = 'age'; // 年齢モードで開始
        
        // Update TY
        updateTYDisplay();

        // Transition
        inputScreen.style.opacity = '0';
        setTimeout(() => {
            inputScreen.classList.remove('active');
            resultScreen.classList.add('active');
            appBg.style.opacity = '1'; // 背景MAX
        }, 500);
    }
    
    function updateTYDisplay() {
        if (displayMode === 'age') {
            // 年齢ベースの表示
            const ty_2 = calculateTY(displayAge - 2, birthYearNum);
            const ty_1 = calculateTY(displayAge - 1, birthYearNum);
            const ty0 = calculateTY(displayAge, birthYearNum);
            const ty1 = calculateTY(displayAge + 1, birthYearNum);
            const ty2 = calculateTY(displayAge + 2, birthYearNum);
            
            setupThumbnailsAndMain(ty_2, ty_1, ty0, ty1, ty2, displayAge);
        } else {
            // カード番号ベースの表示
            const card_2 = Math.max(0, currentCardIndex - 2);
            const card_1 = Math.max(0, currentCardIndex - 1);
            const card0 = currentCardIndex;
            const card1 = Math.min(21, currentCardIndex + 1);
            const card2 = Math.min(21, currentCardIndex + 2);
            
            setupThumbnailsCard(card_2, card_1, card0, card1, card2);
        }
    }
    
    function setupThumbnailsCard(card_2, card_1, card0, card1, card2) {
        const thumbnailData = [
            { element: thumbMinus2, cardNum: card_2, cardData: getCardData(card_2) },
            { element: thumbMinus1, cardNum: card_1, cardData: getCardData(card_1) },
            { element: thumbCurrent, cardNum: card0, cardData: getCardData(card0) },
            { element: thumbPlus1, cardNum: card1, cardData: getCardData(card1) },
            { element: thumbPlus2, cardNum: card2, cardData: getCardData(card2) }
        ];
        
        thumbnailData.forEach((item, index) => {
            const img = item.element.querySelector('img');
            const span = item.element.querySelector('span');
            
            img.src = `images/${item.cardData.file}`;
            span.textContent = String(item.cardNum).padStart(2, '0');
            
            // アクティブ状態をリセット
            item.element.classList.remove('active');
            
            // 中央を常にアクティブ設定
            if (index === 2) {
                item.element.classList.add('active');
                
                // メインカードも更新
                mainTyImage.src = `images/${item.cardData.file}`;
                mainTyLabel.textContent = `Card ${String(item.cardNum).padStart(2, '0')}`;
                mainTyName.textContent = item.cardData.name;
                mainTyTheme.textContent = item.cardData.theme;
                
                // メインカードにクリックイベント
                mainTyImage.onclick = () => showCardModal(item.cardData.id);
            }
        });
    }
    
    function setupThumbnailsAndMain(ty_2, ty_1, ty0, ty1, ty2, baseAge) {
        // サムネイル画像と年齢を更新
        const thumbnailData = [
            { element: thumbMinus2, age: baseAge - 2, cardData: getCardData(ty_2) },
            { element: thumbMinus1, age: baseAge - 1, cardData: getCardData(ty_1) },
            { element: thumbCurrent, age: baseAge, cardData: getCardData(ty0) },
            { element: thumbPlus1, age: baseAge + 1, cardData: getCardData(ty1) },
            { element: thumbPlus2, age: baseAge + 2, cardData: getCardData(ty2) }
        ];
        
        thumbnailData.forEach((item, index) => {
            const img = item.element.querySelector('img');
            const span = item.element.querySelector('span');
            
            img.src = `images/${item.cardData.file}`;
            span.textContent = `${item.age}歳`;
            
            // アクティブ状態をリセット
            item.element.classList.remove('active');
            
            // 中央を常にアクティブ設定
            if (index === 2) {
                item.element.classList.add('active');
                
                // メインカードも更新 - 年齢とカード番号の両方を表示
                mainTyImage.src = `images/${item.cardData.file}`;
                const currentCard = calculateTY(displayAge, birthYearNum);
                mainTyLabel.textContent = `${displayAge}歳 (${String(currentCard).padStart(2, '0')})`;
                mainTyName.textContent = item.cardData.name;
                mainTyTheme.textContent = item.cardData.theme;
                
                // メインカードにクリックイベント
                mainTyImage.onclick = () => showCardModal(item.cardData.id);
            }
        });
    }
    


    // --- Universal Swipe Logic (Touch + Mouse) ---
    
    // Variables for swipe detection
    let startY = 0;
    let startX = 0;
    let isDraggingY = false;
    let isDraggingX = false;

    function handleVerticalStart(y, x) {
        startY = y;
        startX = x;
        isDraggingY = true;
        isDraggingX = true;
    }

    function handleVerticalEnd(y, x, element) {
        if(!isDraggingY && !isDraggingX) return;
        
        const diffY = startY - y;
        const diffX = startX - x;
        
        // TYページでの水平スワイプ検出（カード順移動）
        if(tySection.classList.contains('active-view') && Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            displayMode = 'card';
            if (diffX > 0) { // Left swipe -> Next card
                currentCardIndex = Math.min(21, currentCardIndex + 1);
                updateTYDisplay();
            } else { // Right swipe -> Previous card
                currentCardIndex = Math.max(0, currentCardIndex - 1);
                updateTYDisplay();
            }
        }
        // 垂直スワイプ（BY <-> TY切り替え）
        else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
            if (diffY > 0) { // Swipe Up -> Go to TY
                if(bySection.classList.contains('active-view')) {
                    bySection.classList.remove('active-view');
                    tySection.classList.add('active-view');
                }
            } else { // Swipe Down -> Go to BY
                if(tySection.classList.contains('active-view')) {
                    tySection.classList.remove('active-view');
                    bySection.classList.add('active-view');
                }
            }
        }
        
        isDraggingY = false;
        isDraggingX = false;
    }

    document.addEventListener('touchstart', e => handleVerticalStart(e.touches[0].clientY, e.touches[0].clientX));
    document.addEventListener('touchend', e => handleVerticalEnd(e.changedTouches[0].clientY, e.changedTouches[0].clientX));
    
    document.addEventListener('mousedown', e => handleVerticalStart(e.clientY, e.clientX));
    document.addEventListener('mouseup', e => handleVerticalEnd(e.clientY, e.clientX));
    
    // --- Click Navigation ---
    
    // クリックでBY -> TY移動
    toTyBtn.addEventListener('click', () => {
        if(bySection.classList.contains('active-view')) {
            bySection.classList.remove('active-view');
            tySection.classList.add('active-view');
        }
    });
    
    // クリックでTY -> BY移動
    toByBtn.addEventListener('click', () => {
        if(tySection.classList.contains('active-view')) {
            tySection.classList.remove('active-view');
            bySection.classList.add('active-view');
        }
    });
    
    // サムネイルクリックで年齢変更
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const offset = parseInt(thumb.dataset.offset);
            if (!isNaN(offset)) {
                displayMode = 'age';
                displayAge += offset;
                updateTYDisplay();
            }
        });
    });
    
    // カード左右の矢印ボタンで年齢変更（1歳ずつ）
    prevYearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        displayMode = 'age';
        displayAge -= 1;
        updateTYDisplay();
    });
    
    nextYearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        displayMode = 'age';
        displayAge += 1;
        updateTYDisplay();
    });
    
    // 追加のHOMEボタン安全設定（遅延ロード対応）
    function setupAllHomeButtons() {
        const homeButtonIds = [
            'home-btn', 'home-btn-ty', 'qa-home-btn', 
            'shichusuimei-home-btn', 'adult-home-btn', 'fate-home-btn'
        ];
        
        homeButtonIds.forEach(id => {
            const btn = document.getElementById(id);
            if (btn && !btn.dataset.homeSetup) {
                btn.addEventListener('click', () => location.reload());
                btn.dataset.homeSetup = 'true';
            }
        });
    }
    
    // ホームボタンのイベント
    function goToHome() {
        location.reload();
    }
    
    // 全てのHOMEボタンの設定
    [
        { element: homeBtn, id: 'home-btn' },
        { element: homeBtnTy, id: 'home-btn-ty' }, 
        { element: qaHomeBtn, id: 'qa-home-btn' },
        { element: shichusuimeiHomeBtn, id: 'shichusuimei-home-btn' }
    ].forEach(({ element, id }) => {
        if (element) {
            element.addEventListener('click', () => location.reload());
        } else {
            const fallbackElement = document.getElementById(id);
            if (fallbackElement) {
                fallbackElement.addEventListener('click', () => location.reload());
            }
        }
    });
    
    // --- QA Functions ---
    
    function setupQALevel(level, subLevel = 1) {
        currentLevel = level;
        currentSubLevel = subLevel;
        currentQuestionIndex = 0;
        
        levelSelector.style.display = 'none';
        qaMain.style.display = 'block';
        
        showCurrentQuestion();
    }
    
    function showCurrentQuestion() {
        const questionKey = `${currentLevel}-${currentSubLevel}`;
        const levelQuestions = questions[questionKey];
        
        if (levelQuestions && currentQuestionIndex < levelQuestions.length) {
            currentQuestion.textContent = levelQuestions[currentQuestionIndex];
            
            // プログレス表示を更新
            const progressText = document.getElementById('current-progress');
            const totalText = document.getElementById('total-questions');
            const progressFill = document.getElementById('progress-fill');
            
            if (progressText) progressText.textContent = `質問 ${currentQuestionIndex + 1}`;
            if (totalText) totalText.textContent = levelQuestions.length;
            if (progressFill) {
                const percentage = ((currentQuestionIndex + 1) / levelQuestions.length) * 100;
                progressFill.style.width = `${percentage}%`;
            }
        } else {
            currentQuestion.textContent = "この段階の質問は終了しました。段階が完了しました🌟";
            nextQuestionBtn.textContent = "完了";
            
            // プログレスバーを100%に
            const progressFill = document.getElementById('progress-fill');
            if (progressFill) progressFill.style.width = '100%';
        }
    }
    
    function nextQuestion() {
        currentQuestionIndex++;
        showCurrentQuestion();
    }
    
    function backToLevels() {
        qaMain.style.display = 'none';
        levelSelector.style.display = 'block';
        currentQuestionIndex = 0;
        nextQuestionBtn.textContent = "次の質問";
        
        // メインレベル選択に戻る
        document.querySelector('.level-buttons').style.display = 'block';
        document.getElementById('sub-level-selector').style.display = 'none';
        
        // プログレスバーをリセット
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) progressFill.style.width = '0%';
        
        // リアクションボタンの選択状態をクリア
        document.querySelectorAll('.reaction-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    }
    
    // Level button events
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = parseInt(btn.getAttribute('data-level'));
            currentLevel = level;
            
            // サブレベル選択画面を表示
            document.querySelector('.level-buttons').style.display = 'none';
            document.getElementById('sub-level-selector').style.display = 'block';
            
            // レベルに応じたタイトル設定
            const titles = {
                1: "軽やか - どの段階から始める？",
                2: "価値観 - どの段階から始める？", 
                3: "秘密 - どの段階から始める？",
                4: "シャドウ - 影の部分を探る段階を選択",
                5: "親密 - どの段階から始める？",
                6: "⚠️ 禁断 - 危険な段階を選択"
            };
            document.getElementById('sub-level-title').textContent = titles[level];
        });
    });
    
    // Sub-level button events
    document.querySelectorAll('.sub-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const subLevel = parseInt(btn.getAttribute('data-sub'));
            setupQALevel(currentLevel, subLevel);
        });
    });
    
    // Back to main levels
    document.getElementById('back-to-main-levels').addEventListener('click', () => {
        document.querySelector('.level-buttons').style.display = 'block';
        document.getElementById('sub-level-selector').style.display = 'none';
    });
    
    // Reaction button events
    document.querySelectorAll('.reaction-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // 既存の選択を解除
            document.querySelectorAll('.reaction-btn').forEach(b => b.classList.remove('selected'));
            // 現在のボタンを選択
            btn.classList.add('selected');
        });
    });
    
    nextQuestionBtn.addEventListener('click', () => {
        if (nextQuestionBtn.textContent === "完了") {
            backToLevels();
        }
        else {
            nextQuestion();
        }
    });
    
    backToLevelsBtn.addEventListener('click', backToLevels);


    
    // --- Helper Functions ---
    function getNewThemeFromCard(cardId) {
        const themeMap = {
            0: "新基盤", 1: "種を蒔く", 2: "根を張る", 3: "広大な森", 4: "戦略", 5: "知識の習得",
            6: "仲間", 7: "切り替え", 8: "判定", 9: "遠い星", 10: "移動と変化", 11: "分岐点",
            12: "律する", 13: "飛び回る", 14: "乗り換え", 15: "欲望", 16: "破壊と再生",
            17: "新しい星", 18: "幻想", 19: "正解", 20: "完結", 21: "銀河"
        };
        return themeMap[cardId];
    }


    // --- Modal Functions ---
    function showCardModal(cardId) {
        const card = getCardData(cardId);
        if (!card) return;

        // --- Populate Modal Header ---
        modalCardImage.src = `images/${card.file}`;
        modalCardName.textContent = card.name;
        modalCardTheme.textContent = card.theme;

        // --- Populate Features Tab ---
        // Extract the new theme from relatedWords (e.g., "新基盤" from "魂のアップデート / プロローグの開示")
        const newTheme = getNewThemeFromCard(cardId);
        document.getElementById('modal-card-features-theme').textContent = newTheme || '---';
        document.getElementById('modal-card-features-traits').textContent = card.relatedWords || '---';
        document.getElementById('modal-card-features-advice').textContent = card.advice || '---';

        // --- Populate Implications Tab ---
        document.getElementById('modal-card-implications-upright').textContent = card.implications || '---';
        
        // --- Reset and Show ---
        // Reset to the first tab
        const firstTab = document.querySelector('.tab-btn[data-tab="features"]');
        const firstTabContent = document.getElementById('tab-content-features');
        
        document.querySelectorAll('.tab-btn.active').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.modal-tab-content.active').forEach(c => c.classList.remove('active'));
        
        if (firstTab && firstTabContent) {
            firstTab.classList.add('active');
            firstTabContent.classList.add('active');
        }
        
        cardModal.style.display = 'block';
    }

    function hideCardModal() {
        cardModal.style.display = 'none';
    }

    // --- Birth Card Modal Functions ---
    function showBirthCardModal(cardId) {
        const card = getCardData(cardId);
        if (!card) return;

        // --- Populate Birth Modal Header ---
        birthModalCardImage.src = `images/${card.file}`;
        birthModalCardName.textContent = card.name;
        birthModalCardTheme.textContent = card.theme;

        // --- Populate Birth Card Tabs ---
        const birthData = birthCardData[cardId];
        if (birthData) {
            document.getElementById('birth-card-theme-content').textContent = birthData.themeContent || 'テーマ内容（準備中）';
            document.getElementById('birth-card-symbol-content').textContent = birthData.symbolContent || '象徴内容（準備中）';
            document.getElementById('birth-card-positive-traits').textContent = birthData.positiveTraits || 'ポジティブな特性（準備中）';
            document.getElementById('birth-card-negative-traits').textContent = birthData.negativeTraits || 'ネガティブな特性（準備中）';
            document.getElementById('birth-card-celebrities-content').textContent = birthData.celebrities || '有名人（準備中）';
        } else {
            document.getElementById('birth-card-theme-content').textContent = 'テーマ内容（準備中）';
            document.getElementById('birth-card-symbol-content').textContent = '象徴内容（準備中）';
            document.getElementById('birth-card-positive-traits').textContent = 'ポジティブな特性（準備中）';
            document.getElementById('birth-card-negative-traits').textContent = 'ネガティブな特性（準備中）';
            document.getElementById('birth-card-celebrities-content').textContent = '有名人（準備中）';
        }
        
        // --- Reset and Show Birth Modal ---
        // Reset to the first tab
        const firstBirthTab = document.querySelector('.tab-btn[data-tab="birth-theme"]');
        const firstBirthTabContent = document.getElementById('birth-tab-content-theme');
        
        // Remove active classes from birth modal tabs
        birthCardModal.querySelectorAll('.tab-btn.active').forEach(b => b.classList.remove('active'));
        birthCardModal.querySelectorAll('.modal-tab-content.active').forEach(c => c.classList.remove('active'));
        
        if (firstBirthTab && firstBirthTabContent) {
            firstBirthTab.classList.add('active');
            firstBirthTabContent.classList.add('active');
        }
        
        birthCardModal.style.display = 'block';
    }

    function hideBirthCardModal() {
        birthCardModal.style.display = 'none';
    }

    // --- Modal Event Listeners ---
    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideCardModal();
    });

    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) {
            hideCardModal();
        }
    });

    closeBirthModal.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideBirthCardModal();
    });

    birthCardModal.addEventListener('click', (e) => {
        if (e.target === birthCardModal) {
            hideBirthCardModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cardModal.style.display === 'block') {
            hideCardModal();
        }
    });

    // Tab switching logic for both modals
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Determine which modal this tab belongs to
            const isInBirthModal = btn.closest('#birth-card-modal');
            const modal = isInBirthModal ? birthCardModal : cardModal;

            // Deactivate all tabs and content within the specific modal
            modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            modal.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));

            // Activate clicked tab
            btn.classList.add('active');
            
            // Activate corresponding content
            if (isInBirthModal) {
                const contentElement = document.getElementById(`birth-tab-content-${tab.replace('birth-', '')}`);
                if (contentElement) {
                    contentElement.classList.add('active');
                }
            } else {
                const contentElement = document.getElementById(`tab-content-${tab}`);
                if (contentElement) {
                    contentElement.classList.add('active');
                }
            }
        });
    });

    // Make showCardModal globally available
    window.showCardModal = showCardModal;

    // --- ADULT MODE FUNCTIONALITY ---
    let currentAdultLevel = 1;
    let currentAdultQuestionIndex = 0;
    let currentAdultQuestions = [];

    // Adult mode event listeners
    document.getElementById('adult-btn').addEventListener('click', () => {
        changeScreen(adultScreen, 'images/title.jpg', 0.3);
        // Initialize adult level selection
        selectAdultLevel(1);
    });

    // DANGEROUS TALK HOME button
    const adultHomeBtn = document.getElementById('adult-home-btn');
    if (adultHomeBtn) {
        adultHomeBtn.addEventListener('click', () => location.reload());
    }

    // Adult level selection
    document.querySelectorAll('.adult-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentAdultLevel = parseInt(btn.getAttribute('data-level'));
            
            // Special warning for ultimate taboo level
            if (currentAdultLevel === 7) {
                if (!confirm('⚠️ 警告 ⚠️\n\n究極のタブーレベルには以下が含まれます：\n• 犯罪に関する質問\n• 性的禁忌事項\n• 法律違反の境界線\n• 極めて不快な内容\n\n完全に自己責任です。\n本当に続行しますか？')) {
                    return;
                }
                if (!confirm('最終確認\n\nこのレベルの質問により：\n• 人間関係が破綻する可能性\n• 法的問題に発展する可能性\n• 深刻な精神的苦痛を与える可能性\n\nがあります。それでも続行しますか？')) {
                    return;
                }
            }
            
            selectAdultLevel(currentAdultLevel);
            startAdultQuestions();
        });
    });

    // Adult navigation
    document.getElementById('next-adult-question-btn').addEventListener('click', () => {
        nextAdultQuestion();
    });

    document.getElementById('back-to-adult-levels-btn').addEventListener('click', () => {
        backToAdultLevels();
    });

    // Adult reactions
    document.querySelectorAll('.adult-reaction-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove previous selections
            document.querySelectorAll('.adult-reaction-btn').forEach(b => b.classList.remove('selected'));
            // Add selection to current button
            btn.classList.add('selected');
            
            // Add reaction effect
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1.05)';
            }, 150);
        });
    });

    function startAdultQuestions() {
        currentAdultQuestionIndex = 0;
        currentAdultQuestions = ADULT_QUESTIONS[`level${currentAdultLevel}`] || [];
        
        document.getElementById('level-selector-adult').style.display = 'none';
        document.getElementById('adult-main').style.display = 'block';
        
        updateAdultDisplay();
    }

    function updateAdultDisplay() {
        if (!currentAdultQuestions || currentAdultQuestions.length === 0) {
            document.getElementById('current-adult-question').textContent = '質問がありません';
            return;
        }

        const question = currentAdultQuestions[currentAdultQuestionIndex];
        const levelInfo = ADULT_LEVEL_INFO[currentAdultLevel];
        
        // Update question
        document.getElementById('current-adult-question').textContent = question;
        
        // Update danger indicator
        document.getElementById('danger-level').textContent = levelInfo.danger;
        document.getElementById('danger-text').textContent = levelInfo.name;
        
        // Update progress
        document.getElementById('current-adult-progress').textContent = `質問 ${currentAdultQuestionIndex + 1}`;
        document.getElementById('total-adult-questions').textContent = currentAdultQuestions.length;
        
        const progress = ((currentAdultQuestionIndex + 1) / currentAdultQuestions.length) * 100;
        document.getElementById('adult-progress-fill').style.width = progress + '%';
        
        // Update next button text
        const nextBtn = document.getElementById('next-adult-question-btn');
        if (currentAdultQuestionIndex === currentAdultQuestions.length - 1) {
            nextBtn.textContent = 'レベル完了';
        } else {
            nextBtn.textContent = '次の質問';
        }
        
        // Clear previous reactions
        document.querySelectorAll('.adult-reaction-btn').forEach(b => b.classList.remove('selected'));
    }

    function nextAdultQuestion() {
        if (currentAdultQuestionIndex < currentAdultQuestions.length - 1) {
            currentAdultQuestionIndex++;
            updateAdultDisplay();
        } else {
            // Level completed
            showAdultLevelCompletion();
        }
    }

    function showAdultLevelCompletion() {
        const levelInfo = ADULT_LEVEL_INFO[currentAdultLevel];
        alert(`🔥 ${levelInfo.name} 完了！\n\n危険度: ${levelInfo.danger}\n\nお疲れ様でした！\n\n※ 次のレベルはさらに危険です...`);
        backToAdultLevels();
    }

    function selectAdultLevel(level) {
        // Remove active class from all adult level buttons
        document.querySelectorAll('.adult-level-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to selected level
        document.querySelector(`.adult-level-btn[data-level="${level}"]`).classList.add('active');
    }

    function backToAdultLevels() {
        document.getElementById('adult-main').style.display = 'none';
        document.getElementById('level-selector-adult').style.display = 'block';
    }

    // --- FATE ROULETTE FUNCTIONALITY ---
    let fateGame = new FateRouletteGame();
    let currentSpinResult = null;

    // FATE ROULETTE event listeners
    document.getElementById('fate-roulette-btn').addEventListener('click', () => {
        changeScreen(fateRouletteScreen, 'images/title.jpg', 0.4);
        // Initialize fate level selection
        selectFateLevel(1);
    });

    // FATE ROULETTE HOME button
    const fateHomeBtn = document.getElementById('fate-home-btn');
    if (fateHomeBtn) {
        fateHomeBtn.addEventListener('click', () => location.reload());
    }

    // 参加者追加
    document.getElementById('add-participant-btn').addEventListener('click', () => {
        addParticipant();
    });

    document.getElementById('participant-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addParticipant();
        }
    });

    // レベル選択
    document.querySelectorAll('.fate-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = parseInt(btn.getAttribute('data-level'));
            selectFateLevel(level);
        });
    });

    // スピン実行
    document.getElementById('spin-fate-btn').addEventListener('click', () => {
        spinRoulette();
    });

    // モーダル関連
    document.getElementById('close-fate-modal').addEventListener('click', () => {
        closeFateModal();
    });

    document.getElementById('executed-btn').addEventListener('click', () => {
        handleCommandResult('executed');
    });

    document.getElementById('passed-btn').addEventListener('click', () => {
        handleCommandResult('passed');
    });

    document.getElementById('spin-again-btn').addEventListener('click', () => {
        closeFateModal();
    });

    // FATE ROULETTE 関数
    function addParticipant() {
        const nameInput = document.getElementById('participant-name');
        const name = nameInput.value.trim();
        const errorDiv = document.getElementById('participant-error');

        if (!name) {
            showFateError('名前を入力してください');
            return;
        }

        const result = fateGame.addParticipant(name);
        
        if (result.success) {
            nameInput.value = '';
            updateParticipantsDisplay();
            updateSpinButton();
            hideFateError();
        } else {
            showFateError(result.message);
        }
    }

    function removeParticipant(participantId) {
        fateGame.removeParticipant(participantId);
        updateParticipantsDisplay();
        updateSpinButton();
    }

    function updateParticipantsDisplay() {
        const grid = document.getElementById('participants-grid');
        const count = document.getElementById('participant-count');
        
        count.textContent = fateGame.participants.length;
        
        grid.innerHTML = '';
        
        fateGame.participants.forEach(participant => {
            const card = document.createElement('div');
            card.className = 'participant-card';
            card.setAttribute('data-id', participant.id);
            
            card.innerHTML = `
                <div class="participant-name">${participant.name}</div>
                <button class="remove-participant" onclick="removeParticipant(${participant.id})">✕</button>
            `;
            
            grid.appendChild(card);
        });
    }

    function selectFateLevel(level) {
        // Remove active class from all fate level buttons
        document.querySelectorAll('.fate-level-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to selected level
        document.querySelector(`.fate-level-btn[data-level="${level}"]`).classList.add('active');
        fateGame.setLevel(level);
    }

    function updateSpinButton() {
        const spinBtn = document.getElementById('spin-fate-btn');
        const canSpin = fateGame.participants.length >= 2;
        
        spinBtn.disabled = !canSpin;
    }

    function spinRoulette() {
        if (fateGame.participants.length < 2) {
            showFateError('参加者が2人以上必要です');
            return;
        }

        // アニメーション開始
        startSpinAnimation();

        // 1.5秒後に結果表示
        setTimeout(() => {
            const result = fateGame.spinRoulette();
            
            if (result.success) {
                stopSpinAnimation();
                showSpinResult(result);
                currentSpinResult = result;
            } else {
                stopSpinAnimation();
                showFateError(result.message);
            }
        }, 1500);
    }

    function startSpinAnimation() {
        const cards = document.querySelectorAll('.participant-card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('spinning');
            }, index * 100);
        });
    }

    function stopSpinAnimation() {
        const cards = document.querySelectorAll('.participant-card');
        cards.forEach(card => {
            card.classList.remove('spinning');
        });
    }

    function showSpinResult(result) {
        // Executor and Target highlighting
        const executorCard = document.querySelector(`[data-id="${result.executor.id}"]`);
        const targetCard = document.querySelector(`[data-id="${result.target.id}"]`);
        
        if (executorCard) {
            executorCard.classList.add('selected-executor');
        }
        if (targetCard) {
            targetCard.classList.add('selected-target');
        }

        setTimeout(() => {
            showFateResultModal(result);
        }, 1000);
    }

    function showFateResultModal(result) {
        const modal = document.getElementById('fate-result-modal');
        const levelInfo = FATE_LEVELS[result.level];
        
        // レベル表示
        document.getElementById('fate-current-level-emoji').textContent = levelInfo.emoji;
        document.getElementById('fate-current-level-name').textContent = levelInfo.name;
        
        // 参加者表示
        document.getElementById('executor-name').textContent = result.executor.name;
        document.getElementById('target-name').textContent = result.target.name;
        
        // 命令表示
        document.getElementById('fate-command-text').textContent = `「${result.command.text}」`;
        
        modal.style.display = 'block';
    }

    function closeFateModal() {
        const modal = document.getElementById('fate-result-modal');
        modal.style.display = 'none';
        
        // ハイライト解除
        document.querySelectorAll('.participant-card').forEach(card => {
            card.classList.remove('selected-executor', 'selected-target');
        });
    }

    function handleCommandResult(action) {
        if (action === 'passed' && currentSpinResult) {
            fateGame.recordPass(currentSpinResult.executor.id);
        }
        
        // アニメーション効果
        const btn = document.getElementById(`${action === 'executed' ? 'executed' : 'passed'}-btn`);
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
        
        // 簡単なフィードバック表示
        showFateMessage(action === 'executed' ? 
            '✓ 実行完了！次の命令をお楽しみに' : 
            '✗ パスしました。次こそは...'
        );
    }

    function showFateError(message) {
        const errorDiv = document.getElementById('participant-error');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 3000);
    }

    function hideFateError() {
        const errorDiv = document.getElementById('participant-error');
        errorDiv.style.display = 'none';
    }

    function showFateMessage(text) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ffd700, #ffb300);
            color: #1a237e;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: bold;
            z-index: 10000;
            animation: fadeInOut 3s ease forwards;
        `;
        message.textContent = text;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
    }

    // Make global functions available for onclick handlers
    window.removeParticipant = removeParticipant;
});

// ページ完全読み込み後の追加設定（GitHubPages対応）
window.addEventListener('load', () => {
    setTimeout(setupAllHomeButtons, 200); // 二重設定を防ぐため重複チェック付き
});