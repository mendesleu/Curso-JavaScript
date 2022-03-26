function teste1(num){
    if(num > 7)
        console.log(num) // Sem chaves apenas a primeira senteça após o if irá pertencer a ele
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // Cuidado com o ; não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)