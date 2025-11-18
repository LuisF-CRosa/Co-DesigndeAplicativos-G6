document.addEventListener('DOMContentLoaded', function() {
    // Encontra todos os elementos e os coloca numa especie de lista
    const elementos = document.querySelectorAll('.elemento')
    const elementos2 = document.querySelectorAll('.elemento2')
    //encontra a imagem que sera modifica
    const bolsa = document.querySelector('.bolsa')
    // muda a cor da borda da imagem inicial por verde
    elementos[1].style.borderColor = 'green'
    // faz um for criando o mesmo tipo de evento para todos os elementos que ao clique muda a imagem torna todos os outros com a borda preta e a deste elemento verde
    for (elemente of elementos){
        if (elemente == elementos[0]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = 'img/Grafico_produto1.png'
                elementos[0].style.borderColor = 'green'
                elementos2[1].innerHTML = 'Valor Médio: 2,1134'
                elementos2[2].innerHTML = 'Valor Mínimo: 2,0354'
            })
        }
        else if(elemente == elementos[1]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = 'img/grafico_ban.jpeg'
                elementos[1].style.borderColor = 'green'
                elementos2[1].innerHTML = 'Valor Médio: 2,1364'
                elementos2[2].innerHTML = 'Valor Mínimo: 2,0236'
            })
        }
        else if(elemente == elementos[2]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = 'img/Grafico_produto.png'
                elementos[2].style.borderColor = 'green'
                elementos2[1].innerHTML = 'Valor Médio: 2,2534'
                elementos2[2].innerHTML = 'Valor Mínimo: 2,0201'
            })
        }
        else if(elemente == elementos[3]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = 'img/Grafico_produto2.png'
                elementos[3].style.borderColor = 'green'
                elementos2[1].innerHTML = 'Valor Médio: 2,2839'
                elementos2[2].innerHTML = 'Valor Mínimo: 2,0201'
            })
        }
        else if(elemente == elementos[4]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = 'img/Grafico_4.png'
                elementos[4].style.borderColor = 'green'
                elementos2[1].innerHTML = 'Valor Médio: 2,1965'
                elementos2[2].innerHTML = 'Valor Mínimo: 1,993'
            })
        }
    }})