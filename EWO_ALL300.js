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





{question : "201:  D Ouble Hearing Protection Shall Be Worn By All Aircrew When Within ___ Feet Of An Aircraft With Engine(S) Online Or A P-3 With An Operating Apu.Ref: VP-30 STAN NOTES - 4/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. 95 Feet", choiceB: "B:B. 100 Feet", choiceC: "C: C. 17 Feet", choiceD: "D: D. 169 Feet", correct: "B"},
{question : "202:  Flight Condition Ii Is Defined As:Ref: NATOPS-22 - 9/ CATEGORY: OBSERVER" , imgSrc: "VP46.png", choiceA: "A:A. Aircraft Inspection", choiceB: "B:B. High Altitude Operations / Transit", choiceC: "C: C. Low Level Operations", choiceD: "D: D. Takeoff/Landing", correct: "B"},
{question : "203:  H Ow Many Codes Are Available For Use On The MK 84?Ref: NATIP-10 - 239/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. 5", choiceB: "B:B. 4", choiceC: "C: C. 2", choiceD: "D: D. 1", correct: "A"},
{question : "204:  What Does A Solid Dark Blue Triangle Symbol Represent In Regards To The Launcher Status?Ref: NATIP-10 - 107/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. Launcher Is Unpressurized To Cabin And Can Not Be Opened", choiceB: "B:B. L Auncher Is Pressurized To Cabin And Ready To Be Opened", choiceC: "C: C. L Auncher Is Running An IBIT", choiceD: "D: D. L Auncher Has Failed", correct: "A"},
{question : "205:  What Does An Outline Of A Blue Triangle Symbol Represent In Regards To The Launcher Status?Ref: NATIP-10 - 107/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. L Auncher Is Unpressurized To Cabin And Can Not Be Opened", choiceB: "B:B. Launcher Is Pressurized To Cabin And Ready To Be Opened", choiceC: "C: C. L Auncher Is Running An IBIT", choiceD: "D: D. L Auncher Has Failed", correct: "B"},
{question : "206:  What Does Orange With Black Outline Represent In Regards To Launcher Status?Ref: NATIP-10 - 109/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. G Ps Needs To Be Loaded", choiceB: "B:B. T Ube Empy", choiceC: "C: C. Next Tube To Load Corresponding Launcher", choiceD: "D: D. Fully Loaded", correct: "C"},
{question : "207:  What Does Green With Black Outline Represent In Regards To Launcher Status?Ref: NATIP-10 - 109/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. Sls Is Good To Go", choiceB: "B:B. Loaded", choiceC: "C: C. Empty", choiceD: "D: D. Launcher Is Pressurized", correct: "B"},
{question : "208:  H Ow Long Does The Mk-25 Mlm Last?Ref: NATIP-10 - 232/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. 13 .5-18.5 Minutes", choiceB: "B:B. 90 Minutes", choiceC: "C: C. 5 Minutes", choiceD: "D: D. 40-60 Minutes", correct: "A"},
{question : "209:  H Ow Long Does The Mk-58 Mlm Last?Ref: NATIP-10 - 234/ CATEGORY: ORDNANCE" , imgSrc: "VP46.png", choiceA: "A:A. 13 .5-18.5 Minutes", choiceB: "B:B. 90 Minute", choiceC: "C: C. 5 Minutes", choiceD: "D: D. 40-60 Minutes", correct: "D"},
{question : "210:  _____ Is A Doppler Signal Processing Technique Used To Generate True, Recognizable, Twodimensional Images Of A Selected Stationary Surface Target Or Land Area.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. A-Scan", choiceB: "B:B. Surface Search", choiceC: "C: C. Sar", choiceD: "D: D. ISAR", correct: "C"},
{question : "211:  D Uring Quad Screen ISAR, Which Quadrant Allows The Operator To Manually Capture The Image And Perform Feature Measurement Functions?Ref: NATIP-6 - 57/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Upper Left", choiceB: "B:B. U Pper Righ", choiceC: "C: C. Lower Left", choiceD: "D: D. Lower Right", correct: "C"},
{question : "212:  Which Antenna Tilt Control Adjusts The RADAR Antenna Tilt By Placing The Peak Of The Elevation Beamwidth At A Range That Is Equal To The Range Of The RADAR TDs.Ref: NATIP-6 - 39/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Auto (Covg)", choiceB: "B:B. Auto (Rng)", choiceC: "C: C. Auto (Hk)", choiceD: "D: D. Manual Tilt", correct: "C"},
{question : "213:  D Uring Quad Screen ISAR, Which Quadrant Represents The Real Time ISAR Image?Ref: NATIP-6 - 57/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Upper Left", choiceB: "B:B. U Pper Right", choiceC: "C: C. Lower Left", choiceD: "D: D. Lower Right", correct: "A"},
{question : "214:  What Is The Note Associated With Orange Items In The RADAR Tableau?Ref: NATIP-6 - 40/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Do Not Prevent The Operators From Doing Anything And Is For Situational Awareness Only", choiceB: "B:B. Indicate A RADAR Hardware Fault", choiceC: "C: C. Indicate A RADAR Software Fault", choiceD: "D: D. Indicate A RADAR Software Or Hardware Fault", correct: "A"},
{question : "215:  Converged Indicates A TWSConfidence Of Approximately __ Percent?Ref: NATIP-6 - 6/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 75", choiceB: "B:B. 90", choiceC: "C: C. 50", choiceD: "D: D. 80", correct: "D"},
{question : "216:  Which Symbol Indicates TWSTarget Is In Dead Reckoning?Ref: NATIP-6 - 6/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Spinning Hour Glass In The Bottom Right Of The TWSTrack", choiceB: "B:B. Yellow Counter/Timer", choiceC: "C: C. An Hourglass That Is Not Spinning", choiceD: "D: D. TWSTarget Confidence Is At 80 Percent", correct: "B"},
{question : "217:  Which Symbol Indicates TWSTarget Is Found?Ref: NATIP-6 - 6/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Spinning Hour Glass On The Bottom Right Of The TWSTrack", choiceB: "B:B. Yellow Counter/Timer", choiceC: "C: C. Hour Glass That Is Not Spinning", choiceD: "D: D. TWSTarget Confidence Is At 80 Percent", correct: "C"},
{question : "218:  _____ Imaging Relies On The Motion Of The Ship To Generate A Two-Dimensional, Range Versus Dopper Image.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. A-Scan", choiceB: "B:B. Socet Gxp", choiceC: "C: C. Sar", choiceD: "D: D. ISAR", correct: "D"},
{question : "219:  When Utilizing The ISAR Manual Class Aids, The Scale Displays A Measurement Indication Via A _____?Ref: NATIP-6 - 63/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. D Igital 5 Point Scale", choiceB: "B:B. P Hysical 10 Point Scale", choiceC: "C: C. D Igital 12 Point Scale", choiceD: "D: D. Digital 10 Point Scale", correct: "D"},
{question : "220:  A T 20,000 Feet, The SAR Grazing Angle At 25 Nm Is What?Ref: NATIP-6 - 2/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 9.3", choiceB: "B:B. 7.4", choiceC: "C: C. 6.3", choiceD: "D: D. 6.7", correct: "B"},
{question : "221:  A T 10,000 Feet, The SAR Grazing Angle At 20 Nm Is What?Ref: NATIP-6 - 2/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 4.6", choiceB: "B:B. 6.2", choiceC: "C: C. 3.7", choiceD: "D: D. 5.5", correct: "A"},
{question : "222:  A Ti Track Promotion Level 3 Is Defined As:Ref: NATIP-6 - 81/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Tentative", choiceB: "B:B. Established", choiceC: "C: C. Coasting", choiceD: "D: D. Persistent", correct: "C"},
{question : "223:  A Ti Track Promotion Level 4 Is Defined As:Ref: NATIP-6 - 82/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Tentative", choiceB: "B:B. Established", choiceC: "C: C. Coasting", choiceD: "D: D. Persistent", correct: "D"},
{question : "224:  A Ti Track Promotion Level 2 Is Defined As:Ref: NATIP-6 - 81/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Tentative", choiceB: "B:B. Established", choiceC: "C: C. Coasting", choiceD: "D: D. Persistent", correct: "B"},
{question : "225:  T He ____________ Toggle Button Located On The RADAR Ppi Controls Tab Of The RADAR Pep Is Used To Open/Closed The ATI Capacity Management TD.Ref: NATIP-6 - 79/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Interrogate", choiceB: "B:B. Filter", choiceC: "C: C. Cycle", choiceD: "D: D. Inc/Exc Zones", correct: "D"},
{question : "226:  ATI Contact Have An “____ “Reference Code, Whereas “____” Is Used For Legacy TWSContacts.Ref: NATIP-6 - 79/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. R, R", choiceB: "B:B. R,R", choiceC: "C: C. A,R", choiceD: "D: D. A,R", correct: "A"},
{question : "227:  Note: Due To Potential Screen Clutter If Fusion Is Disabled, TWSTracker _______ Be Utilized Concurrently With Raven AtiRef: NATIP-6 - 76/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Shall Not", choiceB: "B:B. Cannot", choiceC: "C: C. Shall", choiceD: "D: D. Should Not", correct: "D"},
{question : "228:  R Aven Is Ineffective In _____ Environments Or Against ________ Targets.Ref: NATIP-6 - 74/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Dense, Highly Maneuvering", choiceB: "B:B. Open-Ocean, Minimally Manuevering", choiceC: "C: C. Dense, Small", choiceD: "D: D. Open-Ocean, Large", correct: "A"},
{question : "229:  Raven Will Not Create ATI’S Within _____ Nm Of Land, However ATI Detections Still Occur Allowing The Operator To Create Manual ATI Contacts.Ref: NATIP-6 - 74/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 1.5", choiceB: "B:B. 2.5", choiceC: "C: C. 3.5", choiceD: "D: D. 4.5", correct: "B"},
{question : "230:  New ATI Contacts/Tracks Will Only Occur In Search Mode, However, Existing Ati’S Will Be Maintained In _____ And _____ Modes.Ref: NATIP-6 - 74/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Search, Navigate", choiceB: "B:B. Navigate, Periscope", choiceC: "C: C. Search, Periscope", choiceD: "D: D. Weather, Search", correct: "B"},
{question : "231:  A Ti Detection Occurs In Which Of The Following RADAR Modes?Ref: NATIP-6 - 74/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Search, Navigate", choiceB: "B:B. Navigate, Periscope", choiceC: "C: C. Search, Periscope", choiceD: "D: D. Search, Navigate And Periscope", correct: "D"},
{question : "232:  Which Symbol Indicates TWSTarget Initialized?Ref: NATIP-6 - 5/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Spinning Hour Glass On The Bottom Right Of The TWSTrack", choiceB: "B:B. Yellow Counter/Timer", choiceC: "C: C. An Hourglass That Is Not Spinning", choiceD: "D: D. TWSTarget Confidence At 80 Percent", correct: "A"},
{question : "233:  Note: The RADAR Contact Speed Alert TD Is For _________.Ref: NATIP-6 - 22/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. RADAR And EO/IR Tracks Only", choiceB: "B:B. Manual RADAR Contacts And TWSTracks.", choiceC: "C: C. Manual RADAR Contacts, Not TWSTracks.", choiceD: "D: D. Surface IFFI Returns Only", correct: "C"},
{question : "234:  Which Antenna Tilt Control Adjusts The Antenna Tilt By Placing The Peak Of The Elevation Beamwidth At Either The RADAR Horizon Or The Display Range Selected Depending On Whichever Is Closest?Ref: NATIP-6 - 39/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Auto (Covg)", choiceB: "B:B. Auto (Rng)", choiceC: "C: C. Auto (Hk)", choiceD: "D: D. Manual Tilt", correct: "B"},
{question : "235:  Navigate Mode Has An Antenna Scan Rate Of:Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 6 RPM", choiceB: "B:B. 60 RPM", choiceC: "C: C. 300 RPM", choiceD: "D: D. 0 RPM", correct: "A"},
{question : "236:  Surface Search Mode Has An Antenna Scan Rate Of:Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 6 RPM", choiceB: "B:B. 60 RPM", choiceC: "C: C. 300 RPM", choiceD: "D: D. 0 RPM", correct: "B"},
{question : "237:  Periscope Mode Has An Antenna Scan Rate Of:Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 6 RPM", choiceB: "B:B. 60 RPM", choiceC: "C: C. 300 RPM", choiceD: "D: D. 0 RPM", correct: "C"},
{question : "238:  The _________ Provides Most Of The RADAR Related Signal Processing Functions, Including Generation Of Properly Modulated RADAR Pulses And Subsequent Processing Of The Received RADAR Echo Pulses For Plan Position Indicator, Sar, And ISAR Modes.Ref: NATIP-6 - 10/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Rep Receiver", choiceB: "B:B. Rep Exciter", choiceC: "C: C. Rep Processor", choiceD: "D: D. Rep Duplexer", correct: "C"},
{question : "239:  The Gps Receiver (Located In The Rep) Tracks Up To ____Satellites To Provide Data Navigation, Time, And Fault.Ref: NATIP-6 - 11/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Four", choiceB: "B:B. Eight", choiceC: "C: C. Twelve", choiceD: "D: D. Sixteen", correct: "B"},
{question : "240:  The RADAR Pbit May Take Up To ___ To ___ Minutes To Complete. During RADAR Pbit The RADAR Status Light Will Indicate Blue.Ref: NATIP-13 - 100/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 3-7", choiceB: "B:B. 5-7", choiceC: "C: C. 3-5", choiceD: "D: D. 7-10", correct: "B"},
{question : "241:  When The RADAR Indicates That The Nav Alignment Has Reached A Degraded Level, The Light Is Colored _______ To Indicate Alignment Is Needed.Ref: NATIP-6 - 20/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Grey", choiceB: "B:B. Red", choiceC: "C: C. Cyan", choiceD: "D: D. Yellow", correct: "D"},
{question : "242:  Which Antenna Tilt Control Adjusts The Antenna Tilt By Placing The Upper Edge Of The Elevation Beamwidth At Either The RADAR Horizon Or The Display Range Selected Depending Upon Whichever Is Closest?Ref: NATIP-6 - 39/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Auto (Covg)", choiceB: "B:B. Auto (Rng)", choiceC: "C: C. Auto (Hk)", choiceD: "D: D. Manual Tilt", correct: "A"},
{question : "243:  Which Ppi Orientation Selection Places The Video In A North Up Orientation And Ownship Moves Across The Display Relative To The Ppi Display? Note: The Operator Must Re-Center To Prevent The Video From Moving Off The Display.Ref: NATIP-6 - 28/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Track Up", choiceB: "B:B. Ppi Stab", choiceC: "C: C. Ground Stab", choiceD: "D: D. North Up", correct: "C"},
{question : "244:  Which Ppi Orientation Selection Places The Video Oriented To True North At The Top Of The Display. The Aircraft Stays Fixed To The Center Of The Screen. The Video And Own Ship Symbol Rotate To Match The Own Ship Heading.Ref: NATIP-6 - 29/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Track Up", choiceB: "B:B. Ppi Stab", choiceC: "C: C. Ground Stab", choiceD: "D: D. North Up", correct: "D"},
{question : "245:  Which Ppi Orientation Selection Orients The So That Own Ship Heading Is At The Top Of The Display. The Aircraft Stays Fixed To The Center Of The Screen. The Video And Own Ship Symbol Do Not Rotate.Ref: NATIP-6 - 29/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Track Up", choiceB: "B:B. Ppi Stab", choiceC: "C: C. Ground Stab", choiceD: "D: D. North Up", correct: "A"},
{question : "246:  Note: After Exiting SAR Mode, The RADAR Subsystem ___________ While Toms Retains The Last SAR Manual Gain Setting Selected.Ref: NATIP-6 - 34/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Resets SAR Gain To Zero", choiceB: "B:B. Retains The Last SAR Manual Gain Setting", choiceC: "C: C. Resets SAR Gain To -32", choiceD: "D: D. Resets SAR Gain To +32", correct: "A"},
{question : "247:  A Timer Below A RADAR Contact On The Ppi Video Display Indicates:Ref: NATIP-6 - 8/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Time Remaining Until The Contact Merges With L- Or J-Type Tracks", choiceB: "B:B. Time Remaining Until The Contact Auto-Drops", choiceC: "C: C. Approximate Amount Of Time Of Dead Reckoning In Tws/ATI Mode", choiceD: "D: D. Approximate Amount Of Time Acquired In Tws/ATI Mode", correct: "D"},
{question : "248:  The Delete Contact/Track Button Is A Guarded Button To Delete A Selected Track From The Track Database. ________ Cannot Be Deleted.Ref: NATIP-6 - 38/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. TWSTracks", choiceB: "B:B. Confirmed Tracks", choiceC: "C: C. Confirmed Contacts", choiceD: "D: D. Hostile Tracks", correct: "A"},
{question : "249:  Ppi False Alarm Rate (Far) And Video Threshold Control Buttons Are Available In Which Video Processing Mode(S)?Ref: NATIP-6 - 19/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Sar, ISAR", choiceB: "B:B. Navigate", choiceC: "C: C. Background", choiceD: "D: D. Threshold", correct: "D"},
{question : "250:  If There Is Need To Operate The RADAR On The Ground (E.G., High Voltage Check). Proximity Sensors Electronic Unit (Pseu) Logic Overrides The Wow Discrete Under The Following Conditions:Ref: NATIP-6 - 13/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Engines Off, Flaps Between 1-25, Parking Not Set", choiceB: "B:B. Engines On, Flaps Between 1-25, Parking Brake Not Set", choiceC: "C: C. Engines Off, Flaps Between 1-25, Parking Brake Set", choiceD: "D: D. Engines On, Flaps Between 1-25, Parking Brake Set", correct: "B"},
{question : "251:  In Which RADAR Mode Can You Choose Between Threshold And Background For Video Processing?Ref: NATIP-6 - 18/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Navigate", choiceB: "B:B. Sar", choiceC: "C: C. WXr", choiceD: "D: D. Search", correct: "D"},
{question : "252:  _____ Imaging Provides A Range Versus Doppler Image.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Ppi Modes", choiceB: "B:B. ISAR", choiceC: "C: C. Sar", choiceD: "D: D. A-Scan", correct: "B"},
{question : "253:  This Mode Is Primarily Coastline Mapping And Is Not Intended To Provide Sea-Clutter Suppression.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Navigation", choiceB: "B:B. Search", choiceC: "C: C. Periscope", choiceD: "D: D. WX", correct: "A"},
{question : "254:  This Mode Is Used At Moderately Low Altitiue For Search And Detection Of Periscope/Small Contact.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Navigate", choiceB: "B:B. Search", choiceC: "C: C. Periscope", choiceD: "D: D. ISAR", correct: "C"},
{question : "255:  This Mode Is For Long-Range Surface Search With Sea Clutter Suppression And Target Brightness Enhancement.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Navigation", choiceB: "B:B. Search", choiceC: "C: C. Periscope", choiceD: "D: D. Sar", correct: "B"},
{question : "256:  A Doppler Signal Processing Technique Used To Generate True, Recognizable, Two-Dimensional Images Of A Selected Stationary Surface Target Or Land Area.Ref: NATIP-6 - 1/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Search", choiceB: "B:B. Periscope", choiceC: "C: C. ISAR", choiceD: "D: D. Sar", correct: "D"},
{question : "257:  WX Mode Has An Antenna Scan Rate Of:Ref: NATIP-6 - 2/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 6 RPM", choiceB: "B:B. 60 RPM", choiceC: "C: C. 300 RPM", choiceD: "D: D. 0 RPM", correct: "A"},
{question : "258:  Note: ________ Indications Are Expected For Gps Keys Not Loaded, Gps Unauthorized, And RADAR Align Fail. However, Bit Details Should Still Be Checked To Ensure Other Faults Are Ignored.Ref: NATIP-6 - 13/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Blue", choiceB: "B:B. Yellow", choiceC: "C: C. Red", choiceD: "D: D. Grey", correct: "B"},
{question : "259:  H Ow Does An Operator Access The Operator Toolbox During ISAR Operations?Ref: NATIP-6 - 59/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. By Selecting The White T Located In The Upper Right Of The Display", choiceB: "B:B. B Y Selecting The Socet Gxp Function", choiceC: "C: C. B Y Selecting A-Scan Display", choiceD: "D: D. B Y Selecting The Precision Precise Position Targeting", correct: "A"},
{question : "260:  RADAR Video Return Shall Be Checked In ______ Mode Only.Ref: NATIP-6 - 16/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. WX", choiceB: "B:B. Navigate", choiceC: "C: C. Navigate Or WX", choiceD: "D: D. Navigate Or IFFI", correct: "C"},
{question : "261:  This Button Commands Re-Alignment Of The RADAR Ins. A Power Light To The Right Is Colored Gray When Alignment Is Not In Progress.Ref: NATIP-6 - 20/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Align Nav", choiceB: "B:B. Figure Of Merit", choiceC: "C: C. Gps/Ins Blend", choiceD: "D: D. IBIT", correct: "A"},
{question : "262:  A Figure Of Merit Value Indicating RADAR Motion Measurement Performance, Calculated From The Position, Velocity, And Attitude Variance Data. Values Are __ (Excellent) To __ (Poor).Ref: NATIP-6 - 20/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. 1, 5", choiceB: "B:B. 1, 10", choiceC: "C: C. 5, 1", choiceD: "D: D. 10, 1", correct: "A"},
{question : "263:  Which Mode Allows The Iff Interrogator To Be Operational Without RF Transmission From The APY-10 RADAR?Ref: NATIP-6 - 22/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. IFFI", choiceB: "B:B. Standby", choiceC: "C: C. Navigate Or WX", choiceD: "D: D. SAR Or ISAR", correct: "A"},
{question : "264:  Which SAR Map Type Produces Images Of Long, Narrow Scenes Oriented Parallel To The Aircraft Ground Track At Mode Initiation?Ref: NATIP-6 - 31/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Strip", choiceB: "B:B. Strip Wide", choiceC: "C: C. Spot Continuous", choiceD: "D: D. Spot Single", correct: "A"},
{question : "265:  Which SAR Map Type Generates And Displays A Single Image (E.G., Snapshot) Of The Scene Centered On The Srp Then Reverts To A Stand-By Condition?Ref: NATIP-6 - 31/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Strip", choiceB: "B:B. Strip Wide", choiceC: "C: C. Spot Continuous", choiceD: "D: D. Spot Single", correct: "D"},
{question : "266:  Which SAR Map Type Generates And Displays Images Of The Scene Centered On The Srp While The Aircraft Continues, Within Allowable Limits, On The Flight Vector That Was In Effect At The Time Of Mode Initation?Ref: NATIP-6 - 31/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Strip", choiceB: "B:B. Strip Wide", choiceC: "C: C. Spot Continuous", choiceD: "D: D. Spot Single", correct: "C"},
{question : "267:  Caution: Repeated Unsuccessful Key Loads Or Attempting To Load Key Without The RADAR __________ May Trigger The RADAR Pep Kdp Fail Fault And Damage The Rep.Ref: NATIP-6 - 12/ CATEGORY: RADAR" , imgSrc: "VP46.png", choiceA: "A:A. Secured", choiceB: "B:B. Pbit Complete", choiceC: "C: C. In Nav Or WX Modes Only", choiceD: "D: D. In Standby", correct: "D"},
{question : "268:  Which Of The Following Items Is Optional For The Mission Crew Vest Configuration?Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Survival Radio", choiceB: "B:B. Dye Marker", choiceC: "C: C. MK 124 Marine Smoke And Illumination Signal", choiceD: "D: D. Sdu-39 Strobe Light", correct: "B"},
{question : "269:  In Case Of Malfunction, Use The _______ To Inflate A Malfunctioned Preserver, Top Off An Underinflated Preserver, Or Maintain A Leaky Preserver.Ref: ASNM-4 - 96/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Manual Inflation Pump", choiceB: "B:B. Oral Inflation Valves", choiceC: "C: C. Beaded Handles", choiceD: "D: D. Battery Operated Inflator", correct: "B"},
{question : "270:  Warning: Operation Of The Radio Set Is ProhIBITed Except During Rescue Operations, Emergency Ground-To-Ground Communications, Or ________________.Ref: ASNM-9 - 42/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. PRC-149 Preflight", choiceB: "B:B. Coordinated Operations", choiceC: "C: C. Under Controlled Test/Training Conditions", choiceD: "D: D. Lithium Battery Testing", correct: "C"},
{question : "271:  Since The Cospas-Sarsat Beacon Message Is Allowed To Update Only Every 20 Minutes, The Gps Receiver Is Placed In A Power Down Mode To Conserve Battery Power Between Updates. Reacquisition Every 20 Minutes Takes Approximately __ Seconds.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 5-10", choiceB: "B:B. 10", choiceC: "C: C. 20", choiceD: "D: D. 20-30", correct: "C"},
{question : "272:  The PRC-149 Gps Receiver Initial Acquisition Time Is Less Than ______.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 130 Seconds", choiceB: "B:B. 310 Seconds", choiceC: "C: C. 13 Minutes", choiceD: "D: D. 20 Minutes", correct: "A"},
{question : "273:  All Fixed Crew Ditching Seats Have A Lifevest Stowed ___________.Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Within The Mplrs", choiceB: "B:B. Under The Seat Pan", choiceC: "C: C. In The Aft Mission Storage", choiceD: "D: D. None Of The Above", correct: "B"},
{question : "274:  Qdaec Warning: Avoid Prolonged Wear Of The Coverall Because This Could Cause ______.Ref: ASNM-10 - 18/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Heat Exhaustion, Heat Prostration, Or Heat Stroke", choiceB: "B:B. The Quick Onset Of Fatigue", choiceC: "C: C. Panic Attacks, Namely Claustrophobia", choiceD: "D: D. Reduced Tactile Sensation", correct: "A"},
{question : "275:  The Greatest Physiological Effect From Wearing Aircrew Ipe (Individual Protective Equipment) Is The Probability Of ______.Ref: ASNM-A - 1/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Heat-Related Casualties, Namely Heat-Stress And Dehydration", choiceB: "B:B. The Quick Onset Of Fatigue", choiceC: "C: C. Panic Attacks, Namely Claustrophobia", choiceD: "D: D. Reduced Tactile Sensation", correct: "A"},
{question : "276:  Warning: While Wearing The Quick Don Anti-Exposure Coveralls, Avoid Jumping Into The Water ______ As The AIR In The Suit Will Rush To The Feet Of The Suit And You Will Have DIFFIculty Righting Yourself.Ref: ASNM-10 - 18/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. With It Unfastened", choiceB: "B:B. With It Fastened", choiceC: "C: C. Feet First", choiceD: "D: D. Head First", correct: "D"},
{question : "277:  Anti-Exposure Suits Shall Be ______ Flight Personnel Of Naval Aircraft When, In The Event Of A Mishap, There Would Be Significant Risk Of Water Entry And Either Water Temp At Or Below 50°F Or Outside AIR Temp (Wind Chill Corrected) At Or Below 32°F.Ref: CNAF-M3710-8 - 2/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Constantly Worn By", choiceB: "B:B. Provided For", choiceC: "C: C. Donned At The Onset Of An Emergency By", choiceD: "D: D. Carried By", correct: "B"},
{question : "278:  All Aircrew Shall Perform A ______ Inspection Of TheIR Aircrew Personal Protective Equipment.Ref: 3710-8 - 1/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Preflight", choiceB: "B:B. Postflight", choiceC: "C: C. Pre-Flight And Post-Flight", choiceD: "D: D. Preflight And Inflight", correct: "C"},
{question : "279:  Note: To Avoid Inadvertent Beacon Activation, Do Not Turn The Mode Switch Past The ______ Position Unless Intending To Transmit.Ref: ASNM-9 - 42/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Voice", choiceB: "B:B. Bcn", choiceC: "C: C. Trp Bcn", choiceD: "D: D. Gps", correct: "D"},
{question : "280:  Since The Cospas-Sarsat Beacon Message Is Allowed To Update Only Every __ Minutes, The Gps Receiver Is Placed In A Power Down Mode To Conserve Battery Power Between Updates. Reacquisition Every __ Minutes Takes Approximately 20 Seconds.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 15", choiceB: "B:B. 20", choiceC: "C: C. 30", choiceD: "D: D. 60", correct: "B"},
{question : "281:  Which Of The Following Items Is Optional For The Mission Crew Vest Configuration?Ref: NATOPS-16 - 8/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Survival Radio", choiceB: "B:B. 4 Oz Water Bottle", choiceC: "C: C. Signal Mirror", choiceD: "D: D. Signal Whistle", correct: "B"},
{question : "282:  Anti-Exposure Suits Shall Be Provided For Flight Personnel Of Naval Aircraft When, In The Event Of A Mishap, There Would Be Significant Risk Of Water Entry And Any Of The Following Conditions Prevail:Ref: CNAF-M3710-8 - 2/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Anti-Exposure Suits Should Be Provided At All Times.", choiceB: "B:B. Water Temp At Or Below 50°F, Outside AIR Temp (Wind Chill Corrected) At Or Below 32°F", choiceC: "C: C. Water Temp At Or Below 32°F, Outside AIR Temp (Wind Chill Corrected) At Or Below 50°F", choiceD: "D: D. Water Temp At Or Below 60°F, Outside AIR Temp (Wind Chill Corrected) At Or Below 30°F", correct: "B"},
{question : "283:  Note: The Quick Don Anti-Exposure Coveralls Are Worn ______ All Flight Clothing, Including Boots, But ______ The Life Preserver And Survival Vest.Ref: ASNM-10 - 18/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Over, Under", choiceB: "B:B. Under, Over", choiceC: "C: C. With, Without", choiceD: "D: D. Withou, With", correct: "A"},
{question : "284:  When The PRC-149 Gps Receiver Has Acquired The Satellites And Computed Its Position, This Information Is Relayed In The ______ Mhz Cospas-Sarsat Beacon Message.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 121.5 And 243.0", choiceB: "B:B. 121.5, 243.0, And 282.9", choiceC: "C: C. 121.5, 243.0, And 406.026", choiceD: "D: D. 406.025", correct: "D"},
{question : "285:  Warning: Do Not Secure The Sidewinder Flashlight In The _____ Mode.Ref: ASNM-8 - 27/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Strobe", choiceB: "B:B. Blue", choiceC: "C: C. White", choiceD: "D: D. IR", correct: "D"},
{question : "286:  The Sdu-39/N Is Battery Operated And Capable Of Emitting High-Intensity Light. The Light Incorporates Blue And Infrared Filter Lenses And Uses Standard ______ Batteries. The Clear Lens Is Used As A High-Intensity Visual Distress Signal.Ref: ASNM-8 - 29/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. AA", choiceB: "B:B. AAA", choiceC: "C: C. C", choiceD: "D: D. D", correct: "A"},
{question : "287:  The Sdu-39/N Is Battery Operated And Capable Of Emitting High-Intensity Light. The Light Incorporates ______ Filter Lenses And Uses Standard 'AA' Batteries. The Clear Lens Is Used As A High-Intensity Visual Distress Signal.Ref: ASNM-8 - 29/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. Strobe And Steady", choiceB: "B:B. Blue And Infrared", choiceC: "C: C. Directional And Heat", choiceD: "D: D. Gunfire And Covert", correct: "B"},
{question : "288:  The PRC-149 Batteries Provide Operation Without Degradation In The 406.025 Mhz Beacon Only Mode For A Minimum Of ___ Hours At -20°C.Ref: ASNM-9 - 38/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 8", choiceB: "B:B. 18", choiceC: "C: C. 24", choiceD: "D: D. 48", correct: "D"},
{question : "289:  The PRC-149 Batteries Provide Operation Without Degradation In The Triple Beacon Mode For A Minimum Of ___ Hours At 25°C.Ref: ASNM-9 - 38/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 8", choiceB: "B:B. 18", choiceC: "C: C. 24", choiceD: "D: D. 48", correct: "C"},
{question : "290:  The PRC-149 Batteries Provide Operation Without Degradation For ___ Hours When The Radio Set Is Operated In A 90% Triple Frequency Beacon 10% Voice Duty Cycle At -20°C.Ref: ASNM-9 - 38/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 8", choiceB: "B:B. 18", choiceC: "C: C. 24", choiceD: "D: D. 48", correct: "A"},
{question : "291:  The PRC-149 Radio Set Provides Two-Way Voice Communications At Selectable Frequencies Of ______.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 121.5 And 243.0", choiceB: "B:B. 121.5, 243.0, And 282.8", choiceC: "C: C. 121.5, 243.0, And 406.025", choiceD: "D: D. 121.5, 243.0, 282.8, And 406.025", correct: "B"},
{question : "292:  The PRC-149 Radio Set Provides A Multi-Mode Personal Locator Beacon Transmission At Selectable Frequencies Of ______.Ref: ASNM-9 - 39/ CATEGORY: SURV EQ" , imgSrc: "VP46.png", choiceA: "A:A. 121.5 And 243.0", choiceB: "B:B. 121.5, 243.0, And 282.8", choiceC: "C: C. 121.5, 243.0, And 406.025", choiceD: "D: D. 121.5, 243.0, 282.8, And 406.025", correct: "C"},
{question : "293:  What Does A White Subsystem Health Status Indicate?Ref: NATIP -1 - 48/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. Power Off", choiceB: "B:B. Bit In Progress", choiceC: "C: C. Advisory", choiceD: "D: D. Normal/Good", correct: "C"},
{question : "294:  What Does A Black Subsystem Health Status Indicate?Ref: NATIP-1 - 48/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. Power Off", choiceB: "B:B. Bit In Progress", choiceC: "C: C. Advisory", choiceD: "D: D. Normal/Good", correct: "A"},
{question : "295:  What Does A Grey Subsystem Health Status IndicateRef: NATIP-1 - 48/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. P Ower Off", choiceB: "B:B. Unknown/No Response", choiceC: "C: C. Normal/Good", choiceD: "D: D. Degraded State", correct: "B"},
{question : "296:  What Does A Green Subsystem Health Status Indicate?Ref: NATIP-1 - 48/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. Normal/Good", choiceB: "B:B. A Dvisory", choiceC: "C: C. Unknown/No Response", choiceD: "D: D. Power Off", correct: "A"},
{question : "297:  What Does A Yellow Subsystem Health Status Indicate?Ref: NATIP-1 - 49/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. B It In Progress", choiceB: "B:B. E Rror/Down", choiceC: "C: C. N Ormal/Good", choiceD: "D: D. Degraded State", correct: "D"},
{question : "298:  What Does A Red Subsystem Health Status Indicate?Ref: NATIP-1 - 49/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. N O Response", choiceB: "B:B. Error/Down", choiceC: "C: C. D Egraded State", choiceD: "D: D. N Ormal/Good", correct: "B"},
{question : "299:  What Does A Cyan Subsystem Health Status Indicate?Ref: NATIP-1 - 49/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. Bit In Progress", choiceB: "B:B. ADvisory", choiceC: "C: C. NO Response", choiceD: "D: D. N Ormal/Good", correct: "A"},
{question : "300:  The 3D Tsd Does Not Support Any Weapons, Tactics Patterns Or ___________ Symbology.Ref: NATIP-2 - 166/ CATEGORY: TOMS" , imgSrc: "VP46.png", choiceA: "A:A. Sonobuoy", choiceB: "B:B. ESM", choiceC: "C: C. Link-16", choiceD: "D: D. IFFI", correct: "A"},








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