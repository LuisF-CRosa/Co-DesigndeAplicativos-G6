document.addEventListener('DOMContentLoaded', function() {

    // Botão Avançado do Anunciar

    avancado_tela=document.querySelector('.janela_avancado')
    bot_avancado=document.querySelector('.avancado')
    anunciar_tela=document.querySelector('.anunciar_tela')

    bot_avancado.addEventListener('click', function(event) {
        avancado_tela.style.display = 'flex'
        event.stopPropagation()
    })

    anunciar_tela.addEventListener('click', function(event) {
        avancado_tela.style.display = 'none'
    })

    // Back
    
    anunciar=document.querySelector('a')
    info=document.querySelectorAll('input').value
    anunciar=document.getElementById('certo')

    anunciar.addEventListener('click',function(event){
        let anuncios=JSON.parse(localStorage.getItem('anuncios'))||[]
        info=document.querySelectorAll('input')
        dados={'produto':info[0].value,'preco':info[1].value,'quantidade':info[2].value}
        anuncios.push(dados)
        localStorage.setItem('anuncios',JSON.stringify(anuncios))   
        
    })

    
    // Encontra todos os elementos e os coloca numa especie de lista
    elementos = document.querySelectorAll('.elemento')
    //encontra a imagem que sera modifica
    bolsa = document.querySelector('.bolsa')
    // muda a cor da borda da imagem inicial por verde
    elementos[1].style.borderColor = 'green'
    // faz um for criando o mesmo tipo de evento para todos os elementos que ao clique muda a imagem torna todos os outros com a borda preta e a deste elemento verde
    for (elemente of elementos){
        if (elemente == elementos[0]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = '../img/Grafico_produto1.png'
                elementos[0].style.borderColor = 'green'
            })
        }
        else if(elemente == elementos[1]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = '../img/grafico_ban.jpeg'
                elementos[1].style.borderColor = 'green'
            })
        }
        else if(elemente == elementos[2]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = '../img/Grafico_produto.png'
                elementos[2].style.borderColor = 'green'
            })
        }
        else if(elemente == elementos[3]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = '../img/Grafico_produto2.png'
                elementos[3].style.borderColor = 'green'
            })
        }
        else if(elemente == elementos[4]){
            elemente.addEventListener('click',function(){
                for(element of elementos){
                    element.style.borderColor = 'black'
                }
                bolsa.src = '../img/Grafico_4.png'
                elementos[4].style.borderColor = 'green'
            })
        }
    }
})