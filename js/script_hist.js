document.addEventListener('DOMContentLoaded', function() {
    dados=JSON.parse(localStorage.getItem('anuncios'))||[]
    list=['produto','quantidade','escala','preco','local','entrega','tipo','descricao']
    i=dados.length
    for(hist of dados)
        for (dado of list){
                hist[dado]=hist[dado].toString()
            if (hist[dado]==""){
                hist[dado]='Não informado '
            }
        }
    
    espinha=document.querySelector('main')

    while(i!=0){
        n=0
        i-=1
        caixa=document.createElement('section')
        divpu=document.createElement('ul')
        divprod=document.createElement('li')
        divpis1=document.createElement('li')
        divpis2=document.createElement('li')
        divdescr=document.createElement('li')
        subdivqtd=document.createElement('p')
        subdivprc=document.createElement('p')
        subdivlcl=document.createElement('p')
        subdivopc1=document.createElement('p')
        subdivopc2=document.createElement('p')

        subdivlcl.innerHTML='Região de entrega '+dados[i]['local']
        subdivqtd.innerHTML='Quantidade vendida '+dados[i]['quantidade']
        if(dados[i]['preco']=='Não informado '){
            subdivprc.innerHTML='Preço '+dados[i]['preco']    
        }
        else{
            subdivprc.innerHTML='Preço '+dados[i]['preco']+dados[i]['escala']
        }
        divprod.innerHTML=dados[i]['produto']
        subdivopc1.innerHTML=dados[i]['tipo']
        subdivopc2.innerHTML=dados[i]['entrega']
        divdescr.innerHTML=dados[i]['descricao']



        divpu.classList.add('eixo_prin')
        divprod.classList.add('divisoes')
        divpis1.classList.add('subdivisoes')
        divpis2.classList.add('subdivisoes')
        caixa.classList.add('caixa')
        subdivlcl.classList.add('conteudo')
        subdivprc.classList.add('conteudo')
        subdivopc1.classList.add('conteudo')
        subdivopc2.classList.add('conteudo')
        subdivqtd.classList.add('conteudo')
        divdescr.classList.add('desc')

        

        espinha.appendChild(caixa)
        caixa.appendChild(divpu)

        divpu.appendChild(divprod)
        divpu.appendChild(divpis1)
        divpis1.appendChild(subdivqtd)
        divpis1.appendChild(subdivprc)
        divpu.appendChild(divpis2)
        divpis2.appendChild(subdivlcl)
        divpis2.appendChild(subdivopc1)
        divpis2.appendChild(subdivopc2)
        divpu.appendChild(divdescr)
    }




})