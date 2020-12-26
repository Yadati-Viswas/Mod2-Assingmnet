var x="Hello World";
var a=5;
A();
function A(){
	var a=1;
	 B();
}
function B(){
	console.log(a);
}

var x1="In Global";
console.log("Global Message:"+x1);
function Msg() {
	var x1="Inside Msg";
	console.log("Msg Message:"+x1);
	function B1() {
	var x1="Inside Msg";
	console.log("Msg Message:"+x1);
}
B1();
}
Msg();
var y;
console.log(y);
if(y==undefined) {
	console.log("Y is not defined yet!!");
}
y=5;
if(y==undefined) {
	console.log("Y is not defined yet!!");
}
else {
	console.log("Y is defined and its value is:"+y);
}
function test(a){
	console.log(a/5);
}
test();
if(a==y) {
	console.log("a and y are equal as they have same value");
}
a="5";
if(a==y) {
	console.log("a and y are equal as they have same value,but not same data type");
}

if(a===y){
	console.log("This statment wont excute at all becuase of strict equlas");
}
else{
	console.log("a is '5' and y is integer 5 which are not equal as we consider datatypes");
}
if(false || null || "" || undefined || 0 || NaN){
	console.log("If this statment excutes its wrong");
}
else {
	console.log("All are false");
}
if(true && "Hello" && 1 && -1){
	console.log("All are true");
}
function a1() {
	return 
	{
		name: "Hello"
	};
}
function b1() {
	return {
		name: "Hello"
	};
}
console.log(a1());
console.log(b1());
var sum=0;
for(var i=0;i<y;i++){
	console.log(i);
	sum+=i;
}	
console.log("sum is:"+sum);
var company=new Object();
company.name="Facebook";
company.ceo=new Object();
company.ceo.FirstName="Yadati";
company.ceo.LastName="Viswas";
var StockMarket="Stock is Highly Reason";
company.StockMarket=110;
console.log(company);
console.log(company["ceo"]["LastName"]);
console.log(company.ceo.LastName);
console.log(company.StockMarket);
function multiply (m,n){
	return m*n;
}
console.log(multiply(3,6));
function Mutlpication(i) {

var func=function(q){
	
	for (var j=0;j<i;j++){
		console.log(q*i);
	}
}
return func;
}
var Table=Mutlpication(5);
console.log(Table(10));
function ByValue(Val){
	console.log("Before any modification:"+Val);
	Val=5;
	console.log("After:"+Val);
}
var Value=7;
ByValue(Value);
console.log("After Updating, original Value:"+Value);

function BeValue(Val1){
	console.log("Before any modification:");
	console.log(Val1);
	Val1.k=5;
	console.log("After:");
	console.log(Val1);
}
Value={ k: 7 };
BeValue(Value);
console.log("After Updating, original Value:");
console.log(Value);


function Circle(radii){
this.radii=radii;
return radii;
}
console.log(Circle(10));
var Mycircle= new Circle(10);
console.log(Mycircle);


function circle(radius){
	this.radius=radius;
	this.getarea=function(){
		return Math.PI * Math.pow(this.radius, 2);
	};
}
var Circle1=new circle(10);
console.log(Circle1);


var literals={
	radius:10,
	getArea:function(){
		console.log(this);
		return Math.PI * Math.pow(this.radius,2);
	}
};
console.log(literals.getArea());


