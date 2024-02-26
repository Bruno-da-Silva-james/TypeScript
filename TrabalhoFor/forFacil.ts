function forCount(): void {
    for (let i: number = 0; i <= 5; i++) {
        console.log(i);
    }
}

//forCount()


function printFilme(): void {
    let filmes = {
        IT_a_coisa: 'terror',
        Fragmentado: 'suspense',
        Anyone_But_You: 'romcom'
    }

    for (const libros in filmes) {
        console.log(libros + ': ' + filmes[libros]);
    }

}

//printFilme()



function printNome(): void {
    let arrayNome: Array<string> = ['roberto', 'andre', 'silvio', 'felipe', 'ronaldo']

    arrayNome.forEach(nomes => {
        console.log(nomes);
    });
}

//printNome()

function charPrint(): void {
    let nome: string = 'Adalberto'

    for (const letras of nome) {
        console.log(letras);

    }

}

//charPrint()

function somaCalc(): void {
    let arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arrayNumeros.forEach(element => {
        if (element % 2 == 0) {
            console.log(element);
        }
    });
}

//somaCalc()

function smallerValue(): void {
    let arrayNumber: Array<number> = [1, 6, 2, 7, 5]
    console.log(arrayNumber.sort((a: number, b: number) => (a-b)));
}

//smallerValue()

