import React from "react";
import { Item } from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  1. Utilização de useCallback na função de parOuImpar de UseDesafioController para que não seja criada uma nova referencia a cada nova execução
  2. Utilização dde memo no componente Item para que não seja renderizado um novo componente a toda execução e sim apenas caso passe um novo valor para o mesmo
  3. Testes apresentavam 1 deferença de 1 espaço no 'é' de item. isso causava erro e não compilava os teste. foi gerado uma nova snapshot

*/

export function Desafio5() {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  console.log(list);
  return (
    <>
      <button onClick={addItem} data-testid="btn1">
        adiciona + 1 item na lista
      </button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item) => (
          <Item key={item} valor={item} parOuImpar={parOuImpar} />
        ))}
      </ul>
      <p>
        {numero} é {parOuImpar(numero)}
      </p>
    </>
  );
}
