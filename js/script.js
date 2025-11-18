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
    
    anunciar=document.getElementById('certo')
    desc=document.getElementById('DESCRICAO')

    anunciar.addEventListener('click',function(event){
        opcoes=document.querySelectorAll('select')
        let anuncios=JSON.parse(localStorage.getItem('anuncios'))||[]
        info=document.querySelectorAll('input')
        dados={'descricao':desc.value,'produto':info[1].value,'preco':info[2].value,'quantidade':info[3].value,'local':info[0].value,'entrega':opcoes[0].value,'tipo':opcoes[1].value,'escala':opcoes[2].value}
        anuncios.push(dados)
        localStorage.setItem('anuncios',JSON.stringify(anuncios))   




        
    })


    
    
})