import { useState } from "react";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  componentes react que utilizam array.map precisam que cadda elemento que o map retorne 
  possua uma key (string ou numero unico do elemento) que o identifique exclusivamente entre os outros
  itens.
*/

export const Desafio2 = () => {
  const [list, setList] = useState([1, 2]);

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>item: {item}</li>
      ))}
    </ul>
  );
};
