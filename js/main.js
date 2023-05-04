function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();

        return "executado som";
    } else  {
        console.log('elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); /* lista de elementos classe tecla */

let contador = 0; /* pecorrer a lista de elementos listaDeTeclas*/
while (contador < listaDeTeclas.length) { /* obter o nome da classe do btn clicado */
    const tecla = listaDeTeclas[contador];
    let btnClicado = tecla.classList[1]; /* converter o nome da classe em string(tamplet string) concatenando #som_+btnClicado*/
    btnClicado = `#som_${btnClicado}`;
    listaDeTeclas[contador].onclick = function(){    /* le linha 29 */
        tocaSom(btnClicado); /*  definida de forma fixa, passando sempre o mesmo valor de paramentro na função # tocaSom("#som_tecla_clap"); */
    }
    contador++;
}

listaDeTeclas.forEach(function(lista) { /* pecorrer a lista de elementos listaDeTeclas - alternativa com o FOREACH para não haver repetição de contadores. cont1, cont2...*/
    const tecla = lista; /* obter o lista da classe do btn clicado */
    let btnClicado = tecla.classList[1];  /* converter o nome da classe em string(tamplet string) concatenando #som_+btnClicado*/
    btnClicado = `#som_${btnClicado}`;
    lista.onclick = function() {
        tocaSom(btnClicado);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento){
        tecla.classList.remove('ativa');
    }
});

/* ao clicar no btn da classe tecla_pom chama função tocaSomPom. sem o uso de parênteses no nome da função a execução não será imediata, somente conforme o click.como se em modo inline proprio html houvesse a função onclick('tocaSomPom'). de modo a ser chamado # document.querySelector('.tecla_pom').onclick = tocaSomPom. alternativa chamar função anonima e dentro dela função com o parametro.; */