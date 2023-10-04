function testarPalavraPalindromo(event) { //função declarada
    event.preventDefault();
    const palavra = event.target.elements.palavra.value;
    const palavraQuebrada = palavra.split("");
    let palavraInvertida = palavraQuebrada.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        document.querySelector('#resultado').textContent = `A palavra ${palavra} é um palíndromo.`;
    } else {
        document.querySelector('#resultado').textContent = `A palavra ${palavra} não é um palíndromo.`;
    }
}

/*const testarPalavraPalindromo = function(palavra) { //função expressão
    const palavraQuebrada = palavra.split("");
    let palavraInvertida = palavraQuebrada.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo.`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo.`);
    }
}*/

const formulario = document.querySelector('form');

formulario.addEventListener('submit', testarPalavraPalindromo);