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



{question : "151: TO USE THE HALON FIRE EXTINGUISHER:", ref: "(Ref: NATOPS-16 - 13/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:AIM AT BASE OF FIRE FROM A DISTANCE OF 6 FEET AND PRESS TOP LEVER.", choiceB: "B:USE SIDE-TO-SIDE MOTION TO SUPPRESS FIRE.", choiceC: "C: TURN KNOB ALL THE WAY CLOCKWISE", choiceD: "D: BOTH A & B", correct: "D"},
{question : "152: WHAT DOES AN ILLUMINATED FAULT LIGHT REPRESENT?", ref: "(Ref: NATOPS-2 - 52/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:RPM LIMIT HAS BEEN EXCEEDED", choiceB: "B:MOMENTARY FAULT LIGHT ASSOCIATED WITH START SEQUENCE THAT DOESN'T REQUIRE ACTION", choiceC: "C: MALFUNCTION EXISTS CAUSING APU TO INITIATE AN AUTOMATIC SHUTDOWN", choiceD: "D: BOTH B AND C", correct: "D"},
{question : "153: THE HAZARD OF ELECTROMAGETIC RADIATION TO ORDNANCE (SUSCEPTIBLE) STANDOFF FOR THE APY-10 IS:", ref: "(Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:95", choiceB: "B:169", choiceC: "C: 302", choiceD: "D: 348", correct: "C"},
{question : "154: NOTE: PRIOR TO MODIFYING SYSTEMS THAT MAY AFFECT AIRCRAFT PERFORMANCE, OR SETTINGS THAT MAY AFFECT AIRCRAFT FLIGHT PROFILE (TO INCLUDE SPDS), THE OBSERVER SHALL RECEIVE CONCURENCE FROM THE ______", ref: "(Ref: NATOPS-22 - 6/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:PPC", choiceB: "B:PM", choiceC: "C: PF", choiceD: "D: PF OR PM", correct: "D"},
{question : "155: WARNING: MINI OXYGEN BOTTLE/MASK SHOULD NOT BE WORN ______.", ref: "(Ref: NATOPS-16 - 12/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:WHEN FIGHTING A FIRE", choiceB: "B:DURING CABIN DEPRESSURZATION", choiceC: "C: ABOVE 10000 MSL", choiceD: "D: ALL OF THE ABOVE", correct: "A"},
{question : "156: NOTE: _________ IS REQUIRED TO UTILIZE THE EMERGENCY/PRESS TO TEST SELECTOR FOR 5 SECONDS TO TEST THE POSITION OF THE OXYGEN CYLINDER VALVE.", ref: "(Ref: NATOPS-7 - 16/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:EVERY CREWMEMBER", choiceB: "B:EVERY OCCUPIED DITCHING STATION", choiceC: "C: THE OBSERVER", choiceD: "D: ONLY ONE CREWMEMBER", correct: "D"},
{question : "157: AN EXTENSION CORD IS PROVIDED WITH EACH ________ BOTTLE/MASK AND CAN BE CONNECTED INTO THE ICS VIA THE OBSERVER CONNECTION AT ANY OF THE J-BOXES.", ref: "(Ref: NATOPS-16 - 10/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:FLIGHT CREW", choiceB: "B:LAVATORY", choiceC: "C: FIXED", choiceD: "D: PORTABLE", correct: "D"},
{question : "158: OXYGEN _________ INFORMATION PROVIDED ON THE PORTABLE OXYGEN BOTTLE IS INCORRECT DUE TO DIFFERENCES IN MASK/REGULATOR COMBINATION. OXYGEN DEPLETION MAY OCCUR PRIOR TO THE EXPECTED USAGE TIME DERIVED FROM THE TABULATED INFORMATION ON THE BOTTLE.", ref: "(Ref: NATOPS-16 - 11/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:DURATION", choiceB: "B:PRESSURE", choiceC: "C: PURITY", choiceD: "D: ALTITUDE", correct: "A"},
{question : "159: CAUTION: THE APU _____ FUEL PUMP WAS NOT DESIGNED TO OPERATE FOR LONG PERIODS OF TIME. EXTENDED OPERATION RESULTS IN FAILURE OF THE PUMP", ref: "(Ref: NATOPS-7 - 97/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:ENGINE-DRIVEN", choiceB: "B:HYDRAULIC", choiceC: "C: AC", choiceD: "D: DC", correct: "D"},
{question : "160: ALERT GROUND PERSONNEL BEFORE CONDUCTING THE FIRE DETECTOR TEST. DURING THE DETECTOR TEST, THE FIRE WARNING LIGHTS FLASH AND THE HORN SOUNDS ON THE GROUND CONTROL PANEL. THIS CAN BE MISTAKEN BY GROUND CREW AS AN APU FIRE. THIS STATEMENT IS A:", ref: "(Ref: NATOPS-7 - 8/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:WARNING", choiceB: "B:CAUTION", choiceC: "C: NOTE", choiceD: "D: EMERGENCY", correct: "C"},
{question : "161: NOTE: RADAR ______ BE LEFT OFF UNTIL AFTER ENGINE START. IF IT IS TURNED ON PRIOR TO ENGINE STARTS, IT SHALL BE SECURED UNTIL AFTER THE START SEQUENCE.", ref: "(Ref: NATOPS-7 - 38/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:SHOULD", choiceB: "B:SHOULD NOT", choiceC: "C: SHALL NOT", choiceD: "D: MAY", correct: "A"},
{question : "162: AIRCREW SURVIVAL VESTS SHALL BE WORN DURING OVERWATER OPERATIONS BELOW ___ FEET AGL.", ref: "(Ref: NATOPS-16 - 7/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:1000", choiceB: "B:1500", choiceC: "C: 2000", choiceD: "D: 4000", correct: "A"},
{question : "163: WARNING: OPENING THE ____ DOOR(S) WILL SERIOUSLY DEGRADE THE FLOTATION CHARACTERISTICS OF THE AIRCRAFT ALLOWING THE AIRCRAFT TO SINK A FASTER RATE.", ref: "(Ref: NATOPS-15 - 38/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:WEAPONS BAY", choiceB: "B:AFT EGRESS", choiceC: "C: OVERWING EGRESS", choiceD: "D: FORWARD", correct: "B"},
{question : "164: OXYGEN FLOW INDICATOR: INDICATES A ______ CROSS WHEN OXYGEN IS FLOWING.", ref: "(Ref: NATOPS-2 - 255/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:WHITE", choiceB: "B:YELLOW", choiceC: "C: RED", choiceD: "D: BLUE", correct: "B"},
{question : "165: _____ INDEPENDENT FIXED OXYGEN SYSTEMS ARE PROVIDED ON THE P-8.", ref: "(Ref: NATOPS-2 - 251/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:2", choiceB: "B:3", choiceC: "C: 5", choiceD: "D: NONE OF THE ABOVE", correct: "A"},
{question : "166: DURING AN OBSERVER WINDOW DAMAGE, IF IT IS DETERMINED THAT THE ______ PANE IS CRACKED OR SHATTERED, CONTINUE NORMAL OPERATION.", ref: "(Ref: NATOPS-14 - 212/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:OUTER", choiceB: "B:INNER", choiceC: "C: UPPER", choiceD: "D: LOWER", correct: "A"},
{question : "167: CAUTION: WAIT AT LEAST ___ MINUTES AFTER EQUIPMENT POWER DOWN BEFORE SECURING THE ECS DRAWTHRU SYSTEM OR RADAR FAN OR DAMAGE TO MISSION SYSTEMS CAN OCCUR.", ref: "(Ref: NATOPS-7 - 99/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:5", choiceB: "B:7", choiceC: "C: 10", choiceD: "D: 15", correct: "C"},
{question : "168: IN EVENT OF A DITCH, DITCHING STATION ___ IS RESPONSIBLE FOR RETRIEVING THE FORWARD FIRST AID KIT.", ref: "(Ref: NATOPS-15 - 39/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:2", choiceB: "B:3", choiceC: "C: 9", choiceD: "D: 20", correct: "A"},
{question : "169: THE APU SHOULD BE OPERATED FOR _____ MINUTE(S) PRIOR TO BEING USED AS AN ELECTRICAL POWER OR BLEED AIR SOURCE.", ref: "(Ref: NATOPS-7 - 9/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:2", choiceB: "B:5", choiceC: "C: 10", choiceD: "D: NONE OF THE ABOVE", correct: "A"},
{question : "170: NOTE: DO NOT OPERATE THE APU IF THE APU DET INOP LIGHT FAILS TO ILLUMINATE.", ref: "(Ref: NATOPS-7 - 8/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:TRUE", choiceB: "B:FALSE", choiceC: "C: C.", choiceD: "D: D.", correct: "A"},
{question : "171: IF THE APU FAULT LIGHT EXTINGUISHES AFTER ______ MINUTE(S), RESTARTS MAY BE ATTEMPTED.", ref: "(Ref: NATOPS-14 - 94/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:1", choiceB: "B:3", choiceC: "C: 5", choiceD: "D: 7", correct: "C"},
{question : "172: WITH A FULL TACTICAL CREW, WHICH FIREFIGHTING DUTY SET IS RESPONSIBLE FOR RACK E-870?", ref: "(Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:FORWARD", choiceB: "B:MIDCABIN", choiceC: "C: AFT", choiceD: "D: RUNNER", correct: "A"},
{question : "173: CAUTION: PROVIDING ELECTRICAL POWER TO A FIRE SOURCE CAN PREVENT EFFECTIVE FIRE FIGHTING OR RESTART THE FIRE. ______.", ref: "(Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:DO NOT ATTEMPT TO RESET ANY TRIPPED SSPC UNTIL DIRECTED BY TACCO", choiceB: "B:DO NOT ATTEMPT TO RESET ANY TRIPPED SSPC UNTIL DIRECTED BY MAINTENANCE", choiceC: "C: AIRCREW SHALL NOT RESET ANY TRIPPED SSPC", choiceD: "D: AIRCREW SHOULD NOT RESET ANY TRIPPED SSPC", correct: "A"},
{question : "174: NOTE: PROVIDE THE FLIGHT CREW AN INITIAL ASSESSMENT OF SMOKE, FIRE, OR FUMES TYPE AND SOURCE. NO MORE THAN ______ PASS(ES) SHOULD BE COMPLETED PRIOR TO INFORMING THE FLIGHT CREW OF THE INITIAL ASSESSMENT.", ref: "(Ref: NATOPS-14 - 2/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:ONE", choiceB: "B:TWO", choiceC: "C: THREE", choiceD: "D: FIVE", correct: "C"},
{question : "175: ANY TIME THE CREW/PASS OXYGEN PASS SWITCH IS ACTUATED, THE ENTIRE CREW ______ DON OXYGEN", ref: "(Ref: NATOPS-14 - 1/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:MAY", choiceB: "B:SHOULD", choiceC: "C: SHALL", choiceD: "D: WILL", correct: "C"},
{question : "176: IN FLIGHT, AIRCREW RESET OF A TRIPPED CIRCUIT BREAKER IS____________ UNLESS DIRECTED BY AN E MERGENCY PROCEDURE. WAIT APPROXIMATELY _____.", ref: "(Ref: NATOPS-11 - 15/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:NOT RECOMMENDED, 2 MIN", choiceB: "B:HIGHLY RECOMMENDED, 5 MIN", choiceC: "C: STRONGLY RECOMMENDED, 45 SEC", choiceD: "D: NOT REQUIRED, 5 MIN", correct: "A"},
{question : "177: WARNING: TO PREVENT INJURY OR DEATH, DO NOT ENTER THE WEAPONS BAY UNLESS ______, AND THE WEAPONS BAY DOOR SAFETY LOCKOUT PIN IS INSTALLED.", ref: "(Ref: NATOPS-7 - 13/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:THE WEAPON BAY DOOR SWITCH IS IN THE STOP POSITION", choiceB: "B:THE WBDS POWER INDICATOR (RED) IS EXTINGUISHED", choiceC: "C: THE WEAPONS BAY DOOR SAFTEY A/B SWITCHES ARE IN THE OFF POSITION", choiceD: "D: ALL OF THE ABOVE", correct: "D"},
{question : "178: THE RADAR UNSAFE (FEET) FOR HERO IS?", ref: "(Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:205", choiceB: "B:323", choiceC: "C: 348", choiceD: "D: 1139", correct: "C"},
{question : "179: WITH A FULL TACTICAL CREW, WHICH FIREFIGHTING DUTY SET IS RESPONSIBLE FOR RACKS E-810, E-820, E- 830, E-840, AND E-860?", ref: "(Ref: NATOPS-14 - 4/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:FORWARD", choiceB: "B:MIDCABIN", choiceC: "C: AFT", choiceD: "D: RUNNER", correct: "B"},
{question : "180: APU DET INOP LIGHT: CAUTION: DO NOT RUN THE APU. AN APU FIRE WOULD NOT BE DETECTED AND THE APU WOULD CONTINUE TO RUN.", ref: "(Ref: NATOPS-14 - 95/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:TRUE", choiceB: "B:FALSE", choiceC: "C: C.", choiceD: "D: D.", correct: "A"},
{question : "181: THE MAIN CABIN DETECTION SYSTEM IS NOT INTERFACED WITH THE ________ WARNING SYSTEMS. MISSION CREW MUST INFORM THE FLIGHT CREW WHENEVER RESPONDING TO MAIN CABIN SMOKE DETECTION ALARMS.", ref: "(Ref: NATOPS-2 - 211/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:CABIN PA", choiceB: "B:FLIGHT CABIN", choiceC: "C: HI-LOW CHIME", choiceD: "D: TRIPLE CHIME", correct: "B"},
{question : "182: IN ORDER TO MAINTAIN PROFICIENCY, A MISSION CREWMEMBER WHO HAS NOT FLOWN WITHIN ____ SHALL COMPLETE A WARM-UP FLIGHT/WST/WTT WITH A CURRENT AND POSITIONAL QUALIFIED CREWMEMBER PRIOR TO BEING SCHEDULED AS PRIMARY INSTRUCTOR ON A FLIGHT.", ref: "(Ref: VP-30 STAN NOTES - 5/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:60 DAYS", choiceB: "B:6 MONTHS", choiceC: "C: 30 DAYS", choiceD: "D: 3 MONTHS", correct: "C"},
{question : "183: NOTE: PUSHING MUTE WITHIN ___ SECOND(S) OF HORN ACTIVIATION DURING THE DRAW-THRU ALARM TEST COMPLETES TEST.", ref: "(Ref: NATOPS-2 - 213/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:1", choiceB: "B:5", choiceC: "C: 10", choiceD: "D: 15", correct: "C"},
{question : "184: THE ECS DRAW-THRU SYSTEM MAY BE USED TO ASSIST IN MAIN CABIN ________ OPERATIONS.", ref: "(Ref: NATOPS-2 - 215/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:SMOKE CLEARING", choiceB: "B:COOLING", choiceC: "C: DEPRESSURIZATION", choiceD: "D: AIR CONDITIONING", correct: "A"},
{question : "185: NOTE: ROTATING THE PRESS TO TEST KNOB TO ALIGN THE SMALL DOT WITH THE LARGER DOT WILL RESULT IN ___________.", ref: "(Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:100% OXYGEN UNDER PRESSURE", choiceB: "B:ICS HOT MIC", choiceC: "C: NORMAL OXYGEN", choiceD: "D: AMBIENT OXYGEN", correct: "A"},
{question : "186: CREW/PASS OXYGEN (PASS) SWITCH ACTIVATION CAUSES THE DON OXYGEN CABIN OVERHEAD LIGHTS TO ILLUMINATE AND THE ___________TO SOUND.", ref: "(Ref: NATOPS-7 - 18/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:TRIPLE CHIME", choiceB: "B:DOUBLE CHIME", choiceC: "C: SINGLE CHIME", choiceD: "D: QUADRUPLE CHIME", correct: "D"},
{question : "187: WARNING: WHEN APPLYING EXTERNAL POWER OR APU GENERATOR POWER, THE STANDBY HYDRAULIC PUMP CAN OPERATE FOR APPROXIMATELY 4 SECONDS AND MAY MOVE THE______. TO PREVENT POSSIBLE INJURY, ENSURE THEY ARE CLEAR OF PERSONNEL BEFORE APPLYING POWER.", ref: "(Ref: NATOPS-7 - 6/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:EXTERNAL CONTROL SURFACES", choiceB: "B:THRUST REVERSERS", choiceC: "C: WEAPONS BAY DOORS", choiceD: "D: RUDDER AND/OR THRUST REVERSERS", correct: "D"},
{question : "188: CAUTION: WHEN THE ECS DRAW-THRU SYSTEM IS PLACED IN SMOKE MODE, THE RADAR FAN IS SECURED. DUE TO POSSIBLE HEAT DAMAGE TO THE RADAR, ______. ", ref: "(Ref: NATOPS-14 - 8/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:THE RADAR WILL AUTOMATICALLY GO TO A LOCKOUT STATE UNTIL RADAR FAN POWER IS REAPPLIED", choiceB: "B:THE AIRCREW SHOULD SECURE POWER TO RADAR", choiceC: "C: THE AIRCREW SHALL SECURE POWER TO RADAR", choiceD: "D: DO NOT OPERATE THE RADAR UNLESS CRITICAL FOR FLIGHT SAFTEY", correct: "A"},
{question : "189: WARNING: REMOVE PERSONNEL OVERCOME BY SMOKE/FUMES FROM THE SCENE OF THE FIRE ______ ADMINISTERING OXYGEN.", ref: "(Ref: NATOPS-14 - 8/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:BEFORE", choiceB: "B:AFTER", choiceC: "C: WHILE", choiceD: "D: AND", correct: "D"},
{question : "190: CONDITION IV: A CREWMEMBER ASSIGNED BY FLT AT ANY TIME DURING THE SORTIE SHALL INSPECT THE ______ AND REPORT ANY DISCREPANCIES TO FLT.", ref: "(Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:MISSION SYSTEMS", choiceB: "B:EXTERIOR SURFACES OF THE AIRCRAFT", choiceC: "C: WX RADAR BIT DETAILS", choiceD: "D: OVERALL CONDITION OF THE AIRCRAFT", correct: "A"},
{question : "191: FLIGHT CONDITION V IS DEFINED AS:", ref: "(Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:TAKEOFF/LANDING", choiceB: "B:AIRCRAFT INSPECTION", choiceC: "C: OPERATIONAL CHECK", choiceD: "D: LOW LEVEL OPERATIONS", correct: "A"},
{question : "192: FLIGHT CONDITION IV IS DEFINED AS:", ref: "(Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:BUILT IN TEST", choiceB: "B:CHEKLIST TIME", choiceC: "C: OPERATIONAL CHECK", choiceD: "D: AIRCRAFT INSPECTION", correct: "D"},
{question : "193: FLIGHT CONDITION III IS DEFINED AS:", ref: "(Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:BUILT IN TEST", choiceB: "B:CHEKLIST TIME", choiceC: "C: OPERATIONAL CHECK", choiceD: "D: AIRCRAFT INSPECTION", correct: "C"},
{question : "194: FLIGHT CONDITION I IS DEFINED AS:", ref: "(Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:LOW LEVEL OPERATIONS", choiceB: "B:TAKEOFF/LANDING", choiceC: "C: HIGH ALTITUDE OPERATIONS / TRANSIT", choiceD: "D: WARTIME", correct: "A"},
{question : "195: WITH A FULL TACTICAL CREW, WHICH FIREFIGHTING DUTY SET IS RESPONSIBLE FOR RACKS E-101 AND E-102?", ref: "(Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:FORWARD", choiceB: "B:MIDCABIN", choiceC: "C: AFT", choiceD: "D: RUNNER", correct: "A"},
{question : "196: CAUTION: DO NOT TRY AN ______ IF THERE IS ICE AROUND THE HINGED FLAP OF THE VORTEX GENERATOR. THE MOTOR FOR THE INLET DOOR ACTUATOR CAN BE DAMAGED IF THERE IS ICE.", ref: "(Ref: NATOPS-7 - 6/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:EO/IR TURRET RETRACTION", choiceB: "B:AIRSTAIR RETRACTION", choiceC: "C: ENGINE START", choiceD: "D: APU START", correct: "D"},
{question : "197: NOTE: IF THE AIRSTAIR MUST BE EXTENDED FROM THE INTERIOR TO FACILITATE EVACUATION AND AC POWER HAS BEEN SECURED, ______ TO EXTEND THE LADDER.", ref: "(Ref: NATOPS-12 - 5/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:THE BATTERY SWITCH NEEDS TO REMAIN ON", choiceB: "B:THE STANDBY FUNCTION UTILIZED", choiceC: "C: USE EXTERNAL POWER", choiceD: "D: BOTH A & B", correct: "D"},
{question : "198: WHEN INITIATED, THE EMERGENCY EXIT LIGHTS OPERATE FOR A MINIMUM OF ___ MINUTES.", ref: "(Ref: NATOPS-16 - 3/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:5", choiceB: "B:10", choiceC: "C: 30", choiceD: "D: 90", correct: "B"},
{question : "199: EMERGENCY LIGHTING: WITH AIRCRAFT POWER AVAILABLE, THE BATTERY PACKS WILL FULLY RECHARGE IN __ MINUTES.", ref: "(Ref: NATOPS-16 - 3/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:30", choiceB: "B:60", choiceC: "C: 90", choiceD: "D: 302", correct: "C"},
{question : "200: WITH A FULL TACTICAL CREW, WHICH FIREFIGHTING DUTY SET IS RESPONSIBLE FOR RACKS E-113 AND E-114?", ref: "(Ref: NATOPS-14 - 4/ CATEGORY: OBSERVER)", imgSrc: "VP46.png", choiceA: "A:FORWARD", choiceB: "B:MIDCABIN", choiceC: "C: AFT", choiceD: "D: RUNNER", correct: "C"},


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