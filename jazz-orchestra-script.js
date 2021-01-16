var front = document.getElementById('card-front');
var back = document.getElementById('card-back');

function handleClick() {
	if (front.classList && back.classList) { 
		front.classList.toggle('card-flip');
		back.classList.toggle('card-flip');
	} else {// For IE9
		var classesFront = front.className.split(' ');
		var classesBack = back.className.split(' ');
		var i = classesFront.indexOf('card-flip');
		var j = classesBack.indexOf('card-flip');

		if (i >= 0) {
			classesFront.splice(i, 1);
		} else {
			classesFront.push('card-flip');
			front.className = classesFront.join(' ');
		}

		if (j >= 0) {
			classesBack.splice(i, 1);
		} else {
			classesBack.push('card-flip');
			back.className = classesBack.join(' ');
		}
	}
}
