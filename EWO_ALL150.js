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



{question : "	101	: 	UNDER WHICH OF THE FOLLOWING CONDITIONS WILL THE IFFI SYSTEM INHIBIT RF TRANSMISSION?	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	WHEN THE WEIGHT ON WHEELS SWITCH IS ACTIVE	", choiceB: "B:	DURING FUELING OPERATIONS	", choiceC: "C: 	WHEN THE RADOME IS OPEN	", choiceD: "D: 	DURING IFFI LOOP TEST OPERATION	", correct: "	C	"},
{question : "	102	: 	A FLASHING RED LIGHT ON THE XMIT LED ON THE IFFI WRA INDICATES:	", ref: "(	Ref: NATIP-6 - 240/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	FAILURE IN TRANSMITTER CHAIN.	", choiceB: "B:	VOLTAGE STANDING WAVE RATIO FAULT	", choiceC: "C: 	POWER SUPPLY FAULT CONDITION	", choiceD: "D: 	POWER SUPPLY, AMPLIFIER, OR TARGET PROCESSOR TEMPERATURE FAULT.	", correct: "	B	"},
{question : "	103	: 	A RED LIGHT ON THE PSU LED ON THE IFFI WRA INDICATES:	", ref: "(	Ref: NATIP-6 - 240/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	FAILURE IN TRANSMITTER CHAIN.	", choiceB: "B:	VOLTAGE STANDING WAVE RATIO FAULT	", choiceC: "C: 	POWER SUPPLY FAULT CONDITION	", choiceD: "D: 	POWER SUPPLY, AMPLIFIER, OR TARGET PROCESSOR TEMPERATURE FAULT.	", correct: "	C	"},
{question : "	104	: 	IFFI TRANSMITS INTERROGATIONS AND RECEIVES REPLIES VIA A TEN-ELEMENT DIPOLE ARRAY MOUNTED ON THE ___________.	", ref: "(	Ref: NATIP-6 - 241/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	SCANNER ANTENNA	", choiceB: "B:	KFZSE	", choiceC: "C: 	FRONT SIDE OF THE P-8A APY-10 RADAR ANTENNA.	", choiceD: "D: 	TCAS	", correct: "	C	"},
{question : "	105	: 	WARNING: A RADIATION HAZARD EXISTS THAT COULD CAUSE INJURY TO PERSONNEL AND DAMAGE TO EQUIPMENT WHEN THE IFFI LOOP TEST IS OPERATED ON THE GROUND. STAND OFF RANGES TO FUEL (HERF) FOR THE UPX-43 IFFI ARE:	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	1.2	", choiceB: "B:	4.5	", choiceC: "C: 	20	", choiceD: "D: 	79	", correct: "	A	"},
{question : "	106	: 	NOTE: IFFI LOOP TEST VIDEO RETURN SHALL BE CHECKED IN THE ___________ MODES ONLY.	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	NAVIGATE/SEARCH	", choiceB: "B:	IFFI/NAVIGATE	", choiceC: "C: 	WX/NAVIGATE	", choiceD: "D: 	IFFI/WX	", correct: "	B	"},
{question : "	107	: 	WARNING: A RADIATION HAZARD EXISTS THAT COULD CAUSE INJURY TO PERSONNEL AND DAMAGE TO EQUIPMENT WHEN THE IFFI LOOP TEST IS OPERATED ON THE GROUND. STAND OFF RANGES TO SUSCEPTIBLE ORDNANCE (HERO) FOR THE UPX-43 IFFI ARE:	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	1.2	", choiceB: "B:	4.5	", choiceC: "C: 	20	", choiceD: "D: 	79	", correct: "	C	"},
{question : "	108	: 	AN IFFI MODE 1 CONTACT HAS A ______ BACKGROUND. THE MODE IS DISPLAYED TO THE LEFT, WITH A SMALL CARAT SEPARATING IT FROM THE CODE.	", ref: "(	Ref: NATIP-6 - 245/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	YELLOW	", choiceB: "B:	BLUE	", choiceC: "C: 	GREEN	", choiceD: "D: 	ORANGE	", correct: "	B	"},
{question : "	109	: 	WARNING: A RADIATION HAZARD EXISTS THAT COULD CAUSE INJURY TO PERSONNEL AND DAMAGE TO EQUIPMENT WHEN THE IFFI LOOP TEST IS OPERATED ON THE GROUND. STAND OFF RANGES TO UNSAFE ORDNANCE (HERO) FOR THE UPX-43 IFFI ARE:	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	1.2	", choiceB: "B:	4.5	", choiceC: "C: 	20	", choiceD: "D: 	79	", correct: "	D	"},
{question : "	110	: 	AN IFFI MODE 2 CONTACT HAS A ______ BACKGROUND. THE MODE IS DISPLAYED TO THE LEFT, WITH A SMALL CARAT SEPARATING IT FROM THE CODE.	", ref: "(	Ref: NATIP-6 - 245/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	YELLOW	", choiceB: "B:	BLUE	", choiceC: "C: 	GREEN	", choiceD: "D: 	ORANGE	", correct: "	B	"},
{question : "	111	: 	AN IFFI MODE 3/A CONTACT HAS A ______ BACKGROUND. MODE 3/A DISPLAYS THE TARGET SQUAWK ID PREFIXED WITH A 3-.	", ref: "(	Ref: NATIP-6 - 245/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	YELLOW	", choiceB: "B:	BLUE	", choiceC: "C: 	GREEN	", choiceD: "D: 	ORANGE	", correct: "	D	"},
{question : "	112	: 	AN IFFI MODE C CONTACT HAS A ______ BACKGROUND. MODE C DISPLAYS THE CURRENT FLIGHT LEVEL, PREFIXED WITH FL.	", ref: "(	Ref: NATIP-6 - 245/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	YELLOW	", choiceB: "B:	BLUE	", choiceC: "C: 	GREEN	", choiceD: "D: 	ORANGE	", correct: "	D	"},
{question : "	113	: 	BECAUSE A TARGET CAN REPLY ON MULTIPLE MODES, THE PRIORITY ORDER FOR DISPLAYING MODES IS ______. LOWER RANKED MODES THAT ARE NOT SHOWN DIRECTLY ON THE IFFI TRACK CAN BE VIEWED THROUGH THE TRACK AMPLIFY TD.	", ref: "(	Ref: NATIP-6 - 244/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	5, 4, 3/A, 2, 1, C	", choiceB: "B:	3/A, C, 2, 1, 5, 4	", choiceC: "C: 	3/A, C, 4, 5, 1, 2	", choiceD: "D: 	3/A, C, 2, 5, 4, 1	", correct: "	D	"},
{question : "	114	: 	AN IFFI RETURN OF MODE 3, CODE 7500 REPRESENTS:	", ref: "(	Ref: NATIP-6 - 245/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	UNLAWFUL INTERFERENCE	", choiceB: "B:	LOST COMMS	", choiceC: "C: 	VFR	", choiceD: "D: 	GENERAL EMERGENCY	", correct: "	A	"},
{question : "	115	: 	AN IFFI MODE 4 CONTACT HAS A BLANK ______ BLOCK.	", ref: "(	Ref: NATIP-6 - 246/ CATEGORY: IFFI		)", imgSrc: "	VP46.png	", choiceA: "A:	YELLOW	", choiceB: "B:	BLUE	", choiceC: "C: 	GREEN	", choiceD: "D: 	ORANGE	", correct: "	C	"},
{question : "	116	: 	ROTATING THE PRESS TO TEST KNOB TO THE EMERGENCY POSITION PROVIDES WHAT TO THE OXYGEN MASK?	", ref: "(	Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	O XYGEN IS NOT SUPPLIED	", choiceB: "B:	SUPPLIES 100% OXYGEN UNDER POSITVE PRESSURE AT ALL CABIN ALTITUDES	", choiceC: "C: 	O XYGEN IS SUPPLIED, BUT ONLY ON DEMAND	", choiceD: "D: 	S WITCHES FIXED OXYGEN SYSTEM BEING USED	", correct: "	B	"},
{question : "	117	: 	WHEN POWERING DOWN EQUIPMENT VIA THE RACK POWER CUTOFF SWITCH, AFFECTED SSPC’S WILL BE PLACED IN WHAT POSITION?	", ref: "(	Ref: NATIP-11 - 12/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	LOCKOUT	", choiceB: "B:	OFF	", choiceC: "C: 	ON	", choiceD: "D: 	TRIPPED	", correct: "	A	"},
{question : "	118	: 	THE APU START CYCLE MAY TAKE AS LONG AS _______?	", ref: "(	Ref: NATOPS-2 - 51/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	1 MINUTE	", choiceB: "B:	90 SECONDS	", choiceC: "C: 	120 SECONDS	", choiceD: "D: 	5 MINUTES	", correct: "	C	"},
{question : "	119	: 	THE APU PROVIDES THE FOLLOWING:	", ref: "(	Ref: NATOPS-2 - 50/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	BLEED AIR FOR ENGINE STARTING OR AIR CONDITIONING	", choiceB: "B:	AN AUXILLIARY AC POWER SOURCE	", choiceC: "C: 	EXTERNAL POWER	", choiceD: "D: 	BOTH A AND B	", correct: "	D	"},
{question : "	120	: 	__ __ LIGHTS SHALL BE ON ANYTIME THE ENGINES ARE RUNNING.	", ref: "(	Ref: NATOPS-7 - 44/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	POSITION/WINGTIPS	", choiceB: "B:	A NTI-COLLISION	", choiceC: "C: 	WHEEL WELL	", choiceD: "D: 	E MERGENCY	", correct: "	B	"},
{question : "	121	: 	__ __ LIGHTS SHOULD BE PLACED TO STEADY ANYTIME POWER IS APPLIED TO THE AIRCRAFT.	", ref: "(	Ref: NATOPS-7 - 44/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	POSITION	", choiceB: "B:	A NTI-COLLISION	", choiceC: "C: 	WHEEL WELL	", choiceD: "D: 	E MERGENCY	", correct: "	A	"},
{question : "	122	: 	HOW DOES PLACING THE NORMAL/100% SWITCH TO “100%” AFFECT THE OXYGEN MASK REGULATOR?	", ref: "(	Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	SUPPLIES 100% OXYGEN ON DEMAND	", choiceB: "B:	A MBIENT CABIN AIR MIXES WITH OXYGEN	", choiceC: "C: 	PROVIDE NITROGEN	", choiceD: "D: 	ALL OF THE ABOVE	", correct: "	A	"},
{question : "	123	: 	T HE ____ SWITC ON THE FLIGHT DECK DOES NOT NEED TO BE ON WHEN OPERATING THE AIRSTAIR ON STANDBY MODE FROM THE EXTERIOR CONTROL PANEL.	", ref: "(	Ref: NATOPS-2 - 262/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	HYD PUMP	", choiceB: "B:	AIRSTAIR	", choiceC: "C: 	BAT	", choiceD: "D: 	STANDBY	", correct: "	C	"},
{question : "	124	: 	WHAT DOES AN ILLUMINATED MAINT LIGHT REPRESENT?	", ref: "(	Ref: NATOPS-2 - 52/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	APU MAINTENANCE PROBLEM EXISTS. APU WILL INITIATE AUTOMATIC SHUTDOWN	", choiceB: "B:	APU MAINTENANCE PROBLEM EXISTS. APU MAY BE OPERATED.	", choiceC: "C: 	APU FIRE DETECTION SYSTEM IS INOPERATIVE	", choiceD: "D: 	EGT EXCEEDANCE	", correct: "	B	"},
{question : "	125	: 	W ARNING: AN SSPC IN LOCKOUT STATUS _____ NOT BE RESET WITHOUT CONSULTING MAINTENANCE OR INJURY AND/OR FIRE MAY OCCUR.	", ref: "(	Ref: NATIP-11 - 4/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	S HOULD	", choiceB: "B:	SHALL	", choiceC: "C: 	CAN	", choiceD: "D: 	WILL	", correct: "	A	"},
{question : "	126	: 	HOW DOES HAVING THE NORMAL/100% SWITCH SET TO “NORMAL” AFFECT THE OXYGEN MASK REGULATOR?	", ref: "(	Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	SUPPLIES AIR/OXYGEN MIXTURE ON DEMAND (RATIO DEPNDS ON CABIN ALTITUDE)	", choiceB: "B:	S UPPLIES 100% OXYGEN ON DEMAND	", choiceC: "C: 	P ROVIDE NITROGEN	", choiceD: "D: 	A LL OF THE ABOVE	", correct: "	A	"},
{question : "	127	: 	WHICH DITCHING STATION AT THE MISSION PLANNING TABLE HAS A FIXED OXYGEN MASK WITH A MIC CONNECTED?	", ref: "(	Ref: NATOPS-2 - 254/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	18	", choiceB: "B:	10	", choiceC: "C: 	11	", choiceD: "D: 	20	", correct: "	D	"},
{question : "	128	: 	WHAT ARE THE INDICATIONS ASSOCIATED WITH LAVATORY SMOKE DETECTION?	", ref: "(	Ref: NATOPS-2 - 216/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	A URAL WARNING, RED ALARM INDICATOR ON LAVATORY SMOKE DETECTOR, AMBER LAVATORY LIGHT, AND AMBER LAVATORY SMOKE LIGHT ON FORWARD OVERHEAD PANEL IN FLIGHT DECK	", choiceB: "B:	S MOKE INDICATION ON E810	", choiceC: "C: 	MASTER CAUTION AND OVERHEAD ANNUNCIATOR LIGHTS	", choiceD: "D: 	BOTH A AND C	", correct: "	D	"},
{question : "	129	: 	W ARNING: IF THE WIND IS OVER ____ KNOTS, INCREASE THE INLET HAZARD BY ____ PERCENT.	", ref: "(	Ref: NATOPS-3 - 25/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	20,25	", choiceB: "B:	40,65	", choiceC: "C: 	65,40	", choiceD: "D: 	25,20	", correct: "	D	"},
{question : "	130	: 	A MINI OXYGEN MASK IS PROVIDED TO ALLOW A CREWMEMBER TO RETURN TO HIS/HER SEAT FROM THE___________ FOLLOWING CABIN DEPRESSURIZATION.	", ref: "(	Ref: NATOPS-16 - 12/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	FLIGHT DECK	", choiceB: "B:	MISSION PLANNING AREA	", choiceC: "C: 	MISSION CREW WORKSTATION	", choiceD: "D: 	LAVATORY	", correct: "	D	"},
{question : "	131	: 	W ARNING: DO NOT OPERATE THE DOOR IN WINDS MORE THAN __ KNOTS. DO NOT LET THE DOOR STAY OPEN IN WINDS MORE THAN __ KNOTS.	", ref: "(	Ref: NATOPS-2 - 264/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	65,40	", choiceB: "B:	40,65	", choiceC: "C: 	12,25	", choiceD: "D: 	25,12	", correct: "	B	"},
{question : "	132	: 	T O OPERATE THE AIRSTAIR IN STANDBY MODE FROM THE INTERIOR, WHAT COMBINATION OF BUTTONS MUST BE DEPRESSED?	", ref: "(	Ref: NATOPS-2 - 265/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	STANDBY, EXTEND OR RETRACT	", choiceB: "B:	EXTEND AND RETRACT	", choiceC: "C: 	STAIR OPER, STANDBY	", choiceD: "D: 	STAIR OPER, EXTEND OR RETRACT	", correct: "	A	"},
{question : "	133	: 	AIRSTAIRC AUTION: USE OF THE STANDBY CONTROL SWITCH ________________.	", ref: "(	Ref: NATOPS-2 - 262/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	BYPASSES ALL SAFETY CIRCUITS	", choiceB: "B:	AUTOMATICALLY STOWS THE HANDRAILS	", choiceC: "C: 	CAN CAUSE AN ELECTRICAL SHORTAGE	", choiceD: "D: 	HAS NO EFFECT ON AIRSTAIR OPERATIONS	", correct: "	A	"},
{question : "	134	: 	WHAT DOES AN ILLUMINATED APU RUNNING LIGHT REPRESENT?	", ref: "(	Ref: NATOPS-2 - 51/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	THE APU IS READY FOR A LOAD FOLLOWING A NORMAL START	", choiceB: "B:	APU MUST BE SHUT DOWN	", choiceC: "C: 	APU FIRE	", choiceD: "D: 	APU REQUIRES RESTART	", correct: "	A	"},
{question : "	135	: 	SQUEEZING THE RED INFLATION LEVERS DURING STOWING WILL INFLATE THE HARNESS AND PREVENT _________.	", ref: "(	Ref: NATOPS-2 - 257/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	100% OXYGEN	", choiceB: "B:	OXYGEN FLOW	", choiceC: "C: 	OXYGEN MASK ICS OPERATION	", choiceD: "D: 	THE CORRECT STOWING OF THE MASK	", correct: "	D	"},
{question : "	136	: 	PUSHING THE HARNESS STRAPS INTO OR BEHIND THE NOSEPIECE MAY CAUSE THE CROSS STRAPS TO __________ DURING INFLATION.	", ref: "(	Ref: NATOPS-2 - 257/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	HANG UP ON THE MASK	", choiceB: "B:	DISRUPT OXYGEN FLOW	", choiceC: "C: 	RIP	", choiceD: "D: 	EXPLODE	", correct: "	A	"},
{question : "	137	: 	C AUTION: DO NOT DEPRESS THE ____ SWITCH IN CONJUNCTION WITH THE ___OR ____ SWITCH.	", ref: "(	Ref: NATOPS-2 - 265/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	STAIR OPER, EXTEND/RETRACT	", choiceB: "B:	STANDBY, EXTEND/RETRACT	", choiceC: "C: 	STANDBY STAIR OPER	", choiceD: "D: 	APU, STANDBY/STAIR OPER	", correct: "	A	"},
{question : "	138	: 	THE HAZARD OF ELECTROMAGETIC RADIATION TO PERSONNEL STANDOFF FOR THE APY-10 IS:	", ref: "(	Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	95	", choiceB: "B:	169	", choiceC: "C: 	302	", choiceD: "D: 	348	", correct: "	B	"},
{question : "	139	: 	NOTE: ______ WILL MAINTAIN THE LAST FREQUENCY ENTERED WITH MCDS ON, AND CANNOT BE MODIFIED WITHOUT MCDS INPUT.	", ref: "(	Ref: NATOPS-7 - 37/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	VHF 1	", choiceB: "B:	VHF2	", choiceC: "C: 	V/UHF RADIOS	", choiceD: "D: 	V/UHF 2 AND 3	", correct: "	D	"},
{question : "	140	: 	NOTE: IF V/UHF RADIO(S) WILL NOT TRANSMIT, ______ ALL OF THE V/UHF RADIOS, MAPS, AND CSUS AT SPDS AND COMPLETE THE SECONDARY V/UHF RADIO AND ICS CONFIGURATION WITH MCDS OFF PROCEDURE.	", ref: "(	Ref: NATOPS-7 - 37/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	RECYCLE POWER TO	", choiceB: "B:	RUN AN IBIT ON	", choiceC: "C: 	RUN A PBIT ON	", choiceD: "D: 	TURN OFF	", correct: "	D	"},
{question : "	141	: 	NOTE: IF THE ECS DRAW-THRU SYSTEM IS ALREADY OPERATIONAL AND POWERED ON, POWER ______ BE SECURED TO THE SYSTEM IN ORDER TO CONDUCT THE FAN, VLAVE OR MAINTENANCE ALARM TESTS.	", ref: "(	Ref: NATOPS-7 - 35/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	MAY	", choiceB: "B:	SHOULD	", choiceC: "C: 	SHALL	", choiceD: "D: 	SHOULD NOT	", correct: "	D	"},
{question : "	142	: 	NOTE: IF MISSION EQUIPMENT IS ALREADY POWERED AND THE CABIN TEMPERATURE EXCEEDS ___°F, THE AIRCREW SHOULD SHUT DOWN THE EQUIPMENT UNTIL THE TEMPERATURE COOLS BELOW 97°F.	", ref: "(	Ref: NATOPS-7 - 33/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	98	", choiceB: "B:	100	", choiceC: "C: 	103	", choiceD: "D: 	107	", correct: "	B	"},
{question : "	143	: 	CAUTION: EMERGENCY EXIT LIGHTS TEST DURATION SHALL NOT EXCEED ___ MINUTES OR ELSE REMAINING BATTERY POWER MAY NOT BE SUFFICIENT TO ILLUMINATE THE EMERGENCY LIGHTING DURING AN ACTUAL LOSS OF POWER.	", ref: "(	Ref: NATOPS-7 - 30/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	5	", choiceB: "B:	10	", choiceC: "C: 	15	", choiceD: "D: 	90	", correct: "	B	"},
{question : "	144	: 	_____ 22 CF PORTABLE OXYGEN BOTTLES AND MASKS ARE PROVIDED TO ALLOW AIRCREW MOBILITY TO ATTEND TO SMOKE AND/OR FIRE.	", ref: "(	Ref: NATOPS-16 - 10/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	TWO	", choiceB: "B:	FOUR	", choiceC: "C: 	FIVE	", choiceD: "D: 	SIX	", correct: "	C	"},
{question : "	145	: 	THE HAZARD OF ELECTROMAGETIC RADIATION TO FUEL STANDOFF FOR THE APY-10 IS:	", ref: "(	Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	95	", choiceB: "B:	169	", choiceC: "C: 	302	", choiceD: "D: 	348	", correct: "	A	"},
{question : "	146	: 	WHEN THE JUMP SEAT IS OCCUPIED, DITCHING STATION __ OR __ SHALL BE RESERVED FOR THE JUMP SEAT OCCUPANT.	", ref: "(	Ref: NATOPS-15 - 38/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	10, 11	", choiceB: "B:	3, 4	", choiceC: "C: 	12, 13	", choiceD: "D: 	20, 21	", correct: "	A	"},
{question : "	147	: 	AFTER STARTING THE RADAR SYSTEM, WAIT AT LEAST ___ SECONDS BEFORE PRESSING THE ACE MASTER BITE RESET IN RACK 870.	", ref: "(	Ref: NATIP-13 - 85/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	10	", choiceB: "B:	30	", choiceC: "C: 	45	", choiceD: "D: 	60	", correct: "	C	"},
{question : "	148	: 	CAUTION: APPLYING MISSION EQUIPMENT POWER WHEN THE CABIN TEMPERATURE (FWD OR AFT) EXCEEDS __ °F ON THE AIR TEMPERATURE INDICATOR ON THE FLIGHT DECK MAY RESULT IN EQUIPMENT OVERHEATING.	", ref: "(	Ref: NATIP-7 - 21/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	95	", choiceB: "B:	97	", choiceC: "C: 	27	", choiceD: "D: 	40	", correct: "	B	"},
{question : "	149	: 	A FIRE EXTIGUISHED BY HALON MAY PRODUCE DECOMPOSITION BY-PRODUCTS, CHARACTERIZED BY A SHARP ACRID ODOR, THAT MAY BY HARMFUL. IF THIS ODOR IS DETECTED, __________ IS RECOMMENDED UNTIL PROPER VENTILATION IS ESTABLISHED.	", ref: "(	Ref: NATOPS-16 - 13/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	UTILIZATION OF OXYGEN	", choiceB: "B:	EVACUATION OF THE IMMEDIATE ARE	", choiceC: "C: 	CABIN DEPRESSURIZATION	", choiceD: "D: 	EITHER A OR B	", correct: "	D	"},
{question : "	150	: 	CAUTION: FAILURE TO TURN THE _______ OFF WITH SMOKE REMOVAL MODE ACTIVE MAY CAUSE HEAT DAMAGE TO THE SYSTEM DUE TO THE RADAR FAN BEING SECURED.	", ref: "(	Ref: NATOPS-14 - 13/ CATEGORY: OBSERVER		)", imgSrc: "	VP46.png	", choiceA: "A:	ECS	", choiceB: "B:	MCWs	", choiceC: "C: 	AFACS ALARM	", choiceD: "D: 	RADAR	", correct: "	D	"},


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