'use strict';
/* ═══════════════════════════════════════════════════════════════
   SPEED TYPER — Enhanced Racing Game
   Features: AI opponents, vehicles, dark/light mode, beginner mode
═══════════════════════════════════════════════════════════════ */

/* ── WORD BANKS ── */
const WORDS_EASY = [
  
  
  "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf ",
  "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf ",
  "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf ",
  "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
  " asdf asdf asdf aasdf asdf asdf asdf asdf ",
  "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
  "jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; " ,
  "jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl;",
  " jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl;",
  " jjkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl;",
  "jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl;   ",
   "qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqq qqqquick quilt quiet queen quay quest quack quake quiltthe queen asked for a quick quest to find the quilt",
   "www www www www www www www www www www www www wwwwent west wish water with wall wood wide wave workwe went west to watch the wide water waves wash walls",
   "eee eee eee eee eee eee eee eee eee eee eee eee eeeeat east egg ever every each eagle edge else easyevery eagle eats each egg near the eastern edge",
   "rrr rrr rrr rrr rrr rrr rrr rrr rrr rrr rrr rrr rrrrun red road rain real rest rock ring rare roofred roads run past the rare rock rings in the rain",
   "ttt ttt ttt ttt ttt ttt ttt ttt ttt ttt ttt ttt ttttell take time top tree talk tall ten test truetell the tall team to take the true test at ten",
   "yyy yyy yyy yyy yyy yyy yyy yyy yyy yyy yyy yyy yyyyes yet you your yard yellow year yell you youngyour young yellow dog yells in the yard every year",
   "Copy these to practice the whole top row together:qwerty qwerty qwerty qwerty qwerty qwerty qwertyqwert yuiop qwert yuiop qwert yuiop qwert yuioptype the top row trees with your ten tired tips",
   "uuu uuu uuu uuu uuu uuu uuu uuu uuu uuu uuu uuu uuuunder use unit upon until urge up unit user uncleunder the unit uncle uses the umbrella until sunset",
   "iii iii iii iii iii iii iii iii iii iii iii iii iiiice island iron into item idea itch inside ink imageit is important to ink the item inside the iron box",
   "ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo oooopen over only once ocean onto order oval orangeopen the orange box once the ocean order is over",
   "ppp ppp ppp ppp ppp ppp ppp ppp ppp ppp ppp ppp ppppart park paper pink page plan past play post pointplease put the pink paper on the past page of the plan",
   "[[[ ]]] [[[ ]]] [[[ ]]] [[[ ]]] [[[ ]]] [[[ ]]] [[[ ]]][start] [end] [left] [right] [box] [item] [open] [close]the data is kept inside [brackets] for the final [list]",
   "'\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \c':/work c:/data c:/user c:/files c:/test c:/homefollow the path c:/user/docs to find the hidden file",
  "uiop uiop uiop uiop uiop uiop uiop uiop uiop uiopuiop []/ uiop []/ uiop []/ uiop []/ uiop []/ uiop []the point of the unit is to [open] the [path] / home",
  "zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzzzip zero zone zoom zebra zest zinc zone zebra zerothe zebra zoomed through the zero zone with zest",
  "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxnext exam exit axle axis extra exercise coax flaxthe next exam will exercise your extra axle skills",
  "ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccccall came cold care city cake coat case calm conecall the city to care for the cold cake in the case",
  "vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvvvery view vest vibe vase vast vine vote vent valvethe very vast vine view was visible from the vest",
  "bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbbbook back blue best both body bird boat bank basethe blue bird built a best book base by the bank",
  "nnn nnn nnn nnn nnn nnn nnn nnn nnn nnn nnn nnn nnnnear next name nice none night note news near noonnext name the nice news note near the noon hour",
  "mmm mmm mmm mmm mmm mmm mmm mmm mmm mmm mmm mmm mmmmake more move mind milk many moon meet main markmake more moves to meet the main moon mark soon",
  ",,, ... /// ,,, ... /// ,,, ... /// ,,, ... /// ,,, ... ///date, time. path/file. end, stop. yes/no. list, item.go to home/docs, find the file, and click save.",
  "zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnmzxcv bnm, ./ zxcv bnm, ./ zxcv bnm, ./the extra/nice zebra came back, moving very fast.",
  "111 222 111 222 111 222 111 222 111 222 111 22212 21 112 221 122 211 1122 2211 1212 2121the 1st and 2nd items are on page 12 of book 21",
  "333 444 333 444 333 444 333 444 333 444 333 44434 43 334 443 343 434 3344 4433 3434 4343there are 34 birds and 43 trees in area 3 or 4",
  "555 666 555 666 555 666 555 666 555 666 555 66656 65 556 665 565 656 5566 6655 5656 6565we found 56 rocks and 65 shells in room 5 and 6",
  "777 888 777 888 777 888 777 888 777 888 777 88878 87 778 887 787 878 7788 8877 7878 8787the 78 men and 87 women arrived at 7 or 8 pm",
  "999 000 999 000 999 000 999 000 999 000 999 00090 09 990 009 909 090 9900 0099 9090 0909score 90 points out of 100 to get a grade of 9.0",
  "--- === --- === --- === --- === --- === --- ==== -- == -= =- -=- =-= --== ==-- -=-= =-=-total = 10 - 5; the result of 9 - 1 = 8 exactly",
  "12345 67890 12345 67890 12345 678901-2 3-4 5-6 7-8 9-0 1+1=2 2+2=4 5+5=10the code 123-456-7890 is valid for all 10 users",
"all a fad. a lad has a dad. a salad is as glad as a lad. add a glass as a fad. falls as fast as a salad. a lad asks a dad. dads add salad.",
"the quick brown fox jumps over the lazy dog. it is a very calm day in the city. we can go to the park to play with the red ball. my kind friend made a nice cake for me. the sun is up and the sky is blue.",
"the total is 10 + 20 = 30. please call me at 123-456-7890. i have 5 apples and 2 oranges in my bag. the price is $4.00 for 1. is the shop open/closed today? yes, it is open from 9 to 5.",
"it was a cold night. the cat sat on the mat. she was a grey cat with a long tail. she saw a small bird in the tree. the bird flew away into the dark sky. the cat closed her eyes and went to sleep.",
"The sign says #1 at @home for $5! This is a ~test of the left hand. We need $100 @ the shop #soon! The cost is $50 #1 @ the desk! ~Wow, that is a great price!",
"Total (10+2) * 5 is the goal. Use the ^ symbol for power! (Notes) & [Data] go here. The result is (5+5) & 10+10. Are you ready (Y/N) & will you join? +1 more!",
"The password is @User#1! The total cost (tax included) is $99.00. I need to buy 100% of the &items! Use the (Shift+9) and (Shift+0) keys for the brackets. The ~symbol is next to the #1 key! My email is name@site.com & I am #1!",
"Is 100% @ $50.00 better than 50% @ $100.00? (Yes+No). The code is #99-00! Use & to join! The path (A+B) is ~clear. We have (5*2) = 10! Please check @ the desk #2.",
"'Left Hand: A (Pinky), S (Ring), D (Middle), F (Pointer)Right Hand: J (Pointer), K (Middle), L (Ring), ; (Pinky)Thumbs: Both rest on the Space Bar.'",
"'1. Left Hand (The 'Power' Side)Pinky: 1, Q, A, Z, Left Shift, Caps Lock, ~Ring: 2, W, S, XMiddle: 3, E, D, CPointer: 4, 5, R, T, F, G, V, B'",
"2. Right Hand (The 'Precision' Side)Pointer: 6, 7, Y, U, H, J, N, MMiddle: 8, I, K, , (comma)Ring: 9, O, L, . (period)Pinky: 0, -, =, P, [, ], ;, ', /, Enter, BackSpace, Right Shift",
"the cat sat on a mat", "big red dog runs fast", "see the sun and sky",,
"my car is very fast", "go left then turn right", "stop look and then go",
  "eat the green apple now", "the boy ran to the park", "she has a blue hat",
  "I like to play games", "the fish swim in water", "he can jump very high",
  "put the cup on top", "a bird flew over us", "they went to the store",
  "we had fun at the zoo", "look at the big tree", "I can see you now",
  "run fast to win the race", "the dog barked at night",
];

const WORDS_NORMAL = [
  
  
  "The quick brown fox jumps over the lazy dog",
  "Speed is the essence of war take advantage of it",
  
  "practice makes perfect keep pushing your limits today",
  "The xanthic zephyr quickly baffled the jovial gymnasts. Myriad rhythmic phalanges synchronized with the quirky xylophone. A sphinx of black quartz judged my vow very poorly. Six big devils from Japan quickly forgot how to daze.",
  "the night sky was filled with countless bright stars",
  "every second counts when you are racing to the finish",
  
  
  "Typing fast is a skill that improves with daily practice",
  "The road ahead is long but the journey makes you stronger",
  "Focus on the keys and let your fingers do the talking",
  "Champions are made in the moments when they want to quit",
  "Smooth roads never make skilled drivers so keep going forward",
  "A fast car needs a skilled driver and very steady hands",
  "The engine roared as the driver floored the accelerator hard",
  "Wait!shouted the 2nd judge, 'The price is $1,250.00 (tax included) & we only have 3/10 items in stock!' A quick-moving fox jumped over 50+ lazy dogs @ the park. ~Is this 100% correct? [Yes/No]. Pack 12 dozen liquor jugs for the @User_99 party!",
  "Precision and speed are the keys to winning every single race",
  "Keep your eyes on the road and your hands on the wheel",
  "The finish line gets closer with every single word you type",
  "The report (Ref #99-AX) shows a +15% increase @ $4,500.75 per unit. Is the ratio 1:2 or 3:4? Please email support@data-link.net or call (800) 555-0192! The password Z@x9!wQ# was reset ~10 minutes ago.",
  "Great speed requires great focus and absolute mental discipline",
  " One keystroke at a time you close the gap to victory",
  "The best typists see entire words not individual letters at all",
  "Accelerate through the corners and brake gently at the right time",
  "Our fingers are the tires and your mind is the engine",
  "Initialize the array: list_items = [1, 2, 3];. If (value > 100) { return 'Error!; } else { count++; }. Use the path 'C:\Users\Admin\Documents\Project_Final.docx'. Did you include the & symbols in the (brackets)?'",
];

/* ── AI RACERS ── */
const AI_RACERS = [
  { id: 1, name: 'SpeedBot',   colorIdx: 1, wpmBase: 55, wpmVar: 12, vehicle: 'car',      emoji: '🏎️' },
  { id: 2, name: 'NitroAI',    colorIdx: 2, wpmBase: 42, wpmVar: 15, vehicle: 'car',      emoji: '🚗' },
  { id: 3, name: 'FlashX',     colorIdx: 3, wpmBase: 68, wpmVar: 10, vehicle: 'car',      emoji: '🏎️' },
  { id: 4, name: 'TypeMaster', colorIdx: 4, wpmBase: 38, wpmVar: 18, vehicle: 'car',      emoji: '🚙' },
  { id: 5, name: 'GhostRacer', colorIdx: 5, wpmBase: 50, wpmVar: 8,  vehicle: 'car',      emoji: '👻' },
];

const CAR_COLORS = [
  { hex: '#1D4ED8', name: 'Royal Blue' },   // 0 — player default
  { hex: '#B91C1C', name: 'Racing Red'  },  // 1
  { hex: '#C2610A', name: 'McLaren Orange'},// 2
  { hex: '#15803D', name: 'BRG' },          // 3
  { hex: '#7E22CE', name: 'Purple' },       // 4
  { hex: '#A16207', name: 'Gold' },         // 5
];

const VEHICLE_TYPES = {
  car:      { emoji: '🏎️', label: 'SPORTS CAR', speedMult: 1.0 },
  bike:     { emoji: '🏍️', label: 'MOTORBIKE',  speedMult: 1.05 },
  airplane: { emoji: '✈️', label: 'AIRPLANE',   speedMult: 1.10 },
  car:      { emoji: '🚗', label: 'SPORTS CAR', speedMult: 1.0 },
  train:    { emoji: '🚅', label: 'MOTORBIKE',  speedMult: 1.05 },
  saoser:   { emoji: '🛸', label: 'AIRPLANE',   speedMult: 1.10 },
  olden:    { emoji: '🚂', label: 'AIRPLANE',   speedMult: 1.10 },
  parachute:{ emoji: '🪂', label: 'AIRPLANE',   speedMult: 1.10 },
  rocket:   { emoji: '🏎', label: 'AIRPLANE',   speedMult: 1.10 },
  babyscooter: { emoji: '🛴', label: 'AIRPLANE',   speedMult: 1.10 },
  auto:    { emoji: '🛺', label: 'AIRPLANE',   speedMult: 1.10 },
  hovercraft: { emoji: '🦼', label: 'AIRPLANE',   speedMult: 1.10 },
  bullet:  { emoji: '🚇', label: 'AIRPLANE',   speedMult: 1.10 },
  aircraft:{ emoji: '🛩', label: 'AIRPLANE',   speedMult: 1.10 },
};

/* ── STATE ── */
const S = {
  // profile
  profile: null,
  bestWpm: 0,
  // game
  running: false,
  finished: false,
  beginnerMode: false,
  mode: 60,
  timeLeft: 60,
  startTime: null,
  // typing
  currentLine: '',
  charResults: [],
  inputPos: 0,
  correctChars: 0,
  totalCorrect: 0,
  totalTyped: 0,
  errors: 0,
  linesDone: 0,
  lineIdx: 0,
  // stats
  wpm: 0,
  accuracy: 100,
  // player car
  carX: 0.04,
  carTarget: 0.04,
  // AI cars state: [{id, name, colorIdx, x, target, wpm, dist, finished}]
  aiCars: [],
  // race data for results
  raceResult: [],
};

/* ── DOM CACHE ── */
let dom = {};
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ── CANVAS ── */
let ctx, raf;
let roadOffset = 0, roadSpeed = 0;

/* ── AUDIO (lightweight, generated) ── */
let audioCtx = null;
function initAudio() {
  if (audioCtx) return;
  try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
}
function beep(freq = 880, dur = 0.06, type = 'sine', vol = 0.12) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + dur);
  } catch(e) {}
}
function soundCorrect() { beep(1200, 0.04, 'sine', 0.08); }
function soundWrong()   { beep(200, 0.08, 'sawtooth', 0.10); }
function soundLineDone(){ beep(880, 0.05, 'sine', 0.12); setTimeout(() => beep(1100, 0.08, 'sine', 0.12), 60); }
function soundStart()   { [500,700,900].forEach((f,i) => setTimeout(() => beep(f, 0.1, 'sine', 0.15), i * 100)); }
function soundFinish()  { [600,800,1000,1200].forEach((f,i) => setTimeout(() => beep(f, 0.12, 'sine', 0.14), i * 120)); }

/* ── HELPERS ── */
const clamp = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
const lerp  = (a,b,t)   => a + (b-a)*t;

function getWordBank() {
  return S.beginnerMode ? WORDS_EASY : WORDS_NORMAL;
}

function pickLine() {
  const bank = getWordBank();
  let next = (S.lineIdx + 1 + Math.floor(Math.random() * 2)) % bank.length;
  if (bank[next] === S.currentLine) next = (next + 1) % bank.length;
  return bank[next];
}

function getPlayerColor() {
  const idx = S.profile?.colorIdx ?? 0;
  return CAR_COLORS[idx]?.hex ?? CAR_COLORS[0].hex;
}

function getPlayerVehicle() {
  return S.profile?.vehicle ?? 'car';
}

/* ── DARK / LIGHT MODE ── */
function initTheme() {
  const saved = localStorage.getItem('typer_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeToggle(saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('typer_theme', next);
  updateThemeToggle(next);
}
function updateThemeToggle(theme) {
  const lbl = $('theme-label');
  if (lbl) lbl.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

/* ── PROFILE ── */
function loadProfile() {
  try {
    const raw = localStorage.getItem('typer_profile_v2');
    if (raw) S.profile = JSON.parse(raw);
    S.bestWpm = parseFloat(localStorage.getItem('typer_best') || '0');
  } catch(e) {}
}
function saveProfile(data) {
  S.profile = data;
  localStorage.setItem('typer_profile_v2', JSON.stringify(data));
}
function saveBest(wpm) {
  if (wpm > S.bestWpm) { S.bestWpm = wpm; localStorage.setItem('typer_best', String(wpm)); return true; }
  return false;
}
function updatePlayerBadge() {
  if (!S.profile) return;
  const nameEl = $('player-name');
  const dotEl  = $('player-dot');
  const vehEl  = $('player-veh');
  if (nameEl) nameEl.textContent = S.profile.name || 'RACER';
  if (dotEl)  dotEl.style.background = getPlayerColor();
  if (vehEl)  vehEl.textContent = VEHICLE_TYPES[getPlayerVehicle()]?.emoji || '🏎️';
}

/* ══════════════════════════════════════════
   CANVAS RENDERING
══════════════════════════════════════════ */
function resizeCanvas() {
  const c = dom.canvas;
  const rect = c.parentElement.getBoundingClientRect();
  c.width  = Math.round(rect.width);
  c.height = Math.round(rect.height);
}

function drawRoad(W, H) {
  // Sky band
  const sky = ctx.createLinearGradient(0,0,0,H*0.28);
  sky.addColorStop(0, '#0D0F1C');
  sky.addColorStop(1, '#181B2E');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H*0.28);

  // Road surface
  const road = ctx.createLinearGradient(0, H*0.28, 0, H);
  road.addColorStop(0, '#1E1E2A');
  road.addColorStop(1, '#14141E');
  ctx.fillStyle = road;
  ctx.fillRect(0, H*0.28, W, H*0.72);

  // Horizon glow
  ctx.fillStyle = 'rgba(59,130,246,0.06)';
  ctx.fillRect(0, H*0.24, W, H*0.12);

  // Lane dividers
  const lanes = [0.43, 0.60, 0.77];
  lanes.forEach(ly => {
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H*ly);
    ctx.lineTo(W, H*ly);
    ctx.stroke();
  });

  // Animated center dashes
  const DASH = 42, GAP = 28, PER = DASH + GAP;
  ctx.strokeStyle = 'rgba(255,255,255,0.13)';
  ctx.lineWidth = 2;
  ctx.setLineDash([DASH, GAP]);
  ctx.lineDashOffset = -(roadOffset % PER);
  [0.515, 0.685].forEach(ly => {
    ctx.beginPath();
    ctx.moveTo(0, H*ly);
    ctx.lineTo(W, H*ly);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  // Road edges
  ctx.strokeStyle = 'rgba(255,255,255,0.09)';
  ctx.lineWidth = 1.5;
  [0.285, 0.95].forEach(ly => {
    ctx.beginPath();
    ctx.moveTo(0, H*ly);
    ctx.lineTo(W, H*ly);
    ctx.stroke();
  });
}

function drawVehicle(xRel, yLane, color, vehicle, wpm, W, H, alpha = 1) {
  const x = xRel * W;
  ctx.save();
  ctx.globalAlpha = alpha;

  if (vehicle === 'airplane') {
    drawAirplane(x, yLane, color, wpm, W);
  } else if (vehicle === 'bike') {
    drawBike(x, yLane, color, wpm, W);
  } else {
    drawCar(x, yLane, color, wpm, W);
  }

  ctx.restore();
}

function drawCar(cx, cy, color, wpm, W) {
  const w = 66, h = 26;
  const x = cx - w/2, y = cy - h/2;

  // Shadow under car
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + h/2 + 4, w*0.45, 4, 0, 0, Math.PI*2);
  ctx.fill();

  // Underglow
  const glow = ctx.createRadialGradient(cx, cy+h/2, 0, cx, cy+h/2, 55);
  glow.addColorStop(0, color + '55');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(cx-60, cy-10, 120, h+30);

  // Body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 4);
  ctx.fill();

  // Roof/cabin
  ctx.fillStyle = adjustColor(color, -40);
  ctx.beginPath();
  ctx.roundRect(x+w*0.35, y+2, w*0.38, h*0.55, 3);
  ctx.fill();

  // Windshield
  ctx.fillStyle = 'rgba(200,230,255,0.25)';
  ctx.beginPath();
  ctx.roundRect(x+w*0.36, y+3, w*0.35, h*0.45, 2);
  ctx.fill();

  // Headlights (front = right side)
  const headGrad = ctx.createRadialGradient(cx+w/2+8, cy, 0, cx+w/2+8, cy, 28);
  headGrad.addColorStop(0, 'rgba(255,255,220,0.6)');
  headGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = headGrad;
  ctx.fillRect(cx, cy-14, 55, 28);

  ctx.fillStyle = '#FFFDE0';
  [[y+5, 6], [y+h-11, 6]].forEach(([ty, th]) => {
    ctx.beginPath();
    ctx.roundRect(x+w-5, ty, 5, th, 1.5);
    ctx.fill();
  });

  // Tail lights
  ctx.fillStyle = '#EF4444';
  [[y+4, 5], [y+h-9, 5]].forEach(([ty, th]) => {
    ctx.beginPath();
    ctx.roundRect(x, ty, 4, th, 1.5);
    ctx.fill();
  });

  // Wheels
  [-0.5, 0.5].forEach(side => {
    const wx = side < 0 ? x + w*0.18 : x + w*0.78;
    const wy = y + h;
    ctx.fillStyle = '#0F0F18';
    ctx.beginPath();
    ctx.ellipse(wx, wy+1, 8, 5.5, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#2A2A3A';
    ctx.beginPath();
    ctx.ellipse(wx, wy+1, 5.5, 3.5, 0, 0, Math.PI*2);
    ctx.fill();
    // Rim highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(wx, wy+1, 3, 0, Math.PI*2);
    ctx.stroke();
  });

  // Speed lines (motion blur)
  if (wpm > 25) {
    const blur = Math.min(0.45, (wpm-25)/110);
    const lines = Math.min(7, Math.floor((wpm-25)/14));
    ctx.strokeStyle = `rgba(255,255,255,${blur})`;
    ctx.lineWidth = 1;
    for (let i = 0; i < lines; i++) {
      const ly = y + 4 + i * (h / Math.max(lines,1));
      const len = 14 + i * 6;
      ctx.beginPath();
      ctx.moveTo(x - len, ly);
      ctx.lineTo(x - 3, ly);
      ctx.stroke();
    }
  }
}

function drawBike(cx, cy, color, wpm, W) {
  const w = 52, h = 22;
  const x = cx - w/2, y = cy - h/2;

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + h/2 + 4, w*0.4, 3.5, 0, 0, Math.PI*2);
  ctx.fill();

  // Glow
  const glow = ctx.createRadialGradient(cx, cy+h/2, 0, cx, cy+h/2, 42);
  glow.addColorStop(0, color + '44');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(cx-50, cy-12, 100, h+22);

  // Body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x+4, y+4, w-8, h-4, 3);
  ctx.fill();

  // Fairing (front)
  ctx.fillStyle = adjustColor(color, 20);
  ctx.beginPath();
  ctx.roundRect(x+w*0.6, y+1, w*0.36, h*0.7, 3);
  ctx.fill();

  // Rider silhouette
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.beginPath();
  ctx.roundRect(x+w*0.25, y-4, w*0.32, h*0.62, 4);
  ctx.fill();
  // Helmet
  ctx.beginPath();
  ctx.arc(x+w*0.34, y-2, 7, 0, Math.PI*2);
  ctx.fill();

  // Headlight
  const hg = ctx.createRadialGradient(cx+w/2+6, cy, 0, cx+w/2+6, cy, 22);
  hg.addColorStop(0, 'rgba(255,255,200,0.55)');
  hg.addColorStop(1, 'transparent');
  ctx.fillStyle = hg;
  ctx.fillRect(cx, cy-12, 45, 24);

  // Wheels
  [x+w*0.12, x+w*0.88].forEach(wx => {
    ctx.fillStyle = '#0A0A14';
    ctx.beginPath();
    ctx.arc(wx, cy+h/2, 9, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = color + '80';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(wx, cy+h/2, 7, 0, Math.PI*2);
    ctx.stroke();
    ctx.fillStyle = '#222232';
    ctx.beginPath();
    ctx.arc(wx, cy+h/2, 4, 0, Math.PI*2);
    ctx.fill();
  });

  // Speed lines
  if (wpm > 20) {
    const blur = Math.min(0.5, (wpm-20)/90);
    ctx.strokeStyle = `rgba(255,255,255,${blur})`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const ly = y + 2 + i * (h / 5);
      ctx.beginPath();
      ctx.moveTo(x - 10 - i*4, ly);
      ctx.lineTo(x - 2, ly);
      ctx.stroke();
    }
  }
}

function drawAirplane(cx, cy, color, wpm, W) {
  const w = 80, h = 22;
  const x = cx - w/2, y = cy - h/2;

  // Glow / contrail
  const glow = ctx.createLinearGradient(x-50, cy, cx, cy);
  glow.addColorStop(0, 'transparent');
  glow.addColorStop(1, color + '22');
  ctx.fillStyle = glow;
  ctx.fillRect(x-60, cy-6, w+50, 12);

  // Contrails
  if (wpm > 15) {
    const alpha = Math.min(0.5, wpm / 120);
    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
    ctx.lineWidth = 1.5;
    [[cy-3],[cy+3]].forEach(([ty]) => {
      ctx.beginPath();
      ctx.moveTo(x-50, ty);
      ctx.lineTo(x, ty);
      ctx.stroke();
    });
  }

  // Fuselage
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w/2, h/3.5, 0, 0, Math.PI*2);
  ctx.fill();

  // Nose cone
  ctx.fillStyle = adjustColor(color, 30);
  ctx.beginPath();
  ctx.moveTo(cx + w/2, cy);
  ctx.quadraticCurveTo(cx + w/2 + 16, cy-2, cx + w/2 + 18, cy);
  ctx.quadraticCurveTo(cx + w/2 + 16, cy+2, cx + w/2, cy);
  ctx.fill();

  // Wings
  ctx.fillStyle = adjustColor(color, -20);
  ctx.beginPath();
  ctx.moveTo(cx - w*0.05, cy);
  ctx.lineTo(cx - w*0.25, cy - h*1.4);
  ctx.lineTo(cx + w*0.20, cy - h*0.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx - w*0.05, cy);
  ctx.lineTo(cx - w*0.25, cy + h*1.4);
  ctx.lineTo(cx + w*0.20, cy + h*0.2);
  ctx.closePath();
  ctx.fill();

  // Tail
  ctx.fillStyle = adjustColor(color, -10);
  ctx.beginPath();
  ctx.moveTo(cx - w*0.38, cy);
  ctx.lineTo(cx - w*0.48, cy - h*0.85);
  ctx.lineTo(cx - w*0.28, cy - h*0.15);
  ctx.closePath();
  ctx.fill();

  // Windows
  ctx.fillStyle = 'rgba(200,230,255,0.35)';
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.ellipse(cx + i*10 - 16, cy, 3, 3.5, 0, 0, Math.PI*2);
    ctx.fill();
  }
}

function adjustColor(hex, amount) {
  // Lighten/darken hex color
  let r = parseInt(hex.slice(1,3), 16);
  let g = parseInt(hex.slice(3,5), 16);
  let b = parseInt(hex.slice(5,7), 16);
  r = clamp(r + amount, 0, 255);
  g = clamp(g + amount, 0, 255);
  b = clamp(b + amount, 0, 255);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// Lane Y positions for 6 racers (0=player, 1-5=AI)
function getLaneY(idx, H) {
  const top    = H * 0.32;
  const bottom = H * 0.88;
  const count  = 6;
  return top + (idx / (count - 1)) * (bottom - top);
}

function renderFrame() {
  const W = dom.canvas.width;
  const H = dom.canvas.height;
  if (!W || !H) { raf = requestAnimationFrame(renderFrame); return; }

  ctx.clearRect(0, 0, W, H);
  drawRoad(W, H);

  // road scroll
  const targetSpeed = S.running ? clamp(S.wpm / 60 * 7, 0, 30) : 0;
  roadSpeed = lerp(roadSpeed, targetSpeed, 0.06);
  roadOffset += roadSpeed;

  // Player car
  const pLerpSpeed = 0.07 + S.wpm * 0.0006;
  S.carX = lerp(S.carX, S.carTarget, pLerpSpeed);
  const pColor   = getPlayerColor();
  const pVehicle = getPlayerVehicle();
  const pLane    = getLaneY(0, H);
  drawVehicle(S.carX, pLane, pColor, pVehicle, S.wpm, W, H, 1.0);

  // AI cars
  S.aiCars.forEach((ai, i) => {
    const lerpAmt = 0.04 + (ai.wpm||0) * 0.0004;
    ai.x = lerp(ai.x || 0.04, ai.target || 0.04, lerpAmt);
    const col = CAR_COLORS[ai.colorIdx % CAR_COLORS.length].hex;
    drawVehicle(ai.x, getLaneY(i+1, H), col, 'car', ai.wpm||0, W, H, 0.85);
  });

  raf = requestAnimationFrame(renderFrame);
}

/* ══════════════════════════════════════════
   AI SIMULATION
══════════════════════════════════════════ */
function initAI() {
  S.aiCars = AI_RACERS.map(r => ({
    ...r,
    x: 0.04,
    target: 0.04,
    wpm: 0,
    dist: 0,
    finished: false,
    acc: 0,
    finishTime: null,
  }));
}

function updateAI(dt) {
  if (!S.running) return;
  const elapsed = (Date.now() - (S.startTime || Date.now())) / 1000;

  S.aiCars.forEach(ai => {
    if (ai.finished) return;
    // Smooth WPM ramp-up (first 5 seconds)
    const ramp = Math.min(1, elapsed / 5);
    // Micro variation: sine wave + noise
    const noise = Math.sin(elapsed * ai.id * 0.7) * ai.wpmVar * 0.5
                + Math.sin(elapsed * ai.id * 1.3) * ai.wpmVar * 0.3;
    const targetWpm = (ai.wpmBase + noise) * ramp;
    ai.wpm = lerp(ai.wpm || 0, Math.max(0, targetWpm), 0.04);

    // Distance
    const maxWpm = 110;
    const pct = clamp(ai.wpm / maxWpm, 0, 1);
    ai.target = 0.04 + pct * 0.88;

    // Check finished (hit right edge ~0.92)
    if (ai.target >= 0.91 && !ai.finished) {
      ai.finished = true;
      ai.finishTime = Date.now();
    }
  });
}

/* ══════════════════════════════════════════
   TICKER (position bar under track)
══════════════════════════════════════════ */
function updateTicker() {
  const tickerEl = $('ticker-strip');
  if (!tickerEl) return;

  // Build all racers with position
  const all = [
    { name: S.profile?.name || 'YOU', x: S.carX, colorIdx: S.profile?.colorIdx ?? 0, isMe: true },
    ...S.aiCars.map(ai => ({ name: ai.name, x: ai.x, colorIdx: ai.colorIdx, isMe: false })),
  ].sort((a,b) => b.x - a.x);

  tickerEl.innerHTML = all.map((r, i) => {
    const col = CAR_COLORS[r.colorIdx % CAR_COLORS.length].hex;
    const cls = `tk${i===0?' lead':''}${r.isMe?' is-me':''}`;
    return `<div class="${cls}">
      <span class="dot" style="background:${col}"></span>
      ${i+1}. ${r.name}
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   PROMPT & TYPING
══════════════════════════════════════════ */
function renderPrompt() {
  const line = S.currentLine;
  const pos  = S.inputPos;
  let html = '';
  for (let i = 0; i < line.length; i++) {
    let cls = 'ch';
    if (i < pos) {
      cls += S.charResults[i] ? ' correct' : ' wrong';
    } else if (i === pos) {
      cls += ' active';
      // Beginner: hint next 3 chars
      if (S.beginnerMode && i === pos) cls += ' hint-next';
    } else if (S.beginnerMode && i === pos + 1) {
      cls += ' hint-next';
    }
    const ch = line[i] === ' ' ? '&nbsp;' : escHtml(line[i]);
    html += `<span class="${cls}">${ch}</span>`;
  }
  dom.prompt.innerHTML = html;
}

function escHtml(c) {
  return c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function nextLine() {
  S.totalCorrect += S.correctChars;
  S.totalTyped   += S.currentLine.length;
  S.linesDone++;
  S.lineIdx = (S.lineIdx + 1) % getWordBank().length;
  S.currentLine = pickLine();
  S.inputPos = 0;
  S.correctChars = 0;
  S.charResults = new Array(S.currentLine.length).fill(false);
  dom.input.value = '';
  soundLineDone();
  dom.prompt.classList.remove('line-anim');
  void dom.prompt.offsetWidth;
  dom.prompt.classList.add('line-anim');
  renderPrompt();
  updateBegProgress();
}

function calcStats() {
  if (!S.startTime) return;
  const elapsedMin = (Date.now() - S.startTime) / 60000;
  if (elapsedMin < 0.0001) return;
  const correctWords = (S.totalCorrect + S.correctChars) / 5;
  S.wpm = Math.round(correctWords / elapsedMin);
  const typed = S.totalTyped + S.inputPos;
  S.accuracy  = typed > 0 ? Math.round(((typed - S.errors) / typed) * 100) : 100;
  updateStatsUI();
  updateCarTarget();
}

function updateCarTarget() {
  const maxWpm = S.beginnerMode ? 60 : 120;
  const pct = clamp(S.wpm / maxWpm, 0, 1);
  // Penalty: wrong chars slow you
  const penalty = S.errors * 0.004;
  S.carTarget = clamp(0.04 + (pct - penalty) * 0.88, 0.04, 0.92);
}

function updateStatsUI() {
  dom.wpmVal.textContent  = S.wpm;
  dom.wpmVal.className    = 'stat-value' + colorClass(S.wpm, 40, 25);
  dom.accVal.textContent  = S.accuracy + '%';
  dom.accVal.className    = 'stat-value' + colorClass(S.accuracy, 90, 80);
  dom.timeVal.textContent = S.timeLeft + 's';
  dom.timeVal.className   = 'stat-value' + (S.timeLeft <= 10 ? ' bad' : S.timeLeft <= 20 ? ' warn' : '');
  dom.lineVal.textContent = S.linesDone;
  dom.bestVal.textContent = S.bestWpm || '-';
  updateTicker();
}

function colorClass(v, good, warn) {
  if (v >= good) return ' good';
  if (v >= warn) return ' warn';
  return ' bad';
}

function updateBegProgress() {
  if (!S.beginnerMode) return;
  const total = S.mode === 30 ? 8 : S.mode === 60 ? 15 : 25;
  const pct = Math.min(100, (S.linesDone / total) * 100);
  const fill = $('beg-prog-fill');
  const cur  = $('beg-prog-cur');
  const tot  = $('beg-prog-tot');
  if (fill) fill.style.width = pct + '%';
  if (cur)  cur.textContent  = S.linesDone;
  if (tot)  tot.textContent  = total;
  // Update hint
  const hint = $('beg-hint');
  if (hint && S.inputPos < S.currentLine.length) {
    hint.textContent = 'Next: "' + S.currentLine[S.inputPos] + '"';
  }
}

/* ══════════════════════════════════════════
   INPUT HANDLER
══════════════════════════════════════════ */
let _wpmThrottle = 0;
function handleInput(e) {
  if (!S.running) return;
  initAudio();
  if (!S.startTime) S.startTime = Date.now();

  const val  = dom.input.value;
  const line = S.currentLine;

  // Backspace
  if (val.length < S.inputPos) {
    S.inputPos = val.length;
    renderPrompt();
    return;
  }

  // Process new chars
  for (let i = S.inputPos; i < val.length; i++) {
    if (i >= line.length) break;
    const ok = val[i] === line[i];
    S.charResults[i] = ok;
    if (ok) { S.correctChars++; soundCorrect(); }
    else    { S.errors++;        soundWrong();
      // Penalty: visually flash + slow car
      triggerPenalty();
    }
    S.inputPos = i + 1;
  }

  // Line complete?
  if (S.inputPos >= line.length) {
    nextLine();
  } else {
    renderPrompt();
  }

  // Throttled calc
  const now = Date.now();
  if (now - _wpmThrottle > 220) {
    _wpmThrottle = now;
    calcStats();
  }

  updateBegProgress();
}

let _penaltyTimer = null;
function triggerPenalty() {
  const wrap = dom.kbWrap;
  if (!wrap) return;
  wrap.classList.remove('penalty-flash');
  void wrap.offsetWidth;
  wrap.classList.add('penalty-flash');
  clearTimeout(_penaltyTimer);
  _penaltyTimer = setTimeout(() => wrap.classList.remove('penalty-flash'), 400);
}

/* ══════════════════════════════════════════
   GAME FLOW
══════════════════════════════════════════ */
let _tickInterval = null, _aiInterval = null;

function startGame() {
  soundStart();
  initAI();
  Object.assign(S, {
    running:      false,
    finished:     false,
    timeLeft:     S.mode,
    startTime:    null,
    wpm: 0, accuracy: 100,
    errors: 0, inputPos: 0,
    correctChars: 0, totalCorrect: 0,
    totalTyped: 0, linesDone: 0,
    lineIdx: 0,
    carX: 0.04, carTarget: 0.04,
  });

  S.currentLine = getWordBank()[0];
  S.charResults = new Array(S.currentLine.length).fill(false);

  dom.input.value = '';
  dom.input.disabled = true;
  dom.overlay.classList.remove('show');
  renderPrompt();
  updateStatsUI();
  updateBegProgress();

  clearInterval(_tickInterval);
  clearInterval(_aiInterval);

  // Countdown 3-2-1
  showCountdown(3, () => {
    S.running = true;
    dom.input.disabled = false;
    dom.input.focus();
    _tickInterval = setInterval(tick, 1000);
    _aiInterval   = setInterval(() => updateAI(1), 100);
  });
}

function showCountdown(n, cb) {
  const el = dom.countdown;
  const numEl = $('cd-num');
  el.classList.add('show');
  numEl.textContent = n;
  numEl.style.animation = 'none';
  void numEl.offsetWidth;
  numEl.style.animation = '';
  if (n > 0) {
    setTimeout(() => showCountdown(n - 1, cb), 900);
  } else {
    numEl.textContent = 'GO!';
    numEl.style.color = '#22C55E';
    setTimeout(() => {
      el.classList.remove('show');
      numEl.style.color = '#fff';
      cb();
    }, 600);
  }
}

function tick() {
  if (!S.running) return;
  S.timeLeft--;
  calcStats();
  if (S.timeLeft <= 0) endGame();
}

function endGame() {
  S.running = false;
  S.finished = true;
  clearInterval(_tickInterval);
  clearInterval(_aiInterval);
  dom.input.disabled = true;
  soundFinish();

  // Snapshot final positions
  buildRaceResult();
  const isNew = saveBest(S.wpm);
  setTimeout(() => showResults(isNew), 500);
}

function buildRaceResult() {
  const player = {
    name: S.profile?.name || 'YOU',
    colorIdx: S.profile?.colorIdx ?? 0,
    vehicle: getPlayerVehicle(),
    wpm: S.wpm,
    accuracy: S.accuracy,
    lines: S.linesDone,
    isMe: true,
    finished: S.carX >= 0.88,
  };
  const aiRows = S.aiCars.map(ai => ({
    name: ai.name,
    colorIdx: ai.colorIdx,
    vehicle: 'car',
    wpm: Math.round(ai.wpm),
    accuracy: Math.round(85 + Math.random() * 12),
    lines: Math.round(ai.wpm * S.mode / 60 / 5),
    isMe: false,
    finished: ai.finished,
  }));

  S.raceResult = [player, ...aiRows].sort((a,b) => b.wpm - a.wpm);
}

/* ══════════════════════════════════════════
   RESULTS SCREEN
══════════════════════════════════════════ */
function showResults(isNew) {
  const result = S.raceResult;
  const me = result.find(r => r.isMe);
  const pos = result.findIndex(r => r.isMe) + 1;

  // Header
  $('res-title').textContent  = pos === 1 ? '🏆 WINNER!' : pos === 2 ? '🥈 2nd Place' : pos === 3 ? '🥉 3rd Place' : `#${pos} Place`;
  const badge = $('res-pos-badge');
  badge.className = `pos-badge ${pos===1?'gold':pos===2?'silver':pos===3?'bronze':''}`;
  badge.textContent = `P${pos} / ${result.length}`;

  // Best banner
  const bb = $('best-banner');
  bb.classList.toggle('show', isNew);

  // My stats
  $('ms-wpm').textContent  = me?.wpm ?? 0;
  $('ms-acc').textContent  = (me?.accuracy ?? 100) + '%';
  $('ms-lines').textContent= me?.lines ?? 0;
  $('ms-best').textContent = S.bestWpm;

  // Table
  const maxWpm = Math.max(...result.map(r=>r.wpm), 1);
  const tbody = $('race-tbody');
  tbody.innerHTML = result.map((r, i) => {
    const p = i + 1;
    const posClass = p===1?'gold':p===2?'silver':p===3?'bronze':'other';
    const col = CAR_COLORS[r.colorIdx % CAR_COLORS.length].hex;
    const pct = Math.round((r.wpm / maxWpm) * 100);
    const veh = VEHICLE_TYPES[r.vehicle]?.emoji || '🏎️';
    return `
    <tr class="${r.isMe ? 'is-me' : ''}">
      <td><span class="td-pos ${posClass}">${p}</span></td>
      <td class="td-vehicle">${veh}</td>
      <td>
        <span class="car-swatch" style="background:${col}"></span>
        <span class="td-name">${r.name}${r.isMe ? '<span class="you-tag">YOU</span>' : ''}</span>
      </td>
      <td>
        <div class="td-wpm">${r.wpm} WPM</div>
        <div class="wpm-bar-bg">
          <div class="wpm-bar-fill" style="width:0%;background:${col}" data-pct="${pct}"></div>
        </div>
      </td>
      <td class="td-acc">${r.accuracy}%</td>
      <td><span class="td-finish ${r.finished?'done':'racing'}">${r.finished?'✓ DONE':'RACING'}</span></td>
    </tr>`;
  }).join('');

  // Animate bars
  setTimeout(() => {
    tbody.querySelectorAll('.wpm-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);

  dom.overlay.classList.add('show');
}

/* ══════════════════════════════════════════
   PROFILE MODAL
══════════════════════════════════════════ */
function openProfile() {
  dom.modalBg.classList.add('show');
  if (S.profile) {
    $('prof-name').value = S.profile.name || '';
    selectColor(S.profile.colorIdx ?? 0);
    selectVehicle(S.profile.vehicle ?? 'car');
  } else {
    selectColor(0);
    selectVehicle('car');
  }
}
function closeProfile() { dom.modalBg.classList.remove('show'); }

function selectColor(idx) {
  $$('.color-swatch').forEach(el => el.classList.toggle('sel', parseInt(el.dataset.idx) === idx));
  window._selColor = idx;
}
function selectVehicle(v) {
  $$('.veh-opt').forEach(el => el.classList.toggle('sel', el.dataset.veh === v));
  window._selVehicle = v;
}
function saveProfileForm() {
  const name = $('prof-name').value.trim() || 'RACER';
  saveProfile({ name, colorIdx: window._selColor ?? 0, vehicle: window._selVehicle ?? 'car' });
  updatePlayerBadge();
  closeProfile();
}

/* ══════════════════════════════════════════
   BEGINNER MODE
══════════════════════════════════════════ */
function toggleBeginnerMode() {
  S.beginnerMode = !S.beginnerMode;
  const btn = $('btn-beginner');
  btn.classList.toggle('active-mode', S.beginnerMode);
  btn.textContent = S.beginnerMode ? '🎯 Normal Mode' : '🚀 Beginner Mode';
  $('beg-banner').classList.toggle('show', S.beginnerMode);
  $('beg-progress').classList.toggle('show', S.beginnerMode);
  // Refresh prompt if mid-game
  if (S.running) {
    S.currentLine = pickLine();
    S.inputPos = 0;
    S.correctChars = 0;
    S.charResults = new Array(S.currentLine.length).fill(false);
    dom.input.value = '';
    renderPrompt();
  }
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
function init() {
  dom = {
    canvas:    $('track-canvas'),
    prompt:    $('prompt-box'),
    input:     $('kb-input'),
    kbWrap:    $('kb-wrap'),
    wpmVal:    $('wpm-val'),
    accVal:    $('acc-val'),
    timeVal:   $('time-val'),
    lineVal:   $('line-val'),
    bestVal:   $('best-val'),
    countdown: $('countdown-screen'),
    overlay:   $('result-screen'),
    modalBg:   $('modal-bg'),
  };

  ctx = dom.canvas.getContext('2d', { alpha: false });
  resizeCanvas();
  window.addEventListener('resize', () => { resizeCanvas(); });

  initTheme();
  loadProfile();
  updatePlayerBadge();
  initAI();
  setMode(60);

  // Initial state
  S.currentLine = WORDS_NORMAL[0];
  S.charResults = new Array(S.currentLine.length).fill(false);
  renderPrompt();
  updateStatsUI();

  // RAF
  renderFrame();

  // ── Event Listeners ──
  dom.input.addEventListener('input', handleInput);
  dom.input.addEventListener('keydown', e => { if (e.key === 'Tab') e.preventDefault(); });

  $('btn-start').addEventListener('click', startGame);
  $('btn-profile').addEventListener('click', openProfile);
  $('btn-beginner').addEventListener('click', toggleBeginnerMode);
  $('btn-theme').addEventListener('click', toggleTheme);

  $('btn-restart').addEventListener('click', () => { dom.overlay.classList.remove('show'); startGame(); });
  $('btn-close-result').addEventListener('click', () => dom.overlay.classList.remove('show'));

  $('btn-modal-save').addEventListener('click', saveProfileForm);
  $('btn-modal-cancel').addEventListener('click', closeProfile);
  $('modal-bg').addEventListener('click', e => { if (e.target === $('modal-bg')) closeProfile(); });

  $$('.pill').forEach(b => b.addEventListener('click', () => setMode(parseInt(b.dataset.mode))));
  $$('.color-swatch').forEach(el => el.addEventListener('click', () => selectColor(parseInt(el.dataset.idx))));
  $$('.veh-opt').forEach(el => el.addEventListener('click', () => selectVehicle(el.dataset.veh)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && S.finished && dom.overlay.classList.contains('show')) {
      dom.overlay.classList.remove('show');
      startGame();
    }
    if (e.key === 'Escape') { closeProfile(); }
  });
}

function setMode(s) {
  S.mode = s;
  S.timeLeft = s;
  dom.timeVal.textContent = s + 's';
  $$('.pill').forEach(b => b.classList.toggle('active', parseInt(b.dataset.mode) === s));
}

document.addEventListener('DOMContentLoaded', init);

js
(function() {
    const guideBox = document.getElementById('beginner-guide-box');
    if (!guideBox) return;

    // 1. Capture the original guidance message
    const originalContent = guideBox.innerHTML;
    guideBox.innerHTML = ''; // Clear the box to rebuild it as a button
    
    // 2. Reset the container styles (to remove the big border/background)
    Object.assign(guideBox.style, {
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: '0',
        width: 'auto',
        maxWidth: 'none',
        position: 'relative',
        marginLeft: '20px'
    });

    // 3. Create the "Tip" Button
    const tipBtn = document.createElement('button');
    tipBtn.innerHTML = '💡 Tip';
    Object.assign(tipBtn.style, {
        background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 24px',
        color: '#000',
        fontWeight: '900',
        cursor: 'pointer',
        fontSize: '16px',
        textTransform: 'uppercase',
        boxShadow: '0 4px 15px rgba(0, 242, 254, 0.4)',
        transition: 'all 0.2s ease'
    });
    
    // 4. Create the Dropdown Content (The Guidance)
    const dropdown = document.createElement('div');
    dropdown.innerHTML = originalContent;
    Object.assign(dropdown.style, {
        display: 'none', // Hidden by default
        position: 'absolute',
        top: '50px',
        left: '0',
        background: 'linear-gradient(135deg, #1e1e2f 0%, #2d2d44 100%)',
        border: '2px solid #00f2fe',
        borderRadius: '12px',
        padding: '20px',
        width: '280px',
        zIndex: '9999',
        boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
        color: '#fff'
    });

    // 5. Toggle Logic
    tipBtn.onclick = (e) => {
        e.stopPropagation();
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
    };

    // Close tip if clicking anywhere else
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });

    // Hover effect
    tipBtn.onmouseenter = () => tipBtn.style.filter = 'brightness(1.1)';
    tipBtn.onmouseleave = () => tipBtn.style.filter = 'brightness(1)';

    // 6. Assemble
    guideBox.appendChild(tipBtn);
    guideBox.appendChild(dropdown);
})();