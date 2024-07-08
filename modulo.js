const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

module.exports = {
    sequencial(numero) {

        let contador;
        for( let i =0; i < array.length; i++){

            contador++
            if(array[i] == numero){
                console.log(`o numero ${numero} esta na posição ${i}, e o contador ${contador}`)

            }
        }
    },
    binaria(numero){
        let primeiro =0
        let ultimo = array.length - 1

        let contador = 0

        while (primeiro <= ultimo) {

            let meio = Math.floor((primeiro + ultimo) / 2)
            contador++
            if(array[meio] == numero){
                console.log(`o numero ${numero} esta na posição ${meio}, e o contador ${contador}`)
            
            }else{
                
                if(array[meio] < numero){
                    primeiro = meio + 1

                }else{
                    ultimo = meio - 1
                }
            }
            
        }
    }
}