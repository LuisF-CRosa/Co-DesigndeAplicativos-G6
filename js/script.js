document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    // Botão Avançado do Anunciar
    
=======
    
    anunciar=document.querySelector('a')
    info=document.querySelectorAll('input').value

    anunciar.addEventListener('click',function(event){


        dados={'produto':info[0],'preco':info[1],'quantidade':info[2]}
        localStorage.setItem('anuncio',dados)
        

    })

>>>>>>> 412cd49256c4c813a9ce564a3f94e6aaecec4431
})