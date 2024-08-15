let globArr = [];
let testArr = [];
function putNum(){
	let inp = document.getElementById('inpbox').value;
	let arr = inp.split(' ').map(Number);
	if (arr.length > 6){
		document.getElementById('errbox').style.display = "block";
		document.querySelector(".main").style.display = "none";
		document.querySelector(".output").style.display = "none";
		setTimeout(rel,2000);
		function rel() {
			window.location.reload();
		}
	}
	
	else{
	globArr = arr.slice();
	let tmp = arr.sort((a,b)=>a-b).reverse();
	testArr = tmp;
	let idk = document.querySelectorAll('.tda');
	let buffer = document.getElementById('buffer');
	buffer.innerHTML = globArr.toString();	
	for (let j = 0; j< globArr.length; j++){
		idk[j].innerHTML = globArr[j];
		buffer.innerHTML = 0;
	}
	setTimeout(somew, 2000)
	function somew(){for (let i = 0; i < arr.length; i++){
		putter(i);
		smkScrn(i);
		
	}
	}
	function putter(i){
		setTimeout(function(){
			idk[i].innerHTML = arr[i];
		}, 1000 * i)
	}
	function smkScrn(i){
		setTimeout(function(){
			buffer.innerHTML = arr[i];
			if(i === arr.length){
				buffer.innerHTML = 0;
			}
		}, 900 * i);
	}
	}
	

	
	
	
	
}
function tryAgain() {
	window.location.reload();
}
