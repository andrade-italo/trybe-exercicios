const testingScope = (escopo) => {
  const trueExpression =
    escopo === true
      ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`
      : `Não devo ser utilizada fora meu escopo (else)`;
  console.log(trueExpression);
};

testingScope(true);

/* Faça as modificações necessárias na função para que o seu comportamento 
respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals. */
