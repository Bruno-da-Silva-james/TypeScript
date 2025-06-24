let nomes: Array <string> = ["Alice", "Lucas", "Carol", "David"];

function filtroNomes(arrayNomes: Array <string>, nome: string) {
    if (arrayNomes.indexOf(nome) == -1) {
        console.log(`${nome} não esta na lista`);
    }else return console.log(`${nome} esta na lista`);
}

filtroNomes(nomes,'Alice')





