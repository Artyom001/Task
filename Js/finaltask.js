
var slider_count = 1;
var slider_total = 4;

function slider(n){

	
	


	var img = document.getElementById("image");

 
  slider_count += n;
  
  if(slider_count > slider_total){

     slider_count = 1;
  }

  if(slider_count < 1){

  	slider_count = slider_total;
  }

  img.src = "sliders_img/img/"+slider_count+".jpg";


}



var tab_1 = document.getElementById("tab_li1");
var tab_2 = document.getElementById("tab_li2");
var tab_3 = document.getElementById("tab_li3");
var tab_4 = document.getElementById("tab_li4");
var tab1_info = document.getElementById("first_sec");  
var tab2_info = document.getElementById("second_sec"); 
var tab3_info = document.getElementById("third_sec");
var tab4_info = document.getElementById("fourth_sec");

var switcher = false;


tab_1.addEventListener('click',function(){

	if (switcher === false) {

		tab1_info.style.display = "block";
		tab2_info.style.display = "none";
		tab3_info.style.display = "none";
		tab4_info.style.display = "none";
		switcher = true;

	}

	else{

		tab1_info.style.display = "none";
		switcher = false;
	}

})


tab_2.addEventListener('click',function(){

	if (switcher === false) {

		tab1_info.style.display = "none";
		tab3_info.style.display = "none";
		tab4_info.style.display = "none";
		tab2_info.style.display = "block";
		switcher = true;
		
	}

	else{

		tab2_info.style.display = "none";
		switcher = false;
	}

})

tab_3.addEventListener('click',function(){


	if (switcher === false) {

		tab1_info.style.display = "none";
        tab2_info.style.display = "none";
        tab4_info.style.display = "none";
		tab3_info.style.display = "block";
		switcher = true;
	}

	else{

		tab3_info.style.display = "none";
		switcher = false;
	}

})


tab_4.addEventListener('click',function(){


	if (switcher === false) {
		tab1_info.style.display = "none";
		tab2_info.style.display = "none";
		tab3_info.style.display = "none";
		tab4_info.style.display = "block";
		switcher = true;
	}

	else{

		tab4_info.style.display = "none";
		switcher = false;
	}

})


var words = ["Ronaldo","Benzema","Ramos","Morata","Navas","Marselo","Carvajal",
            "Danilo","Varan","Pepe","Casemiro","Modrich","Kros","Kovacich","Isco",
            "James","Lucas","Bale","Mariano","Keylor","Casilla","Nacho","Asensio"]


var search = document.getElementById("search_input");
var search_result = document.getElementById("search_result");




 search.addEventListener("keyup",function(){

    search.value = search.value.charAt(0).toUpperCase() + search.value.slice(1);/*take first word and convert to uppercase
    																			 and concatenate with values after first word*/
	search_result.innerHTML = "";
	var content = "";

	if(this.value != ""){

		for(var i in words){

			if (words[i].indexOf(this.value) === 0) {

				
				content += words[i] + "<br>"
				
			}
		}
	}
		search_result.innerHTML = content;

		search_result.style.display = "none";
		
		setTimeout(function(){
		
			search_result.style.display = "block";

		},1500)

})
			
		



setTimeout(function(){

	var search_result = document.getElementById("search_result");
	search_result.style.display = "none";


},4000)
 

  



	var count = 1;
	var total = 3;
	

function automatic_slider(){


  var img = document.getElementById("diStefano");
  var img2 = document.getElementById("ferencPuskas");
  var img3 = document.getElementById("franciscoGento");
  var img4 = document.getElementById("santillana");
  var img5 = document.getElementById("butragueno");
  var img6 = document.getElementById("zinedineZidane");
  var img7 = document.getElementById("raul");
  var img8 = document.getElementById("casilias");
  var img9 = document.getElementById("cristiano");


  count += 1;
  
  if(count > total ){

     count = 1;
    
  }
     
  if(count < 1 ){

  	count = total;
  	}

   img.src = "sliders_img/distefanoimg/"+count+".jpg";
   img2.src = "sliders_img/puskashimg/"+count+".jpg";
   img3.src = "sliders_img/gentoimg/"+count+".jpg";
   img4.src = "sliders_img/santillanaimg/"+count+".jpg";
   img5.src = "sliders_img/emilioButraguenoimg/"+count+".jpg";
   img6.src = "sliders_img/zidaneimg/"+count+".jpg";
   img7.src = "sliders_img/raulimg/"+count+".jpg";
   img8.src = "sliders_img/casiliasimg/"+count+".jpg";
   img9.src = "sliders_img/cristianoRonaldoimg/"+count+".jpg";

}
setInterval(automatic_slider,3000);


document.addEventListener("mouseleave",function (e){



	var popup_1 = document.getElementById("popup_1");
	

	

	if (e.clientY < 964 && e.clientX < 1895) {

	popup_1.style.display = "block";

	
	

  if (e.clientY>0) {

  		popup_1.style.display = "none";
  }
}





})




var closing = document.getElementById("closing_popup_1");


  closing.addEventListener("click",function (){

  	

	var popup_1 = document.getElementById("popup_1");
	popup_1.style.display = "none";
	
	
})






document.addEventListener("scroll",function(){

  var popup_2 = document.getElementById("popup_2");

 	

	if (document.body.scrollTop > 1750 ) {

		popup_2.style.display = "block";
	}


})




var closing2 = document.getElementById("closing_popup_2");


  closing2.addEventListener("click",function (){

  	

	var popup_2 = document.getElementById("popup_2");
	popup_2.style.display = "none";
	
	
})



var button = document.getElementById("menu_button");
var menu = document.getElementById("manue_ul");
var main_menu = document.getElementById("main_menu");


window.addEventListener('resize', function(){

   if (document.documentElement.clientWidth > 633){//resizing begins 651px
       menu.style.display = 'flex';
   }

   else{
       menu.style.display = 'none';
   }
}, true)


button.addEventListener("click",function(){

	if (menu.style.display !== "block" ) {

		

		menu.style.display = "block";
	}

	else{

		menu.style.display = "none";


	}

})










	





