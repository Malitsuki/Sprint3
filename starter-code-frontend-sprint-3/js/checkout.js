

// Exercise 6
function validate() {
	var error = 0;
	let field = [];
	// Get the input fields
	addEventListener('submit', e => {
		e.preventDefault()
	
	var fName = document.getElementById("fName");
	var	fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	
	
		
	// Get the error elements
	
	var errorName = document.getElementById("errorName");
	var	errorEmail = document.getElementById("errorEmail"); 
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var	errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	
	var  regexName= new RegExp(/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/);
	var  regexPassword= new RegExp (/\A(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}\Z/);
	var regexEmail= new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

	
	
	// fName Validation >>>>>>>>>>>>>
	
	if (fName.value.length <= 3 || fName.value === "") {
		errorName.style.display = 'block';
		fName.style.border = '5px solid red';
	}
	if (fName.value.length >3 && !regexName.test(fName.value)) {
		errorName.style.display = 'block';
		fName.style.border = '5px solid red';
	}
	if (fName.value.length >3 && regexName.test(fName.value)) {
		errorName.style.display = 'none';
		fName.style.border = ''

	}
	
	// fEmail Validation >>>>>>>>

	if (fEmail.value.length <= 3 || fEmail.value === "") {
		errorEmail.style.display = 'block';
		fEmail.style.border = '5px solid red';
	}
	if (fEmail.value.length >3 && !regexEmail.test(fEmail.value)) {
		errorEmail.style.display = 'block';
		fEmail.style.border = '5px solid red';
	}
	if (fEmail.value.length >3 && regexEmail.test(fEmail.value)) {
		errorEmail.style.display = 'none';
		fEmail.style.border = ''

	}

	//fAddress Validation >>>>>>>>>>>>

	if (fAddress.value.length <= 3 ) {
		errorAddress.style.display = 'block';
		fAddress.style.border = '5px solid red';
	}
	if (fAddress.value.length > 3) {
		errorAddress.style.display = 'none';
		fAddress.style.border = '';
	}

	//fLastN Validation >>>>>>

	if (fLastN.value.length <= 3 || fLastN.value === "") {
		errorLastN.style.display = 'block';
		fLastN.style.border = '5px solid red';
	}
	if (fLastN.value.length >3 && !regexName.test(fLastN.value)) {
		errorLastN.style.display = 'block';
		fLastN.style.border = '5px solid red';
	}
	if (fLastN.value.length >3 && regexName.test(fLastN.value)) {
		errorLastN.style.display = 'none';
		fLastN.style.border = ''

	}

	//fPassword Validation >>>>>>>>>>>>>>>>

	if (fPassword.value.length <= 3 || fPassword.value === "") {
		errorPassword.style.display = 'block';
		fPassword.style.border = '5px solid red';
	}
	if (fPassword.value.length >3 && !regexPassword.test(fPassword.value)) {
		errorPassword.style.display = 'block';
		fPassword.style.border = '5px solid red';
	}
	if (fPassword.value.length >3 && regexPassword.test(fPassword.value)) {
		errorPassword.style.display = 'none';
		fPassword.style.border = ''

	}

	//fPhone Validation (la entrada fPhone sólo te deja escribir números....)>>>>>>>>>>>>>>

	if (fPhone.value.length <= 3 || fPhone.value != NaN ) {
		errorPhone.style.display = 'block';
		fPhone.style.border = '5px solid red';
	}
	if (fPhone.value.length > 3) {
		errorPhone.style.display = 'none';
		fPhone.style.border = '';
	}

})
	

}
