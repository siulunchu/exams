// select all elements-------------------------------------
const start = document.getElementById("start");
const nextpage = document.getElementById("button");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
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






{question : "1:  The Ability To Alter A Course Of Action Based On New Information, Maintain Constructive Behavior Under Pressure, And Adapt To Internal And External Environmental Changes. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Adaptability/Flexibility", choiceB: "B:B. Assertiveness", choiceC: "C: C. Leadership", choiceD: "D: D. Communication", correct: "A"},
{question : "2:  The Degree Of Accuracy By Which One'S Perception Of The Current Environment Mirrors Reality. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Assertiveness", choiceB: "B:B. Situational Awareness", choiceC: "C: C. Communication", choiceD: "D: D. Leadership", correct: "B"},
{question : "3:  The Ability To Direct And Coordinate The Activities Of Other Crewmembers And To Encourage The Crew To Act Together As A Team. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Mission Analysis", choiceB: "B:B. Decision-Making", choiceC: "C: C. Leadership", choiceD: "D: D. Assertiveness", correct: "C"},
{question : "4:  The Ability To Clearly And Accurately Send And Acknowledge Information, Instructions, Or Commands And Provide Useful Feedback. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Assertiveness", choiceB: "B:B. Leadership", choiceC: "C: C. Adaptibility/Flexibility", choiceD: "D: D. Communication", correct: "D"},
{question : "5:  The Ability To Develop Short-Term, Long-Term And Contingency Plans And To Coordinate, Allocate, And Monitor Aircrew And Aircraft Resources. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Mission Analysis", choiceB: "B:B. Decision-Making", choiceC: "C: C. Leadership", choiceD: "D: D. Assertiveness", correct: "A"},
{question : "6:  The Ability To Choose A Course Of Action Using Logical And Sound Judgement Based On The Information Available. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Assertiveness", choiceB: "B:B. Decision-Making", choiceC: "C: C. Communication", choiceD: "D: D. Adaptability/Flexibility", correct: "B"},
{question : "7:  What Indication(S) Does The Crew Receive When SPDS Enters Failsafe Mode? (Ref: NATOPS-14 - 17/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Loss Of RADAR Heartbeat From Tomes", choiceB: "B:B. Aux Fuel Transfer Failure", choiceC: "C: C. Fault Indications At The Kfzse", choiceD: "D: D. Both A And B", correct: "D"},
{question : "8:  The Willingness To Actively Participate, State And Maintain A Position, Until Convinced By The Facts That Other Options Are Better. (Ref: NATOPS-22 - 3/ CATEGORY: AIRCREW)" , imgSrc: "VP46.png", choiceA: "A:A. Situational Awareness", choiceB: "B:B. Assertiveness", choiceC: "C: C. Leadership", choiceD: "D: D. Mission Analysis", correct: "B"},
{question : "9:  Fuel Entering Cabin During AAR: This Procedure ________ Be Completed Anytime Liquid Fuel Or Fuel Fumes Are Detected During Air-To-AIR Refueling Operations. (Ref: NATOPS-14 - 22/ CATEGORY: EMERGENCY)" , imgSrc: "VP46.png", choiceA: "A:A. Shall", choiceB: "B:B. May", choiceC: "C: C. Should", choiceD: "D: D. None Of The Above", correct: "C"},
{question : "10:  The Restart Button In The EO/IR Setup Tab Requests A ______ Restart Of The EO/IR Subsystem. (Ref: NATIP-6 - 334/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Software-Only", choiceB: "B:B. Turret-Only", choiceC: "C: C. Warm", choiceD: "D: D. Cold", correct: "C"},
{question : "11:  Warning: Failure To Keep Equipment And Personnel Clear Of The EO/IR Position During Operation May Result In Damage To Equipment Or Injury To Personnel. (Ref: NATIP-6 - 331/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Ensure SPDS Is In Ground Mode Prior To EO/IR Operation.", choiceB: "B:B. Ensure The Gmp Is In Ground Mode Prior To EO/IR Operation.", choiceC: "C: C. Post An Observer Prior To Extending Or Retracting The Turret.", choiceD: "D: D. Aircrew Shall Extend Or Retract The Turret In Flight Only", correct: "C"},
{question : "12:  Warning: When Power Is Applied To The Turret, It May Rotate For Up To _________ Seconds. (Ref: NATIP-6 - 331/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. 5", choiceB: "B:B. 15", choiceC: "C: C. 30", choiceD: "D: D. 60", correct: "B"},
{question : "13:  The EO/IR Stow Button Commands The EO/IR Turret Into The Stowed Position. This Button Remains Down While The Turret Is Stowed. Toggling The Button Up Sends A Request To __________. (Ref: NATIP-6 - 334/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Locks The Turret Into A Stowed Position. Only The Operator Who Initaited The Lock Can Unstow The Turret.", choiceB: "B:B. Move The Turret Out Of The Stowed Position.", choiceC: "C: C. Retract The Camera.", choiceD: "D: D. Extend The Aft Turret.", correct: "B"},
{question : "14:  When In Auto Focus Mode, The ______ Incrementer Becomes Disabled And The ______ Incrementer Becomes Enabled. (Ref: NATIP-6 - 367/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Ezoom, Focal Length", choiceB: "B:B. Focal Length, Ezoom", choiceC: "C: C. Focus, Trim", choiceD: "D: D. Trim, Focus", correct: "C"},
{question : "15:  Note: The Operator Must Depress The Filter Switch For _____ Seconds To Establish Initial Connection Of The Hand Controller With The Turret. (Ref: NATIP-6 - 326/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Two", choiceB: "B:B. Three", choiceC: "C: C. Five", choiceD: "D: D. Ten", correct: "B"},
{question : "16:  Note: Extending The Turret Via The Ground Control Panel Prevents ______ From Controlling The Turret. (Ref: NATIP-6 - 331/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Spds", choiceB: "B:B. The Dmcu", choiceC: "C: C. The Balun", choiceD: "D: D. Toms", correct: "D"},
{question : "17:  The Infrared Calibration Button Selects A One-Point Calibration Option To Remove ______ And Reset Dynamic Range Of The Thermal Image For The IR Camera Only. (Ref: NATIP-6 - 338/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Negative Infrared Polarization", choiceB: "B:B. False Infrared Return", choiceC: "C: C. Humidity", choiceD: "D: D. Common Video Artifacts", correct: "D"},
{question : "18:  Warning: In SPDS Flight (Flt) Mode While On The Ground, Airplane Systems, Including EO/IR, May ______. (Ref: NATIP-6 - 329/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Not Be Controllable.", choiceB: "B:B. Be Operated Inadvertently.", choiceC: "C: C. Lock Out.", choiceD: "D: D. Inadvertently Trip.", correct: "B"},
{question : "19:  The ______ Controls The Turret With Received Operator Inputs Via The Hand Controller Or Mcds. (Ref: NATIP-6 - 325/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Dmcu", choiceB: "B:B. Balun", choiceC: "C: C. Toms", choiceD: "D: D. Mx-20 Drp", correct: "A"},
{question : "20:  If In Rate Aid Mode, The EO/IR System Will Execute The Following When The Hand Controller Slew Control Is Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Manual", choiceB: "B:B. Either Manual Mode Or Auto (Geo-Position) Mode", choiceC: "C: C. Rate Aid", choiceD: "D: D. Do Nothing", correct: "B"},
{question : "21:  The EO/IR ______ Button Moves The Camera To The Currently Hooked Track Or Last Clicked Location Within The Tsd. (Ref: NATIP-6 - 368/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Rate Aid", choiceB: "B:B. Manual L/L", choiceC: "C: C. Slew", choiceD: "D: D. Auto Aid", correct: "C"},
{question : "22:  Caution: Failure To Retract The EO/IR Turret For ______ May Cause Damage To The Turret. (Ref: NATIP-6 - 330/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Taxi", choiceB: "B:B. Takeoff", choiceC: "C: C. Landing", choiceD: "D: D. All Of The Above", correct: "D"},
{question : "23:  The ________ Box Converts The EO/IR Video Into A Usable Signal For Processing. (Ref: NATIP-6 - 329/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Dmcu", choiceB: "B:B. Viu", choiceC: "C: C. Balun", choiceD: "D: D. Rdc", correct: "C"},
{question : "24:  The EO/IR Hand Controller Hat Switch Controls _____ Of The Operator Selected Camera When Moved Up Or Down. (Ref: NATIP-6 - 326/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Zoom", choiceB: "B:B. Focus Or Auto Focus Trim", choiceC: "C: C. Rate Aid Sensitivity", choiceD: "D: D. Electrical Zoom", correct: "A"},
{question : "25:  Which EO/IR Mode Will Pan And Tilt The Turret At A Fixed Speed Set By Samples Of Operator Pressure On The Thumb Controller? (Ref: NATIP-6 - 371/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Auto Aid", choiceB: "B:B. Automatic Correlation", choiceC: "C: C. Geo Aid", choiceD: "D: D. Rate Aid", correct: "D"},
{question : "26:  The EO/IR Hand Controller Trigger Engages _____ In The Operator Selected Camera. (Ref: NATIP-6 - 326/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Avt", choiceB: "B:B. Rate Aid", choiceC: "C: C. Manual Mode", choiceD: "D: D. Auto Slew", correct: "A"},
{question : "27:  If In Manual Mode, The EO/IR System Will Execute The Following When The Hand Controller Slew Control Is Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Manual", choiceB: "B:B. Either Manual Mode Or Auto (Geo-Position) Mode", choiceC: "C: C. Rate Aid", choiceD: "D: D. Do Nothing", correct: "C"},
{question : "28:  The EO/IR ______ Function Steers The Turret To Fixed Coordinates Through Track Selection Or Tsd Input. The Turret Sequences Through Each Target Within The Defined Radius. (Ref: NATIP-6 - 369/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Auto Aid", choiceB: "B:B. Auto Slew", choiceC: "C: C. Rate Aid", choiceD: "D: D. Sector Scan", correct: "B"},
{question : "29:  An EO/IR Sector Scan Uses __________ As The Sector'S Center Position. The Width And Rate Of The Scan Are Defined In The EO/IR Configuration TD. (Ref: NATIP-6 - 369/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. The Numerical Value Selected In The EO/IR Configuration TD", choiceB: "B:B. The Bearing To The Hooked Track", choiceC: "C: C. The Aircraft Heading", choiceD: "D: D. The Camera'S Los", correct: "D"},
{question : "30:  The EO/IR Auto Slew Function Steers The Turret To Fixed Coordinates Through Track Selection Or Tsd Input. The Turret Sequences Through Each Target Within The Defined ____ Radius, Moving Every ___ Seconds. (Ref: NATIP-6 - 369/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. 6, 15", choiceB: "B:B. 15, 8", choiceC: "C: C. 10, 8", choiceD: "D: D. 8, 15", correct: "B"},
{question : "31:  An Avt Mode That Processes Objects That Are Bound Within An Acquisition Track Window. Targets Have Massed Featues And Solid Interior Shapes That Concetrate Pixel Brightness. It Is A Geometric Measurement Of An Object'S Center. (Ref: NATIP-6 - 345/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Centroid", choiceB: "B:B. Automatic Correlation", choiceC: "C: C. Manual Correlation", choiceD: "D: D. Scene Lock", correct: "A"},
{question : "32:  An Avt Mode That Sets Locking Priority For Targets Having Distinct Features Or Details. The System Will Automatically Optimize A Gate Size For The Target Size. (Ref: NATIP-6 - 345/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Centroid", choiceB: "B:B. Automatic Correlation", choiceC: "C: C. Manual Correlation", choiceD: "D: D. Scene Lock", correct: "B"},
{question : "33:  An Avt Mode That Sets Locking Priority For Targets Having Distinct Features Or Details. The Operator Can Manually Set Gate Size For The Target Size. (Ref: NATIP-6 - 345/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Centroid", choiceB: "B:B. Automatic Correlation", choiceC: "C: C. Manual Correlation", choiceD: "D: D. Scene Lock", correct: "C"},
{question : "34:  An Avt Mode That Processes The Entire Video Image. Numerous Target References Are Set And Monitored Relative To The Scene'S Overall Background Movement. (Ref: NATIP-6 - 345/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Centroid", choiceB: "B:B. Automatic Correlation", choiceC: "C: C. Manual Correlation", choiceD: "D: D. Scene Lock", correct: "D"},
{question : "35:  The EO/IR Hand Controller Hat Switch Controls ______ Of The Operator Selected Camera When Moved Left Or Right. (Ref: NATIP-6 - 326/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Zoom", choiceB: "B:B. Focus Or Auto Focus Trim", choiceC: "C: C. Rate Aid Sensitivity", choiceD: "D: D. Electrical Zoom", correct: "B"},
{question : "36:  If Not In Avt Mode, The EO/IR System Will Execute The Following When The Red Button Is Momentarily Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Disengages Avt", choiceB: "B:B. The Turret Will Move At Its Highest Rate Of Speed To The Last Selection On The Tsd, RADAR, Or EO/IR Display", choiceC: "C: C. Forward Mode", choiceD: "D: D. Rate Aid", correct: "B"},
{question : "37:  Caution: Failure To _________ The EO/IR Turret Prior To Entering Areas Of Hail Or Significant Icing May Result In Turret Damage. (Ref: NATIP-13 - 132/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Stow", choiceB: "B:B. Retract", choiceC: "C: C. Extend", choiceD: "D: D. Slew Aft", correct: "B"},
{question : "38:  ______ Operations Are Not Authorized Unless EO/IR Turret Is Fully Retracted. (Ref: NATOPS-4 - 3/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Imc", choiceB: "B:B. Vfr", choiceC: "C: C. Rvsm", choiceD: "D: D. The", correct: "C"},
{question : "39:  Caution: When Cleaning The Turret Window, Use Of Any Material Other Than A Non-Abrasive Detergent Solution And A __________ May Cause Damage To The Window. (Ref: NATIP-13 - 126/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Non-Abrasive Cloth", choiceB: "B:B. Alcohol Wipe", choiceC: "C: C. Dessicant Cloth", choiceD: "D: D. Maintenance-Approved Soft Cloth", correct: "D"},
{question : "40:  If Operating The EO/IR Turret Above 95°F (35°C) On Deck: (Ref: NATIP-6 - 320/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Secure Power To The Turret", choiceB: "B:B. Restrict Ground Operations To A 1 Hour On, 4 Hours Off Duty Cycle", choiceC: "C: C. Aircrew Should Skip EO/IR Preflight", choiceD: "D: D. The EO/IR Shall Be Operated Only In Flight", correct: "B"},
{question : "41:  The EO/IR Hand Controller _______ Maintains Horizontal And Vertical Control Over The Camera'S Line Of Sight (Los) With A Transducer. (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Hat Switch", choiceB: "B:B. Trigger", choiceC: "C: C. Slew Control", choiceD: "D: D. Red Button", correct: "C"},
{question : "42:  Fr-46/Note: _________ Help(S) Reduce Haze In The Mx-20 Eon Camera. (Ref: NATIP-6 - 326/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Full Gate Sharpening", choiceB: "B:B. One-Point Calibration", choiceC: "C: C. 2X Aperture", choiceD: "D: D. Lp And Xlp", correct: "D"},
{question : "43:  If In Avt Mode, The EO/IR System Will Execute The Following When The Red Button Is Momentarily Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Disengages Avt", choiceB: "B:B. The Turret Will Move At It Highest Rate Of Speed To The Last Selection On The Tsd, RADAR, Or EO/IR Display", choiceC: "C: C. Forward Mode", choiceD: "D: D. Rate Aid", correct: "A"},
{question : "44:  If In Auto Aid, Forward, Body Angle, Or Sector Scan Modes, The EO/IR System Will Execute The Following When The Hand Controller Slew Control Is Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Manual", choiceB: "B:B. Either Manual Mode Or Auto (Geo-Position) Mode", choiceC: "C: C. Rate Aid", choiceD: "D: D. Do Nothing", correct: "A"},
{question : "45:  If In Avt Mode, The EO/IR System Will Execute The Following When The Hand Controller Slew Control Is Plunged: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Manual", choiceB: "B:B. Either Manual Mode Or Auto (Geo-Position) Mode", choiceC: "C: C. Rate Aid", choiceD: "D: D. Do Nothing", correct: "D"},
{question : "46:  The EO/IR System Will Execute The Following When The Red Button Is Plunged For Three Seconds: (Ref: NATIP-6 - 327/ CATEGORY: EO/IR)" , imgSrc: "VP46.png", choiceA: "A:A. Disengages Avt", choiceB: "B:B. The Turret Will Move At It Highest Rate Of Speed To The Last Selection On The Tsd, RADAR, Or EO/IR Display", choiceC: "C: C. Forward Mode", choiceD: "D: D. Rate Aid", correct: "C"},
{question : "47:  If The Tsd Scale Extends Beyond The ESM Horizon, An ESM Bearing-Only Line Extends To ______. (Ref: NATIP-6 - 146/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. The Amplitude Ranging Position", choiceB: "B:B. Ownship", choiceC: "C: C. The Edge Of The ESM Horizon", choiceD: "D: D. The Display Edge", correct: "C"},
{question : "48:  Facs Malfunction Signal Will Also Illuminate A Warning Lamp And Activate A Horn On The ______. (Ref: NATIP-6 - 144/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Master Annunctator Panel", choiceB: "B:B. E810 Smoke Detection Control Panel", choiceC: "C: C. Ecs Maintenance Alarm Panel", choiceD: "D: D. Pep System Tab", correct: "C"},
{question : "49:  The ______ Draws Heat Away From The Arrays And Into The Main Cabin. (Ref: NATIP-6 - 143/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Ecs System", choiceB: "B:B. Facs", choiceC: "C: C. Spds", choiceD: "D: D. RADAR Fan", correct: "B"},
{question : "50:  The Elint Scanner Antenna Is Capable Of Single-Axis ___ Degree Azimuth Scanning In The _______ Frequency Ranges. (Ref: NATIP-6 - 141/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. +/- 150° On Each Side Of The Aircraft, Lb & Mb", choiceB: "B:B. +/- 165° On Each Side Of The Aircaft, Mb & Hb", choiceC: "C: C. 300°, Lb, Mb, And Hb", choiceD: "D: D. 360°, Lb & Mb", correct: "D"},
{question : "51:  The Lb Lbi Antennas Provide ___ Degree Lb Geolocation Azimuth Coverage On Each Side Of The Aircraft. (Ref: NATIP-6 - 141/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. 120°", choiceB: "B:B. +/- 165°", choiceC: "C: C. 300°", choiceD: "D: D. 360°", correct: "A"},
{question : "52:  Four Mb/Hb Arrays, One In Each Quadrant, Provide ___ Degree Azimuth Es Coverage In Mb And Hb Frequency Ranges. (Ref: NATIP-6 - 135/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. +/- 150° On Each Side Of The Aircraft", choiceB: "B:B. +/- 165° On Each Side Of The Aircaft", choiceC: "C: C. 300°", choiceD: "D: D. 360°", correct: "D"},
{question : "53:  The ESM ShuTDown Command ______ Power-Off The ESM System. (Ref: NATIP-2 - 126/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Does Not", choiceB: "B:B. Will Immediately", choiceC: "C: C. Will Perform An Spds", choiceD: "D: D. Will Perform A Cold", correct: "A"},
{question : "54:  Four Dual-Element Spiral Modified Diamond Df Arrays, One In Each Quadrant, Provide ___ Degree Azimuth Es Lb Coverage. (Ref: NATIP-6 - 139/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. +/- 150° On Each Side Of The Aircraft", choiceB: "B:B. +/- 165° On Each Side Of The Aircaft", choiceC: "C: C. 300°", choiceD: "D: D. 360°", correct: "D"},
{question : "55:  ESM Scanner Antenna Needs To Be In The Parked Position So It Does Not Affect Acoustics With __________ When Using Non Gps Capable Buoys. (Ref: NATIP-6 - 151/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Bathymetry", choiceB: "B:B. Sono Audio", choiceC: "C: C. Sfmt", choiceD: "D: D. Sps Buoy Positioning", correct: "D"},
{question : "56:  A Solid Grey ESM Pid File Light Indicates? (Ref: NATIP-6 - 147/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Pid Load Has Not Been Initiated", choiceC: "C: C. Pid Load Not Completely Successful", choiceD: "D: D. Pid Load Successful", correct: "B"},
{question : "57:  A Flashing Green ESM Pid File Light Indicates? (Ref: NATIP-6 - 149/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Pid Load Has Not Been Initiated", choiceC: "C: C. Pid Load Not Completely Successful", choiceD: "D: D. Pid Load Successful", correct: "A"},
{question : "58:  If The System Calculates An ESM Fix, The Emitter Symbols Appear ______. (Ref: NATIP-6 - 147/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. At The Edge Of The Tsd", choiceB: "B:B. At The Edge Of The ESM Horizon", choiceC: "C: C. At That Lat/Long Position.", choiceD: "D: D. None Of The Above", correct: "C"},
{question : "59:  The Primary Function Of _____ Is To Provide Designated Signal Analysis And Special Parameter Measurement. (Ref: NATIP-6 - 146/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. ESM", choiceB: "B:B. Elint", choiceC: "C: C. Imop", choiceD: "D: D. Umop", correct: "B"},
{question : "60:  The ______ Provides Wide RF Frequency Coverage, Signal Acquisition And Identification, Precision Df In Lb And Mb, Coarse Df In Hb, And Geolocation In Lb And Mb. (Ref: NATIP-6 - 146/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Interference Blanking Unit (Ibu)", choiceB: "B:B. Elint Drp", choiceC: "C: C. Rfc", choiceD: "D: D. Es Drp", correct: "D"},
{question : "61:  A Solid Green ESM Pid File Light Indicates? (Ref: NATIP-6 - 149/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Pid Load Has Not Been Initiated", choiceC: "C: C. Pid Load Not Completely Successful", choiceD: "D: D. Pid Load Successful", correct: "D"},
{question : "62:  A Solid Red ESM Pid File Light Indicates? (Ref: NATIP-6 - 149/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Pid Load Has Not Been Initiated", choiceC: "C: C. Pid Load Not Completely Successful", choiceD: "D: D. Pid Load Successful", correct: "C"},
{question : "63:  When ESM Threat Alert Is Checked And A Type 1 Or Type 2 Threat Is Detected, The Following Occurs: (Ref: NATIP-6 - 146/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. ESM Track Changes To A Ctoi", choiceB: "B:B. Overrides Any Emitter Display Filtering", choiceC: "C: C. The Tsd Automatically Adjusts", choiceD: "D: D. All Of The Above", correct: "D"},
{question : "64:  A Flashing Yellow ESM Pid File Light Indicates? (Ref: NATIP-6 - 151/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Library Under Revision", choiceC: "C: C. Library Memory Revised But Not Yet Written To A File", choiceD: "D: D. Pid Load Not Completely Successful", correct: "B"},
{question : "65:  The IBIT Button In The TD Is Disabled Unless The ESM System Is ______ (Ref: NATIP-6 - 146/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. In Standby Mode", choiceB: "B:B. Parked", choiceC: "C: C. Powered Down", choiceD: "D: D. Degraded", correct: "A"},
{question : "66:  If Ambiguities Are Present With The Sei Or Emitter, The Ambiguity Yellow ___ Icon Is Displayed B Efore The ESM Contact Symbol (Ref: NATIP-6 - 115/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pound Sign", choiceB: "B:B. Question Mark", choiceC: "C: C. Exclamation Point", choiceD: "D: D. Equal Sign", correct: "B"},
{question : "67:  The ______ Is A Four-Channel Measurement Unit Used To Acquire, Identify, Locate, And Track Emitters In The Lb, Mb, And Hb Frequency Ranges. (Ref: NATIP-6 - 134/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Facs", choiceB: "B:B. Elint Drp", choiceC: "C: C. Es Drp", choiceD: "D: D. Interference Blanking Unit", correct: "C"},
{question : "68:  Degraded Or Malfunction Signals Are Sent To SPDS And The Hms. A Facs Malfunction Signal Indicates ______. (Ref: NATIP-6 - 134/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. A No Flow Condition On The System", choiceB: "B:B. Power Supply Fault", choiceC: "C: C. Low Coolant Level", choiceD: "D: D. Fault Of The Cca Vme", correct: "A"},
{question : "69:  Degraded Or Malfunction Signals Are Sent To SPDS And The Hms. A Facs Degraded Signal Indicates ______ Or A Pump Failure. (Ref: NATIP-6 - 185/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. No Flow Condition", choiceB: "B:B. Power Supply Fault", choiceC: "C: C. Low Coolant Level", choiceD: "D: D. Fault Of The Cca Vme", correct: "C"},
{question : "70:  The SPDS Will Remove Power From The Facs ______ Module After Malfunction Signal Has Been Active For More Than 10 Seconds. (Ref: NATIP-6 - 155/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Forward Arrays", choiceB: "B:B. ReservoIR Pump Controller", choiceC: "C: C. Coolant", choiceD: "D: D. Heat Sink", correct: "B"},
{question : "71:  Passive Geo-Location Is Provided Using ______ Ranging. (Ref: NATIP-6 - 154/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Automatic", choiceB: "B:B. Direction-Of-Arrival", choiceC: "C: C. Short-Baseline Interferometer (Sbi)", choiceD: "D: D. Long-Baseline Interferometer (Lbi)", correct: "D"},
{question : "72:  The ESM Scan Strategy TD Bar Height Is Based On The ______. (Ref: NATIP-6 - 153/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Priority Level", choiceB: "B:B. Amplitude Level", choiceC: "C: C. Range From Ownship", choiceD: "D: D. Affiliation", correct: "A"},
{question : "73:  A Solid Yellow ESM Pid File Light Indicates? (Ref: NATIP-6 - 149/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. Pid Load In Progress", choiceB: "B:B. Library Under Revision", choiceC: "C: C. Library Memory Revised But Not Yet Written To A File", choiceD: "D: D. Pid Load Not Completely Successful", correct: "C"},
{question : "74:  Four Mb Lbi Antennas, One In Each Quadrant, Provide ___ Degree Mb Geolocation Azimuth Coverage. (Ref: NATIP-6 - 137/ CATEGORY: ESM)" , imgSrc: "VP46.png", choiceA: "A:A. +/- 150° On Each Side Of The Aircraft", choiceB: "B:B. +/- 165° On Each Side Of The Aircaft", choiceC: "C: C. 300°", choiceD: "D: D. 360°", correct: "A"},
{question : "75:  If A Bookmark Is Made While Viewing An ______ Video, The ______ Video Will Also Be Bookmarked. (Ref: NATIP-6 - 6-335/ CATEGORY: EWO)" , imgSrc: "VP46.png", choiceA: "A:A. Eo, Ir", choiceB: "B:B. RADAR, Mcds", choiceC: "C: C. ISAR, Sar", choiceD: "D: D. Acoustics, Sps", correct: "A"},
{question : "76:  Standoff Calls Are Require At… (Ref: NATOPS-7 - 66/ CATEGORY: EWO)" , imgSrc: "VP46.png", choiceA: "A:A. 15Nm, Cpa", choiceB: "B:B. 15Nm, 5Nm", choiceC: "C: C. 15Nm, 3Nm", choiceD: "D: D. 27Nm, 22Nm, 12Nm, 5Nm", correct: "A"},
{question : "77:  The Ewo'S Calls Chall Be Made Using ______ Unless Emcon Or Equipment Degradation Precludes Its Use.. (Ref: NATOPS-7 - 66/ CATEGORY: EWO)" , imgSrc: "VP46.png", choiceA: "A:A. Territorial Boundaries", choiceB: "B:B. Cotac Generated Points", choiceC: "C: C. RADAR Data", choiceD: "D: D. Pid Lines", correct: "C"},
{question : "78:  Mosa Calls Are Required At … (Ref: NATOPS-7 - 66/ CATEGORY: EWO)" , imgSrc: "VP46.png", choiceA: "A:A. 25Nm, 15Nm, 5Nm", choiceB: "B:B. 15Nm,Cpa", choiceC: "C: C. 15Nm,5Nm Or 3Nm", choiceD: "D: D. 25Nm, 10Nm, Cpa", correct: "B"},
{question : "79:  M Osa Is Defined As: (Ref: NATOPS-7 - 65/ CATEGORY: EWO)" , imgSrc: "VP46.png", choiceA: "A:A. 1000 Feet Above The Highest Obstacle Within 25 Nm Of The Aircraft", choiceB: "B:B. 1000 Feet Above The Highest Obstacle Within 15 Nm Of The Op Area", choiceC: "C: C. 1000 Feet Above The Highest Obstacle Within 15 Nm Of The Aircraft", choiceD: "D: D. 1000 Feet Above The Highest Obstacle Within 25 Nm Of The Op Area", correct: "C"},
{question : "80:  The System Is Used By National AIR Traffic Control (Atc) And The Military To Identify And Track Friendly Aircraft By Determining The ______ From The Iff Interrogator And The ______. (Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Bearing And Range, Target Altitude", choiceB: "B:B. Range, Target Altitude", choiceC: "C: C. Bearing, Target Altitude", choiceD: "D: D. Bearing And Range, Target Intentions", correct: "A"},
{question : "81:  A Solid Green Light On The Status Led On The IFFI WRA Indicates: (Ref: NATIP-6 - 240/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Versa Module Europa.", choiceB: "B:B. Voltage Standing Wave Ratio Fault", choiceC: "C: C. Power Supply Fault Condition", choiceD: "D: D. IFFI   Powered And Bit Passed.", correct: "D"},
{question : "82:  What Is The IFFI Capability That Provides Mode 4 And/Or 5 Interrogations Interlaced With One Or More Of The Lower Level Interrogation Modes (Modes 1, 2, 3/A, And C). (Ref: NATIP-6 - 238/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Interlacability", choiceB: "B:B. Concurrent Processing", choiceC: "C: C. Supermode", choiceD: "D: D. Track Smearing", correct: "C"},
{question : "83:  IFFI Mode Has An Antenna Scan Rate Of: (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 6 RPM", choiceB: "B:B. 60 RPM", choiceC: "C: C. 300 RPM", choiceD: "D: D. 0 RPM", correct: "A"},
{question : "84:  Which Antenna Scan Rate Prevents Supermode Capability? (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 0 RPM (Sar/ISAR)", choiceB: "B:B. 6 RPM (IFFI, WX, Or Nav Mode)", choiceC: "C: C. 60 RPM (Surface Search)", choiceD: "D: D. 300 RPM (Periscope)", correct: "D"},
{question : "85:  What Is The Maximum Number Of Sif Interrogation Modes With Supermode When Using An Antenna Scan Rate Of 6 RPM (IFFI, WX, Or Nav Mode)? (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1 (Low Pd)", choiceB: "B:B. 2", choiceC: "C: C. 4", choiceD: "D: D. 6", correct: "D"},
{question : "86:  What Is The Maximum Number Of Sif Interrogation Modes (No Supermode) When Using An Antenna Scan Rate Of 300 RPM (Periscope)? (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1 (Low Pd)", choiceB: "B:B. 2", choiceC: "C: C. 4", choiceD: "D: D. 6", correct: "A"},
{question : "87:  What Is The Maximum Number Of Sif Interrogation Modes (No Supermode) When Using An Antenna Scan Rate Of 60 RPM (Surface Search)? (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1 (Low Pd)", choiceB: "B:B. 2", choiceC: "C: C. 4", choiceD: "D: D. 6", correct: "B"},
{question : "88:  What Is The Maximum Number Of Sif Interrogation Modes (No Supermode) When Using An Antenna Scan Rate Of 6 RPM (IFFI, WX, Or Nav Mode)? (Ref: NATIP-6 - 6-115/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1 (Low Pd)", choiceB: "B:B. 2", choiceC: "C: C. 4", choiceD: "D: D. 6", correct: "C"},
{question : "89:  The IFFI Subsystem Receives A Wow Or Landing Gear Interlock Signal From The Aircraft Subsystem. The IFFI Does Not Transmit RF Power Whenever The Wow Or Landing Gear Interlock Signal Input Is Active Except ______. (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. During APY-10 High Voltage Checks", choiceB: "B:B. Saftey Of Flight Modes 3/A And C", choiceC: "C: C. The Loop Test Function", choiceD: "D: D. When Bite Is Commanded By The Operator", correct: "C"},
{question : "90:  IFFI Modes ______ Are Military Only Modes. (Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1 And 2", choiceB: "B:B. 1, 2, 3, C, 4, And 5", choiceC: "C: C. 1, 2, 4, And 5", choiceD: "D: D. 4 And 5", correct: "C"},
{question : "91:  Identification Friend Or Foe (Iff) Is An Interrogate And Response System Designed To Identify And Track Cooperative ______. (Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Military Aircraft Or Military Ships", choiceB: "B:B. Civil Aircraft Or Military Ships", choiceC: "C: C. Civil And Military Aircraft And Military Ships", choiceD: "D: D. Civil And Military Aircraft And Civil And Military Ships", correct: "C"},
{question : "92:  _____ Tracks Are Highlighted With A Black Border And Yellow Fill. (Ref: NATIP-2 - 2-128/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Ctoi", choiceB: "B:B. Confirmed Contact", choiceC: "C: C. Emergency IFFI Contact", choiceD: "D: D. Force Tell Link Track", correct: "C"},
{question : "93:  An IFFI Mode 5 Contact Has A ______ Background With A Unique Identifier. The Pin Should Be In The Range 00000 - 37777 Octal. (Ref: NATIP-6 - 246/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "C"},
{question : "94:  Which Military Modes Are Encyrpted For Interrogate And Response? (Ref: NATIP-6 - 6-113/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1", choiceB: "B:B. 2", choiceC: "C: C. 3", choiceD: "D: D. 4 And 5", correct: "D"},
{question : "95:  A Red Light On The Over Temp Led On The IFFI WRA Indicates: (Ref: NATIP-6 - 240/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Failure In Transmitter Chain.", choiceB: "B:B. Voltage Standing Wave Ratio Fault", choiceC: "C: C. Power Supply Fault Condition", choiceD: "D: D. Power Supply, Amplifier, Or Target Processor Temperature Fault.", correct: "D"},
{question : "96:  An IFFI Return Of Mode 3, Code 7600 Represents: (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Unlawful Interference", choiceB: "B:B. Lost Comms", choiceC: "C: C. Vfr", choiceD: "D: D. General Emergency", correct: "B"},
{question : "97:  An IFFI Return Of Mode 3, Code 7700 Represents: (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Unlawful Interference", choiceB: "B:B. Lost Comms", choiceC: "C: C. Vfr", choiceD: "D: D. General Emergency", correct: "D"},
{question : "98:  IFFI Mode ______ Is The Civil Altitude Reporting Mode. (Ref: NATIP-6 - 237/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Mode 5, Level 2", choiceB: "B:B. 3/A", choiceC: "C: C. C", choiceD: "D: D. 3/A And C", correct: "C"},
{question : "99:  Note: When The Maximum Number Of Selected Interrogation Modes Exceeds The Maximum, The IFFI Software Drops Interrogations In Modes With The Lowest Priority, As Follows (Listed Highest To Lowest): (Ref: NATIP-6 - 39/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 5, 4, 3/A, 2, 1, C", choiceB: "B:B. 3/A, C, 2, 1, 5, 4", choiceC: "C: C. 3/A, C, 4, 5, 1, 2", choiceD: "D: D. 3/A, C, 2, 5, 4, 1", correct: "A"},
{question : "100:  A Solid Red Light On The Xmit Led On The IFFI WRA Indicates: (Ref: NATIP-6 - 240/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Failure In Transmitter Chain.", choiceB: "B:B. Voltage Standing Wave Ratio Fault", choiceC: "C: C. Power Supply Fault Condition", choiceD: "D: D. Power Supply, Amplifier, Or Target Processor Temperature Fault.", correct: "A"},





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