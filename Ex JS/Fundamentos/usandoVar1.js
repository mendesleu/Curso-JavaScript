{
    {
        {
            {
                var sera = "Será"
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
    // Se definir um variável var dentro da função ela só funciona dentro da função
}

teste()
console.log(local) // Não mostrará a variável pois está fora da função

// Var não tem escopo de bloco
