let display = document.getElementById("display");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let displayBox = document.getElementById("container");
let thank = document.getElementById("thank");
const name = document.getElementById("name");
const mean = document.getElementById("mean");
const reset = document.getElementById("reset");
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words = [["ATTRACTIVE", "AMAZING", "ANNOYING", "AVAILABLE", "AWESOME"],
	["BEAUTIFUL", "BELOVED", "BEST", "BOLD", "BRAVE"], ["CUTE", "CATFISH", "COLOURFUL", "COMEDY", "COOL"],
	["DEAR", "DELICIOUS", "DOWN-TO-EARTH", "DARLING", "DEVIL"], ["EASY", "EXCELLENT", "EYE-CATCHING", "EVIL", "EXTRAORDINARY"],
	["FANTASTIC", "FIT", "FRIENDLY", "FANCY", "FEARLESS"], ["GENTLE", "GREATEST", "GOD-GIFTED", "GREEDY", "GORGEOUS"],
	["HONEY", "HEALTHY", "HOT", "HONEST", "HAPPY"], ["INVINCIBLE", "INTERESTING", "INTELLIGENT", "INNOCENT", "IMPORTANT"],
	["JOYFUL", "JUICY", "JOKER", "JAZZY", "JUNGLI"], ["KIND-HEARTED", "KISSABLE", "KILLER", "KID", "KNOWLEDGEABLE"],
	["LOVELY", "LUCKY", "LOYAL", "LUXURIOUS", "LEGENDARY"], ["MAGICAL", "MAGNETIC", "MARVELOUS", "MODEL", "MONSTER"],
	["NAUGHTY", "NATURAL", "NOTICEABLE", "NECESSARY", "NOVEL"], ["OPEN-MINDED", "ORIGINAL", "OUTSTANDING", "OKAY", "OUTGOING"],
	["PEACEFUL", "PURE", "PROFESSIONAL", "POPULAR", "POSITIVE"], ["QUALIFIED", "QUIET", "QUALITY", "QUEENLY", "QUOTABLE"],
	["RICH", "RESPECTABLE", "READY", "ROYAL", "ROMANTIC"], ["SEXY", "SWEETHEART", "SMILEY", "SPICY", "SUPERSTAR"],
	["TALENTED", "TASTY", "TOPPER", "TRUTHFUL", "THANKFUL"], ["UNIQUE", "UP-TO-DATE", "UNLIMITED", "UNSTOPPABLE", "USEFUL"],
	["VALUABLE", "VAST", "VIOLET", "VISIONARY", "VICTORIOUS"], ["WANTED", "WEALTHY", "WINNER", "WIZARD", "WONDERFUL"],
	["X-RAY", "X-MAN", "XEROX", "XEBEC", "XENIAL"], ["YOUTHFUL", "YOUNG", "YUMMY", "YERN", "YOUR-DADDY"],
	["ZEALFUL", "ZINGY", "ZOOTY", "ZAZZY", "ZAPPY"]];
let arr = [], brr = [];
result1.innerHTML = "";
result2.innerHTML = "";
displayBox.style.display = "none";
reset.style.display = "none";
mean.style.display = "inline";
thank.style.display = "none";
function main() {
	let x, b, a;
	for(x = 0; x < name.value.length; x++) {
		a = alpha.indexOf(name.value.toUpperCase()[x]);
		b = Math.floor(Math.random() * 5);
		arr.push(words[a][b]);
	}
	function comp() {
		let i, j;
		for(i = 0; i < arr.length; i++) {
			for(j = i; j < arr.length; j++) {
				if((i !== j) && (arr[i] == arr[j])) {
					brr.push(arr[i]); 
				}
			}
		}
	}
	comp();
}
function check() {
	main();
	if(brr[0] != undefined) {
		arr = [];
		brr = [];
		check();
	}
}
function finalResult() {
	let p;
	for(p = 0; p < arr.length; p++) {
		result1.innerHTML += name.value.toUpperCase()[p] + "<br>";
		result2.innerHTML += arr[p] + "<br>";
	}
}
mean.addEventListener("click", function(){
	display.innerHTML = `Hi ${name.value.toUpperCase()}<br>Here is the Hidden Meaning in Your Name`;
	displayBox.style.display = "flex";
	check();
	finalResult();
	reset.style.display = "inline";
	mean.style.display = "none";
	thank.style.display = "block";
});
reset.addEventListener("click", function() {
	arr = [];
	name.innerHTML = "";
	result1.innerHTML = "";
	result2.innerHTML = "";
	displayBox.style.display = "none";
	reset.style.display = "none";
	mean.style.display = "inline";
	display.innerHTML = `Hey Beautiful<br><br>Let's Find out<br> The Hidden Meaning In Your Name`;
	thank.style.display = "none";
	name.focus();
});
