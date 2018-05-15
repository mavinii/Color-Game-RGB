var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var	resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// add event button easy
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
// add event button hard
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	} 
});

//event click in button "New Colors"
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	} //update color standard
	h1.style.background = "steelblue";
})

//joga o conteudo do array no titulo do texto
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add cores aos quadrados
	squares[i].style.backgroundColor = colors[i];

	//add evento no quadrado
	squares[i].addEventListener("click", function() {
		//pegue a cor clicado do quadrado
		var clickedColor = this.style.backgroundColor;
		//compara se o quadrado clicado foi o mesmo do titulo RGB
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
//fuction for background color
function changeColors(color){
	//percorrer todo o quadrado
	for(var i = 0; i < squares.length; i++) {
		//mude cada cor para corresponder a determinada cor
		squares[i].style.backgroundColor = color;
	}
}
//generate colors random 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random colors and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;	
}
//this function generate nums random in rgb
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256) 
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}