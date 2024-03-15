type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: string;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  // TODO: implement
  return input.nombres.map((name, index) => ({
    id: String(index + 1),
    nombre: name,
    edad: input.edades[index],
  }));
}
