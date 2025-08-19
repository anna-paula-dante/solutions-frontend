/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  Componentes react precisam retornar apenas 1 elemento
  a partir do momento que se tem mais de um elemento e preciso
  utilizar um elemento de encapsulamento como: div, header, section.
  Ou um fragment que não adicionaria um elemento mas envolveria os que o componente possui(<> </>).
*/

export const Desafio1 = () => {
  return (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  );
};
