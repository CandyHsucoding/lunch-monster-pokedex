const monsters = [
  {
    name: "米粒咚",
    type: "全榖雜糧守護",
    note: "喜歡糙米、地瓜和玉米，提醒大家主食可以有變化。",
    image: "assets/monster-01.png",
    main: "#d79a42",
    accent: "#f0cf73"
  },
  {
    name: "豆豆力",
    type: "豆魚蛋肉搭檔",
    note: "會把豆腐、魚、蛋和瘦肉變成午餐補給隊。",
    image: "assets/monster-02.png",
    main: "#d84d49",
    accent: "#f2a2a0"
  },
  {
    name: "菜菜蓬",
    type: "蔬菜偵查員",
    note: "最會發現餐盤裡的深色蔬菜，讓顏色更豐富。",
    image: "assets/monster-03.png",
    main: "#4f9b54",
    accent: "#9bd36f"
  },
  {
    name: "果果閃",
    type: "水果提醒員",
    note: "放學前會提醒大家，水果是一天飲食的一部分。",
    image: "assets/monster-04.png",
    main: "#f1ad3d",
    accent: "#f06c53"
  },
  {
    name: "奶泡嚕",
    type: "乳品小隊長",
    note: "喜歡鮮奶和無糖優格，負責補上容易被忘記的乳品類。",
    image: "assets/monster-05.png",
    main: "#5d9bd6",
    accent: "#d8eef8"
  },
  {
    name: "彩盤虎",
    type: "均衡餐盤隊長",
    note: "看到餐盤有主食、蛋白質、蔬菜、水果和乳品就會發光。",
    image: "assets/monster-06.png",
    main: "#7a6fc2",
    accent: "#f3b33d"
  },
  {
    name: "湯湯安",
    type: "減鈉觀察員",
    note: "會提醒大家湯汁和醬料也有鈉，喝湯不必喝到見底。",
    image: "assets/monster-07.png",
    main: "#49a3a6",
    accent: "#f4d46a"
  },
  {
    name: "午餐博士",
    type: "菜單判讀高手",
    note: "能看懂菜單的食物類別，幫全隊完成午餐任務。",
    image: "assets/monster-08.png",
    main: "#3f7d4c",
    accent: "#e85f4f"
  }
];

const questions = [
  {
    text: "今天主餐是滷雞腿，飯盒裡還有白飯和海帶湯。最需要補上哪一類，讓餐盤更均衡？",
    answers: ["更多炸物", "只加醬汁", "蔬菜類", "再喝一碗湯"],
    correct: 2,
    explain: "有主食和豆魚蛋肉類時，補上蔬菜能讓餐盤更完整。"
  },
  {
    text: "下列哪一份午餐最接近均衡餐盤？",
    answers: ["白飯、炸雞、薯條、含糖飲料", "糙米飯、豆腐魚片、炒青菜、芭樂、鮮奶", "炒麵、麵包、玉米濃湯", "雞排、香腸、滷蛋"],
    correct: 1,
    explain: "均衡餐盤要有全榖雜糧、豆魚蛋肉、蔬菜、水果和乳品，種類越完整越好。"
  },
  {
    text: "如果午餐已經有飯、滷蛋、青菜，點心可以優先選哪一個補足乳品類？",
    answers: ["洋芋片", "巧克力糖", "再加一碗白飯", "無糖優格"],
    correct: 3,
    explain: "無糖優格屬於乳品類，比較能補上這餐較少出現的類別。"
  },
  {
    text: "看到午餐有青花菜、紅蘿蔔、木耳，這份菜最大的優點是什麼？",
    answers: ["蔬菜顏色多，種類較豐富", "只要有綠色就可以不用主食", "蔬菜越鹹越下飯越好", "可以取代所有水果"],
    correct: 0,
    explain: "蔬菜顏色多通常代表種類較多，但仍不能取代主食或水果。"
  },
  {
    text: "下列哪個做法比較符合日常的減鈉小技巧？",
    answers: ["湯汁全部喝完才不浪費", "每道菜都再加醬油", "醬料先少量，需要再加", "用泡麵湯當午餐湯品"],
    correct: 2,
    explain: "醬料和湯汁都可能增加鈉，先少量使用比較適合日常。"
  },
  {
    text: "學校午餐有地瓜飯、番茄炒蛋、炒高麗菜，還可以搭配哪一項讓餐盤更完整？",
    answers: ["再加一包餅乾", "水果和鮮奶", "只加辣椒醬", "把青菜換成炸物"],
    correct: 1,
    explain: "這份午餐已有主食、蛋白質和蔬菜，搭配水果與乳品會更完整。"
  },
  {
    text: "菜單上寫「玉米、毛豆、豆干、青江菜」，哪一個屬於豆魚蛋肉類？",
    answers: ["玉米", "青江菜", "白飯", "豆干"],
    correct: 3,
    explain: "豆干是黃豆製品，屬於豆魚蛋肉類；玉米較接近全榖雜糧類。"
  },
  {
    text: "同學說「只要吃水果，就不用吃青菜」。你會怎麼判斷？",
    answers: ["對，水果比較甜所以比較好", "對，青菜可以全部省略", "不對，水果和蔬菜都需要，但不能互相完全取代", "不一定，只喝果汁就好"],
    correct: 2,
    explain: "水果和蔬菜提供的營養不同，日常飲食中兩類都需要。"
  }
];

let currentQuestion = 0;
let unlocked = 0;
let answered = false;

const scoreText = document.querySelector("#scoreText");
const roundLabel = document.querySelector("#roundLabel");
const monsterHint = document.querySelector("#monsterHint");
const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const resetButton = document.querySelector("#resetButton");
const monsterDex = document.querySelector("#monsterDex");
const completeText = document.querySelector("#completeText");
const monsterTemplate = document.querySelector("#monsterTemplate");

function renderQuestion() {
  const question = questions[currentQuestion];
  answered = false;
  roundLabel.textContent = `第 ${currentQuestion + 1} 題`;
  monsterHint.textContent = `答對可解鎖：${monsters[currentQuestion].name}`;
  questionText.textContent = question.text;
  feedback.textContent = "選出最符合均衡餐盤或午餐判讀的答案。";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "完成任務" : "下一題";

  answerGrid.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index));
    answerGrid.append(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  const question = questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-button")];
  answered = true;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.correct) button.classList.add("correct");
    if (buttonIndex === index && index !== question.correct) button.classList.add("wrong");
  });

  if (index === question.correct) {
    unlocked = Math.max(unlocked, currentQuestion + 1);
    const monster = monsters[currentQuestion];
    feedback.textContent = `答對了！${monster.name} 加入圖鑑。${question.explain}`;
    feedback.className = "feedback success";
  } else {
    feedback.textContent = `再想想看。${question.explain}`;
    feedback.className = "feedback notice";
  }

  nextButton.disabled = false;
  renderDex();
}

function renderDex() {
  scoreText.textContent = `${unlocked} / ${monsters.length}`;
  completeText.textContent = unlocked === monsters.length
    ? "圖鑑完成！全隊小怪獸都集合了。"
    : "答對題目後，小怪獸會出現在這裡。";
  monsterDex.innerHTML = "";

  monsters.forEach((monster, index) => {
    const card = monsterTemplate.content.firstElementChild.cloneNode(true);
    const art = card.querySelector(".monster-art");
    const title = card.querySelector("h3");
    const note = card.querySelector("p");
    const isUnlocked = index < unlocked;

    card.classList.toggle("locked", !isUnlocked);
    card.classList.toggle("unlocked", isUnlocked);
    art.style.setProperty("--monster-main", monster.main);
    art.style.setProperty("--monster-accent", monster.accent);
    art.innerHTML = "";
    if (isUnlocked) {
      const image = document.createElement("img");
      image.src = monster.image;
      image.alt = monster.name;
      image.loading = "lazy";
      art.append(image);
    }
    title.textContent = isUnlocked ? monster.name : "尚未解鎖";
    note.textContent = isUnlocked ? `${monster.type}：${monster.note}` : "答對對應題目後出現。";
    monsterDex.append(card);
  });
}

function goNext() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  questionText.textContent = unlocked === monsters.length
    ? "任務完成！你收集了全部午餐小怪獸。"
    : "任務完成！可以重新挑戰，把缺少的小怪獸收集起來。";
  answerGrid.innerHTML = "";
  feedback.textContent = `本次解鎖 ${unlocked} 隻小怪獸，共 ${monsters.length} 隻。`;
  feedback.className = unlocked === monsters.length ? "feedback success" : "feedback";
  nextButton.disabled = true;
  monsterHint.textContent = "圖鑑任務結算";
}

function resetGame() {
  currentQuestion = 0;
  unlocked = 0;
  renderDex();
  renderQuestion();
}

nextButton.addEventListener("click", goNext);
resetButton.addEventListener("click", resetGame);

renderDex();
renderQuestion();
