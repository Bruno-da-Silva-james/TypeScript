

function romanToInt(s: string): number {
  let romansToNumber: number = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I": romansToNumber += 1 
      break;

      case "V": romansToNumber += 5 
      break;

      case "X": romansToNumber += 10 
      break;

      case "L": romansToNumber += 50 
      break;

      case "C": romansToNumber += 100 
      break;

      case "D": romansToNumber += 500 
      break;

      case "M": romansToNumber += 1000 
      break;
    
      default:
        romansToNumber += 0
        break;
    }    
  }
  
  return romansToNumber
}

console.log(romanToInt("III"));

