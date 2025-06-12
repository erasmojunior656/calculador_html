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