var array=["Viswas","John","jay","January","Datta","Sai","Jayanth"];
for(var i=0;i<array.length;i++){
	if(array[i].startsWith("j")|| array[i].startsWith("J")){
		console.log("Good Bye "+array[i]);
	}
	else{
		console.log("Hello "+array[i]);
	}
}