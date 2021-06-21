// select all elements-------------------------------------
const start = document.getElementById("start");
const nextpage = document.getElementById("button");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const ref = document.getElementById("ref");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const showans = document.getElementById("correctans");


// create our questions-------------------------------------
let questions = [



{question : "201: D OUBLE HEARING PROTECTION SHALL BE WORN BY ALL AIRCREW WHEN WITHIN ___ FEET OF AN AIRCRAFT WITH ENGINE(S) ONLINE OR A P-3 WITH AN OPERATING APU.", ref: "(Ref: VP-30 STAN NOTES - 4/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:95 FEET", choiceB: "B:100 FEET", choiceC: "C: 17 FEET", choiceD: "D: 169 FEET", correct: "B"},
{question : "202: FLIGHT CONDITION II IS DEFINED AS:", ref: "(Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:AIRCRAFT INSPECTION", choiceB: "B:HIGH ALTITUDE OPERATIONS / TRANSIT", choiceC: "C: LOW LEVEL OPERATIONS", choiceD: "D: TAKEOFF/LANDING", correct: "B"},
{question : "203: H OW MANY CODES ARE AVAILABLE FOR USE ON THE MK 84?", ref: "(Ref: NATIP-10 - 239/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:5", choiceB: "B:4", choiceC: "C: 2", choiceD: "D: 1", correct: "A"},
{question : "204: WHAT DOES A SOLID DARK BLUE TRIANGLE SYMBOL REPRESENT IN REGARDS TO THE LAUNCHER STATUS?", ref: "(Ref: NATIP-10 - 107/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:LAUNCHER IS UNPRESSURIZED TO CABIN AND CAN NOT BE OPENED", choiceB: "B:L AUNCHER IS PRESSURIZED TO CABIN AND READY TO BE OPENED", choiceC: "C: L AUNCHER IS RUNNING AN IBIT", choiceD: "D: L AUNCHER HAS FAILED", correct: "A"},
{question : "205: WHAT DOES AN OUTLINE OF A BLUE TRIANGLE SYMBOL REPRESENT IN REGARDS TO THE LAUNCHER STATUS?", ref: "(Ref: NATIP-10 - 107/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:L AUNCHER IS UNPRESSURIZED TO CABIN AND CAN NOT BE OPENED", choiceB: "B:LAUNCHER IS PRESSURIZED TO CABIN AND READY TO BE OPENED", choiceC: "C: L AUNCHER IS RUNNING AN IBIT", choiceD: "D: L AUNCHER HAS FAILED", correct: "B"},
{question : "206: WHAT DOES ORANGE WITH BLACK OUTLINE REPRESENT IN REGARDS TO LAUNCHER STATUS?", ref: "(Ref: NATIP-10 - 109/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:G PS NEEDS TO BE LOADED", choiceB: "B:T UBE EMPY", choiceC: "C: NEXT TUBE TO LOAD CORRESPONDING LAUNCHER", choiceD: "D: FULLY LOADED", correct: "C"},
{question : "207: WHAT DOES GREEN WITH BLACK OUTLINE REPRESENT IN REGARDS TO LAUNCHER STATUS?", ref: "(Ref: NATIP-10 - 109/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:SLS IS GOOD TO GO", choiceB: "B:LOADED", choiceC: "C: EMPTY", choiceD: "D: LAUNCHER IS PRESSURIZED", correct: "B"},
{question : "208: H OW LONG DOES THE MK-25 MLM LAST?", ref: "(Ref: NATIP-10 - 232/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:13 .5-18.5 MINUTES", choiceB: "B:90 MINUTES", choiceC: "C: 5 MINUTES", choiceD: "D: 40-60 MINUTES", correct: "A"},
{question : "209: H OW LONG DOES THE MK-58 MLM LAST?", ref: "(Ref: NATIP-10 - 234/ CATEGORY: ORDNANCE)", imgSrc: "VP46.png", choiceA: "A:13 .5-18.5 MINUTES", choiceB: "B:90 MINUTE", choiceC: "C: 5 MINUTES", choiceD: "D: 40-60 MINUTES", correct: "D"},
{question : "210: _____ IS A DOPPLER SIGNAL PROCESSING TECHNIQUE USED TO GENERATE TRUE, RECOGNIZABLE, TWODIMENSIONAL IMAGES OF A SELECTED STATIONARY SURFACE TARGET OR LAND AREA.", ref: "(Ref: NATIP-6 - 1/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:A-SCAN", choiceB: "B:SURFACE SEARCH", choiceC: "C: SAR", choiceD: "D: ISAR", correct: "C"},
{question : "211: D URING QUAD SCREEN ISAR, WHICH QUADRANT ALLOWS THE OPERATOR TO MANUALLY CAPTURE THE IMAGE AND PERFORM FEATURE MEASUREMENT FUNCTIONS?", ref: "(Ref: NATIP-6 - 57/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:UPPER LEFT", choiceB: "B:U PPER RIGH", choiceC: "C: LOWER LEFT", choiceD: "D: LOWER RIGHT", correct: "C"},
{question : "212: WHICH ANTENNA TILT CONTROL ADJUSTS THE RADAR ANTENNA TILT BY PLACING THE PEAK OF THE ELEVATION BEAMWIDTH AT A RANGE THAT IS EQUAL TO THE RANGE OF THE RADAR TDS.", ref: "(Ref: NATIP-6 - 39/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:AUTO (COVG)", choiceB: "B:AUTO (RNG)", choiceC: "C: AUTO (HK)", choiceD: "D: MANUAL TILT", correct: "C"},
{question : "213: D URING QUAD SCREEN ISAR, WHICH QUADRANT REPRESENTS THE REAL TIME ISAR IMAGE?", ref: "(Ref: NATIP-6 - 57/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:UPPER LEFT", choiceB: "B:U PPER RIGHT", choiceC: "C: LOWER LEFT", choiceD: "D: LOWER RIGHT", correct: "A"},
{question : "214: WHAT IS THE NOTE ASSOCIATED WITH ORANGE ITEMS IN THE RADAR TABLEAU?", ref: "(Ref: NATIP-6 - 40/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:DO NOT PREVENT THE OPERATORS FROM DOING ANYTHING AND IS FOR SITUATIONAL AWARENESS ONLY", choiceB: "B:INDICATE A RADAR HARDWARE FAULT", choiceC: "C: INDICATE A RADAR SOFTWARE FAULT", choiceD: "D: INDICATE A RADAR SOFTWARE OR HARDWARE FAULT", correct: "A"},
{question : "215: CONVERGED INDICATES A TWS CONFIDENCE OF APPROXIMATELY __ PERCENT?", ref: "(Ref: NATIP-6 - 6/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:75", choiceB: "B:90", choiceC: "C: 50", choiceD: "D: 80", correct: "D"},
{question : "216: WHICH SYMBOL INDICATES TWS TARGET IS IN DEAD RECKONING?", ref: "(Ref: NATIP-6 - 6/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SPINNING HOUR GLASS IN THE BOTTOM RIGHT OF THE TWS TRACK", choiceB: "B:YELLOW COUNTER/TIMER", choiceC: "C: AN HOURGLASS THAT IS NOT SPINNING", choiceD: "D: TWS TARGET CONFIDENCE IS AT 80 PERCENT", correct: "B"},
{question : "217: WHICH SYMBOL INDICATES TWS TARGET IS FOUND?", ref: "(Ref: NATIP-6 - 6/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SPINNING HOUR GLASS ON THE BOTTOM RIGHT OF THE TWS TRACK", choiceB: "B:YELLOW COUNTER/TIMER", choiceC: "C: HOUR GLASS THAT IS NOT SPINNING", choiceD: "D: TWS TARGET CONFIDENCE IS AT 80 PERCENT", correct: "C"},
{question : "218: _____ IMAGING RELIES ON THE MOTION OF THE SHIP TO GENERATE A TWO-DIMENSIONAL, RANGE VERSUS DOPPER IMAGE.", ref: "(Ref: NATIP-6 - 1/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:A-SCAN", choiceB: "B:SOCET GXP", choiceC: "C: SAR", choiceD: "D: ISAR", correct: "D"},
{question : "219: WHEN UTILIZING THE ISAR MANUAL CLASS AIDS, THE SCALE DISPLAYS A MEASUREMENT INDICATION VIA A _____?", ref: "(Ref: NATIP-6 - 63/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:D IGITAL 5 POINT SCALE", choiceB: "B:P HYSICAL 10 POINT SCALE", choiceC: "C: D IGITAL 12 POINT SCALE", choiceD: "D: DIGITAL 10 POINT SCALE", correct: "D"},
{question : "220: A T 20,000 FEET, THE SAR GRAZING ANGLE AT 25 NM IS WHAT?", ref: "(Ref: NATIP-6 - 2/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:9.3", choiceB: "B:7.4", choiceC: "C: 6.3", choiceD: "D: 6.7", correct: "B"},
{question : "221: A T 10,000 FEET, THE SAR GRAZING ANGLE AT 20 NM IS WHAT?", ref: "(Ref: NATIP-6 - 2/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:4.6", choiceB: "B:6.2", choiceC: "C: 3.7", choiceD: "D: 5.5", correct: "A"},
{question : "222: A TI TRACK PROMOTION LEVEL 3 IS DEFINED AS:", ref: "(Ref: NATIP-6 - 81/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TENTATIVE", choiceB: "B:ESTABLISHED", choiceC: "C: COASTING", choiceD: "D: PERSISTENT", correct: "C"},
{question : "223: A TI TRACK PROMOTION LEVEL 4 IS DEFINED AS:", ref: "(Ref: NATIP-6 - 82/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TENTATIVE", choiceB: "B:ESTABLISHED", choiceC: "C: COASTING", choiceD: "D: PERSISTENT", correct: "D"},
{question : "224: A TI TRACK PROMOTION LEVEL 2 IS DEFINED AS:", ref: "(Ref: NATIP-6 - 81/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TENTATIVE", choiceB: "B:ESTABLISHED", choiceC: "C: COASTING", choiceD: "D: PERSISTENT", correct: "B"},
{question : "225: T HE ____________ TOGGLE BUTTON LOCATED ON THE RADAR PPI CONTROLS TAB OF THE RADAR PEP IS USED TO OPEN/CLOSED THE ATI CAPACITY MANAGEMENT TD.", ref: "(Ref: NATIP-6 - 79/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:INTERROGATE", choiceB: "B:FILTER", choiceC: "C: CYCLE", choiceD: "D: INC/EXC ZONES", correct: "D"},
{question : "226: ATI CONTACT HAVE AN “____ “REFERENCE CODE, WHEREAS “____” IS USED FOR LEGACY TWS CONTACTS.", ref: "(Ref: NATIP-6 - 79/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:R, r", choiceB: "B:r,R", choiceC: "C: A,r", choiceD: "D: a,R", correct: "A"},
{question : "227: NOTE: DUE TO POTENTIAL SCREEN CLUTTER IF FUSION IS DISABLED, TWS TRACKER _______ BE UTILIZED CONCURRENTLY WITH RAVEN ATI", ref: "(Ref: NATIP-6 - 76/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SHALL NOT", choiceB: "B:CANNOT", choiceC: "C: SHALL", choiceD: "D: SHOULD NOT", correct: "D"},
{question : "228: R AVEN IS INEFFECTIVE IN _____ ENVIRONMENTS OR AGAINST ________ TARGETS.", ref: "(Ref: NATIP-6 - 74/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:DENSE, HIGHLY MANEUVERING", choiceB: "B:OPEN-OCEAN, MINIMALLY MANUEVERING", choiceC: "C: DENSE, SMALL", choiceD: "D: OPEN-OCEAN, LARGE", correct: "A"},
{question : "229: RAVEN WILL NOT CREATE ATI’S WITHIN _____ NM OF LAND, HOWEVER ATI DETECTIONS STILL OCCUR ALLOWING THE OPERATOR TO CREATE MANUAL ATI CONTACTS.", ref: "(Ref: NATIP-6 - 74/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:1.5", choiceB: "B:2.5", choiceC: "C: 3.5", choiceD: "D: 4.5", correct: "B"},
{question : "230: NEW ATI CONTACTS/TRACKS WILL ONLY OCCUR IN SEARCH MODE, HOWEVER, EXISTING ATI’S WILL BE MAINTAINED IN _____ AND _____ MODES.", ref: "(Ref: NATIP-6 - 74/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SEARCH, NAVIGATE", choiceB: "B:NAVIGATE, PERISCOPE", choiceC: "C: SEARCH, PERISCOPE", choiceD: "D: WEATHER, SEARCH", correct: "B"},
{question : "231: A TI DETECTION OCCURS IN WHICH OF THE FOLLOWING RADAR MODES?", ref: "(Ref: NATIP-6 - 74/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SEARCH, NAVIGATE", choiceB: "B:NAVIGATE, PERISCOPE", choiceC: "C: SEARCH, PERISCOPE", choiceD: "D: SEARCH, NAVIGATE AND PERISCOPE", correct: "D"},
{question : "232: WHICH SYMBOL INDICATES TWS TARGET INITIALIZED?", ref: "(Ref: NATIP-6 - 5/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SPINNING HOUR GLASS ON THE BOTTOM RIGHT OF THE TWS TRACK", choiceB: "B:YELLOW COUNTER/TIMER", choiceC: "C: AN HOURGLASS THAT IS NOT SPINNING", choiceD: "D: TWS TARGET CONFIDENCE AT 80 PERCENT", correct: "A"},
{question : "233: NOTE: THE RADAR CONTACT SPEED ALERT TD IS FOR _________.", ref: "(Ref: NATIP-6 - 22/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:RADAR AND EO/IR TRACKS ONLY", choiceB: "B:MANUAL RADAR CONTACTS AND TWS TRACKS.", choiceC: "C: MANUAL RADAR CONTACTS, NOT TWS TRACKS.", choiceD: "D: SURFACE IFFI RETURNS ONLY", correct: "C"},
{question : "234: WHICH ANTENNA TILT CONTROL ADJUSTS THE ANTENNA TILT BY PLACING THE PEAK OF THE ELEVATION BEAMWIDTH AT EITHER THE RADAR HORIZON OR THE DISPLAY RANGE SELECTED DEPENDING ON WHICHEVER IS CLOSEST?", ref: "(Ref: NATIP-6 - 39/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:AUTO (COVG)", choiceB: "B:AUTO (RNG)", choiceC: "C: AUTO (HK)", choiceD: "D: MANUAL TILT", correct: "B"},
{question : "235: NAVIGATE MODE HAS AN ANTENNA SCAN RATE OF:", ref: "(Ref: NATIP-6 - 1/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:6 RPM", choiceB: "B:60 RPM", choiceC: "C: 300 RPM", choiceD: "D: 0 RPM", correct: "A"},
{question : "236: SURFACE SEARCH MODE HAS AN ANTENNA SCAN RATE OF:", ref: "(Ref: NATIP-6 - 1/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:6 RPM", choiceB: "B:60 RPM", choiceC: "C: 300 RPM", choiceD: "D: 0 RPM", correct: "B"},
{question : "237: PERISCOPE MODE HAS AN ANTENNA SCAN RATE OF:", ref: "(Ref: NATIP-6 - 1/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:6 RPM", choiceB: "B:60 RPM", choiceC: "C: 300 RPM", choiceD: "D: 0 RPM", correct: "C"},
{question : "238: THE _________ PROVIDES MOST OF THE RADAR RELATED SIGNAL PROCESSING FUNCTIONS, INCLUDING GENERATION OF PROPERLY MODULATED RADAR PULSES AND SUBSEQUENT PROCESSING OF THE RECEIVED RADAR ECHO PULSES FOR PLAN POSITION INDICATOR, SAR, AND ISAR MODES.", ref: "(Ref: NATIP-6 - 10/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:REP RECEIVER", choiceB: "B:REP EXCITER", choiceC: "C: REP PROCESSOR", choiceD: "D: REP DUPLEXER", correct: "C"},
{question : "239: THE GPS RECEIVER (LOCATED IN THE REP) TRACKS UP TO ____SATELLITES TO PROVIDE DATA NAVIGATION, TIME, AND FAULT.", ref: "(Ref: NATIP-6 - 11/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:FOUR", choiceB: "B:EIGHT", choiceC: "C: TWELVE", choiceD: "D: SIXTEEN", correct: "B"},
{question : "240: THE RADAR PBIT MAY TAKE UP TO ___ TO ___ MINUTES TO COMPLETE. DURING RADAR PBIT THE RADAR STATUS LIGHT WILL INDICATE BLUE.", ref: "(Ref: NATIP-13 - 100/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:7-Mar", choiceB: "B:7-May", choiceC: "C: 5-Mar", choiceD: "D: 10-Jul", correct: "B"},
{question : "241: WHEN THE RADAR INDICATES THAT THE NAV ALIGNMENT HAS REACHED A DEGRADED LEVEL, THE LIGHT IS COLORED _______ TO INDICATE ALIGNMENT IS NEEDED.", ref: "(Ref: NATIP-6 - 20/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:GREY", choiceB: "B:RED", choiceC: "C: CYAN", choiceD: "D: YELLOW", correct: "D"},
{question : "242: WHICH ANTENNA TILT CONTROL ADJUSTS THE ANTENNA TILT BY PLACING THE UPPER EDGE OF THE ELEVATION BEAMWIDTH AT EITHER THE RADAR HORIZON OR THE DISPLAY RANGE SELECTED DEPENDING UPON WHICHEVER IS CLOSEST?", ref: "(Ref: NATIP-6 - 39/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:AUTO (COVG)", choiceB: "B:AUTO (RNG)", choiceC: "C: AUTO (HK)", choiceD: "D: MANUAL TILT", correct: "A"},
{question : "243: WHICH PPI ORIENTATION SELECTION PLACES THE VIDEO IN A NORTH UP ORIENTATION AND OWNSHIP MOVES ACROSS THE DISPLAY RELATIVE TO THE PPI DISPLAY? NOTE: THE OPERATOR MUST RE-CENTER TO PREVENT THE VIDEO FROM MOVING OFF THE DISPLAY.", ref: "(Ref: NATIP-6 - 28/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TRACK UP", choiceB: "B:PPI STAB", choiceC: "C: GROUND STAB", choiceD: "D: NORTH UP", correct: "C"},
{question : "244: WHICH PPI ORIENTATION SELECTION PLACES THE VIDEO ORIENTED TO TRUE NORTH AT THE TOP OF THE DISPLAY. THE AIRCRAFT STAYS FIXED TO THE CENTER OF THE SCREEN. THE VIDEO AND OWN SHIP SYMBOL ROTATE TO MATCH THE OWN SHIP HEADING.", ref: "(Ref: NATIP-6 - 29/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TRACK UP", choiceB: "B:PPI STAB", choiceC: "C: GROUND STAB", choiceD: "D: NORTH UP", correct: "D"},
{question : "245: WHICH PPI ORIENTATION SELECTION ORIENTS THE SO THAT OWN SHIP HEADING IS AT THE TOP OF THE DISPLAY. THE AIRCRAFT STAYS FIXED TO THE CENTER OF THE SCREEN. THE VIDEO AND OWN SHIP SYMBOL DO NOT ROTATE.", ref: "(Ref: NATIP-6 - 29/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TRACK UP", choiceB: "B:PPI STAB", choiceC: "C: GROUND STAB", choiceD: "D: NORTH UP", correct: "A"},
{question : "246: NOTE: AFTER EXITING SAR MODE, THE RADAR SUBSYSTEM ___________ WHILE TOMS RETAINS THE LAST SAR MANUAL GAIN SETTING SELECTED.", ref: "(Ref: NATIP-6 - 34/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:RESETS SAR GAIN TO ZERO", choiceB: "B:RETAINS THE LAST SAR MANUAL GAIN SETTING", choiceC: "C: RESETS SAR GAIN TO -32", choiceD: "D: RESETS SAR GAIN TO +32", correct: "A"},
{question : "247: A TIMER BELOW A RADAR CONTACT ON THE PPI VIDEO DISPLAY INDICATES:", ref: "(Ref: NATIP-6 - 8/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TIME REMAINING UNTIL THE CONTACT MERGES WITH L- OR J-TYPE TRACKS", choiceB: "B:TIME REMAINING UNTIL THE CONTACT AUTO-DROPS", choiceC: "C: APPROXIMATE AMOUNT OF TIME OF DEAD RECKONING IN TWS/ATI MODE", choiceD: "D: APPROXIMATE AMOUNT OF TIME ACQUIRED IN TWS/ATI MODE", correct: "D"},
{question : "248: THE DELETE CONTACT/TRACK BUTTON IS A GUARDED BUTTON TO DELETE A SELECTED TRACK FROM THE TRACK DATABASE. ________ CANNOT BE DELETED.", ref: "(Ref: NATIP-6 - 38/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:TWS TRACKS", choiceB: "B:CONFIRMED TRACKS", choiceC: "C: CONFIRMED CONTACTS", choiceD: "D: HOSTILE TRACKS", correct: "A"},
{question : "249: PPI FALSE ALARM RATE (FAR) AND VIDEO THRESHOLD CONTROL BUTTONS ARE AVAILABLE IN WHICH VIDEO PROCESSING MODE(S)?", ref: "(Ref: NATIP-6 - 19/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:SAR, ISAR", choiceB: "B:NAVIGATE", choiceC: "C: BACKGROUND", choiceD: "D: THRESHOLD", correct: "D"},
{question : "250: IF THERE IS NEED TO OPERATE THE RADAR ON THE GROUND (E.G., HIGH VOLTAGE CHECK). PROXIMITY SENSORS ELECTRONIC UNIT (PSEU) LOGIC OVERRIDES THE WOW DISCRETE UNDER THE FOLLOWING CONDITIONS:", ref: "(Ref: NATIP-6 - 13/ CATEGORY: RADAR)", imgSrc: "VP46.png", choiceA: "A:ENGINES OFF, FLAPS BETWEEN 1-25, PARKING NOT SET", choiceB: "B:ENGINES ON, FLAPS BETWEEN 1-25, PARKING BRAKE NOT SET", choiceC: "C: ENGINES OFF, FLAPS BETWEEN 1-25, PARKING BRAKE SET", choiceD: "D: ENGINES ON, FLAPS BETWEEN 1-25, PARKING BRAKE SET", correct: "B"},


];
const questionTime = 3000;   // 3000s per question
const gaugeWidth = 150; //150px
const lastQuestion = questions.length - 1;
const gaugeUnit = gaugeWidth / questionTime;
let runningQuestion = 0;
let count = 0;
let TIMER = 0;
let score = 0;
let qcount =0;
let page = 0;
start.addEventListener("click",startQuiz);

// start the quiz
function startQuiz(){
;
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000); //1000ms = 1s

}


// next button
nextpage.onclick = function (){

if(runningQuestion < lastQuestion) 
{
count = 0;
runningQuestion++
renderQuestion();
} else  { 
clearInterval(TIMER);
scoreRender();
}
qcount = 0;
}

// render a question
function renderQuestion(){

    let q = questions[runningQuestion];   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

ref.innerHTML = q.ref;

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

choiceD.innerHTML = q.choiceD;



}
// render progress--------------------------------------
function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }

}
//check answer

function checkAnswer(answer)
{

if(answer == questions[runningQuestion].correct && qcount == page)
{  answerIsCorrect();
score++;
       qcount++;
   page = 0;
showans.innerHTML = questions[runningQuestion].correct;

}

else{
answerIsWrong();
showans.innerHTML = questions[runningQuestion].correct;
}
  
}
// answer is correct 
function answerIsCorrect(){
document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
 
}
// answer is wrong
function answerIsWrong(){
document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}





// counter render--------------------------------------------------
function renderCounter(){
if(count <= questionTime)
{
counter.innerHTML = count;
timeGauge.style.width = count * gaugeUnit + "px";
count++
} else 
{ count = questionTime;  // set the stop time 
answerIsWrong();



}
}

// score render
function scoreRender(){
scoreDiv.style.display = "block";
const scorePerCent = Math.round( 100 * score / questions.length);
let img = ( scorePerCent >= 90) ? "img/5.png":
  ( scorePerCent >= 80) ? "img/4.png":
  ( scorePerCent >= 70) ? "img/3.png":
  ( scorePerCent >= 60) ? "img/2.png": "img/1.png";
scoreDiv.innerHTML = "<img src=" + img + "><p>"
 + scorePerCent + "%</p>";

}