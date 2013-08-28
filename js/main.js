
(function(){
	var input = document.getElementById("coolr-input");
	var coolrButton = document.getElementById('coolr-button');

	if(coolrButton.addEventListener){
		coolrButton.addEventListener('click',click,false);
	}else if(coolrButton.addEvent){
		coolrButton.addEvent('onclick',click);
	}
	if(input.addEventListener){
		input.addEventListener('keypress',checkKey,false);
	}else if(input.addEvent){
		input.addEvent('onkeypress',checkKey);
	}
	function checkKey(evt){
		if(evt.keyCode == 13) click();
	}
	function click (evt) {
		if(input.value != ""){
				input.value = makeCoolr(input.value);
		}
	}
	function makeCoolr(inputString){
		if(!inputString) return "";
		var strings = inputString.split(" ");
		var ret = [];
		for(var j = 0; j < strings.length; j++){
			var s = strings[j];
			s = s.toLowerCase();
			if(s.length > 3){
				var c = s.charAt(s.length-1);
				var indexArray = function(){
					var indices = [];
					for(var i = s.length-1; i > 1; i--){
						c = s.charAt(i);
						if(/[aeiou]/.test(c)){
							indices.push(i);
							console.log(c);
							console.log(i);
						}
					}
					return indices;
				}();
				if(indexArray.length > 0){
					for(var i = 0; i < indexArray.length; i++){
						s = s.slice(0,indexArray[i]) + s.slice(indexArray[i]+1,s.length);
					}
				}
			}
			ret.push(s);
		}
		if(ret[0].charAt(0) != "." && Math.random() > .7){
				ret[0] = "."+ret[0];
		}
		return ret.join(" ");
	}
}())