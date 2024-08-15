
let x = {
	personName: prompt("Enter a student's name"),
}
for (let i = 1; i <= 4; i++){
	let nth ="";
	if(i == 1){
		nth = "st";
	}
	else if(i == 2){
		nth = "nd";
	}
	else if(i == 3){
		nth = "rd";
	}
	else{
		nth ="th"
	}
	x['filgrad' + i] = parseInt(prompt(`Type your Filipino ${i}${nth} grading grade`));
	x['engrad' + i] = parseInt(prompt(`Type your English ${i}${nth} grading grade`));
	x['matgrad' + i] = parseInt(prompt(`Type your Math ${i}${nth} grading grade`));
	x['scigrad' + i] = parseInt(prompt(`Type your Science ${i}${nth} grading grade`));
}
let FgenAve = (x.filgrad1 + x.filgrad2 + x.filgrad3 + x.filgrad4) / 4;
let EgenAve = (x.engrad1 + x.engrad2 + x.engrad3 + x.engrad4) / 4;
let MgenAve = (x.matgrad1 + x.matgrad2 + x.matgrad3 + x.matgrad4) / 4;
let SgenAve = (x.scigrad1 + x.scigrad2 + x.scigrad3 + x.scigrad4) / 4;

let genAve = Math.floor((FgenAve + EgenAve + MgenAve + SgenAve) / 4);

function tryAgain(){
	if(confirm("Do you want to input another student")==true){
		window.location.reload();
	}
	else{
		alert("Thank you for using this program")
	}
}
setTimeout(tryAgain,4000);

document.write('<div class="header">Grade Calculator</div>' +'<div class="greet"><h2>Hello! '+x.personName +' This are your grades</h2>' +'</div>'
	+'<table class="tbl" border="2px black">' 
	+'<th colspan="5">' +x.personName +'"s Grades' +'</th>' +'<tr>' +'<td>' +'Quarter' +'</td>'
		+'<td>' +'1st' +'</td>' +'<td>' +'2nd' +'</td>' +'<td>' +'3rd' +'</td>'
		+'<td>' +'4th' +'</td>' +'</tr>'
		+'<tr>' +'<td>' +'Filipino' +'</td>'
		+'<td>' +x.filgrad1 +'</td>' +'<td>' +x.filgrad2 +'</td>' +'<td>' +x.filgrad3 +'</td>'
		+'<td>' +x.filgrad4 +'</td>' +'</tr>' 
		+'<tr>' +'<td>' +'English' +'</td>'
		+'<td>' +x.engrad1 +'</td>' +'<td>' +x.engrad2 +'</td>' +'<td>' +x.engrad3 +'</td>'
		+'<td>' +x.engrad4 +'</td>' +'</tr>'
		+'<tr>' +'<td>' +'Math' +'</td>'
		+'<td>' +x.matgrad1 +'</td>' +'<td>' +x.matgrad2 +'</td>' +'<td>' +x.matgrad3 +'</td>'
		+'<td>' +x.matgrad4 +'</td>' +'</tr>'
		+'<tr>' +'<td>' +'Science' +'</td>'
		+'<td>' +x.scigrad1 +'</td>' +'<td>' +x.scigrad2 +'</td>' +'<td>' +x.scigrad3 +'</td>'
		+'<td>' +x.scigrad4 +'</td>' +'</tr>' 
		+'<tr>' +'<td>' +'General Average'  +'</td>' +'<td colspan="4" id="genAve">' +genAve +'</td>' +'</tr>' +'</table>'
	);



/** 
 let x ="";
 function fil(){
	codeline mo dito
	codeline mo dito
	return document.getElementById("twelve").innerHTMl = fildiv; x = fildiv;
 }
*/