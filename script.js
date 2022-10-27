const btnCompute = document.getElementById('btn-compute')

const sumNumbers = () => {
    const x = parseFloat(document.getElementById('num1').value)
    const y = parseFloat(document.getElementById('num2').value)

    document.getElementById('result').value = x + y
}

btnCompute.addEventListener('click', sumNumbers)