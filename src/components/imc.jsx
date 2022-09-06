export default function IMC({ altura, peso }) {
  function calculadora(altura, peso) {
    return (peso / (((altura / 100) * altura) / 100)).toFixed(2);
  }

  const imc = calculadora(altura, peso);

  function parserIMC() {
    if (imc <= 17) {
      return "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 18.49) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.99) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.99) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 34.99) {
      return "Obsidade I";
    } else if (imc >= 35 && imc < 39.99) {
      return "Obsidade II (Severa)";
    } else if (imc >= 40) {
      return "Obsidade III (Mórbida)";
    } else {
      return "Erro ao parsear o imc";
    }
  }

  return <>A sua situação é: {parserIMC(imc)}</>;
}
