var current_floor=1; /*поточний поверх*/
var next_floor=0; /*наступний поверх*/
/*функції обробки натиснень на кнопки поверхів в кабіні ліфта*/
function function1(){next_floor=1;};
function function2(){next_floor=2;};									
function function3(){next_floor=3;};
function function4(){next_floor=4;};
function function5(){next_floor=5;};
function function6(){next_floor=6;};
function function7(){next_floor=7;};
function function8(){next_floor=8;};
function function9(){next_floor=9;};
function function10(){next_floor=10;};
 /*виклик на 2 поверх*/
//f_floor2(){
//}
/*натиснення на кнопку GO*/
function function_go(){
/*рух наверх*/
	if (next_floor>current_floor){
		if (next_floor==2) {
			setTimeout("lift2()", 2000);};		
		if (next_floor==3) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                      		};
							};
		if (next_floor==4) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};	
		if (next_floor==5) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};
		if (next_floor==6) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};
		if (next_floor==7) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};				
							};
		if (next_floor==8) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};							
							};
		if (next_floor==9) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};
		if (next_floor==10) {
			for(i=current_floor;i<=next_floor;i++){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};	
									};
/*завершення руху наверх*/	
/*рух донизу*/
	if (next_floor<current_floor){
		if (next_floor==1) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==2) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==3) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==4) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==5) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==6) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==7) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==8) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			
		if (next_floor==9) {
			for(i=current_floor;i>=next_floor;i--){
				setTimeout("lift"+i+"()", 2000);
		                                    		};
							};			

									};	
/*завершення руху донизу*/

next_floor=0; /*обнулення наступного поверха*/
};

/*процедури анімації руху ліфта та відображення поверхів на табло*/
function lift1(){
	 document.getElementById("floor1").style.background="yellow";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="1";
     current_floor=1;
};
function lift2(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="yellow";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="2";
     current_floor=2;
};
function lift3(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="yellow";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="3";
     current_floor=3;
};
function lift4(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="yellow";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="4";
     current_floor=4;
};
function lift5(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="yellow";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="5";
     current_floor=5;
};
function lift6(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="yellow";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="6";
     current_floor=6;
};
function lift7(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="yellow";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="7";
     current_floor=7;
};
function lift8(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="yellow";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="8";
     current_floor=8;
};
function lift9(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="yellow";
     document.getElementById("floor10").style.background="white";
     document.getElementById("screen_direction").innerHTML="9";
     current_floor=9;
};
function lift10(){
	 document.getElementById("floor1").style.background="white";
	 document.getElementById("floor2").style.background="white";
     document.getElementById("floor3").style.background="white";
     document.getElementById("floor4").style.background="white";
     document.getElementById("floor5").style.background="white";
     document.getElementById("floor6").style.background="white";
     document.getElementById("floor7").style.background="white";
     document.getElementById("floor8").style.background="white";
     document.getElementById("floor9").style.background="white";
     document.getElementById("floor10").style.background="yellow";
     document.getElementById("screen_direction").innerHTML="10";
     current_floor=10;
};
