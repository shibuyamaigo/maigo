// FATE ROULETTE 命令データ
const FATE_COMMANDS = {
    // レベル1: 軽やか（緑 #4CAF50）
    level1: [
        { text: "{target}に初恋の話を聞く", type: "question" },
        { text: "{target}の第一印象を正直に言う", type: "speak" },
        { text: "{target}に好きな異性のタイプを聞く", type: "question" },
        { text: "{target}の良いところを3つ言う", type: "speak" },
        { text: "{target}に「最近あった嬉しいこと」を聞く", type: "question" },
        { text: "{target}との共通点を3つ探す", type: "action" },
        { text: "{target}に「実は○○なんです」と秘密を一つ打ち明ける", type: "speak" },
        { text: "{target}のスマホの壁紙を見せてもらう", type: "action" },
        { text: "{target}に「付き合うなら何が絶対条件？」と聞く", type: "question" },
        { text: "{target}がどんな子供だったか想像して言う", type: "speak" },
        { text: "{target}の口癖を真似する", type: "action" },
        { text: "{target}に「今までで一番恥ずかしかった経験」を聞く", type: "question" },
        { text: "{target}にあだ名をつける", type: "action" },
        { text: "{target}を動物に例えると何か言う", type: "speak" },
        { text: "{target}に「最近ハマってること」を聞く", type: "question" },
        { text: "{target}の声の好きなところを言う", type: "speak" },
        { text: "{target}に「5年後どうなっていたい？」と聞く", type: "question" },
        { text: "{target}との思い出を一つ作る約束をする", type: "action" },
        { text: "{target}に「この中で気になる人いる？」と聞く", type: "question" },
        { text: "{target}のSNSをフォローする", type: "action" }
    ],

    // レベル2: スパイス（黄 #FFC107）
    level2: [
        { text: "{target}の手相を見るフリをして30秒手を握る", type: "touch" },
        { text: "{target}の目を見ながら「好き」と言う", type: "speak" },
        { text: "{target}と10秒間見つめ合う", type: "action" },
        { text: "{target}に「もし二人きりだったら何したい？」と聞く", type: "question" },
        { text: "{target}の髪を褒めながら触る", type: "touch" },
        { text: "{target}に「どんなキスが好き？」と聞く", type: "question" },
        { text: "{target}の隣に座って肩を寄せる", type: "touch" },
        { text: "{target}に「今まで何人と付き合った？」と聞く", type: "question" },
        { text: "{target}の手の大きさを自分の手と比べる", type: "touch" },
        { text: "{target}に「どこを触られるのが好き？」と聞く", type: "question" },
        { text: "{target}をお姫様（王子様）と呼ぶ", type: "speak" },
        { text: "{target}と小指を絡めて約束をする", type: "touch" },
        { text: "{target}の香水（匂い）を褒める", type: "speak" },
        { text: "{target}に「酔うとどうなる？」と聞く", type: "question" },
        { text: "{target}と次の休みにデートする約束をする", type: "action" },
        { text: "{target}に「どんな時にキュンとする？」と聞く", type: "question" },
        { text: "{target}の写真を撮らせてもらう", type: "action" },
        { text: "{target}に「夜、何してる？」と聞く", type: "question" },
        { text: "{target}と腕を組む", type: "touch" },
        { text: "{target}に「今日、帰りたくない」と言う", type: "speak" }
    ],

    // レベル3: 攻め（オレンジ #FF5722）
    level3: [
        { text: "{target}の耳元で名前を囁く", type: "intimate" },
        { text: "{target}と壁ドンをする（される）", type: "intimate" },
        { text: "{target}の首筋の匂いを嗅ぐ", type: "intimate" },
        { text: "{target}に「今夜どこまでOK？」と聞く", type: "question" },
        { text: "{target}の唇を5秒見つめる", type: "intimate" },
        { text: "{target}に「一番エッチだった経験」を聞く", type: "question" },
        { text: "{target}を後ろから抱きしめる（3秒）", type: "intimate" },
        { text: "{target}に「どこにキスされたい？」と聞く", type: "question" },
        { text: "{target}のほっぺをつつく", type: "touch" },
        { text: "{target}に「興奮するシチュエーション」を聞く", type: "question" },
        { text: "{target}と額をくっつける", type: "intimate" },
        { text: "{target}に「今、ドキドキしてる？」と耳元で聞く", type: "intimate" },
        { text: "{target}の鎖骨を褒める", type: "speak" },
        { text: "{target}に「エッチな夢見たことある？」と聞く", type: "question" },
        { text: "{target}と二人で5分間別の場所で話す", type: "action" },
        { text: "{target}に「俺/私のこと、どう思ってる？」と聞く", type: "question" },
        { text: "{target}の手首に触れる", type: "touch" },
        { text: "{target}に「もし付き合ったらどうなると思う？」と聞く", type: "question" },
        { text: "{target}と30秒間無言で見つめ合う", type: "intimate" },
        { text: "{target}に「今夜、二人で飲み直さない？」と言う", type: "speak" }
    ],

    // レベル4: 禁断（赤 #E91E63）
    level4: [
        { text: "{target}の好きな場所に5秒キス（頬・手OK）", type: "forbidden" },
        { text: "{target}の耳たぶを触る", type: "forbidden" },
        { text: "{target}と「キス以外なんでもあり」で1分間過ごす", type: "forbidden" },
        { text: "{target}に「今夜、家来る？」と聞く", type: "question" },
        { text: "{target}の腰に手を回す", type: "forbidden" },
        { text: "{target}に「どんな下着が好き？」と聞く", type: "question" },
        { text: "{target}をお姫様抱っこする（される）", type: "forbidden" },
        { text: "{target}に「Sっ気あるの？Mっ気あるの？」と聞く", type: "question" },
        { text: "{target}の首筋に息を吹きかける", type: "forbidden" },
        { text: "{target}に「一番感じる場所」を聞く", type: "question" },
        { text: "{target}と5秒間おでこをくっつけて見つめ合う", type: "forbidden" },
        { text: "{target}に「経験人数」を聞く", type: "question" },
        { text: "{target}の太ももに手を置く（服の上から）", type: "forbidden" },
        { text: "{target}に「今までで一番激しかった夜」を聞く", type: "question" },
        { text: "{target}と10秒間抱きしめ合う", type: "forbidden" },
        { text: "{target}に「好きなプレイ」を聞く", type: "question" },
        { text: "{target}の手のひらに唇をつける", type: "forbidden" },
        { text: "{target}に「今夜、一緒にいたい」と本気で言う", type: "speak" },
        { text: "{target}と二人でこの場を10分抜ける", type: "action" },
        { text: "{target}に連絡先を聞いて「今度二人で」と約束", type: "action" }
    ]
};

// レベル設定
const FATE_LEVELS = {
    1: { 
        name: "軽やか", 
        color: "#4CAF50", 
        darkColor: "#2E7D32",
        description: "誰でも安心してできる",
        emoji: "😊"
    },
    2: { 
        name: "スパイス", 
        color: "#FFC107", 
        darkColor: "#F57C00",
        description: "ちょっとドキドキ",
        emoji: "😍"
    },
    3: { 
        name: "攻め", 
        color: "#FF5722", 
        darkColor: "#D84315",
        description: "距離が縮まる",
        emoji: "🔥"
    },
    4: { 
        name: "禁断", 
        color: "#E91E63", 
        darkColor: "#AD1457",
        description: "覚悟が必要",
        emoji: "💀"
    }
};

// ゲーム状態管理
class FateRouletteGame {
    constructor() {
        this.participants = [];
        this.currentLevel = 1;
        this.history = [];
        this.passCount = {};
    }

    // 参加者追加
    addParticipant(name) {
        if (this.participants.length >= 12) {
            return { success: false, message: "参加者は12人までです" };
        }
        
        if (name.length === 0 || name.length > 8) {
            return { success: false, message: "名前は1〜8文字で入力してください" };
        }
        
        if (this.participants.some(p => p.name === name)) {
            return { success: false, message: "同じ名前は登録できません" };
        }
        
        const id = Date.now() + Math.random();
        this.participants.push({ id, name });
        this.passCount[id] = 0;
        
        return { success: true, participant: { id, name } };
    }

    // 参加者削除
    removeParticipant(id) {
        this.participants = this.participants.filter(p => p.id !== id);
        delete this.passCount[id];
    }

    // ルーレット実行
    spinRoulette() {
        if (this.participants.length < 2) {
            return { success: false, message: "参加者が2人以上必要です" };
        }

        const commands = FATE_COMMANDS[`level${this.currentLevel}`];
        if (!commands || commands.length === 0) {
            return { success: false, message: "命令データがありません" };
        }

        // 実行者を選択
        const executor = this.participants[Math.floor(Math.random() * this.participants.length)];
        
        // 対象者を選択（実行者以外から）
        const availableTargets = this.participants.filter(p => p.id !== executor.id);
        let target;
        
        if (availableTargets.length === 0) {
            // 2人の場合
            target = this.participants.find(p => p.id !== executor.id);
        } else {
            target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
        }

        // 命令を選択（履歴と重複しないように）
        let command;
        let attempts = 0;
        do {
            command = commands[Math.floor(Math.random() * commands.length)];
            attempts++;
        } while (this.isRecentCommand(command) && attempts < 10);

        // 命令文の{target}を置換
        const commandText = command.text.replace('{target}', target.name);
        
        const result = {
            success: true,
            executor: executor,
            target: target,
            command: {
                ...command,
                text: commandText
            },
            level: this.currentLevel
        };

        // 履歴に追加
        this.history.push({
            executor: executor.name,
            target: target.name,
            command: commandText,
            level: this.currentLevel,
            timestamp: Date.now()
        });

        // 履歴は最新10件のみ保持
        if (this.history.length > 10) {
            this.history.shift();
        }

        return result;
    }

    // 最近の命令かチェック
    isRecentCommand(command) {
        const recentCommands = this.history.slice(-3);
        return recentCommands.some(h => h.command === command.text);
    }

    // レベル設定
    setLevel(level) {
        if (level >= 1 && level <= 4) {
            this.currentLevel = level;
            return true;
        }
        return false;
    }

    // パス処理
    recordPass(participantId) {
        if (this.passCount[participantId] !== undefined) {
            this.passCount[participantId]++;
        }
    }

    // ゲーム状態リセット
    reset() {
        this.participants = [];
        this.history = [];
        this.passCount = {};
        this.currentLevel = 1;
    }
}