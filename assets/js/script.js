let squares = document.querySelectorAll(".squares");
let colors = creatRandomColors(squares.length);
let pickedColor =guessColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetBtn = document.querySelector("#resetBtn");

colorDisplay.innerHTML= pickedColor;
for(let i=0 ; i<colors.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(e){
		let clickedColor = e.target.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.innerHTML = "Correct!!";
			changeColors(pickedColor);
			colorDisplay.style.color= pickedColor;
		}else{
			messageDisplay.innerHTML = "Try Again!!";
			e.target.style.visibility = "hidden";
		}
		
	})
}



resetBtn.addEventListener("click", function(){
	colors = creatRandomColors(squares.length);
	pickedColor =guessColor();
	colorDisplay.innerHTML= pickedColor;
	colorDisplay.style.color = "#ededed";
	for(let i=0 ; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.visibility="visible";
	}
})




function creatRandomColors(num){
		let array = [];
		for(let i = 0 ; i < num; i++){
			array.push(randomColor());
		}
		return array;
	}


function randomColor(){
	let r = Math.floor(Math.random()*255);
	let g = Math.floor(Math.random()*255);
	let b = Math.floor(Math.random()*255);
	return `rgb(${r}, ${g}, ${b})`;
}

function guessColor(){
	let randompick = Math.floor(Math.random()*colors.length);
	return colors[randompick];
}

function changeColors(color){
	for(let i = 0 ; i < squares.length ; i++){
		squares[i].style.visibility="visible";
		squares[i].style.backgroundColor=color;
	}
}


