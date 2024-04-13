export default function validarParéntesis(parentesis: string): boolean {
  // TODO: implement
  for (let i = 0; i < parentesis.length; i++) {
    if (parentesis[0] === ")") {
      return false;
    }
    for (let j = 0; j < i; j++) {
      if (parentesis[j + 1] === ")") {
        return true;
      }
    }
  }
  return false;
}

// Gonzy solution
// export default function validarParéntesis(parentesis: string): boolean {
//   // TODO: implement
//   const buffer = parentesis.replace(/\(\)/, "");
//   if(buffer === ""){
//     return true;
//   } else if(buffer === parentesis){
//     return false;
//   }

//   return validarParéntesis(buffer);
// }
