
//seletores e variaveis

let tenta = 6;
let palavraCategoria;
let palavraSorteada;
let listaDinamica=[];

const palavras= [

	p1 = {
		nome:'ALURA',
		categoria: 'CURSOS'
	},
	p2 = {
		nome:'ORACLE',
		categoria: 'CURSOS'
	},
	p3 = {
		nome: 'HTML',
		categoria:'CURSOS'
	},
	p4= {
		nome: 'LÁPIS',
		categoria: 'MATERIAL DE PAPELARIA'
	},
	p5 = {
		nome: 'APONTADOR',
		categoria: 'MATERIAL DE PAPELARIA'
	}, 
	p6 = {
		nome: 'CADERNO',
		categoria: 'MATERIAL DE PAPELARIA'
	},  
	p7 = {
		nome: 'FRANCA',
		categoria: 'PAÍS'
	},
	p8 = {
		nome: 'INGLATERRA',
		categoria: 'PAÍS'
	}, 
	p9 = {
		nome: 'NEPAL',
		categoria: 'PAÍS'
	}, 
	p10 = {
		nome: 'URUBU',
		categoria: 'ANIMAL'
	},
	p11 = {
		nome: 'HIPOPOTAMO',
		categoria: 'ANIMAL'
	},
	p12 = {
		nome: 'ZEBRA',
		categoria: 'ANIMAL'
	},
	p13 = {
		nome: 'MESA',
		categoria: 'OBJETO'
	},
	p14 = {
		nome: 'CADEIRA',
		categoria: 'OBJETO'
	},
	p15 = {
		nome: 'ABACO',
		categoria: 'OBJETO'
	},
	p16 = {
		nome: 'PERSISTIR',
		categoria: 'OBJETIVO'
	},
	p17 = {
		nome: 'FOCAR',
		categoria: 'OBJETIVO'
	},
	p18 = {
		nome: 'RESISTIR',
		categoria: 'OBJETIVO'
	},
	p19 = {
		nome: 'LAURA',
		categoria: 'NOME'
	},
	p20 = {
		nome: 'RODRIGO',
		categoria: 'NOME'
	},
	p21 = {
		nome: 'JASPION',
		categoria: 'NOME'
	},
	p22 = {
		nome: 'OUTUBRO',
		categoria: 'MÊS'
	},

	p23 = {
		nome: 'ABRIL',
		categoria: 'MÊS'
	},
	p24 = {
		nome: 'NOVEMBRO',
		categoria: 'MÊS'
	},


];
var palavra = palavras[Math.floor(Math.random()*palavras.length)];

function escolherPalavra(){
	
	var palavraSecreta = palavra;

	palavraSorteada = palavraSecreta.nome;
	palavraCategoria = palavraSecreta.categoria;

    return palavraSecreta;	
}
escolherPalavra()

function naTela(){
	const categoria = document.getElementById("categoria");
	categoria.innerHTML = palavraCategoria;
	
	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

	for(i = 0; i < palavraSorteada.length; i++){
		if(listaDinamica[i] == undefined ){
			listaDinamica[i] = "&nbsp;";
			palavraTela.innerHTML =  palavraTela.innerHTML +  "<div class='letras'>" + listaDinamica[i] + "</div>" 

		}
		else {
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}

	}

}
naTela()

function vrfLtrClick(key){
	if (letras.length < 1 || letras.indexOf(key) < 0){
		letras.push(key)
		return false
	}
	else {
		letras.push(key)
		return true
	}
}
function addPlvrCrt(i) {
	palavraCorreta += palavra[i].toUpperCase()
}

function addPlvrErr(letter) {
	if (palavra.indexOf(letter) <= 0) {
	  erros -= 1
	}
}

function verifLtr(letra){

	document.getElementById("tecla-" + letra).disabled = true;

	if(tenta > 0)
	{
		mudarStyleLetra("tecla-" + letra);
		comparaList(letra);
		naTela();
	}
	
}
function mudarStyleLetra(tecla){

    document.getElementById(tecla).style.background ="#C71585";
    document.getElementById(tecla).style.color="#ffffff";
}

function comparaList(letra){
	const pos = palavraSorteada.indexOf(letra);
	if(pos < 0) 
	{
		tenta--
		carregaImagenForca()
		
		if(tenta == 0){
			openModal("Ops! Você perdeu!", "Nosso amigo bateu as botas, a palavra era: " + palavraSorteada);
		}
	}
	else {
		for(i = 0; i < palavraSorteada.length; i++)
		{
			if(palavraSorteada[i] == letra)
			{
				listaDinamica[i] = letra;
			}
		}
	}

	let venceu = true;
	for(i = 0; i < palavraSorteada.length; i++){
		if(palavraSorteada[i] != listaDinamica[i]){
			venceu = false;
		}
	}
	if(venceu == true) {
		openModal("Você Venceu!!!", "Nosso amigo foi salvo por pouco! Ufa...");
		tenta = 0;
	}
}
function carregaImagenForca(){
    switch(tenta){
        case 5:
            document.getElementById("imagens").style.background = "url('/imagens/forca01.png')";
            break;

        case 4:
            document.getElementById("imagens").style.background = "url('/imagens/forca02.png')";
            break;

        case 3:
            document.getElementById("imagens").style.background = "url('/imagens/forca03.png')";
            break;

        case 2:
            document.getElementById("imagens").style.background = "url('/imagens/forca04.png')";
            break;

        case 1:
            document.getElementById("imagens").style.background = "url('/imagens/forca05.png')";
            break;

        case 0:
            document.getElementById("imagens").style.background = "url('/imagens/forca06.png')";
            break;

        default:
            document.getElementById("imagens").style.background = "url('/imagens/forca.png')";
            break;
	}
}

function openModal(titulo, corpo){

	let modalT = document.getElementById("title-modal");
	modalT.innerText = titulo;
	let modalC = document.getElementById("modalbody");
	modalC.innerHTML = corpo;
	$("#modalI").modal({
		show: true
	});
}

let btnReinicio = document.getElementById("reiniciar");

btnReinicio.addEventListener("click", function(){
	location.reload(); //reinicia a pagina para novo jogo.

})