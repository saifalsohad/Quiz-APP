import React, { useState } from 'react';


export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);

	const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [s, setS] = useState(true);

	var interval;
	var count1;
    var obj;
	function getFormData(e)
  {
    setS(false);
    var a=(name);
    
    
  }

	function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }


	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)};
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			alert("quiz ends");
			
		}
	};	
    
	const timer=() => {
		const timeout = setTimeout(() => {
		   setShowScore(true);
		   
		 }, 15000);}


	const questions = [
		{
			questionText: 'What is the capital of Bangladesh?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Dhaka', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

	];

	
	function c(){
        
		
		count1 = 1;
   interval = window.setInterval(function(){
 document.getElementById('dd').innerHTML='Time elapsed:'+count1+ ' '+'s';
 count1=count1+1;
 if (count1 === 17) {
   window.clearInterval(interval);
   
	obj=document.getElementById('dd');
	obj.remove();
 }
}, 1000);
   
   }

	

	
	return (
		<div className='app'>
			
         { s ? (

	     <div className="name">
		 <h1>Please enter your name to start the quiz (Time:15 s)</h1>
     <form onSubmit={getFormData}>
       <input type="text" id="n" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />

       <br /><br />
       <button onClick={() =>{timer();c()}} type="submit">Submit</button>
       
        </form>
		 </div> ) : (
	             <>
	        	  
			{showScore ? (
				<div className='score-section'>{name} , you scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText} </div>
					</div>
					<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
		

	))}
	

					</div>
					
				</>
			)} 
         </>
		 ) }

		</div>
	);


}