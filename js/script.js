document.addEventListener('DOMContentLoaded', function() {
    // Botão Avançado do Anunciar
    
    
    anunciar=document.querySelector('a')
    info=document.querySelectorAll('input').value

    anunciar.addEventListener('click',function(event){


        dados={'produto':info[0],'preco':info[1],'quantidade':info[2]}
        localStorage.setItem('anuncio',dados)
        

    })

})