import { useCallback, useState } from "react";

export const useDesafio5Controller = () => {
  const [list, setList] = useState<number[]>([]);
  const addItem = () => setList([...list, list.length]);
  const numero = list.length + 1;
  const isPar = useCallback((valor: number) => valor % 2 === 0, []);
  const parOuImpar = useCallback(
    (valor: number) => (isPar(valor) ? "Par" : "Impar"),
    [isPar]
  );
  return { list, addItem, numero, parOuImpar };
};
