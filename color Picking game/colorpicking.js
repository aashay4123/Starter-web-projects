var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var newcolor = document.querySelector("#reset");
var num =6;
var colors= generaterandomcolors(num);
var square = document.querySelectorAll(".square");
var theColor = pickedcolor(colors);
var h1 = document.querySelector("h1");
var span = document.querySelector("span");
var text = document.querySelector("#try");
var btn = document.querySelectorAll(".btn");

span.textContent = theColor;
for (var i = 0; i < num ; i++) 
square[i].style.background = colors[i]
function generaterandomcolors(num) {
	var arr = [] ;
	for (var i = 0; i < num ; i++) 
	{
		arr.push(randomcolors())
	}return arr;}	
function randomcolors() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb("+r+", "+g+", "+b+")";}
function pickedcolor(colors) {
	var pickno = Math.floor(Math.random() * colors.length);
	return colors[pickno];}
function rytcolor(grab) {
	for (var i = 0; i < num; i++) {
		square[i].style.background = grab; 
		h1.style.background = grab;}}
for (var i = 0; i < square.length; i++) {
	square[i].addEventListener("click",function () {
		var grab = this.style.background;
		if (grab == theColor)
			{
				rytcolor(grab);
				text.textContent= "well played"
				newcolor.textContent = "play again!"
			} else 
			{
				this.style.background = "none";
				text.textContent= "try again"
			}})}
easy.addEventListener("click",function () {
	num =3;
	h1.style.background = "steelblue"
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generaterandomcolors(num)
	theColor = pickedcolor(colors);
	console.log(theColor,colors);
	for (var i = 0; i < num ; i++) 
	{
		square[i].style.background = colors[i];
		square[5-i].style.background = "#232323"}
	span.textContent = theColor;});	
hard.addEventListener("click",function () {
	num =6;
	h1.style.background = "steelblue"
	colors = generaterandomcolors(num)
	theColor = pickedcolor(colors);
	hard.classList.add("selected");
	easy.classList.remove("selected");

	span.textContent = theColor;
	console.log(colors);
	for (var i = 0; i < num ; i++) 
	square[i].style.background = colors[i]})

newcolor.addEventListener("click",function () {
	newcolor.textContent = "newcolors"
	colors = generaterandomcolors(num)
	theColor = pickedcolor(colors);
	span.textContent = theColor;
	h1.style.background = "steelblue"
	for (var i = 0; i < num ; i++) 
		{square[i].style.background = colors[i];
}})