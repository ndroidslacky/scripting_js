//var is function scoped
//let is block scoped
if(true){
	var test ="true"
	let ttest="true"
}
console.log(test)
//console.log(ttest)

for (var i = 0; i < 10; i++) {
}
for (let j = 0; j < 10; j++) {
}
console.log(i);
console.log(j);