const corrVal =  Array.from({ length: 6 }, () => Math.floor(Math.random() * 46));
let globArr = [];
function chckNow(){
	let a = document.getElementById('inpbx').value;
	let b = a.split(" ").map(Number);
	let c = b.every(val => corrVal.includes(val));
	globArr = b.slice();
	let tval = numChk();
	if (a==""){
		
		document.getElementById('resultLose').style.display = "block";
		document.getElementById('res2').innerHTML = "You have inputted nothing";
	}
	else if(b.length > 6){
		document.getElementById('resultLose').style.display = "block";
		document.getElementById('res2').innerHTML = "NUMBERS EXCEEDED 6";
	}
	else{
	if (c == true){
		document.getElementById('resultWin').style.display = "block";
		document.getElementById('frm').style.display ="none";
	}
	else if(tval >= 3 && tval != 6){
		document.getElementById('resultpar').style.display = "block";
		document.getElementById('count3').innerHTML = tval;
	}
	else if (tval == 1 || tval == 2){
		document.getElementById('resultLose').style.display = "block";
		document.getElementById('count2').innerHTML = tval;
	}
	else{
		document.getElementById('resultLose').style.display = "block";
		document.getElementById('res2').innerHTML = "All of your combinations are WRONG";
	}
	}
}
function numChk(){
	tcount = 0;
	for (let int = 0; int<globArr.length; int++){
		if (corrVal.includes(globArr[int])==true){
			tcount++;
		}
	}
	return tcount;
}
