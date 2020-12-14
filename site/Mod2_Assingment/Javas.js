  
try{

        function fun(num){
           var k=document.cal.result;
           var a1=document.getElementById("id1").value;
           var a2=document.getElementById("id2").value;
           var a3=document.getElementById("id3").value;
           var a4=document.getElementById("id4").value;
           var a5=document.getElementById("id5").value;
           var a6=document.getElementById("id6").value;
           var a7=document.getElementById("id7").value;
           var a8=document.getElementById("id8").value;
           if(a1=="" ||a2=="" ||a3=="" ||a4=="" ||a5=="" ||a6=="" ||a7=="" ||a8=="" ){
            alert("Please fill all the fields...");
                document.cal.dm.focus();
                return  false;
           }
           var reg=/^([056789]?(10)?$)/
            var r1=reg.test(a1);var r2=reg.test(a2);var r3=reg.test(a3);var r4=reg.test(a4);var r5=reg.test(a5);var r6=reg.test(a6);var r7=reg.test(a7);var r8=reg.test(a8);
               var estimate=r1 &&r2 && r3 &&r4 &&r5 &&r6 &&r7&&r8 ;
               if(!estimate){
           alert("Please Enter Valid Credits");
               }
           
           else{
           var t=(a1*3+a2*3+a3*3+a4*4+a5*4+a6*1.5+a7*1.5+a8*1)/21;
             document.getElementById("credits").innerHTML="Your Grade is : "+t.toFixed(2);
           }
          
           
          
        }
        function handleOnFocus(x){
        	x.style.backgroundColor="lightblue";
        }
        function handleOnBlur(x){
        	x.style.backgroundColor="white";
        }
       function load(){
           window.print();
       }
         

     }
     catch(obj){
      document.write(obj.message);
           