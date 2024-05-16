const numero = parseInt(process.argv[2]);

function esPar(numero) {
    if(numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}


esPar(numero);
