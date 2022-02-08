const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const getPeso = event.target.querySelector('#peso');
    const getAltura = event.target.querySelector('#altura');
    const peso = Number(getPeso.value);
    const altura = Number(getAltura.value);

    if (!peso || !altura){
        resultado('Digite um valor válido', false);
        return;
    }
    
    const imc = calcularImc(peso, altura);
    const nivel = getNivelImc(imc);
    const msg = `O seu imc deu ${imc} e você está ${nivel}`;
    resultado(msg, true);
});

function calcularImc(peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
      if (imc >= 39.9) return nivel[5];
      if (imc >= 34.9) return nivel[4];
      if (imc >= 29.9) return nivel[3];
      if (imc >= 24.9) return nivel[2];
      if (imc >= 18.5) return nivel[1];
      if (imc < 18.5) return nivel[0];
}

function resultado(msg, val){
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    
    if (val = true ){
        resultado.classList.add('right');
    }
    else{
        resultado.classList.add('bad');
    }

    p.innerText = msg;
    resultado.appendChild(p);
}

