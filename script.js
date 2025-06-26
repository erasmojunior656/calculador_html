function soma(){

    let numero_um = parseInt(document.getElementById('primeiro').value);
    let numero_dois = parseInt(document.getElementById('segundo').value);

    let soma_numero = numero_um + numero_dois;
    
    document.getElementById('resultado').textContent = 'Resultado: ' + soma_numero;

}

function subtrair(){

    let numero_um = parseInt(document.getElementById('primeiro').value);
    let numero_dois = parseInt(document.getElementById('segundo').value);

    let soma_numero = numero_um - numero_dois;
    
    document.getElementById('resultado').textContent = 'Resultado: ' + soma_numero;

}

function multiplicar(){

    let numero_um = parseInt(document.getElementById('primeiro').value);
    let numero_dois = parseInt(document.getElementById('segundo').value);

    let soma_numero = numero_um * numero_dois;
    
    document.getElementById('resultado').textContent = 'Resultado: ' + soma_numero;
}

function divisao(){

    let numero_um = parseFloat(document.getElementById('primeiro').value);
    let numero_dois = parseFloat(document.getElementById('segundo').value); 

    if(numero_dois == 0){

    alert("Não pode dividir por 0");
    return;
}

    let soma_numero = numero_um / numero_dois;
    
    document.getElementById('resultado').textContent = 'Resultado: ' + soma_numero;

}

function maior(){

    let numero_um = parseFloat(document.getElementById('primeiro').value);
    let numero_dois = parseFloat(document.getElementById('segundo').value);

    if(numero_um > numero_dois){
    document.getElementById('resultado').textContent = 'O maior número é ' + numero_um;
}
    if(numero_um < numero_dois){
    document.getElementById('resultado').textContent = 'O maior número é ' + numero_dois;
}
    if(numero_um == numero_dois){
    document.getElementById('resultado').textContent = 'Os números são iguais';
}
}