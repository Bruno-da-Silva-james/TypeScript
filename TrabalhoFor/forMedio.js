/*
function isPrimo(num: number): boolean {
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
}

function main() {
    let arrayNumber: Array<number> = [1,5,3,4,6,10,11]
    let arrayPrimo: Array<number> = []

    arrayNumber.forEach(element => {
        if (isPrimo(element)) {
            arrayPrimo.push(element)
        }
    });

    console.log(arrayPrimo);
    
}
 

main()
*/
function checkVowel() {
    var sturing = 'abacate';
    var a = 0;
    var e = 0;
    var i = 0;
    var o = 0;
    var u = 0;
    for (var _i = 0, sturing_1 = sturing; _i < sturing_1.length; _i++) {
        var vogal = sturing_1[_i];
        switch (vogal) {
            case 'a':
                a++;
                break;
            case 'e':
                e++;
                break;
            case 'i':
                i++;
                break;
            case 'o':
                o++;
                break;
            case 'u':
                u++;
                break;
            default:
                console.log('nao ha vogais');
                break;
        }
    }
    console.log("quantidade de cada vogal\na:".concat(a, "\ne:").concat(e, "\ni:").concat(i, "\no:").concat(o, "\nu:").concat(u));
}
checkVowel();
