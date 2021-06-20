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





 
{question : "151:  The _________ serves as the communication hub between the radar and the MCDS.  (Natip-6 11)" , imgSrc: "vp46.png", choiceA: "A:A. ace", choiceB: "B:B. rep", choiceC: "C: C. transmitter", choiceD: "D: D. RDC", correct: "D"},
{question : "152:  After exiting SAR mode, the radar subsystem ___________ while TOMS retains the last SAR manual gain setting selected.  (Natip-6 35)" , imgSrc: "vp46.png", choiceA: "A:A. resets SAR gain to zero", choiceB: "B:B. retains the last SAR manual gain setting", choiceC: "C: C. resets SAR gain to -32", choiceD: "D: D. resets SAR gain to +32", correct: "A"},
{question : "153:  The GPS receiver (located in the rep) tracks up to ____satellites to provide data navigation, time, and fault.  (Natip-6 11)" , imgSrc: "vp46.png", choiceA: "A:A. four", choiceB: "B:B. eight", choiceC: "C: C. twelve", choiceD: "D: D. sixteen", correct: "B"},
{question : "154:  The delete contact/track button is a guarded button to delete a selected track from the track database.  ________ cannot be deleted.  (Natip-6 38)" , imgSrc: "vp46.png", choiceA: "A:A. TWS tracks", choiceB: "B:B. confirmed tracks", choiceC: "C: C. confirmed contacts", choiceD: "D: D. hostile tracks", correct: "A"},
{question : "155:  Because the GPS antenna is located some distance away from the GPS receiver, a low noise ________ offsets the signal loss in the antenna feedline. It is located immediately adjacent to the GPS antenna.  (Natip-6 12)" , imgSrc: "vp46.png", choiceA: "A:A. receiver", choiceB: "B:B. digital crossbar switch", choiceC: "C: C. preamplifier", choiceD: "D: D. digital receiver processor", correct: "C"},
{question : "156:  The apy-10 antenna gimbal provides for automatic stabilization of +/- __ degrees pitch and +/- __ degrees roll and manual tilt of +__ to -__ degrees.  (Natip-6 11)" , imgSrc: "vp46.png", choiceA: "A:A. 25, 10, 10, 30", choiceB: "B:B. 20, 15, 30, 50", choiceC: "C: C. 15, 25, 10, 20", choiceD: "D: D. 15, 30, 10, 20", correct: "C"},
{question : "151:  The _________ serves as the communication hub between the radar and the MCDS.  (Natip-6 11)" , imgSrc: "vp46.png", choiceA: "A:A. ace", choiceB: "B:B. rep", choiceC: "C: C. transmitter", choiceD: "D: D. RDC", correct: "D"},
{question : "152:  After exiting SAR mode, the radar subsystem ___________ while TOMS retains the last SAR manual gain setting selected.  (Natip-6 35)" , imgSrc: "vp46.png", choiceA: "A:A. resets SAR gain to zero", choiceB: "B:B. retains the last SAR manual gain setting", choiceC: "C: C. resets SAR gain to -32", choiceD: "D: D. resets SAR gain to +32", correct: "A"},
{question : "153:  The GPS receiver (located in the rep) tracks up to ____satellites to provide data navigation, time, and fault.  (Natip-6 11)" , imgSrc: "vp46.png", choiceA: "A:A. four", choiceB: "B:B. eight", choiceC: "C: C. twelve", choiceD: "D: D. sixteen", correct: "B"},
{question : "154:  The delete contact/track button is a guarded button to delete a selected track from the track database.  ________ cannot be deleted.  (Natip-6 38)" , imgSrc: "vp46.png", choiceA: "A:A. TWS tracks", choiceB: "B:B. confirmed tracks", choiceC: "C: C. confirmed contacts", choiceD: "D: D. hostile tracks", correct: "A"}










];
const questionTime = 30;   // 30s per question
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
	{  		answerIsCorrect();
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