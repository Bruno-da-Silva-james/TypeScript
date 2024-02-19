var armyNumber = [4, 6, 2, 4, 7];
for (var i = 0; i < armyNumber.length; i + 1) {
    if (armyNumber[i++] > armyNumber[i]) {
        armyNumber[i] = armyNumber[i++];
    }
}
console.log(armyNumber);
