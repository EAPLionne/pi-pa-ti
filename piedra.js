function aleatorio (mínimo, máximo)
{
	var numero = Math.floor( Math.random() * (máximo - mínimo +1) + mínimo)
	return numero;
}

//Math.floor : redondea los numeros
//Math.random : genera un numero aleatorio 
// aleatorio * (max-min + 1) + min

var piedra = 0
var papel = 1
var tijera = 2

var opciones ["Piedra","Papel","Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio (0,2) ;

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\ntijera: 2" , 0);
             //prompt: Para que te respondan.

alert ("Elegiste " + opciones [opcionUsuario]);
alert ("La maqiuina eligió " + opcionMaquina);


if (opcionUsuario == piedra)
{
	if (opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if (opcionMaquina == papel)
	{
		alert ("Perdiste :( ");

	}
	else if (opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}

else if (opcionUsuario == papel)
{
	
	if (opcionMaquina == piedra)
	{
		alert ("Ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste :( ");
	}
}

else if (opcionUsuario== tijera)
{

	if (opcionMaquina == piedra)
	{
		alert ("Perdiste :( ");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}

else
{
	alert("Eso no vale");
}