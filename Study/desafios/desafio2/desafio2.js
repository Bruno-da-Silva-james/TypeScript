var nomes = ["Alice", "Lucas", "Carol", "David"];
function filtroNomes(arrayNomes, nome) {
    if (arrayNomes.indexOf(nome) == -1) {
        console.log("".concat(nome, " n\u00E3o esta na lista"));
    }
    else
        return console.log("".concat(nome, " esta na lista"));
}
filtroNomes(nomes, 'Alice');
