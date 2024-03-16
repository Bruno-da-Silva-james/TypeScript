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

function checkVowel(): void {
    let sturing: string = 'abacate'
    let a:number = 0
    let e:number = 0
    let i:number = 0
    let o:number = 0
    let u:number = 0

    for (const vogal of sturing) {
        switch (vogal) {
            case 'a':
                a++
                break;
            case 'e':
                e++
                break;
            case 'i':
                i++
                break;
            case 'o':
                o++
                break;
            case 'u':
                u++
                break;
            default:
                console.log('nao ha vogais');
                break;
        }
    }
    console.log(`quantidade de cada vogal\na:${a}\ne:${e}\ni:${i}\no:${o}\nu:${u}`);
    
}

checkVowel()

*/


