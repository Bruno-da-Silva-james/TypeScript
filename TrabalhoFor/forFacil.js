function forCount() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
}
//forCount()
function printFilme() {
    var filmes = {
        IT_a_coisa: 'terror',
        Fragmentado: 'suspense',
        Anyone_But_You: 'romcom'
    };
    for (var libros in filmes) {
        console.log(libros + ': ' + filmes[libros]);
    }
}
//printFilme()
function printNome() {
    var arrayNome = ['roberto', 'andre', 'silvio', 'felipe', 'ronaldo'];
    arrayNome.forEach(function (nomes) {
        console.log(nomes);
    });
}
//printNome()
function charPrint() {
    var nome = 'Adalberto';
    for (var _i = 0, nome_1 = nome; _i < nome_1.length; _i++) {
        var letras = nome_1[_i];
        console.log(letras);
    }
}
//charPrint()
function somaCalc() {
    var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arrayNumeros.forEach(function (element) {
        if (element % 2 == 0) {
            console.log(element);
        }
    });
}
//somaCalc()
function smallerValue() {
    var arrayNumber = [1, 6, 2, 7, 5];
    arrayNumber.forEach(function (element) {
        console.log(arrayNumber.sort(function (a, b) { return (a - b); }));
    });
}
smallerValue();
