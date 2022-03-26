const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()
// Let irá retornar os números definidos nos vetores e não o ultimo como em var