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




{question : "	251	: 	IN WHICH RADAR MODE CAN YOU CHOOSE BETWEEN THRESHOLD AND BACKGROUND FOR VIDEO PROCESSING?	", ref: "(	Ref: NATIP-6 - 18/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	NAVIGATE	", choiceB: "B:	SAR	", choiceC: "C: 	WXR	", choiceD: "D: 	SEARCH	", correct: "	D	"},
{question : "	252	: 	_____ IMAGING PROVIDES A RANGE VERSUS DOPPLER IMAGE.	", ref: "(	Ref: NATIP-6 - 1/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	PPI MODES	", choiceB: "B:	ISAR	", choiceC: "C: 	SAR	", choiceD: "D: 	A-SCAN	", correct: "	B	"},
{question : "	253	: 	THIS MODE IS PRIMARILY COASTLINE MAPPING AND IS NOT INTENDED TO PROVIDE SEA-CLUTTER SUPPRESSION.	", ref: "(	Ref: NATIP-6 - 1/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	NAVIGATION	", choiceB: "B:	SEARCH	", choiceC: "C: 	PERISCOPE	", choiceD: "D: 	WX	", correct: "	A	"},
{question : "	254	: 	THIS MODE IS USED AT MODERATELY LOW ALTITIUE FOR SEARCH AND DETECTION OF PERISCOPE/SMALL CONTACT.	", ref: "(	Ref: NATIP-6 - 1/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	NAVIGATE	", choiceB: "B:	SEARCH	", choiceC: "C: 	PERISCOPE	", choiceD: "D: 	ISAR	", correct: "	C	"},
{question : "	255	: 	THIS MODE IS FOR LONG-RANGE SURFACE SEARCH WITH SEA CLUTTER SUPPRESSION AND TARGET BRIGHTNESS ENHANCEMENT.	", ref: "(	Ref: NATIP-6 - 1/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	NAVIGATION	", choiceB: "B:	SEARCH	", choiceC: "C: 	PERISCOPE	", choiceD: "D: 	SAR	", correct: "	B	"},
{question : "	256	: 	A DOPPLER SIGNAL PROCESSING TECHNIQUE USED TO GENERATE TRUE, RECOGNIZABLE, TWO-DIMENSIONAL IMAGES OF A SELECTED STATIONARY SURFACE TARGET OR LAND AREA.	", ref: "(	Ref: NATIP-6 - 1/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	SEARCH	", choiceB: "B:	PERISCOPE	", choiceC: "C: 	ISAR	", choiceD: "D: 	SAR	", correct: "	D	"},
{question : "	257	: 	WX MODE HAS AN ANTENNA SCAN RATE OF:	", ref: "(	Ref: NATIP-6 - 2/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	6 RPM	", choiceB: "B:	60 RPM	", choiceC: "C: 	300 RPM	", choiceD: "D: 	0 RPM	", correct: "	A	"},
{question : "	258	: 	NOTE: ________ INDICATIONS ARE EXPECTED FOR GPS KEYS NOT LOADED, GPS UNAUTHORIZED, AND RADAR ALIGN FAIL. HOWEVER, BIT DETAILS SHOULD STILL BE CHECKED TO ENSURE OTHER FAULTS ARE IGNORED.	", ref: "(	Ref: NATIP-6 - 13/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	BLUE	", choiceB: "B:	YELLOW	", choiceC: "C: 	RED	", choiceD: "D: 	GREY	", correct: "	B	"},
{question : "	259	: 	H OW DOES AN OPERATOR ACCESS THE OPERATOR TOOLBOX DURING ISAR OPERATIONS?	", ref: "(	Ref: NATIP-6 - 59/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	BY SELECTING THE WHITE T LOCATED IN THE UPPER RIGHT OF THE DISPLAY	", choiceB: "B:	B Y SELECTING THE SOCET GXP FUNCTION	", choiceC: "C: 	B Y SELECTING A-SCAN DISPLAY	", choiceD: "D: 	B Y SELECTING THE PRECISION PRECISE POSITION TARGETING	", correct: "	A	"},
{question : "	260	: 	RADAR VIDEO RETURN SHALL BE CHECKED IN ______ MODE ONLY.	", ref: "(	Ref: NATIP-6 - 16/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	WX	", choiceB: "B:	NAVIGATE	", choiceC: "C: 	NAVIGATE OR WX	", choiceD: "D: 	NAVIGATE OR IFFI	", correct: "	C	"},
{question : "	261	: 	THIS BUTTON COMMANDS RE-ALIGNMENT OF THE RADAR INS. A POWER LIGHT TO THE RIGHT IS COLORED GRAY WHEN ALIGNMENT IS NOT IN PROGRESS.	", ref: "(	Ref: NATIP-6 - 20/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	ALIGN NAV	", choiceB: "B:	FIGURE OF MERIT	", choiceC: "C: 	GPS/INS BLEND	", choiceD: "D: 	IBIT	", correct: "	A	"},
{question : "	262	: 	A FIGURE OF MERIT VALUE INDICATING RADAR MOTION MEASUREMENT PERFORMANCE, CALCULATED FROM THE POSITION, VELOCITY, AND ATTITUDE VARIANCE DATA. VALUES ARE __ (EXCELLENT) TO __ (POOR).	", ref: "(	Ref: NATIP-6 - 20/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	1, 5	", choiceB: "B:	1, 10	", choiceC: "C: 	5, 1	", choiceD: "D: 	10, 1	", correct: "	A	"},
{question : "	263	: 	WHICH MODE ALLOWS THE IFF INTERROGATOR TO BE OPERATIONAL WITHOUT RF TRANSMISSION FROM THE APY-10 RADAR?	", ref: "(	Ref: NATIP-6 - 22/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	IFFI	", choiceB: "B:	STANDBY	", choiceC: "C: 	NAVIGATE OR WX	", choiceD: "D: 	SAR OR ISAR	", correct: "	A	"},
{question : "	264	: 	WHICH SAR MAP TYPE PRODUCES IMAGES OF LONG, NARROW SCENES ORIENTED PARALLEL TO THE AIRCRAFT GROUND TRACK AT MODE INITIATION?	", ref: "(	Ref: NATIP-6 - 31/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	STRIP	", choiceB: "B:	STRIP WIDE	", choiceC: "C: 	SPOT CONTINUOUS	", choiceD: "D: 	SPOT SINGLE	", correct: "	A	"},
{question : "	265	: 	WHICH SAR MAP TYPE GENERATES AND DISPLAYS A SINGLE IMAGE (E.G., SNAPSHOT) OF THE SCENE CENTERED ON THE SRP THEN REVERTS TO A STAND-BY CONDITION?	", ref: "(	Ref: NATIP-6 - 31/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	STRIP	", choiceB: "B:	STRIP WIDE	", choiceC: "C: 	SPOT CONTINUOUS	", choiceD: "D: 	SPOT SINGLE	", correct: "	D	"},
{question : "	266	: 	WHICH SAR MAP TYPE GENERATES AND DISPLAYS IMAGES OF THE SCENE CENTERED ON THE SRP WHILE THE AIRCRAFT CONTINUES, WITHIN ALLOWABLE LIMITS, ON THE FLIGHT VECTOR THAT WAS IN EFFECT AT THE TIME OF MODE INITATION?	", ref: "(	Ref: NATIP-6 - 31/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	STRIP	", choiceB: "B:	STRIP WIDE	", choiceC: "C: 	SPOT CONTINUOUS	", choiceD: "D: 	SPOT SINGLE	", correct: "	C	"},
{question : "	267	: 	CAUTION: REPEATED UNSUCCESSFUL KEY LOADS OR ATTEMPTING TO LOAD KEY WITHOUT THE RADAR __________ MAY TRIGGER THE RADAR PEP KDP FAIL FAULT AND DAMAGE THE REP.	", ref: "(	Ref: NATIP-6 - 12/ CATEGORY: RADAR		)", imgSrc: "	VP46.png	", choiceA: "A:	SECURED	", choiceB: "B:	PBIT COMPLETE	", choiceC: "C: 	IN NAV OR WX MODES ONLY	", choiceD: "D: 	IN STANDBY	", correct: "	D	"},
{question : "	268	: 	WHICH OF THE FOLLOWING ITEMS IS OPTIONAL FOR THE MISSION CREW VEST CONFIGURATION?	", ref: "(	Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	SURVIVAL RADIO	", choiceB: "B:	DYE MARKER	", choiceC: "C: 	MK 124 MARINE SMOKE AND ILLUMINATION SIGNAL	", choiceD: "D: 	SDU-39 STROBE LIGHT	", correct: "	B	"},
{question : "	269	: 	IN CASE OF MALFUNCTION, USE THE _______ TO INFLATE A MALFUNCTIONED PRESERVER, TOP OFF AN UNDERINFLATED PRESERVER, OR MAINTAIN A LEAKY PRESERVER.	", ref: "(	Ref: ASNM-4 - 96/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	MANUAL INFLATION PUMP	", choiceB: "B:	ORAL INFLATION VALVES	", choiceC: "C: 	BEADED HANDLES	", choiceD: "D: 	BATTERY OPERATED INFLATOR	", correct: "	B	"},
{question : "	270	: 	WARNING: OPERATION OF THE RADIO SET IS PROHIBITED EXCEPT DURING RESCUE OPERATIONS, EMERGENCY GROUND-TO-GROUND COMMUNICATIONS, OR ________________.	", ref: "(	Ref: ASNM-9 - 42/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	PRC-149 PREFLIGHT	", choiceB: "B:	COORDINATED OPERATIONS	", choiceC: "C: 	UNDER CONTROLLED TEST/TRAINING CONDITIONS	", choiceD: "D: 	LITHIUM BATTERY TESTING	", correct: "	C	"},
{question : "	271	: 	SINCE THE COSPAS-SARSAT BEACON MESSAGE IS ALLOWED TO UPDATE ONLY EVERY 20 MINUTES, THE GPS RECEIVER IS PLACED IN A POWER DOWN MODE TO CONSERVE BATTERY POWER BETWEEN UPDATES. REACQUISITION EVERY 20 MINUTES TAKES APPROXIMATELY __ SECONDS.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	10-May	", choiceB: "B:	10	", choiceC: "C: 	20	", choiceD: "D: 	20-30	", correct: "	C	"},
{question : "	272	: 	THE PRC-149 GPS RECEIVER INITIAL ACQUISITION TIME IS LESS THAN ______.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	130 SECONDS	", choiceB: "B:	310 SECONDS	", choiceC: "C: 	13 MINUTES	", choiceD: "D: 	20 MINUTES	", correct: "	A	"},
{question : "	273	: 	ALL FIXED CREW DITCHING SEATS HAVE A LIFEVEST STOWED ___________.	", ref: "(	Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	WITHIN THE MPLRS	", choiceB: "B:	UNDER THE SEAT PAN	", choiceC: "C: 	IN THE AFT MISSION STORAGE	", choiceD: "D: 	NONE OF THE ABOVE	", correct: "	B	"},
{question : "	274	: 	QDAEC WARNING: AVOID PROLONGED WEAR OF THE COVERALL BECAUSE THIS COULD CAUSE ______.	", ref: "(	Ref: ASNM-10 - 18/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	HEAT EXHAUSTION, HEAT PROSTRATION, OR HEAT STROKE	", choiceB: "B:	THE QUICK ONSET OF FATIGUE	", choiceC: "C: 	PANIC ATTACKS, NAMELY CLAUSTROPHOBIA	", choiceD: "D: 	REDUCED TACTILE SENSATION	", correct: "	A	"},
{question : "	275	: 	THE GREATEST PHYSIOLOGICAL EFFECT FROM WEARING AIRCREW IPE (INDIVIDUAL PROTECTIVE EQUIPMENT) IS THE PROBABILITY OF ______.	", ref: "(	Ref: ASNM-A - 1/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	HEAT-RELATED CASUALTIES, NAMELY HEAT-STRESS AND DEHYDRATION	", choiceB: "B:	THE QUICK ONSET OF FATIGUE	", choiceC: "C: 	PANIC ATTACKS, NAMELY CLAUSTROPHOBIA	", choiceD: "D: 	REDUCED TACTILE SENSATION	", correct: "	A	"},
{question : "	276	: 	WARNING: WHILE WEARING THE QUICK DON ANTI-EXPOSURE COVERALLS, AVOID JUMPING INTO THE WATER ______ AS THE AIR IN THE SUIT WILL RUSH TO THE FEET OF THE SUIT AND YOU WILL HAVE DIFFICULTY RIGHTING YOURSELF.	", ref: "(	Ref: ASNM-10 - 18/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	WITH IT UNFASTENED	", choiceB: "B:	WITH IT FASTENED	", choiceC: "C: 	FEET FIRST	", choiceD: "D: 	HEAD FIRST	", correct: "	D	"},
{question : "	277	: 	ANTI-EXPOSURE SUITS SHALL BE ______ FLIGHT PERSONNEL OF NAVAL AIRCRAFT WHEN, IN THE EVENT OF A MISHAP, THERE WOULD BE SIGNIFICANT RISK OF WATER ENTRY AND EITHER WATER TEMP AT OR BELOW 50°F OR OUTSIDE AIR TEMP (WIND CHILL CORRECTED) AT OR BELOW 32°F.	", ref: "(	Ref: CNAF-M3710-8 - 2/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	CONSTANTLY WORN BY	", choiceB: "B:	PROVIDED FOR	", choiceC: "C: 	DONNED AT THE ONSET OF AN EMERGENCY BY	", choiceD: "D: 	CARRIED BY	", correct: "	B	"},
{question : "	278	: 	ALL AIRCREW SHALL PERFORM A ______ INSPECTION OF THEIR AIRCREW PERSONAL PROTECTIVE EQUIPMENT.	", ref: "(	Ref: 3710-8 - 1/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	PREFLIGHT	", choiceB: "B:	POSTFLIGHT	", choiceC: "C: 	PRE-FLIGHT AND POST-FLIGHT	", choiceD: "D: 	PREFLIGHT AND INFLIGHT	", correct: "	C	"},
{question : "	279	: 	NOTE: TO AVOID INADVERTENT BEACON ACTIVATION, DO NOT TURN THE MODE SWITCH PAST THE ______ POSITION UNLESS INTENDING TO TRANSMIT.	", ref: "(	Ref: ASNM-9 - 42/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	VOICE	", choiceB: "B:	BCN	", choiceC: "C: 	TRP BCN	", choiceD: "D: 	GPS	", correct: "	D	"},
{question : "	280	: 	SINCE THE COSPAS-SARSAT BEACON MESSAGE IS ALLOWED TO UPDATE ONLY EVERY __ MINUTES, THE GPS RECEIVER IS PLACED IN A POWER DOWN MODE TO CONSERVE BATTERY POWER BETWEEN UPDATES. REACQUISITION EVERY __ MINUTES TAKES APPROXIMATELY 20 SECONDS.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	15	", choiceB: "B:	20	", choiceC: "C: 	30	", choiceD: "D: 	60	", correct: "	B	"},
{question : "	281	: 	WHICH OF THE FOLLOWING ITEMS IS OPTIONAL FOR THE MISSION CREW VEST CONFIGURATION?	", ref: "(	Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	SURVIVAL RADIO	", choiceB: "B:	4 OZ WATER BOTTLE	", choiceC: "C: 	SIGNAL MIRROR	", choiceD: "D: 	SIGNAL WHISTLE	", correct: "	B	"},
{question : "	282	: 	ANTI-EXPOSURE SUITS SHALL BE PROVIDED FOR FLIGHT PERSONNEL OF NAVAL AIRCRAFT WHEN, IN THE EVENT OF A MISHAP, THERE WOULD BE SIGNIFICANT RISK OF WATER ENTRY AND ANY OF THE FOLLOWING CONDITIONS PREVAIL:	", ref: "(	Ref: CNAF-M3710-8 - 2/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	ANTI-EXPOSURE SUITS SHOULD BE PROVIDED AT ALL TIMES.	", choiceB: "B:	WATER TEMP AT OR BELOW 50°F, OUTSIDE AIR TEMP (WIND CHILL CORRECTED) AT OR BELOW 32°F	", choiceC: "C: 	WATER TEMP AT OR BELOW 32°F, OUTSIDE AIR TEMP (WIND CHILL CORRECTED) AT OR BELOW 50°F	", choiceD: "D: 	WATER TEMP AT OR BELOW 60°F, OUTSIDE AIR TEMP (WIND CHILL CORRECTED) AT OR BELOW 30°F	", correct: "	B	"},
{question : "	283	: 	NOTE: THE QUICK DON ANTI-EXPOSURE COVERALLS ARE WORN ______ ALL FLIGHT CLOTHING, INCLUDING BOOTS, BUT ______ THE LIFE PRESERVER AND SURVIVAL VEST.	", ref: "(	Ref: ASNM-10 - 18/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	OVER, UNDER	", choiceB: "B:	UNDER, OVER	", choiceC: "C: 	WITH, WITHOUT	", choiceD: "D: 	WITHOU, WITH	", correct: "	A	"},
{question : "	284	: 	WHEN THE PRC-149 GPS RECEIVER HAS ACQUIRED THE SATELLITES AND COMPUTED ITS POSITION, THIS INFORMATION IS RELAYED IN THE ______ MHz COSPAS-SARSAT BEACON MESSAGE.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	121.5 AND 243.0	", choiceB: "B:	121.5, 243.0, AND 282.9	", choiceC: "C: 	121.5, 243.0, AND 406.026	", choiceD: "D: 	406.025	", correct: "	D	"},
{question : "	285	: 	WARNING: DO NOT SECURE THE SIDEWINDER FLASHLIGHT IN THE _____ MODE.	", ref: "(	Ref: ASNM-8 - 27/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	STROBE	", choiceB: "B:	BLUE	", choiceC: "C: 	WHITE	", choiceD: "D: 	IR	", correct: "	D	"},
{question : "	286	: 	THE SDU-39/N IS BATTERY OPERATED AND CAPABLE OF EMITTING HIGH-INTENSITY LIGHT. THE LIGHT INCORPORATES BLUE AND INFRARED FILTER LENSES AND USES STANDARD ______ BATTERIES. THE CLEAR LENS IS USED AS A HIGH-INTENSITY VISUAL DISTRESS SIGNAL.	", ref: "(	Ref: ASNM-8 - 29/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	AA	", choiceB: "B:	AAA	", choiceC: "C: 	C	", choiceD: "D: 	D	", correct: "	A	"},
{question : "	287	: 	THE SDU-39/N IS BATTERY OPERATED AND CAPABLE OF EMITTING HIGH-INTENSITY LIGHT. THE LIGHT INCORPORATES ______ FILTER LENSES AND USES STANDARD "AA" BATTERIES. THE CLEAR LENS IS USED AS A HIGH-INTENSITY VISUAL DISTRESS SIGNAL.	", ref: "(	Ref: ASNM-8 - 29/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	STROBE AND STEADY	", choiceB: "B:	BLUE AND INFRARED	", choiceC: "C: 	DIRECTIONAL AND HEAT	", choiceD: "D: 	GUNFIRE AND COVERT	", correct: "	B	"},
{question : "	288	: 	THE PRC-149 BATTERIES PROVIDE OPERATION WITHOUT DEGRADATION IN THE 406.025 MHz BEACON ONLY MODE FOR A MINIMUM OF ___ HOURS AT -20°C.	", ref: "(	Ref: ASNM-9 - 38/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	8	", choiceB: "B:	18	", choiceC: "C: 	24	", choiceD: "D: 	48	", correct: "	D	"},
{question : "	289	: 	THE PRC-149 BATTERIES PROVIDE OPERATION WITHOUT DEGRADATION IN THE TRIPLE BEACON MODE FOR A MINIMUM OF ___ HOURS AT 25°C.	", ref: "(	Ref: ASNM-9 - 38/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	8	", choiceB: "B:	18	", choiceC: "C: 	24	", choiceD: "D: 	48	", correct: "	C	"},
{question : "	290	: 	THE PRC-149 BATTERIES PROVIDE OPERATION WITHOUT DEGRADATION FOR ___ HOURS WHEN THE RADIO SET IS OPERATED IN A 90% TRIPLE FREQUENCY BEACON 10% VOICE DUTY CYCLE AT -20°C.	", ref: "(	Ref: ASNM-9 - 38/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	8	", choiceB: "B:	18	", choiceC: "C: 	24	", choiceD: "D: 	48	", correct: "	A	"},
{question : "	291	: 	THE PRC-149 RADIO SET PROVIDES TWO-WAY VOICE COMMUNICATIONS AT SELECTABLE FREQUENCIES OF ______.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	121.5 AND 243.0	", choiceB: "B:	121.5, 243.0, AND 282.8	", choiceC: "C: 	121.5, 243.0, AND 406.025	", choiceD: "D: 	121.5, 243.0, 282.8, AND 406.025	", correct: "	B	"},
{question : "	292	: 	THE PRC-149 RADIO SET PROVIDES A MULTI-MODE PERSONAL LOCATOR BEACON TRANSMISSION AT SELECTABLE FREQUENCIES OF ______.	", ref: "(	Ref: ASNM-9 - 39/ CATEGORY: SURV EQ		)", imgSrc: "	VP46.png	", choiceA: "A:	121.5 AND 243.0	", choiceB: "B:	121.5, 243.0, AND 282.8	", choiceC: "C: 	121.5, 243.0, AND 406.025	", choiceD: "D: 	121.5, 243.0, 282.8, AND 406.025	", correct: "	C	"},
{question : "	293	: 	WHAT DOES A WHITE SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP -1 - 48/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	POWER OFF	", choiceB: "B:	BIT IN PROGRESS	", choiceC: "C: 	ADVISORY	", choiceD: "D: 	NORMAL/GOOD	", correct: "	C	"},
{question : "	294	: 	WHAT DOES A BLACK SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP-1 - 48/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	POWER OFF	", choiceB: "B:	BIT IN PROGRESS	", choiceC: "C: 	ADVISORY	", choiceD: "D: 	NORMAL/GOOD	", correct: "	A	"},
{question : "	295	: 	WHAT DOES A GREY SUBSYSTEM HEALTH STATUS INDICATE	", ref: "(	Ref: NATIP-1 - 48/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	P OWER OFF	", choiceB: "B:	UNKNOWN/NO RESPONSE	", choiceC: "C: 	NORMAL/GOOD	", choiceD: "D: 	DEGRADED STATE	", correct: "	B	"},
{question : "	296	: 	WHAT DOES A GREEN SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP-1 - 48/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	NORMAL/GOOD	", choiceB: "B:	A DVISORY	", choiceC: "C: 	UNKNOWN/NO RESPONSE	", choiceD: "D: 	POWER OFF	", correct: "	A	"},
{question : "	297	: 	WHAT DOES A YELLOW SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP-1 - 49/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	B IT IN PROGRESS	", choiceB: "B:	E RROR/DOWN	", choiceC: "C: 	N ORMAL/GOOD	", choiceD: "D: 	DEGRADED STATE	", correct: "	D	"},
{question : "	298	: 	WHAT DOES A RED SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP-1 - 49/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	N O RESPONSE	", choiceB: "B:	ERROR/DOWN	", choiceC: "C: 	D EGRADED STATE	", choiceD: "D: 	N ORMAL/GOOD	", correct: "	B	"},
{question : "	299	: 	WHAT DOES A CYAN SUBSYSTEM HEALTH STATUS INDICATE?	", ref: "(	Ref: NATIP-1 - 49/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	BIT IN PROGRESS	", choiceB: "B:	A DVISORY	", choiceC: "C: 	N O RESPONSE	", choiceD: "D: 	N ORMAL/GOOD	", correct: "	A	"},
{question : "	300	: 	THE 3D TSD DOES NOT SUPPORT ANY WEAPONS, TACTICS PATTERNS OR ___________ SYMBOLOGY.	", ref: "(	Ref: NATIP-2 - 166/ CATEGORY: TOMS		)", imgSrc: "	VP46.png	", choiceA: "A:	SONOBUOY	", choiceB: "B:	ESM	", choiceC: "C: 	LINK-16	", choiceD: "D: 	IFFI	", correct: "	A	"},





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