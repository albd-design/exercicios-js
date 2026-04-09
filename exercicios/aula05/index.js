// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade < 12) {
    return "crianca";
  } else if (idade >= 12 && idade <= 17) {
    return "adolescente";
  } else {
    return "adulto";
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  const desconto = preco * percentual / 100;
  return preco - desconto;   
}                                         
 


// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota < 6) {
    return "reprovado";
  } else if (nota >= 6 && nota < 7) {
    return "recuperacao";
  } else {
    return "aprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  // let soma = 0;
  
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }
  
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contador = 0;
  
  for (const caractere of texto) {
    if (caractere === letra) {
      contador++;
    }
  }
  
  return contador;
}
