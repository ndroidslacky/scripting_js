function TestClassOne(name, children)
{
	this.name = name;
	this.children = children;
}

function TestClassTwo(name, schmame)
{
	this.name = name;
}

var testObjectBefore = new TestClassOne
(
	"One",
	// children
	[
		new TestClassTwo("Two.One"),
		new TestClassTwo("Two.Two"),
		new TestClassTwo("Two.Three"),
	]
);

var testObjectBeforeAsJSON = JSON.stringify(testObjectBefore);

var newline = "<br />";

console.log("testObjectBeforeAsJSON is: " + testObjectBeforeAsJSON + newline);

var testObjectAfter = JSON.parse(testObjectBeforeAsJSON);

var testObjectAfterAsJSON = JSON.stringify(testObjectAfter);

console.log("testObjectAfterAsJSON is: " + testObjectAfterAsJSON + newline);
var d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
console.log(d);
