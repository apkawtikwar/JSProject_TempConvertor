function  Convert() {
	
	const celsiusInput=document.getElementById("celsius");
	const fehrenheitInput=document.getElementById("fehrenheit");
	const kelvinInput=document.getElementById("kelvin");

	if(celsiusInput.value!== "")
	{
		const celsius=parseFloat(celsiusInput.value);
		const fehrenheit=(celsius*9/5)+32;
		const kelvin=celsius+273.15;
		fehrenheitInput.value=fehrenheit.toFixed(2);
		kelvinInput.value=kelvin.toFixed(2);
	}
}