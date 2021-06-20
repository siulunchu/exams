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






{question : "101:  Under Which Of The Following Conditions Will The IFFI System InhIBIT RF Transmission? (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. When The Weight On Wheels Switch Is Active", choiceB: "B:B. During Fueling Operations", choiceC: "C: C. When The Radome Is Open", choiceD: "D: D. During IFFI Loop Test Operation", correct: "C"},
{question : "102:  A Flashing Red Light On The Xmit Led On The IFFI WRA Indicates: (Ref: NATIP-6 - 240/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Failure In Transmitter Chain.", choiceB: "B:B. Voltage Standing Wave Ratio Fault", choiceC: "C: C. Power Supply Fault Condition", choiceD: "D: D. Power Supply, Amplifier, Or Target Processor Temperature Fault.", correct: "B"},
{question : "103:  A Red Light On The Psu Led On The IFFI WRA Indicates: (Ref: NATIP-6 - 240/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Failure In Transmitter Chain.", choiceB: "B:B. Voltage Standing Wave Ratio Fault", choiceC: "C: C. Power Supply Fault Condition", choiceD: "D: D. Power Supply, Amplifier, Or Target Processor Temperature Fault.", correct: "C"},
{question : "104:  IFFI Transmits Interrogations And Receives Replies Via A Ten-Element Dipole Array Mounted On The ___________. (Ref: NATIP-6 - 241/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Scanner Antenna", choiceB: "B:B. Kfzse", choiceC: "C: C. Front Side Of The P-8A APY-10 RADAR Antenna.", choiceD: "D: D. Tcas", correct: "C"},
{question : "105:  Warning: A Radiation Hazard Exists That Could Cause Injury To Personnel And Damage To Equipment When The IFFI Loop Test Is Operated On The Ground. Stand Off Ranges To Fuel (Herf) For The Upx-43 IFFI Are: (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1.2", choiceB: "B:B. 4.5", choiceC: "C: C. 20", choiceD: "D: D. 79", correct: "A"},
{question : "106:  Note: IFFI Loop Test Video Return Shall Be Checked In The ___________ Modes Only. (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Navigate/Search", choiceB: "B:B. IFFI/Navigate", choiceC: "C: C. WX/Navigate", choiceD: "D: D. IFFI/WX", correct: "B"},
{question : "107:  Warning: A Radiation Hazard Exists That Could Cause Injury To Personnel And Damage To Equipment When The IFFI Loop Test Is Operated On The Ground. Stand Off Ranges To Susceptible Ordnance (Hero) For The Upx-43 IFFI Are: (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1.2", choiceB: "B:B. 4.5", choiceC: "C: C. 20", choiceD: "D: D. 79", correct: "C"},
{question : "108:  An IFFI Mode 1 Contact Has A ______ Background. The Mode Is Displayed To The Left, With A Small Carat Separating It From The Code. (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "B"},
{question : "109:  Warning: A Radiation Hazard Exists That Could Cause Injury To Personnel And Damage To Equipment When The IFFI Loop Test Is Operated On The Ground. Stand Off Ranges To Unsafe Ordnance (Hero) For The Upx-43 IFFI Are: (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 1.2", choiceB: "B:B. 4.5", choiceC: "C: C. 20", choiceD: "D: D. 79", correct: "D"},
{question : "110:  An IFFI Mode 2 Contact Has A ______ Background. The Mode Is Displayed To The Left, With A Small Carat Separating It From The Code. (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "B"},
{question : "111:  An IFFI Mode 3/A Contact Has A ______ Background. Mode 3/A Displays The Target Squawk Id Prefixed With A 3-. (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "D"},
{question : "112:  An IFFI Mode C Contact Has A ______ Background. Mode C Displays The Current Flight Level, Prefixed With FL. (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "D"},
{question : "113:  Because A Target Can Reply On Multiple Modes, The Priority Order For Displaying Modes Is ______. Lower Ranked Modes That Are Not Shown Directly On The IFFI Track Can Be Viewed Through The Track Amplify TD. (Ref: NATIP-6 - 244/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. 5, 4, 3/A, 2, 1, C", choiceB: "B:B. 3/A, C, 2, 1, 5, 4", choiceC: "C: C. 3/A, C, 4, 5, 1, 2", choiceD: "D: D. 3/A, C, 2, 5, 4, 1", correct: "D"},
{question : "114:  An IFFI Return Of Mode 3, Code 7500 Represents: (Ref: NATIP-6 - 245/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Unlawful Interference", choiceB: "B:B. Lost Comms", choiceC: "C: C. Vfr", choiceD: "D: D. General Emergency", correct: "A"},
{question : "115:  An IFFI Mode 4 Contact Has A Blank ______ Block. (Ref: NATIP-6 - 246/ CATEGORY: IFFI)" , imgSrc: "VP46.png", choiceA: "A:A. Yellow", choiceB: "B:B. Blue", choiceC: "C: C. Green", choiceD: "D: D. Orange", correct: "C"},
{question : "116:  Rotating The Press To Test Knob To The Emergency Position Provides What To The Oxygen Mask? (Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Oxygen Is Not Supplied", choiceB: "B:B. Supplies 100% Oxygen Under Positve Pressure At All Cabin Altitudes", choiceC: "C: C. Oxygen Is Supplied, But Only On Demand", choiceD: "D: D. S Witches Fixed Oxygen System Being Used", correct: "B"},
{question : "117:  When Powering Down Equipment Via The Rack Power Cutoff Switch, Affected Sspc’S Will Be Placed In What Position? (Ref: NATIP-11 - 12/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Lockout", choiceB: "B:B. Off", choiceC: "C: C. On", choiceD: "D: D. Tripped", correct: "A"},
{question : "118:  The Apu Start Cycle May Take As Long As _______? (Ref: NATOPS-2 - 51/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 1 Minute", choiceB: "B:B. 90 Seconds", choiceC: "C: C. 120 Seconds", choiceD: "D: D. 5 Minutes", correct: "C"},
{question : "119:  The Apu Provides The Following: (Ref: NATOPS-2 - 50/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Bleed AIR For Engine Starting Or AIR Conditioning", choiceB: "B:B. An Auxilliary Ac Power Source", choiceC: "C: C. External Power", choiceD: "D: D. Both A And B", correct: "D"},
{question : "120:  __ __ Lights Shall Be On Anytime The Engines Are Running. (Ref: NATOPS-7 - 44/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Position/Wingtips", choiceB: "B:B. A Nti-Collision", choiceC: "C: C. Wheel Well", choiceD: "D: D. E Mergency", correct: "B"},
{question : "121:  __ __ Lights Should Be Placed To Steady Anytime Power Is Applied To The Aircraft. (Ref: NATOPS-7 - 44/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Position", choiceB: "B:B. A Nti-Collision", choiceC: "C: C. Wheel Well", choiceD: "D: D. E Mergency", correct: "A"},
{question : "122:  How Does Placing The Normal/100% Switch To “100%” Affect The Oxygen Mask Regulator? (Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Supplies 100% Oxygen On Demand", choiceB: "B:B. A Mbient Cabin AIR Mixes With Oxygen", choiceC: "C: C. Provide Nitrogen", choiceD: "D: D. All Of The Above", correct: "A"},
{question : "123:  T He ____ Switc On The Flight Deck Does Not Need To Be On When Operating The AirstaIR On Standby Mode From The Exterior Control Panel. (Ref: NATOPS-2 - 262/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Hyd Pump", choiceB: "B:B. Airstair", choiceC: "C: C. Bat", choiceD: "D: D. Standby", correct: "C"},
{question : "124:  What Does An Illuminated Maint Light Represent? (Ref: NATOPS-2 - 52/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Apu Maintenance Problem Exists. Apu Will Initiate Automatic ShuTDown", choiceB: "B:B. Apu Maintenance Problem Exists. Apu May Be Operated.", choiceC: "C: C. Apu Fire Detection System Is Inoperative", choiceD: "D: D. Egt Exceedance", correct: "B"},
{question : "125:  W Arning: An Sspc In Lockout Status _____ Not Be Reset Without Consulting Maintenance Or Injury And/Or Fire May Occur. (Ref: NATIP-11 - 4/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. S Hould", choiceB: "B:B. Shall", choiceC: "C: C. Can", choiceD: "D: D. Will", correct: "A"},
{question : "126:  How Does Having The Normal/100% Switch Set To “Normal” Affect The Oxygen Mask Regulator? (Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Supplies Air/Oxygen Mixture On Demand (Ratio Depnds On Cabin Altitude)", choiceB: "B:B. S Upplies 100% Oxygen On Demand", choiceC: "C: C. P Rovide Nitrogen", choiceD: "D: D. A Ll Of The Above", correct: "A"},
{question : "127:  Which Ditching Station At The Mission Planning Table Has A Fixed Oxygen Mask With A Mic Connected? (Ref: NATOPS-2 - 254/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 18", choiceB: "B:B. 10", choiceC: "C: C. 11", choiceD: "D: D. 20", correct: "D"},
{question : "128:  What Are The Indications Associated With Lavatory Smoke Detection? (Ref: NATOPS-2 - 216/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. A Ural Warning, Red Alarm Indicator On Lavatory Smoke Detector, Amber Lavatory Light, And Amber Lavatory Smoke Light On Forward Overhead Panel In Flight Deck", choiceB: "B:B. S Moke Indication On E810", choiceC: "C: C. Master Caution And Overhead Annunciator Lights", choiceD: "D: D. Both A And C", correct: "D"},
{question : "129:  W Arning: If The Wind Is Over ____ Knots, Increase The Inlet Hazard By ____ Percent. (Ref: NATOPS-3 - 25/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 20,25", choiceB: "B:B. 40,65", choiceC: "C: C. 65,40", choiceD: "D: D. 25,20", correct: "D"},
{question : "130:  A Mini Oxygen Mask Is Provided To Allow A Crewmember To Return To His/Her Seat From The___________ Following Cabin Depressurization. (Ref: NATOPS-16 - 12/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Flight Deck", choiceB: "B:B. Mission Planning Area", choiceC: "C: C. Mission Crew Workstation", choiceD: "D: D. Lavatory", correct: "D"},
{question : "131:  W Arning: Do Not Operate The Door In Winds More Than __ Knots. Do Not Let The Door Stay Open In Winds More Than __ Knots. (Ref: NATOPS-2 - 264/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 65,40", choiceB: "B:B. 40,65", choiceC: "C: C. 12,25", choiceD: "D: D. 25,12", correct: "B"},
{question : "132:  T O Operate The AirstaIR In Standby Mode From The Interior, What Combination Of Buttons Must Be Depressed? (Ref: NATOPS-2 - 265/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Standby, Extend Or Retract", choiceB: "B:B. Extend And Retract", choiceC: "C: C. StaIR Oper, Standby", choiceD: "D: D. StaIR Oper, Extend Or Retract", correct: "A"},
{question : "133:  Airstairc Aution: Use Of The Standby Control Switch ________________. (Ref: NATOPS-2 - 262/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Bypasses All Safety Circuits", choiceB: "B:B. Automatically Stows The Handrails", choiceC: "C: C. Can Cause An Electrical Shortage", choiceD: "D: D. Has No Effect On AirstaIR Operations", correct: "A"},
{question : "134:  What Does An Illuminated Apu Running Light Represent? (Ref: NATOPS-2 - 51/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. The Apu Is Ready For A Load Following A Normal Start", choiceB: "B:B. Apu Must Be Shut Down", choiceC: "C: C. Apu Fire", choiceD: "D: D. Apu Requires Restart", correct: "A"},
{question : "135:  Squeezing The Red Inflation Levers During Stowing Will Inflate The Harness And Prevent _________. (Ref: NATOPS-2 - 257/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 100% Oxygen", choiceB: "B:B. Oxygen Flow", choiceC: "C: C. Oxygen Mask Ics Operation", choiceD: "D: D. The Correct Stowing Of The Mask", correct: "D"},
{question : "136:  Pushing The Harness Straps Into Or Behind The Nosepiece May Cause The Cross Straps To __________ During Inflation. (Ref: NATOPS-2 - 257/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Hang Up On The Mask", choiceB: "B:B. Disrupt Oxygen Flow", choiceC: "C: C. Rip", choiceD: "D: D. Explode", correct: "A"},
{question : "137:  C Aution: Do Not Depress The ____ Switch In Conjunction With The ___Or ____ Switch. (Ref: NATOPS-2 - 265/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. StaIR Oper, Extend/Retract", choiceB: "B:B. Standby, Extend/Retract", choiceC: "C: C. Standby StaIR Oper", choiceD: "D: D. Apu, Standby/StaIR Oper", correct: "A"},
{question : "138:  The Hazard Of Electromagetic Radiation To Personnel Standoff For The APY-10 Is: (Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 95", choiceB: "B:B. 169", choiceC: "C: C. 302", choiceD: "D: D. 348", correct: "B"},
{question : "139:  Note: ______ Will Maintain The Last Frequency Entered With Mcds On, And Cannot Be Modified Without Mcds Input. (Ref: NATOPS-7 - 37/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Vhf 1", choiceB: "B:B. Vhf2", choiceC: "C: C. V/Uhf Radios", choiceD: "D: D. V/Uhf 2 And 3", correct: "D"},
{question : "140:  Note: If V/Uhf Radio(S) Will Not Transmit, ______ All Of The V/Uhf Radios, Maps, And Csus At SPDS And Complete The Secondary V/Uhf Radio And Ics Configuration With Mcds Off Procedure. (Ref: NATOPS-7 - 37/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Recycle Power To", choiceB: "B:B. Run An IBIT On", choiceC: "C: C. Run A Pbit On", choiceD: "D: D. Turn Off", correct: "D"},
{question : "141:  Note: If The Ecs Draw-Thru System Is Already Operational And Powered On, Power ______ Be Secured To The System In Order To Conduct The Fan, Vlave Or Maintenance Alarm Tests. (Ref: NATOPS-7 - 35/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. May", choiceB: "B:B. Should", choiceC: "C: C. Shall", choiceD: "D: D. Should Not", correct: "D"},
{question : "142:  Note: If Mission Equipment Is Already Powered And The Cabin Temperature Exceeds ___°F, The Aircrew Should Shut Down The Equipment Until The Temperature Cools Below 97°F. (Ref: NATOPS-7 - 33/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 98", choiceB: "B:B. 100", choiceC: "C: C. 103", choiceD: "D: D. 107", correct: "B"},
{question : "143:  Caution: Emergency Exit Lights Test Duration Shall Not Exceed ___ Minutes Or Else Remaining Battery Power May Not Be Sufficient To Illuminate The Emergency Lighting During An Actual Loss Of Power. (Ref: NATOPS-7 - 30/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 5", choiceB: "B:B. 10", choiceC: "C: C. 15", choiceD: "D: D. 90", correct: "B"},
{question : "144:  _____ 22 Cf Portable Oxygen Bottles And Masks Are Provided To Allow Aircrew Mobility To Attend To Smoke And/Or Fire. (Ref: NATOPS-16 - 10/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Two", choiceB: "B:B. Four", choiceC: "C: C. Five", choiceD: "D: D. Six", correct: "C"},
{question : "145:  The Hazard Of Electromagetic Radiation To Fuel Standoff For The APY-10 Is: (Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 95", choiceB: "B:B. 169", choiceC: "C: C. 302", choiceD: "D: D. 348", correct: "A"},
{question : "146:  When The Jump Seat Is Occupied, Ditching Station __ Or __ Shall Be Reserved For The Jump Seat Occupant. (Ref: NATOPS-15 - 38/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 10, 11", choiceB: "B:B. 3, 4", choiceC: "C: C. 12, 13", choiceD: "D: D. 20, 21", correct: "A"},
{question : "147:  After Starting The RADAR System, Wait At Least ___ Seconds Before Pressing The Ace Master Bite Reset In Rack 870. (Ref: NATIP-13 - 85/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 10", choiceB: "B:B. 30", choiceC: "C: C. 45", choiceD: "D: D. 60", correct: "C"},
{question : "148:  Caution: Applying Mission Equipment Power When The Cabin Temperature (Fwd Or Aft) Exceeds __ °F On The AIR Temperature Indicator On The Flight Deck May Result In Equipment Overheating. (Ref: NATIP-7 - 21/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 95", choiceB: "B:B. 97", choiceC: "C: C. 27", choiceD: "D: D. 40", correct: "B"},
{question : "149:  A Fire Extiguished By Halon May Produce Decomposition By-Products, Characterized By A Sharp Acrid Odor, That May By Harmful. If This Odor Is Detected, __________ Is Recommended Until Proper Ventilation Is Established. (Ref: NATOPS-16 - 13/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Utilization Of Oxygen", choiceB: "B:B. Evacuation Of The Immediate Are", choiceC: "C: C. Cabin Depressurization", choiceD: "D: D. Either A Or B", correct: "D"},
{question : "150:  Caution: Failure To Turn The _______ Off With Smoke Removal Mode Active May Cause Heat Damage To The System Due To The RADAR Fan Being Secured. (Ref: NATOPS-14 - 13/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Ecs", choiceB: "B:B. Mcws", choiceC: "C: C. Afacs Alarm", choiceD: "D: D. RADAR", correct: "D"},
{question : "151:  To Use The Halon Fire Extinguisher: (Ref: NATOPS-16 - 13/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Aim At Base Of Fire From A Distance Of 6 Feet And Press Top Lever.", choiceB: "B:B. Use Side-To-Side Motion To Suppress Fire.", choiceC: "C: C. Turn Knob All The Way Clockwise", choiceD: "D: D. Both A & B", correct: "D"},
{question : "152:  What Does An Illuminated Fault Light Represent? (Ref: NATOPS-2 - 52/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. RPM Limit Has Been Exceeded", choiceB: "B:B. Momentary Fault Light Associated With Start Sequence That Doesn'T Require Action", choiceC: "C: C. Malfunction Exists Causing Apu To Initiate An Automatic ShuTDown", choiceD: "D: D. Both B And C", correct: "D"},
{question : "153:  The Hazard Of Electromagetic Radiation To Ordnance (Susceptible) Standoff For The APY-10 Is: (Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 95", choiceB: "B:B. 169", choiceC: "C: C. 302", choiceD: "D: D. 348", correct: "C"},
{question : "154:  Note: Prior To Modifying Systems That May Affect Aircraft Performance, Or Settings That May Affect Aircraft Flight Profile (To Include Spds), The Observer Shall Receive Concurence From The ______ (Ref: NATOPS-22 - 6/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Ppc", choiceB: "B:B. Pm", choiceC: "C: C. Pf", choiceD: "D: D. Pf Or Pm", correct: "D"},
{question : "155:  Warning: Mini Oxygen Bottle/Mask Should Not Be Worn ______. (Ref: NATOPS-16 - 12/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. When Fighting A Fire", choiceB: "B:B. During Cabin Depressurzation", choiceC: "C: C. Above 10000 Msl", choiceD: "D: D. All Of The Above", correct: "A"},
{question : "156:  Note: _________ Is Required To Utilize The Emergency/Press To Test Selector For 5 Seconds To Test The Position Of The Oxygen Cylinder Valve. (Ref: NATOPS-7 - 16/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Every Crewmember", choiceB: "B:B. Every Occupied Ditching Station", choiceC: "C: C. The Observer", choiceD: "D: D. Only One Crewmember", correct: "D"},
{question : "157:  An Extension Cord Is Provided With Each ________ Bottle/Mask And Can Be Connected Into The Ics Via The Observer Connection At Any Of The J-Boxes. (Ref: NATOPS-16 - 10/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Flight Crew", choiceB: "B:B. Lavatory", choiceC: "C: C. Fixed", choiceD: "D: D. Portable", correct: "D"},
{question : "158:  Oxygen _________ Information Provided On The Portable Oxygen Bottle Is Incorrect Due To Differences In Mask/Regulator Combination. Oxygen Depletion May Occur Prior To The Expected Usage Time Derived From The Tabulated Information On The Bottle. (Ref: NATOPS-16 - 11/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Duration", choiceB: "B:B. Pressure", choiceC: "C: C. Purity", choiceD: "D: D. Altitude", correct: "A"},
{question : "159:  Caution: The Apu _____ Fuel Pump Was Not Designed To Operate For Long Periods Of Time. Extended Operation Results In Failure Of The Pump (Ref: NATOPS-7 - 97/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Engine-Driven", choiceB: "B:B. Hydraulic", choiceC: "C: C. Ac", choiceD: "D: D. Dc", correct: "D"},
{question : "160:  Alert Ground Personnel Before Conducting The Fire Detector Test. During The Detector Test, The Fire Warning Lights Flash And The Horn Sounds On The Ground Control Panel. This Can Be Mistaken By Ground Crew As An Apu Fire. This Statement Is A: (Ref: NATOPS-7 - 8/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Warning", choiceB: "B:B. Caution", choiceC: "C: C. Note", choiceD: "D: D. Emergency", correct: "C"},
{question : "161:  Note: RADAR ______ Be Left Off Until After Engine Start. If It Is Turned On Prior To Engine Starts, It Shall Be Secured Until After The Start Sequence. (Ref: NATOPS-7 - 38/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Should", choiceB: "B:B. Should Not", choiceC: "C: C. Shall Not", choiceD: "D: D. May", correct: "A"},
{question : "162:  Aircrew Survival Vests Shall Be Worn During Overwater Operations Below ___ Feet Agl. (Ref: NATOPS-16 - 7/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 1000", choiceB: "B:B. 1500", choiceC: "C: C. 2000", choiceD: "D: D. 4000", correct: "A"},
{question : "163:  Warning: Opening The ____ Door(S) Will Seriously Degrade The Flotation Characteristics Of The Aircraft Allowing The Aircraft To Sink A Faster Rate. (Ref: NATOPS-15 - 38/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Weapons Bay", choiceB: "B:B. Aft Egress", choiceC: "C: C. Overwing Egress", choiceD: "D: D. Forward", correct: "B"},
{question : "164:  Oxygen Flow Indicator: Indicates A ______ Cross When Oxygen Is Flowing. (Ref: NATOPS-2 - 255/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. White", choiceB: "B:B. Yellow", choiceC: "C: C. Red", choiceD: "D: D. Blue", correct: "B"},
{question : "165:  _____ Independent Fixed Oxygen Systems Are Provided On The P-8. (Ref: NATOPS-2 - 251/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 2", choiceB: "B:B. 3", choiceC: "C: C. 5", choiceD: "D: D. None Of The Above", correct: "A"},
{question : "166:  During An Observer Window Damage, If It Is Determined That The ______ Pane Is Cracked Or Shattered, Continue Normal Operation. (Ref: NATOPS-14 - 212/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Outer", choiceB: "B:B. Inner", choiceC: "C: C. Upper", choiceD: "D: D. Lower", correct: "A"},
{question : "167:  Caution: Wait At Least ___ Minutes After Equipment Power Down Before Securing The Ecs Drawthru System Or RADAR Fan Or Damage To Mission Systems Can Occur. (Ref: NATOPS-7 - 99/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 5", choiceB: "B:B. 7", choiceC: "C: C. 10", choiceD: "D: D. 15", correct: "C"},
{question : "168:  In Event Of A Ditch, Ditching Station ___ Is Responsible For Retrieving The Forward First Aid Kit. (Ref: NATOPS-15 - 39/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 2", choiceB: "B:B. 3", choiceC: "C: C. 9", choiceD: "D: D. 20", correct: "A"},
{question : "169:  The Apu Should Be Operated For _____ Minute(S) Prior To Being Used As An Electrical Power Or Bleed AIR Source. (Ref: NATOPS-7 - 9/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 2", choiceB: "B:B. 5", choiceC: "C: C. 10", choiceD: "D: D. None Of The Above", correct: "A"},
{question : "170:  Note: Do Not Operate The Apu If The Apu Det Inop Light Fails To Illuminate. (Ref: NATOPS-7 - 8/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. True", choiceB: "B:B. False", choiceC: "C: C.", choiceD: "D: D.", correct: "A"},
{question : "171:  If The Apu Fault Light Extinguishes After ______ Minute(S), Restarts May Be Attempted. (Ref: NATOPS-14 - 94/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 1", choiceB: "B:B. 3", choiceC: "C: C. 5", choiceD: "D: D. 7", correct: "C"},
{question : "172:  With A Full Tactical Crew, Which Firefighting Duty Set Is Responsible For Rack E-870? (Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Forward", choiceB: "B:B. Midcabin", choiceC: "C: C. Aft", choiceD: "D: D. Runner", correct: "A"},
{question : "173:  Caution: Providing Electrical Power To A Fire Source Can Prevent Effective Fire Fighting Or Restart The Fire. ______. (Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Do Not Attempt To Reset Any Tripped Sspc Until Directed By Tacco", choiceB: "B:B. Do Not Attempt To Reset Any Tripped Sspc Until Directed By Maintenance", choiceC: "C: C. Aircrew Shall Not Reset Any Tripped Sspc", choiceD: "D: D. Aircrew Should Not Reset Any Tripped Sspc", correct: "A"},
{question : "174:  Note: Provide The Flight Crew An Initial Assessment Of Smoke, Fire, Or Fumes Type And Source. No More Than ______ Pass(Es) Should Be Completed Prior To Informing The Flight Crew Of The Initial Assessment. (Ref: NATOPS-14 - 2/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. One", choiceB: "B:B. Two", choiceC: "C: C. Three", choiceD: "D: D. Five", correct: "C"},
{question : "175:  Any Time The Crew/Pass Oxygen Pass Switch Is Actuated, The Entire Crew ______ Don Oxygen (Ref: NATOPS-14 - 1/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. May", choiceB: "B:B. Should", choiceC: "C: C. Shall", choiceD: "D: D. Will", correct: "C"},
{question : "176:  In Flight, Aircrew Reset Of A Tripped Circuit Breaker Is____________ Unless Directed By An E Mergency Procedure. Wait Approximately _____. (Ref: NATOPS-11 - 15/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Not Recommended, 2 Min", choiceB: "B:B. Highly Recommended, 5 Min", choiceC: "C: C. Strongly Recommended, 45 Sec", choiceD: "D: D. Not Required, 5 Min", correct: "A"},
{question : "177:  Warning: To Prevent Injury Or Death, Do Not Enter The Weapons Bay Unless ______, And The Weapons Bay Door Safety Lockout Pin Is Installed. (Ref: NATOPS-7 - 13/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. The Weapon Bay Door Switch Is In The Stop Position", choiceB: "B:B. The Wbds Power Indicator (Red) Is Extinguished", choiceC: "C: C. The Weapons Bay Door Saftey A/B Switches Are In The Off Position", choiceD: "D: D. All Of The Above", correct: "D"},
{question : "178:  The RADAR Unsafe (Feet) For Hero Is? (Ref: NATOPS-3 - 26/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 205", choiceB: "B:B. 323", choiceC: "C: C. 348", choiceD: "D: D. 1139", correct: "C"},
{question : "179:  With A Full Tactical Crew, Which Firefighting Duty Set Is Responsible For Racks E-810, E-820, E- 830, E-840, And E-860? (Ref: NATOPS-14 - 4/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Forward", choiceB: "B:B. Midcabin", choiceC: "C: C. Aft", choiceD: "D: D. Runner", correct: "B"},
{question : "180:  Apu Det Inop Light: Caution: Do Not Run The Apu. An Apu Fire Would Not Be Detected And The Apu Would Continue To Run. (Ref: NATOPS-14 - 95/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. True", choiceB: "B:B. False", choiceC: "C: C.", choiceD: "D: D.", correct: "A"},
{question : "181:  The Main Cabin Detection System Is Not Interfaced With The ________ Warning Systems. Mission Crew Must Inform The Flight Crew Whenever Responding To Main Cabin Smoke Detection Alarms. (Ref: NATOPS-2 - 211/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Cabin Pa", choiceB: "B:B. Flight Cabin", choiceC: "C: C. Hi-Low Chime", choiceD: "D: D. Triple Chime", correct: "B"},
{question : "182:  In Order To Maintain Proficiency, A Mission Crewmember Who Has Not Flown Within ____ Shall Complete A Warm-Up Flight/Wst/Wtt With A Current And Positional Qualified Crewmember Prior To Being Scheduled As Primary Instructor On A Flight. (Ref: VP-30 STAN NOTES - 5/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 60 Days", choiceB: "B:B. 6 Months", choiceC: "C: C. 30 Days", choiceD: "D: D. 3 Months", correct: "C"},
{question : "183:  Note: Pushing Mute Within ___ Second(S) Of Horn Activiation During The Draw-Thru Alarm Test Completes Test. (Ref: NATOPS-2 - 213/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 1", choiceB: "B:B. 5", choiceC: "C: C. 10", choiceD: "D: D. 15", correct: "C"},
{question : "184:  The Ecs Draw-Thru System May Be Used To Assist In Main Cabin ________ Operations. (Ref: NATOPS-2 - 215/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Smoke Clearing", choiceB: "B:B. Cooling", choiceC: "C: C. Depressurization", choiceD: "D: D. AIR Conditioning", correct: "A"},
{question : "185:  Note: Rotating The Press To Test Knob To Align The Small Dot With The Larger Dot Will Result In ___________. (Ref: NATOPS-2 - 256/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. 100% Oxygen Under Pressure", choiceB: "B:B. Ics Hot Mic", choiceC: "C: C. Normal Oxygen", choiceD: "D: D. Ambient Oxygen", correct: "A"},
{question : "186:  Crew/Pass Oxygen (Pass) Switch Activation Causes The Don Oxygen Cabin Overhead Lights To Illuminate And The ___________To Sound. (Ref: NATOPS-7 - 18/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Triple Chime", choiceB: "B:B. Double Chime", choiceC: "C: C. Single Chime", choiceD: "D: D. Quadruple Chime", correct: "D"},
{question : "187:  Warning: When Applying External Power Or Apu Generator Power, The Standby Hydraulic Pump Can Operate For Approximately 4 Seconds And May Move The______. To Prevent Possible Injury, Ensure They Are Clear Of Personnel Before Applying Power. (Ref: NATOPS-7 - 6/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. External Control Surfaces", choiceB: "B:B. Thrust Reversers", choiceC: "C: C. Weapons Bay Doors", choiceD: "D: D. Rudder And/Or Thrust Reversers", correct: "D"},
{question : "188:  Caution: When The Ecs Draw-Thru System Is Placed In Smoke Mode, The RADAR Fan Is Secured. Due To Possible Heat Damage To The RADAR, ______.   (Ref: NATOPS-14 - 8/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. The RADAR Will Automatically Go To A Lockout State Until RADAR Fan Power Is Reapplied", choiceB: "B:B. The Aircrew Should Secure Power To RADAR", choiceC: "C: C. The Aircrew Shall Secure Power To RADAR", choiceD: "D: D. Do Not Operate The RADAR Unless Critical For Flight Saftey", correct: "A"},
{question : "189:  Warning: Remove Personnel Overcome By Smoke/Fumes From The Scene Of The Fire ______ Administering Oxygen. (Ref: NATOPS-14 - 8/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Before", choiceB: "B:B. After", choiceC: "C: C. While", choiceD: "D: D. And", correct: "D"},
{question : "190:  Condition Iv: A Crewmember Assigned By Flt At Any Time During The Sortie Shall Inspect The ______ And Report Any Discrepancies To Flt. (Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER)" , imgSrc: "VP46.png", choiceA: "A:A. Mission Systems", choiceB: "B:B. Exterior Surfaces Of The Aircraft", choiceC: "C: C. WX RADAR Bit Details", choiceD: "D: D. Overall Condition Of The Aircraft", correct: "A"},
{question : "191:  Flight Condition V Is Defined As:Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Takeoff/Landing", choiceB: "B:B. Aircraft Inspection", choiceC: "C: C. Operational Check", choiceD: "D: D. Low Level Operations", correct: "A"},
{question : "192:  Flight Condition Iv Is Defined As:Ref: NATOPS-22 - 10/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Built In Test", choiceB: "B:B. Cheklist Time", choiceC: "C: C. Operational Check", choiceD: "D: D. Aircraft Inspection", correct: "D"},
{question : "193:  Flight Condition Iii Is Defined As:Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Built In Test", choiceB: "B:B. Cheklist Time", choiceC: "C: C. Operational Check", choiceD: "D: D. Aircraft Inspection", correct: "C"},
{question : "194:  Flight Condition I Is Defined As:Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Low Level Operations", choiceB: "B:B. Takeoff/Landing", choiceC: "C: C. High Altitude Operations / Transit", choiceD: "D: D. Wartime", correct: "A"},
{question : "195:  With A Full Tactical Crew, Which Firefighting Duty Set Is Responsible For Racks E-101 And E-102?Ref: NATOPS-14 - 3/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Forward", choiceB: "B:B. Midcabin", choiceC: "C: C. Aft", choiceD: "D: D. Runner", correct: "A"},
{question : "196:  Caution: Do Not Try An ______ If There Is Ice Around The Hinged Flap Of The Vortex Generator. The Motor For The Inlet Door Actuator Can Be Damaged If There Is Ice.Ref: NATOPS-7 - 6/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. EO/IR Turret Retraction", choiceB: "B:B. AirstaIR Retraction", choiceC: "C: C. Engine Start", choiceD: "D: D. Apu Start", correct: "D"},
{question : "197:  Note: If The AirstaIR Must Be Extended From The Interior To Facilitate Evacuation And Ac Power Has Been Secured, ______ To Extend The Ladder.Ref: NATOPS-12 - 5/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. The Battery Switch Needs To Remain On", choiceB: "B:B. The Standby Function Utilized", choiceC: "C: C. Use External Power", choiceD: "D: D. Both A & B", correct: "D"},
{question : "198:  When Initiated, The Emergency Exit Lights Operate For A Minimum Of ___ Minutes.Ref: NATOPS-16 - 3/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. 5", choiceB: "B:B. 10", choiceC: "C: C. 30", choiceD: "D: D. 90", correct: "B"},
{question : "199:  Emergency Lighting: With Aircraft Power Available, The Battery Packs Will Fully Recharge In __ Minutes.Ref: NATOPS-16 - 3/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. 30", choiceB: "B:B. 60", choiceC: "C: C. 90", choiceD: "D: D. 302", correct: "C"},
{question : "200:  With A Full Tactical Crew, Which Firefighting Duty Set Is Responsible For Racks E-113 And E-114?Ref: NATOPS-14 - 4/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Forward", choiceB: "B:B. Midcabin", choiceC: "C: C. Aft", choiceD: "D: D. Runner", correct: "C"},








];
const questionTime = 3000;   // 300s per question
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