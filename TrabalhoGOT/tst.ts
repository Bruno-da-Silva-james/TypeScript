let armyNumber: Array <number> = [4,6,2,4,7]
let phantomNumber: number = 0
for (let i = 0; i < armyNumber.length; i + 1) {
    if (armyNumber[i + 1] > armyNumber[i]) {
        armyNumber[i] = armyNumber[i++]
    }
}

console.log(armyNumber);
