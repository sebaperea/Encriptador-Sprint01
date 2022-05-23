function copiarTexto()
{
	const txtAreaMuestra = document.querySelector("#textAreaMuestra");//Leer valor 
	const txtAreaMensaje = document.querySelector("#textAreaMensaje");

	document.querySelector("#textAreaIngreso").value = txtAreaMuestra.value;
	txtAreaMuestra.select();

	if(document.execCommand('copy',true,"Copiado") && txtAreaMuestra.value !="")
	{
		txtAreaMensaje.value = "Texto Copiado";
	}
	else
	{
		txtAreaMensaje.value = "Ningun mensaje fue encontrado, ingresa el que deseas";
	}

}
const botonCopiar = document.querySelector("#btnCopiar");
botonCopiar.onclick = copiarTexto;


function encriptarTexto()
{
	const txtAreaIngreso = document.querySelector("#textAreaIngreso");//Leer valor
	const txtAreaMuestra = document.querySelector("#textAreaMuestra");
	var textoIngresado = txtAreaIngreso.value;
	var textoEncriptado = [];
	for(i=0; i < textoIngresado.length; i++)
	{	
		var letraEncontrada = false;
		if(textoIngresado[i] == "e")
		{		
			textoEncriptado[i] = "enter";
			letraEncontrada = true;
		}

		if(textoIngresado[i] == "i")
		{		
			textoEncriptado[i] = "imes";
			letraEncontrada = true;
		}

		if(textoIngresado[i] == "a")
		{		
			textoEncriptado[i] = "ai";
			letraEncontrada = true;
		}

		if(textoIngresado[i] == "o")
		{		
			textoEncriptado[i] = "ober";
			letraEncontrada = true;
		}

		if(textoIngresado[i] == "u")
		{		
			textoEncriptado[i] = "ufat";
			letraEncontrada = true;
		}

		else
		{
			if(letraEncontrada == false)
			{
			textoEncriptado[i] = textoIngresado[i];
			}
		}
	}
	
	var resultadoEncrip = "";
	for(i=0; i < textoEncriptado.length; i++)
	{
		resultadoEncrip += textoEncriptado[i];
	}
	txtAreaMuestra.value = resultadoEncrip;
}
const botonEncriptar = document.querySelector("#btnEncriptar");
botonEncriptar.onclick = encriptarTexto;



function desencriptarTexto()
{
	const txtAreaIngreso = document.querySelector("#textAreaIngreso");//Leer valor
	const txtAreaMuestra = document.querySelector("#textAreaMuestra");
	var textoIngresadoD = txtAreaIngreso.value;
	var textoDesencriptado = [];
	var preDesencrip = "";
	var palabra = "";
	var frases = ["ai","2","enter","5","imes","4","ober","4","ufat","4"];

	for(i=0; i < textoIngresadoD.length; i++)
	{	
		var letraEncontrada = false;
		palabra += textoIngresadoD[i];
		preDesencrip = "";
		for(j = 0; j <= frases.length; j++)
		{

			if(palabra.indexOf(frases[j]) != -1)
				{
					preDesencrip = palabra.substr(palabra.indexOf(frases[j]),(frases[j+1]));
				}
		}
		
		if(preDesencrip == "enter")
		{	
			textoDesencriptado[i-1] = "";
			textoDesencriptado[i-2] = "";
			textoDesencriptado[i-3] = "";
			textoDesencriptado[i-4] = "e";
			letraEncontrada = true;
			palabra = "";
		}

		if(preDesencrip == "imes")
		{	
			textoDesencriptado[i-1] = "";
			textoDesencriptado[i-2] = "";
			textoDesencriptado[i-3] = "i";
			letraEncontrada = true;
			palabra = "";
		}

		if(preDesencrip == "ai")
		{	
			textoDesencriptado[i-1] = "";
			textoDesencriptado[i-1] = "a";
			letraEncontrada = true;
			palabra = "";

		}

		if(preDesencrip == "ober")
		{	
			textoDesencriptado[i-1] = "";
			textoDesencriptado[i-2] = "";
			textoDesencriptado[i-3] = "o";
			letraEncontrada = true;
			palabra = "";
		}

		if(preDesencrip == "ufat")
		{	
			textoDesencriptado[i-1] = "";
			textoDesencriptado[i-2] = "";
			textoDesencriptado[i-3] = "u";
			letraEncontrada = true;
			palabra = "";
		}

		else
		{
			if(letraEncontrada == false)
			{
				textoDesencriptado[i] = textoIngresadoD[i];
			}
		}
		
	}
	
	var resultadoDesencrip = "";
	for(i=0; i < textoDesencriptado.length; i++)
	{
		if(textoDesencriptado[i] != undefined)
		{
		resultadoDesencrip += textoDesencriptado[i];
		}
	}
	txtAreaMuestra.value = "";	
	txtAreaMuestra.value = resultadoDesencrip;
}
const botonDesencriptar = document.querySelector("#btnDesencriptar");
botonDesencriptar.onclick = desencriptarTexto;
