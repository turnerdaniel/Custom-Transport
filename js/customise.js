	var lambo;
	var s5;
	var q5;
	var bmw;
	var car;
	var cardropdown;
	var carcolour;
	var lamboSelected;
	var s5Selected;
	var q5Selected;
	var bmwSelected;
	
window.onload = function()
{
	console.log("ready");
	
	//assign elements to variables
	lambo = document.getElementById("lambo");
	s5 = document.getElementById("s5");
	q5 = document.getElementById("q5");
	bmw = document.getElementById("bmw");
	car = document.getElementById("customvehicleimg");
	cardropdown = document.getElementById("dropdown");
	q5Selected = true;
	
	//execute functions when the ID's are clicked.
	lambo.addEventListener("click", changeLambo);
	s5.addEventListener("click", changeS5);
	q5.addEventListener("click", changeQ5);
	bmw.addEventListener("click", changeBmw);
	//execute function when the drop-down menu is changed
	cardropdown.addEventListener("change", carChange);
}

//changes the topdown picture to lambo
function changeLambo(){
	console.log("Lambo");
	lamboSelected = true;
	s5Selected = false;
	q5Selected = false;
	bmwSelected = false;
	car.src="img/products/custom/lambo_centenario_topdown.jpg";
}

//changes the topdown picture to audi s5
function changeS5(){
	console.log("S5");
	lamboSelected = false;
	s5Selected = true;
	q5Selected = false;
	bmwSelected = false;
	car.src="img/products/custom/audi_s5_topdown.jpg";
}

//changes the topdown picture to audi q5
function changeQ5(){
	console.log("Q5");
	lamboSelected = false;
	s5Selected = false;
	q5Selected = true;
	bmwSelected = false;
	car.src="img/products/custom/audi_q5_topdown.jpg";
}

//changes the topdown picture to BMW G11
function changeBmw(){
	console.log("BMW");
	lamboSelected = false;
	s5Selected = false;
	q5Selected = false;
	bmwSelected = true;
	car.src="img/products/custom/bmw_g11_topdown.jpg";
}

//changes the colour of the top-down car
function carChange(){
	//gets the value from the dropdown menu
	carcolour = cardropdown.options[cardropdown.selectedIndex].value;
	
	//lambo selection
	if(lamboSelected === true){
		if(carcolour === "blue"){
			car.src="img/products/custom/lambo_centenario_blue.jpg";
		}
		else if(carcolour === "green"){
			car.src="img/products/custom/lambo_centenario_green.jpg";
		}
		else if(carcolour === "red"){
			car.src="img/products/custom/lambo_centenario_red.jpg";
		}
		else if(carcolour === "yellow"){
			car.src="img/products/custom/lambo_centenario_yellow.jpg";
		}
	}
	//s5 selection
	if(s5Selected === true){
		if(carcolour === "blue"){
			car.src="img/products/custom/audi_s5_blue.jpg";
		}
		else if(carcolour === "green"){
			car.src="img/products/custom/audi_s5_green.jpg";
		}
		else if(carcolour === "red"){
			car.src="img/products/custom/audi_s5_red.jpg";
		}
		else if(carcolour === "yellow"){
			car.src="img/products/custom/audi_s5_yellow.jpg";
		}
	}
	//q5 selection
	if(q5Selected === true){
		if(carcolour === "blue"){
			car.src="img/products/custom/audi_q5_blue.jpg";
		}
		else if(carcolour === "green"){
			car.src="img/products/custom/audi_q5_green.jpg";
		}
		else if(carcolour === "red"){
			car.src="img/products/custom/audi_q5_red.jpg";
		}
		else if(carcolour === "yellow"){
			car.src="img/products/custom/audi_q5_yellow.jpg";
		}
	}
	//bmw selection
	if(bmwSelected === true){
		if(carcolour === "blue"){
			car.src="img/products/custom/bmw_g11_blue.jpg";
		}
		else if(carcolour === "green"){
			car.src="img/products/custom/bmw_g11_green.jpg";
		}
		else if(carcolour === "red"){
			car.src="img/products/custom/bmw_g11_red.jpg";
		}
		else if(carcolour === "yellow"){
			car.src="img/products/custom/bmw_g11_yellow.jpg";
		}
	}
}