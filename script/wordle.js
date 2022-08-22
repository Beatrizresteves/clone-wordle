const palavrasValidas = ['sagaz', 'mexer', 'termo', 'nobre', 'afeto', 'sutil', 'vigor', 'fazer', 'poder', 'carne', 'moral', 'plena', ]

const palavraDoDia = 'QUOTE'

let entrada = []

let linha = 1

const teclasDigitadas = (event) => {

    let char = event.key.toUpperCase();
    let teclado = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
         'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', 'ENTER', 'BACKSPACE'];
    if (!teclado.includes(char)){
        console.log('tecla inválida', char)
        return null;
    }

    if (char == 'ENTER' && entrada.length == 5) {
        validarEntrada()

        entrada = [];
        linha +=1;
        return;

    }
    
    if (char == 'BACKSPACE') {
        entrada.pop()
        console.log(entrada)
        return;
    }

    entrada.push(char)
    console.log(entrada)

    exibeLetra(char)

}

function exibeLetra(letra) {
    let elId = `l${linha}c${entrada.length}` // aqui estamos criando a variavel elId atribuindo a ela o valor do quadradinho. ex. l1e5
    const el = document.getElementById(elId) //aqui a gentre atribui a variavel el o valor atribuido na variável acima
    el.textContent = letra // aqui a gente passa o texto ao quadradinho 
}


function tecladoCLick(event) {
    let letra = event.target.innerHTML

    if (letra == 'ENTER' && entrada.length == 5) {
        validarEntrada()
        return;

    }
    
    if (letra == 'BACKSPACE') {
        entrada.pop()
        return;
    }
    entrada.push(letra)
    exibeLetra(letra)

}

function validarEntrada() {
    let palavraEnviada = entrada.join().replaceAll(',','');
    //const palavraDoDiaArray = palavraDoDia.split('')
    const teclado = document.getElementsByTagName("button")

    for (let tecla in teclado) {
        for (let letra = 0; letra < entrada.length; letra++){
            let elId = `l${linha}c${letra + 1}` // aqui estamos criando a variavel elId atribuindo a ela o valor do quadradinho. ex. l1e5
            const el = document.getElementById(elId) //aqui a gentre atribui a variavel el o valor atribuido na variável acima
            
            // const letrasTeclado = document.querySelectorAll(#tecla)
            if (entrada[letra] == palavraDoDia[letra]){
                el.style.backgroundColor = '#6aaa64';
                if (teclado[tecla].innerHTML === entrada[letra]){
                    teclado[tecla].classList.add('fullcorrect')
                }
    
                //if (entrada[letra] == 
            }else if (palavraDoDia.includes(entrada[letra])){
                el.style.backgroundColor = '#c9b458';
                if (teclado[tecla].innerHTML === entrada[letra]){
                    teclado[tecla].classList.add('correct')
                }
    
            }else {
                el.style.backgroundColor = '#787c7e';
                if (teclado[tecla].innerHTML === entrada[letra]){
                    teclado[tecla].classList.add('incorrect')
                }
            }
        }
    }

    if (palavraEnviada == palavraDoDia) {
        alert('palavra correta')
    }
}
        //  }else {
        //     entrada = []
        //      linha +=1
        //  }
     


document.body.addEventListener('keydown', teclasDigitadas)