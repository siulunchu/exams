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



{question : "51: THE LB LBI ANTENNAS PROVIDE ___ DEGREE LB GEOLOCATION AZIMUTH COVERAGE ON EACH SIDE OF THE AIRCRAFT.", ref: "(Ref: NATIP-6 - 141/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:120°", choiceB: "B:+/- 165°", choiceC: "C: 300°", choiceD: "D: 360°", correct: "A"},
{question : "52: FOUR MB/HB ARRAYS, ONE IN EACH QUADRANT, PROVIDE ___ DEGREE AZIMUTH ES COVERAGE IN MB AND HB FREQUENCY RANGES.", ref: "(Ref: NATIP-6 - 135/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:+/- 150° ON EACH SIDE OF THE AIRCRAFT", choiceB: "B:+/- 165° ON EACH SIDE OF THE AIRCAFT", choiceC: "C: 300°", choiceD: "D: 360°", correct: "D"},
{question : "53: THE ESM SHUTDOWN COMMAND ______ POWER-OFF THE ESM SYSTEM.", ref: "(Ref: NATIP-2 - 126/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:DOES NOT", choiceB: "B:WILL IMMEDIATELY", choiceC: "C: WILL PERFORM AN SPDS", choiceD: "D: WILL PERFORM A COLD", correct: "A"},
{question : "54: FOUR DUAL-ELEMENT SPIRAL MODIFIED DIAMOND DF ARRAYS, ONE IN EACH QUADRANT, PROVIDE ___ DEGREE AZIMUTH ES LB COVERAGE.", ref: "(Ref: NATIP-6 - 139/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:+/- 150° ON EACH SIDE OF THE AIRCRAFT", choiceB: "B:+/- 165° ON EACH SIDE OF THE AIRCAFT", choiceC: "C: 300°", choiceD: "D: 360°", correct: "D"},
{question : "55: ESM SCANNER ANTENNA NEEDS TO BE IN THE PARKED POSITION SO IT DOES NOT AFFECT ACOUSTICS WITH __________ WHEN USING NON GPS CAPABLE BUOYS.", ref: "(Ref: NATIP-6 - 151/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:BATHYMETRY", choiceB: "B:SONO AUDIO", choiceC: "C: SFMT", choiceD: "D: SPS BUOY POSITIONING", correct: "D"},
{question : "56: A SOLID GREY ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 147/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:PID LOAD HAS NOT BEEN INITIATED", choiceC: "C: PID LOAD NOT COMPLETELY SUCCESSFUL", choiceD: "D: PID LOAD SUCCESSFUL", correct: "B"},
{question : "57: A FLASHING GREEN ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 149/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:PID LOAD HAS NOT BEEN INITIATED", choiceC: "C: PID LOAD NOT COMPLETELY SUCCESSFUL", choiceD: "D: PID LOAD SUCCESSFUL", correct: "A"},
{question : "58: IF THE SYSTEM CALCULATES AN ESM FIX, THE EMITTER SYMBOLS APPEAR ______.", ref: "(Ref: NATIP-6 - 147/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:AT THE EDGE OF THE TSD", choiceB: "B:AT THE EDGE OF THE ESM HORIZON", choiceC: "C: AT THAT LAT/LONG POSITION.", choiceD: "D: NONE OF THE ABOVE", correct: "C"},
{question : "59: THE PRIMARY FUNCTION OF _____ IS TO PROVIDE DESIGNATED SIGNAL ANALYSIS AND SPECIAL PARAMETER MEASUREMENT.", ref: "(Ref: NATIP-6 - 146/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:ESM", choiceB: "B:ELINT", choiceC: "C: IMOP", choiceD: "D: UMOP", correct: "B"},
{question : "60: THE ______ PROVIDES WIDE RF FREQUENCY COVERAGE, SIGNAL ACQUISITION AND IDENTIFICATION, PRECISION DF IN LB AND MB, COARSE DF IN HB, AND GEOLOCATION IN LB AND MB.", ref: "(Ref: NATIP-6 - 146/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:INTERFERENCE BLANKING UNIT (IBU)", choiceB: "B:ELINT DRP", choiceC: "C: RFC", choiceD: "D: ES DRP", correct: "D"},
{question : "61: A SOLID GREEN ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 149/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:PID LOAD HAS NOT BEEN INITIATED", choiceC: "C: PID LOAD NOT COMPLETELY SUCCESSFUL", choiceD: "D: PID LOAD SUCCESSFUL", correct: "D"},
{question : "62: A SOLID RED ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 149/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:PID LOAD HAS NOT BEEN INITIATED", choiceC: "C: PID LOAD NOT COMPLETELY SUCCESSFUL", choiceD: "D: PID LOAD SUCCESSFUL", correct: "C"},
{question : "63: WHEN ESM THREAT ALERT IS CHECKED AND A TYPE 1 OR TYPE 2 THREAT IS DETECTED, THE FOLLOWING OCCURS:", ref: "(Ref: NATIP-6 - 146/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:ESM TRACK CHANGES TO A CTOI", choiceB: "B:OVERRIDES ANY EMITTER DISPLAY FILTERING", choiceC: "C: THE TSD AUTOMATICALLY ADJUSTS", choiceD: "D: ALL OF THE ABOVE", correct: "D"},
{question : "64: A FLASHING YELLOW ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 151/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:LIBRARY UNDER REVISION", choiceC: "C: LIBRARY MEMORY REVISED BUT NOT YET WRITTEN TO A FILE", choiceD: "D: PID LOAD NOT COMPLETELY SUCCESSFUL", correct: "B"},
{question : "65: THE IBIT BUTTON IN THE TD IS DISABLED UNLESS THE ESM SYSTEM IS ______", ref: "(Ref: NATIP-6 - 146/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:IN STANDBY MODE", choiceB: "B:PARKED", choiceC: "C: POWERED DOWN", choiceD: "D: DEGRADED", correct: "A"},
{question : "66: IF AMBIGUITIES ARE PRESENT WITH THE SEI OR EMITTER, THE AMBIGUITY YELLOW ___ ICON IS DISPLAYED B EFORE THE ESM CONTACT SYMBOL", ref: "(Ref: NATIP-6 - 115/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:POUND SIGN", choiceB: "B:QUESTION MARK", choiceC: "C: EXCLAMATION POINT", choiceD: "D: EQUAL SIGN", correct: "B"},
{question : "67: THE ______ IS A FOUR-CHANNEL MEASUREMENT UNIT USED TO ACQUIRE, IDENTIFY, LOCATE, AND TRACK EMITTERS IN THE LB, MB, AND HB FREQUENCY RANGES.", ref: "(Ref: NATIP-6 - 134/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:FACS", choiceB: "B:ELINT DRP", choiceC: "C: ES DRP", choiceD: "D: INTERFERENCE BLANKING UNIT", correct: "C"},
{question : "68: DEGRADED OR MALFUNCTION SIGNALS ARE SENT TO SPDS AND THE HMS. A FACS MALFUNCTION SIGNAL INDICATES ______.", ref: "(Ref: NATIP-6 - 134/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:A NO FLOW CONDITION ON THE SYSTEM", choiceB: "B:POWER SUPPLY FAULT", choiceC: "C: LOW COOLANT LEVEL", choiceD: "D: FAULT OF THE CCA VME", correct: "A"},
{question : "69: DEGRADED OR MALFUNCTION SIGNALS ARE SENT TO SPDS AND THE HMS. A FACS DEGRADED SIGNAL INDICATES ______ OR A PUMP FAILURE.", ref: "(Ref: NATIP-6 - 185/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:NO FLOW CONDITION", choiceB: "B:POWER SUPPLY FAULT", choiceC: "C: LOW COOLANT LEVEL", choiceD: "D: FAULT OF THE CCA VME", correct: "C"},
{question : "70: THE SPDS WILL REMOVE POWER FROM THE FACS ______ MODULE AFTER MALFUNCTION SIGNAL HAS BEEN ACTIVE FOR MORE THAN 10 SECONDS.", ref: "(Ref: NATIP-6 - 155/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:FORWARD ARRAYS", choiceB: "B:RESERVOIR PUMP CONTROLLER", choiceC: "C: COOLANT", choiceD: "D: HEAT SINK", correct: "B"},
{question : "71: PASSIVE GEO-LOCATION IS PROVIDED USING ______ RANGING.", ref: "(Ref: NATIP-6 - 154/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:AUTOMATIC", choiceB: "B:DIRECTION-OF-ARRIVAL", choiceC: "C: SHORT-BASELINE INTERFEROMETER (SBI)", choiceD: "D: LONG-BASELINE INTERFEROMETER (LBI)", correct: "D"},
{question : "72: THE ESM SCAN STRATEGY TD BAR HEIGHT IS BASED ON THE ______.", ref: "(Ref: NATIP-6 - 153/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PRIORITY LEVEL", choiceB: "B:AMPLITUDE LEVEL", choiceC: "C: RANGE FROM OWNSHIP", choiceD: "D: AFFILIATION", correct: "A"},
{question : "73: A SOLID YELLOW ESM PID FILE LIGHT INDICATES?", ref: "(Ref: NATIP-6 - 149/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:PID LOAD IN PROGRESS", choiceB: "B:LIBRARY UNDER REVISION", choiceC: "C: LIBRARY MEMORY REVISED BUT NOT YET WRITTEN TO A FILE", choiceD: "D: PID LOAD NOT COMPLETELY SUCCESSFUL", correct: "C"},
{question : "74: FOUR MB LBI ANTENNAS, ONE IN EACH QUADRANT, PROVIDE ___ DEGREE MB GEOLOCATION AZIMUTH COVERAGE.", ref: "(Ref: NATIP-6 - 137/ CATEGORY: ESM)", imgSrc: "VP46.png", choiceA: "A:+/- 150° ON EACH SIDE OF THE AIRCRAFT", choiceB: "B:+/- 165° ON EACH SIDE OF THE AIRCAFT", choiceC: "C: 300°", choiceD: "D: 360°", correct: "A"},
{question : "75: IF A BOOKMARK IS MADE WHILE VIEWING AN ______ VIDEO, THE ______ VIDEO WILL ALSO BE BOOKMARKED.", ref: "(Ref: NATIP-6 - 6-335/ CATEGORY: EWO)", imgSrc: "VP46.png", choiceA: "A:EO, IR", choiceB: "B:RADAR, MCDS", choiceC: "C: ISAR, SAR", choiceD: "D: ACOUSTICS, SPS", correct: "A"},
{question : "76: STANDOFF CALLS ARE REQUIRE AT…", ref: "(Ref: NATOPS-7 - 66/ CATEGORY: EWO)", imgSrc: "VP46.png", choiceA: "A:15NM, CPA", choiceB: "B:15NM, 5NM", choiceC: "C: 15NM, 3NM", choiceD: "D: 27NM, 22NM, 12NM, 5NM", correct: "A"},
{question : "77: THE EWO'S CALLS CHALL BE MADE USING ______ UNLESS EMCON OR EQUIPMENT DEGRADATION PRECLUDES ITS USE..", ref: "(Ref: NATOPS-7 - 66/ CATEGORY: EWO)", imgSrc: "VP46.png", choiceA: "A:TERRITORIAL BOUNDARIES", choiceB: "B:COTAC GENERATED POINTS", choiceC: "C: RADAR DATA", choiceD: "D: PID LINES", correct: "C"},
{question : "78: MOSA CALLS ARE REQUIRED AT …", ref: "(Ref: NATOPS-7 - 66/ CATEGORY: EWO)", imgSrc: "VP46.png", choiceA: "A:25NM, 15NM, 5NM", choiceB: "B:15NM,CPA", choiceC: "C: 15NM,5NM OR 3NM", choiceD: "D: 25NM, 10NM, CPA", correct: "B"},
{question : "79: M OSA IS DEFINED AS:", ref: "(Ref: NATOPS-7 - 65/ CATEGORY: EWO)", imgSrc: "VP46.png", choiceA: "A:1000 FEET ABOVE THE HIGHEST OBSTACLE WITHIN 25 NM OF THE AIRCRAFT", choiceB: "B:1000 FEET ABOVE THE HIGHEST OBSTACLE WITHIN 15 NM OF THE OP AREA", choiceC: "C: 1000 FEET ABOVE THE HIGHEST OBSTACLE WITHIN 15 NM OF THE AIRCRAFT", choiceD: "D: 1000 FEET ABOVE THE HIGHEST OBSTACLE WITHIN 25 NM OF THE OP AREA", correct: "C"},
{question : "80: THE SYSTEM IS USED BY NATIONAL AIR TRAFFIC CONTROL (ATC) AND THE MILITARY TO IDENTIFY AND TRACK FRIENDLY AIRCRAFT BY DETERMINING THE ______ FROM THE IFF INTERROGATOR AND THE ______.", ref: "(Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:BEARING AND RANGE, TARGET ALTITUDE", choiceB: "B:RANGE, TARGET ALTITUDE", choiceC: "C: BEARING, TARGET ALTITUDE", choiceD: "D: BEARING AND RANGE, TARGET INTENTIONS", correct: "A"},
{question : "81: A SOLID GREEN LIGHT ON THE STATUS LED ON THE IFFI WRA INDICATES:", ref: "(Ref: NATIP-6 - 240/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:VERSA MODULE EUROPA.", choiceB: "B:VOLTAGE STANDING WAVE RATIO FAULT", choiceC: "C: POWER SUPPLY FAULT CONDITION", choiceD: "D: IFFI   POWERED AND BIT PASSED.", correct: "D"},
{question : "82: WHAT IS THE IFFI CAPABILITY THAT PROVIDES MODE 4 AND/OR 5 INTERROGATIONS INTERLACED WITH ONE OR MORE OF THE LOWER LEVEL INTERROGATION MODES (MODES 1, 2, 3/A, AND C).", ref: "(Ref: NATIP-6 - 238/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:INTERLACABILITY", choiceB: "B:CONCURRENT PROCESSING", choiceC: "C: SUPERMODE", choiceD: "D: TRACK SMEARING", correct: "C"},
{question : "83: IFFI MODE HAS AN ANTENNA SCAN RATE OF:", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:6 RPM", choiceB: "B:60 RPM", choiceC: "C: 300 RPM", choiceD: "D: 0 RPM", correct: "A"},
{question : "84: WHICH ANTENNA SCAN RATE PREVENTS SUPERMODE CAPABILITY?", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:0 RPM (SAR/ISAR)", choiceB: "B:6 RPM (IFFI, WX, OR NAV MODE)", choiceC: "C: 60 RPM (SURFACE SEARCH)", choiceD: "D: 300 RPM (PERISCOPE)", correct: "D"},
{question : "85: WHAT IS THE MAXIMUM NUMBER OF SIF INTERROGATION MODES WITH SUPERMODE WHEN USING AN ANTENNA SCAN RATE OF 6 RPM (IFFI, WX, OR NAV MODE)?", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1 (LOW PD)", choiceB: "B:2", choiceC: "C: 4", choiceD: "D: 6", correct: "D"},
{question : "86: WHAT IS THE MAXIMUM NUMBER OF SIF INTERROGATION MODES (NO SUPERMODE) WHEN USING AN ANTENNA SCAN RATE OF 300 RPM (PERISCOPE)?", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1 (LOW PD)", choiceB: "B:2", choiceC: "C: 4", choiceD: "D: 6", correct: "A"},
{question : "87: WHAT IS THE MAXIMUM NUMBER OF SIF INTERROGATION MODES (NO SUPERMODE) WHEN USING AN ANTENNA SCAN RATE OF 60 RPM (SURFACE SEARCH)?", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1 (LOW PD)", choiceB: "B:2", choiceC: "C: 4", choiceD: "D: 6", correct: "B"},
{question : "88: WHAT IS THE MAXIMUM NUMBER OF SIF INTERROGATION MODES (NO SUPERMODE) WHEN USING AN ANTENNA SCAN RATE OF 6 RPM (IFFI, WX, OR NAV MODE)?", ref: "(Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1 (LOW PD)", choiceB: "B:2", choiceC: "C: 4", choiceD: "D: 6", correct: "C"},
{question : "89: THE IFFI SUBSYSTEM RECEIVES A WOW OR LANDING GEAR INTERLOCK SIGNAL FROM THE AIRCRAFT SUBSYSTEM. THE IFFI DOES NOT TRANSMIT RF POWER WHENEVER THE WOW OR LANDING GEAR INTERLOCK SIGNAL INPUT IS ACTIVE EXCEPT ______.", ref: "(Ref: NATIP-6 - 244/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:DURING APY-10 HIGH VOLTAGE CHECKS", choiceB: "B:SAFTEY OF FLIGHT MODES 3/A AND C", choiceC: "C: THE LOOP TEST FUNCTION", choiceD: "D: WHEN BITE IS COMMANDED BY THE OPERATOR", correct: "C"},
{question : "90: IFFI MODES ______ ARE MILITARY ONLY MODES.", ref: "(Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1 AND 2", choiceB: "B:1, 2, 3, C, 4, AND 5", choiceC: "C: 1, 2, 4, AND 5", choiceD: "D: 4 AND 5", correct: "C"},
{question : "91: IDENTIFICATION FRIEND OR FOE (IFF) IS AN INTERROGATE AND RESPONSE SYSTEM DESIGNED TO IDENTIFY AND TRACK COOPERATIVE ______.", ref: "(Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:MILITARY AIRCRAFT OR MILITARY SHIPS", choiceB: "B:CIVIL AIRCRAFT OR MILITARY SHIPS", choiceC: "C: CIVIL AND MILITARY AIRCRAFT AND MILITARY SHIPS", choiceD: "D: CIVIL AND MILITARY AIRCRAFT AND CIVIL AND MILITARY SHIPS", correct: "C"},
{question : "92: _____ TRACKS ARE HIGHLIGHTED WITH A BLACK BORDER AND YELLOW FILL.", ref: "(Ref: NATIP-2 - 2-128/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:CTOI", choiceB: "B:CONFIRMED CONTACT", choiceC: "C: EMERGENCY IFFI CONTACT", choiceD: "D: FORCE TELL LINK TRACK", correct: "C"},
{question : "93: AN IFFI MODE 5 CONTACT HAS A ______ BACKGROUND WITH A UNIQUE IDENTIFIER. THE PIN SHOULD BE IN THE RANGE 00000 - 37777 OCTAL.", ref: "(Ref: NATIP-6 - 246/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:YELLOW", choiceB: "B:BLUE", choiceC: "C: GREEN", choiceD: "D: ORANGE", correct: "C"},
{question : "94: WHICH MILITARY MODES ARE ENCYRPTED FOR INTERROGATE AND RESPONSE?", ref: "(Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:1", choiceB: "B:2", choiceC: "C: 3", choiceD: "D: 4 AND 5", correct: "D"},
{question : "95: A RED LIGHT ON THE OVER TEMP LED ON THE IFFI WRA INDICATES:", ref: "(Ref: NATIP-6 - 240/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:FAILURE IN TRANSMITTER CHAIN.", choiceB: "B:VOLTAGE STANDING WAVE RATIO FAULT", choiceC: "C: POWER SUPPLY FAULT CONDITION", choiceD: "D: POWER SUPPLY, AMPLIFIER, OR TARGET PROCESSOR TEMPERATURE FAULT.", correct: "D"},
{question : "96: AN IFFI RETURN OF MODE 3, CODE 7600 REPRESENTS:", ref: "(Ref: NATIP-6 - 245/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:UNLAWFUL INTERFERENCE", choiceB: "B:LOST COMMS", choiceC: "C: VFR", choiceD: "D: GENERAL EMERGENCY", correct: "B"},
{question : "97: AN IFFI RETURN OF MODE 3, CODE 7700 REPRESENTS:", ref: "(Ref: NATIP-6 - 245/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:UNLAWFUL INTERFERENCE", choiceB: "B:LOST COMMS", choiceC: "C: VFR", choiceD: "D: GENERAL EMERGENCY", correct: "D"},
{question : "98: IFFI MODE ______ IS THE CIVIL ALTITUDE REPORTING MODE.", ref: "(Ref: NATIP-6 - 237/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:MODE 5, LEVEL 2", choiceB: "B:3/A", choiceC: "C: C", choiceD: "D: 3/A AND C", correct: "C"},
{question : "99: NOTE: WHEN THE MAXIMUM NUMBER OF SELECTED INTERROGATION MODES EXCEEDS THE MAXIMUM, THE IFFI SOFTWARE DROPS INTERROGATIONS IN MODES WITH THE LOWEST PRIORITY, AS FOLLOWS (LISTED HIGHEST TO LOWEST):", ref: "(Ref: NATIP-6 - 39/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:5, 4, 3/A, 2, 1, C", choiceB: "B:3/A, C, 2, 1, 5, 4", choiceC: "C: 3/A, C, 4, 5, 1, 2", choiceD: "D: 3/A, C, 2, 5, 4, 1", correct: "A"},
{question : "100: A SOLID RED LIGHT ON THE XMIT LED ON THE IFFI WRA INDICATES:", ref: "(Ref: NATIP-6 - 240/ CATEGORY: IFFI)", imgSrc: "VP46.png", choiceA: "A:FAILURE IN TRANSMITTER CHAIN.", choiceB: "B:VOLTAGE STANDING WAVE RATIO FAULT", choiceC: "C: POWER SUPPLY FAULT CONDITION", choiceD: "D: POWER SUPPLY, AMPLIFIER, OR TARGET PROCESSOR TEMPERATURE FAULT.", correct: "A"},




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