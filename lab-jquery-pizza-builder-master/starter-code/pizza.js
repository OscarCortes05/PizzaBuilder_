// Write your Pizza Builder JavaScript in this file.
const Pizza = document.querySelector('#pizza')
const Peperoni = document.querySelectorAll('.pep')
const Mushroom = document.querySelectorAll('.mushroom')
const GPepper = document.querySelectorAll('.green-pepper')
const Sauce = document.querySelector('.sauce-white')
const Gluten = document.querySelector('.crust-gluten-free')
const Cheese = document.querySelector('.cheese')
// Buttons 
const buttonPeperonni = document.querySelector('.btn-pepperonni')
const buttonMushrooms = document.querySelector('.btn-mushrooms')
const buttonGreenPeppers = document.querySelector('.btn-green-peppers')
const buttonSauce = document.querySelector('.btn-sauce')
const buttonCrust = document.querySelector('.btn-crust')
// Var Active 
let PeperoniActive = 1;
let MushroomActive = 1;
let GPepperActive = 1;
let SauceActive = 1;
let GlutenActive = 1;
//
const PeperPrice = document.querySelector('.price li:nth-child(1)');
const MushroomPrice = document.querySelector('.price li:nth-child(2)');
const GPeperPrice = document.querySelector('.price li:nth-child(3)');
const SaucePrice = document.querySelector('.price li:nth-child(4)');
const GlutenPrice = document.querySelector('.price li:nth-child(5)'); 
//
let PricePizza = 21;

buttonPeperonni.onclick = function() {
	let PPrice = 0;
	if (PeperoniActive === 1) {
		for (let i=0;i<Peperoni.length;i+=1){
			Peperoni[i].style.visibility = 'hidden';
		}
		PeperPrice.style.visibility = 'hidden';
		PeperoniActive = 0;
		PPrice = -1;
	}else{
		for (let i=0;i<Peperoni.length;i+=1){
			Peperoni[i].style.visibility = 'visible';
		}
		PeperPrice.style.visibility = 'visible';
		PeperoniActive = 1;
		PPrice = 1;
	}
	SumaPizza(PPrice);
}
buttonMushrooms.onclick = function() {
	let PMushroom = 0;
	if (MushroomActive === 1) {
		for (let i=0;i<Mushroom.length;i+=1){
			Mushroom[i].style.visibility = 'hidden';
		}
		MushroomPrice.style.visibility = 'hidden';
		MushroomActive = 0;
		PMushroom = -1;
	}else{
		for (let i=0;i<Mushroom.length;i+=1){
			Mushroom[i].style.visibility = 'visible';
		}
		MushroomPrice.style.visibility = 'visible';
		MushroomActive = 1;
		PMushroom = 1;
	}
	SumaPizza(PMushroom);
}
buttonGreenPeppers.onclick = function() {
	let PGreenP = 0;
	if (GPepperActive === 1) {
		for (let i=0;i<GPepper.length;i+=1){
			GPepper[i].style.visibility = 'hidden';
		}
		GPeperPrice.style.visibility = 'hidden';	
		GPepperActive = 0;
		PGreenP = -1;
	}else{
		for (let i=0;i<GPepper.length;i+=1){
			GPepper[i].style.visibility = 'visible';
		}
		GPeperPrice.style.visibility = 'visible';	
		GPepperActive = 1;
		PGreenP = 1;
	}
	SumaPizza(PGreenP);
}
buttonSauce.onclick = function() {
	let PSauce = 0;
	if (SauceActive === 1) {
		Sauce.style.visibility = 'hidden';
		SaucePrice.style.visibility = 'hidden';
		SauceActive = 0;
		PSauce = -3;
	}else{
		Sauce.style.visibility = 'visible';
		SaucePrice.style.visibility = 'visible';
		SauceActive = 1;
		PSauce = 3;
	}
	SumaPizza(PSauce);
}
buttonCrust.onclick = function() {
	let PCrust = 0;
	if (GlutenActive === 1) {
		Gluten.style.visibility = 'hidden';	
		GlutenPrice.style.visibility = 'hidden';
		GlutenActive = 0;
		PCrust = -5;
	}else{
		Gluten.style.visibility = 'visible';
		GlutenPrice.style.visibility = 'visible';
		GlutenActive = 1;
		PCrust = 5;
	}
	Cheese.style.visibility = 'visible';
	SumaPizza(PCrust);
}

function SumaPizza(vPrice){
	let tPrice = document.querySelector('strong');
	PricePizza += vPrice;
	tPrice.innerHTML = '$' + PricePizza;
	
}
