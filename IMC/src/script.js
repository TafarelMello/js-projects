const btnCalculate = document.getElementById('btnCalculate')

function imcCalc() {
  const height = parseFloat(document.getElementById('height').value)
  const weight = parseFloat(document.getElementById('weight').value)
  const result = document.getElementById('result')

  function imcClassification(valor) {
    let classification

    if (valor < 18.5) {
      classification = 'Magreza.'
    } else if (valor < 24.9) {
      classification = 'Saudável'
    } else if (valor < 29.9) {
      classification = 'Sobrepeso.'
    } else if ((valor < 34, 9)) {
      classification = 'Obesidade Grau 1.'
    } else if (valor < 39.9) {
      classification = 'Obesidade Grau 2.'
    } else if (valor < 40) {
      classification = 'Obesidade Grau 3.'
    } else {
      alert('Ocorreu um erro ao fazer o calculo')
    }

    return classification
  }

  if (height === '' || weight === '') {
    alert('Preencha os dois campos para realizar o calculo.')
  }

  const resultIMC = (weight / (height * height)).toFixed(2)
  console.log('altura', height)
  console.log('peso', weight)
  console.log('resultado', resultIMC)

  result.textContent = `O Resultado foi ${resultIMC} e a classificação foi ${imcClassification(
    resultIMC,
  )}`
}

btnCalculate.addEventListener('click', imcCalc)
