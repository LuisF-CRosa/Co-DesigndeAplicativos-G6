document.addEventListener('DOMContentLoaded', function() {
    // Botão Avançado do Anunciar
    
    
    anunciar=document.querySelector('a')
    info=document.querySelectorAll('input').value

    anunciar.addEventListener('click',function(event){


        dados={'produto':info[0],'preco':info[1],'quantidade':info[2]}
        localStorage.setItem('anuncio',dados)
        
    })

    elementos = document.querySelectorAll('.elemento')
    bolsa = document.querySelector('.bolsa') 
    elementos[1].style.borderColor = 'green'
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