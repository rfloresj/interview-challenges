export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  // TODO: implement
  return string.endsWith(final);
}

//SOLUTIONS

/* const regex = new RegExp(`${final}$`).test(string);
return regex; */

/* const result = string.slice(-final.length);
return result === final; */

/* return string
.split("")
.reverse()
.join("")
.startsWith(final.split("").reverse().join("")); */

/* const result = string.substring(string.length - final.length)
result === segundoParam */
