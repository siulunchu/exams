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



{question : "1: THE ABILITY TO ALTER A COURSE OF ACTION BASED ON NEW INFORMATION, MAINTAIN CONSTRUCTIVE BEHAVIOR UNDER PRESSURE, AND ADAPT TO INTERNAL AND EXTERNAL ENVIRONMENTAL CHANGES.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:ADAPTABILITY/FLEXIBILITY", choiceB: "B:ASSERTIVENESS", choiceC: "C: LEADERSHIP", choiceD: "D: COMMUNICATION", correct: "A"},
{question : "2: THE DEGREE OF ACCURACY BY WHICH ONE'S PERCEPTION OF THE CURRENT ENVIRONMENT MIRRORS REALITY.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:ASSERTIVENESS", choiceB: "B:SITUATIONAL AWARENESS", choiceC: "C: COMMUNICATION", choiceD: "D: LEADERSHIP", correct: "B"},
{question : "3: THE ABILITY TO DIRECT AND COORDINATE THE ACTIVITIES OF OTHER CREWMEMBERS AND TO ENCOURAGE THE CREW TO ACT TOGETHER AS A TEAM.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:MISSION ANALYSIS", choiceB: "B:DECISION-MAKING", choiceC: "C: LEADERSHIP", choiceD: "D: ASSERTIVENESS", correct: "C"},
{question : "4: THE ABILITY TO CLEARLY AND ACCURATELY SEND AND ACKNOWLEDGE INFORMATION, INSTRUCTIONS, OR COMMANDS AND PROVIDE USEFUL FEEDBACK.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:ASSERTIVENESS", choiceB: "B:LEADERSHIP", choiceC: "C: ADAPTIBILITY/FLEXIBILITY", choiceD: "D: COMMUNICATION", correct: "D"},
{question : "5: THE ABILITY TO DEVELOP SHORT-TERM, LONG-TERM AND CONTINGENCY PLANS AND TO COORDINATE, ALLOCATE, AND MONITOR AIRCREW AND AIRCRAFT RESOURCES.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:MISSION ANALYSIS", choiceB: "B:DECISION-MAKING", choiceC: "C: LEADERSHIP", choiceD: "D: ASSERTIVENESS", correct: "A"},
{question : "6: THE ABILITY TO CHOOSE A COURSE OF ACTION USING LOGICAL AND SOUND JUDGEMENT BASED ON THE INFORMATION AVAILABLE.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:ASSERTIVENESS", choiceB: "B:DECISION-MAKING", choiceC: "C: COMMUNICATION", choiceD: "D: ADAPTABILITY/FLEXIBILITY", correct: "B"},
{question : "7: WHAT INDICATION(S) DOES THE CREW RECEIVE WHEN SPDS ENTERS FAILSAFE MODE?", ref: "(Ref: NATOPS-14 - 17/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:LOSS OF RADAR HEARTBEAT FROM TOMES", choiceB: "B:AUX FUEL TRANSFER FAILURE", choiceC: "C: FAULT INDICATIONS AT THE KFZSE", choiceD: "D: BOTH A AND B", correct: "D"},
{question : "8: THE WILLINGNESS TO ACTIVELY PARTICIPATE, STATE AND MAINTAIN A POSITION, UNTIL CONVINCED BY THE FACTS THAT OTHER OPTIONS ARE BETTER.", ref: "(Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)", imgSrc: "VP46.png", choiceA: "A:SITUATIONAL AWARENESS", choiceB: "B:ASSERTIVENESS", choiceC: "C: LEADERSHIP", choiceD: "D: MISSION ANALYSIS", correct: "B"},
{question : "9: FUEL ENTERING CABIN DURING AAR: THIS PROCEDURE ________ BE COMPLETED ANYTIME LIQUID FUEL OR FUEL FUMES ARE DETECTED DURING AIR-TO-AIR REFUELING OPERATIONS.", ref: "(Ref: NATOPS-14 - 22/ CATEGORY: EMERGENCY)", imgSrc: "VP46.png", choiceA: "A:SHALL", choiceB: "B:MAY", choiceC: "C: SHOULD", choiceD: "D: NONE OF THE ABOVE", correct: "C"},
{question : "10: THE RESTART BUTTON IN THE EO/IR SETUP TAB REQUESTS A ______ RESTART OF THE EO/IR SUBSYSTEM.", ref: "(Ref: NATIP-6 - 334/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:SOFTWARE-ONLY", choiceB: "B:TURRET-ONLY", choiceC: "C: WARM", choiceD: "D: COLD", correct: "C"},
{question : "11: WARNING: FAILURE TO KEEP EQUIPMENT AND PERSONNEL CLEAR OF THE EO-IR POSITION DURING OPERATION MAY RESULT IN DAMAGE TO EQUIPMENT OR INJURY TO PERSONNEL.", ref: "(Ref: NATIP-6 - 331/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:ENSURE SPDS IS IN GROUND MODE PRIOR TO EO/IR OPERATION.", choiceB: "B:ENSURE THE GMP IS IN GROUND MODE PRIOR TO EO/IR OPERATION.", choiceC: "C: POST AN OBSERVER PRIOR TO EXTENDING OR RETRACTING THE TURRET.", choiceD: "D: AIRCREW SHALL EXTEND OR RETRACT THE TURRET IN FLIGHT ONLY", correct: "C"},
{question : "12: WARNING: WHEN POWER IS APPLIED TO THE TURRET, IT MAY ROTATE FOR UP TO _________ SECONDS.", ref: "(Ref: NATIP-6 - 331/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:5", choiceB: "B:15", choiceC: "C: 30", choiceD: "D: 60", correct: "B"},
{question : "13: THE EO-IR STOW BUTTON COMMANDS THE EO/IR TURRET INTO THE STOWED POSITION. THIS BUTTON REMAINS DOWN WHILE THE TURRET IS STOWED. TOGGLING THE BUTTON UP SENDS A REQUEST TO __________.", ref: "(Ref: NATIP-6 - 334/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:LOCKS THE TURRET INTO A STOWED POSITION. ONLY THE OPERATOR WHO INITAITED THE LOCK CAN UNSTOW THE TURRET.", choiceB: "B:MOVE THE TURRET OUT OF THE STOWED POSITION.", choiceC: "C: RETRACT THE CAMERA.", choiceD: "D: EXTEND THE AFT TURRET.", correct: "B"},
{question : "14: WHEN IN AUTO FOCUS MODE, THE ______ INCREMENTER BECOMES DISABLED AND THE ______ INCREMENTER BECOMES ENABLED.", ref: "(Ref: NATIP-6 - 367/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:EZOOM, FOCAL LENGTH", choiceB: "B:FOCAL LENGTH, EZOOM", choiceC: "C: FOCUS, TRIM", choiceD: "D: TRIM, FOCUS", correct: "C"},
{question : "15: NOTE: THE OPERATOR MUST DEPRESS THE FILTER SWITCH FOR _____ SECONDS TO ESTABLISH INITIAL CONNECTION OF THE HAND CONTROLLER WITH THE TURRET.", ref: "(Ref: NATIP-6 - 326/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:TWO", choiceB: "B:THREE", choiceC: "C: FIVE", choiceD: "D: TEN", correct: "B"},
{question : "16: NOTE: EXTENDING THE TURRET VIA THE GROUND CONTROL PANEL PREVENTS ______ FROM CONTROLLING THE TURRET.", ref: "(Ref: NATIP-6 - 331/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:SPDS", choiceB: "B:THE DMCU", choiceC: "C: THE BALUN", choiceD: "D: TOMS", correct: "D"},
{question : "17: THE INFRARED CALIBRATION BUTTON SELECTS A ONE-POINT CALIBRATION OPTION TO REMOVE ______ AND RESET DYNAMIC RANGE OF THE THERMAL IMAGE FOR THE IR CAMERA ONLY.", ref: "(Ref: NATIP-6 - 338/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:NEGATIVE INFRARED POLARIZATION", choiceB: "B:FALSE INFRARED RETURN", choiceC: "C: HUMIDITY", choiceD: "D: COMMON VIDEO ARTIFACTS", correct: "D"},
{question : "18: WARNING: IN SPDS FLIGHT (FLT) MODE WHILE ON THE GROUND, AIRPLANE SYSTEMS, INCLUDING EO-IR, MAY ______.", ref: "(Ref: NATIP-6 - 329/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:NOT BE CONTROLLABLE.", choiceB: "B:BE OPERATED INADVERTENTLY.", choiceC: "C: LOCK OUT.", choiceD: "D: INADVERTENTLY TRIP.", correct: "B"},
{question : "19: THE ______ CONTROLS THE TURRET WITH RECEIVED OPERATOR INPUTS VIA THE HAND CONTROLLER OR MCDS.", ref: "(Ref: NATIP-6 - 325/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:DMCU", choiceB: "B:BALUN", choiceC: "C: TOMS", choiceD: "D: MX-20 DRP", correct: "A"},
{question : "20: IF IN RATE AID MODE, THE EO/IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE HAND CONTROLLER SLEW CONTROL IS PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:MANUAL", choiceB: "B:EITHER MANUAL MODE OR AUTO (GEO-POSITION) MODE", choiceC: "C: RATE AID", choiceD: "D: DO NOTHING", correct: "B"},
{question : "21: THE EO-IR ______ BUTTON MOVES THE CAMERA TO THE CURRENTLY HOOKED TRACK OR LAST CLICKED LOCATION WITHIN THE TSD.", ref: "(Ref: NATIP-6 - 368/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:RATE AID", choiceB: "B:MANUAL L/L", choiceC: "C: SLEW", choiceD: "D: AUTO AID", correct: "C"},
{question : "22: CAUTION: FAILURE TO RETRACT THE EO-IR TURRET FOR ______ MAY CAUSE DAMAGE TO THE TURRET.", ref: "(Ref: NATIP-6 - 330/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:TAXI", choiceB: "B:TAKEOFF", choiceC: "C: LANDING", choiceD: "D: ALL OF THE ABOVE", correct: "D"},
{question : "23: THE ________ BOX CONVERTS THE EO-IR VIDEO INTO A USABLE SIGNAL FOR PROCESSING.", ref: "(Ref: NATIP-6 - 329/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:DMCU", choiceB: "B:VIU", choiceC: "C: BALUN", choiceD: "D: RDC", correct: "C"},
{question : "24: THE EO-IR HAND CONTROLLER HAT SWITCH CONTROLS _____ OF THE OPERATOR SELECTED CAMERA WHEN MOVED UP OR DOWN.", ref: "(Ref: NATIP-6 - 326/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:ZOOM", choiceB: "B:FOCUS OR AUTO FOCUS TRIM", choiceC: "C: RATE AID SENSITIVITY", choiceD: "D: ELECTRICAL ZOOM", correct: "A"},
{question : "25: WHICH EO/IR MODE WILL PAN AND TILT THE TURRET AT A FIXED SPEED SET BY SAMPLES OF OPERATOR PRESSURE ON THE THUMB CONTROLLER?", ref: "(Ref: NATIP-6 - 371/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:AUTO AID", choiceB: "B:AUTOMATIC CORRELATION", choiceC: "C: GEO AID", choiceD: "D: RATE AID", correct: "D"},
{question : "26: THE EO-IR HAND CONTROLLER TRIGGER ENGAGES _____ IN THE OPERATOR SELECTED CAMERA.", ref: "(Ref: NATIP-6 - 326/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:AVT", choiceB: "B:RATE AID", choiceC: "C: MANUAL MODE", choiceD: "D: AUTO SLEW", correct: "A"},
{question : "27: IF IN MANUAL MODE, THE EO/IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE HAND CONTROLLER SLEW CONTROL IS PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:MANUAL", choiceB: "B:EITHER MANUAL MODE OR AUTO (GEO-POSITION) MODE", choiceC: "C: RATE AID", choiceD: "D: DO NOTHING", correct: "C"},
{question : "28: THE EO-IR ______ FUNCTION STEERS THE TURRET TO FIXED COORDINATES THROUGH TRACK SELECTION OR TSD INPUT. THE TURRET SEQUENCES THROUGH EACH TARGET WITHIN THE DEFINED RADIUS.", ref: "(Ref: NATIP-6 - 369/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:AUTO AID", choiceB: "B:AUTO SLEW", choiceC: "C: RATE AID", choiceD: "D: SECTOR SCAN", correct: "B"},
{question : "29: AN EO/IR SECTOR SCAN USES __________ AS THE SECTOR'S CENTER POSITION. THE WIDTH AND RATE OF THE SCAN ARE DEFINED IN THE EO/IR CONFIGURATION TD.", ref: "(Ref: NATIP-6 - 369/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:THE NUMERICAL VALUE SELECTED IN THE EO/IR CONFIGURATION TD", choiceB: "B:THE BEARING TO THE HOOKED TRACK", choiceC: "C: THE AIRCRAFT HEADING", choiceD: "D: THE CAMERA'S LOS", correct: "D"},
{question : "30: THE EO/IR AUTO SLEW FUNCTION STEERS THE TURRET TO FIXED COORDINATES THROUGH TRACK SELECTION OR TSD INPUT. THE TURRET SEQUENCES THROUGH EACH TARGET WITHIN THE DEFINED ____ RADIUS, MOVING EVERY ___ SECONDS.", ref: "(Ref: NATIP-6 - 369/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:6, 15", choiceB: "B:15, 8", choiceC: "C: 10, 8", choiceD: "D: 8, 15", correct: "B"},
{question : "31: AN AVT MODE THAT PROCESSES OBJECTS THAT ARE BOUND WITHIN AN ACQUISITION TRACK WINDOW. TARGETS HAVE MASSED FEATUES AND SOLID INTERIOR SHAPES THAT CONCETRATE PIXEL BRIGHTNESS. IT IS A GEOMETRIC MEASUREMENT OF AN OBJECT'S CENTER.", ref: "(Ref: NATIP-6 - 345/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:CENTROID", choiceB: "B:AUTOMATIC CORRELATION", choiceC: "C: MANUAL CORRELATION", choiceD: "D: SCENE LOCK", correct: "A"},
{question : "32: AN AVT MODE THAT SETS LOCKING PRIORITY FOR TARGETS HAVING DISTINCT FEATURES OR DETAILS. THE SYSTEM WILL AUTOMATICALLY OPTIMIZE A GATE SIZE FOR THE TARGET SIZE.", ref: "(Ref: NATIP-6 - 345/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:CENTROID", choiceB: "B:AUTOMATIC CORRELATION", choiceC: "C: MANUAL CORRELATION", choiceD: "D: SCENE LOCK", correct: "B"},
{question : "33: AN AVT MODE THAT SETS LOCKING PRIORITY FOR TARGETS HAVING DISTINCT FEATURES OR DETAILS. THE OPERATOR CAN MANUALLY SET GATE SIZE FOR THE TARGET SIZE.", ref: "(Ref: NATIP-6 - 345/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:CENTROID", choiceB: "B:AUTOMATIC CORRELATION", choiceC: "C: MANUAL CORRELATION", choiceD: "D: SCENE LOCK", correct: "C"},
{question : "34: AN AVT MODE THAT PROCESSES THE ENTIRE VIDEO IMAGE. NUMEROUS TARGET REFERENCES ARE SET AND MONITORED RELATIVE TO THE SCENE'S OVERALL BACKGROUND MOVEMENT.", ref: "(Ref: NATIP-6 - 345/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:CENTROID", choiceB: "B:AUTOMATIC CORRELATION", choiceC: "C: MANUAL CORRELATION", choiceD: "D: SCENE LOCK", correct: "D"},
{question : "35: THE EO-IR HAND CONTROLLER HAT SWITCH CONTROLS ______ OF THE OPERATOR SELECTED CAMERA WHEN MOVED LEFT OR RIGHT.", ref: "(Ref: NATIP-6 - 326/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:ZOOM", choiceB: "B:FOCUS OR AUTO FOCUS TRIM", choiceC: "C: RATE AID SENSITIVITY", choiceD: "D: ELECTRICAL ZOOM", correct: "B"},
{question : "36: IF NOT IN AVT MODE, THE EO-IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE RED BUTTON IS MOMENTARILY PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:DISENGAGES AVT", choiceB: "B:THE TURRET WILL MOVE AT ITS HIGHEST RATE OF SPEED TO THE LAST SELECTION ON THE TSD, RADAR, OR EO/IR DISPLAY", choiceC: "C: FORWARD MODE", choiceD: "D: RATE AID", correct: "B"},
{question : "37: CAUTION: FAILURE TO _________ THE EO-IR TURRET PRIOR TO ENTERING AREAS OF HAIL OR SIGNIFICANT ICING MAY RESULT IN TURRET DAMAGE.", ref: "(Ref: NATIP-13 - 132/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:STOW", choiceB: "B:RETRACT", choiceC: "C: EXTEND", choiceD: "D: SLEW AFT", correct: "B"},
{question : "38: ______ OPERATIONS ARE NOT AUTHORIZED UNLESS EO/IR TURRET IS FULLY RETRACTED.", ref: "(Ref: NATOPS-4 - 3/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:IMC", choiceB: "B:VFR", choiceC: "C: RVSM", choiceD: "D: THE", correct: "C"},
{question : "39: CAUTION: WHEN CLEANING THE TURRET WINDOW, USE OF ANY MATERIAL OTHER THAN A NON-ABRASIVE DETERGENT SOLUTION AND A __________ MAY CAUSE DAMAGE TO THE WINDOW.", ref: "(Ref: NATIP-13 - 126/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:NON-ABRASIVE CLOTH", choiceB: "B:ALCOHOL WIPE", choiceC: "C: DESSICANT CLOTH", choiceD: "D: MAINTENANCE-APPROVED SOFT CLOTH", correct: "D"},
{question : "40: IF OPERATING THE EO-IR TURRET ABOVE 95°F (35°C) ON DECK:", ref: "(Ref: NATIP-6 - 320/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:SECURE POWER TO THE TURRET", choiceB: "B:RESTRICT GROUND OPERATIONS TO A 1 HOUR ON, 4 HOURS OFF DUTY CYCLE", choiceC: "C: AIRCREW SHOULD SKIP EO-IR PREFLIGHT", choiceD: "D: THE EO-IR SHALL BE OPERATED ONLY IN FLIGHT", correct: "B"},
{question : "41: THE EO-IR HAND CONTROLLER _______ MAINTAINS HORIZONTAL AND VERTICAL CONTROL OVER THE CAMERA'S LINE OF SIGHT (LOS) WITH A TRANSDUCER.", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:HAT SWITCH", choiceB: "B:TRIGGER", choiceC: "C: SLEW CONTROL", choiceD: "D: RED BUTTON", correct: "C"},
{question : "42: FR-46/NOTE: _________ HELP(S) REDUCE HAZE IN THE MX-20 EON CAMERA.", ref: "(Ref: NATIP-6 - 326/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:FULL GATE SHARPENING", choiceB: "B:ONE-POINT CALIBRATION", choiceC: "C: 2X APERTURE", choiceD: "D: LP AND XLP", correct: "D"},
{question : "43: IF IN AVT MODE, THE EO-IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE RED BUTTON IS MOMENTARILY PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:DISENGAGES AVT", choiceB: "B:THE TURRET WILL MOVE AT IT HIGHEST RATE OF SPEED TO THE LAST SELECTION ON THE TSD, RADAR, OR EO/IR DISPLAY", choiceC: "C: FORWARD MODE", choiceD: "D: RATE AID", correct: "A"},
{question : "44: IF IN AUTO AID, FORWARD, BODY ANGLE, OR SECTOR SCAN MODES, THE EO/IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE HAND CONTROLLER SLEW CONTROL IS PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:MANUAL", choiceB: "B:EITHER MANUAL MODE OR AUTO (GEO-POSITION) MODE", choiceC: "C: RATE AID", choiceD: "D: DO NOTHING", correct: "A"},
{question : "45: IF IN AVT MODE, THE EO/IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE HAND CONTROLLER SLEW CONTROL IS PLUNGED:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:MANUAL", choiceB: "B:EITHER MANUAL MODE OR AUTO (GEO-POSITION) MODE", choiceC: "C: RATE AID", choiceD: "D: DO NOTHING", correct: "D"},
{question : "46: THE EO-IR SYSTEM WILL EXECUTE THE FOLLOWING WHEN THE RED BUTTON IS PLUNGED FOR THREE SECONDS:", ref: "(Ref: NATIP-6 - 327/ CATEGORY: EO/IR)", imgSrc: "VP46.png", choiceA: "A:DISENGAGES AVT", choiceB: "B:THE TURRET WILL MOVE AT IT HIGHEST RATE OF SPEED TO THE LAST SELECTION ON THE TSD, RADAR, OR EO/IR DISPLAY", choiceC: "C: FORWARD MODE", choiceD: "D: RATE AID", correct: "C"},
{question : "47: IF THE TSD SCALE EXTENDS BEYOND THE ESM HORIZON, AN ESM BEARING-ONLY LINE EXTENDS TO ______.", ref: "(Ref: NATIP-6 - 146/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:THE AMPLITUDE RANGING POSITION", choiceB: "B:OWNSHIP", choiceC: "C: THE EDGE OF THE ESM HORIZON", choiceD: "D: THE DISPLAY EDGE", correct: "C"},
{question : "48: FACS MALFUNCTION SIGNAL WILL ALSO ILLUMINATE A WARNING LAMP AND ACTIVATE A HORN ON THE ______.", ref: "(Ref: NATIP-6 - 144/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:MASTER ANNUNCTATOR PANEL", choiceB: "B:E810 SMOKE DETECTION CONTROL PANEL", choiceC: "C: ECS MAINTENANCE ALARM PANEL", choiceD: "D: PEP SYSTEM TAB", correct: "C"},
{question : "49: THE ______ DRAWS HEAT AWAY FROM THE ARRAYS AND INTO THE MAIN CABIN.", ref: "(Ref: NATIP-6 - 143/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:ECS SYSTEM", choiceB: "B:FACS", choiceC: "C: SPDS", choiceD: "D: RADAR FAN", correct: "B"},
{question : "50: THE ELINT SCANNER ANTENNA IS CAPABLE OF SINGLE-AXIS ___ DEGREE AZIMUTH SCANNING IN THE _______ FREQUENCY RANGES.", ref: "(Ref: NATIP-6 - 141/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:+/- 150° ON EACH SIDE OF THE AIRCRAFT, LB & MB", choiceB: "B:+/- 165° ON EACH SIDE OF THE AIRCAFT, MB & HB", choiceC: "C: 300°, LB, MB, AND HB", choiceD: "D: 360°, LB & MB", correct: "D"},



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