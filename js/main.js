function MarioBin2Dec() {
    var infobien = document.getElementById('infobien')
    var infoerror = document.getElementById('infoerror')
    var resultadobinario = document.getElementById('resultadobinario').value
    var result = document.getElementById('result')
    result.innerHTML = parseInt(resultadobinario, 2);
    var numero = resultadobinario.charAt(resultadobinario.length - 1)
    
    if (resultadobinario == '') {
        result.innerHTML = ''
    }
    if (numero == 0 || numero == 1) {
        infobien.innerHTML = 'Here is your decimal!'
        infoerror.innerHTML = ''
    } else {
        result.innerHTML = 'Waiting for a valid binary number...'
    }
    if (numero >> 1 || numero >> 10000) {
        infobien.innerHTML = ''
        infoerror.innerHTML = 'You entered a non-binary digit (please enter only 0 or 1)'
    }
    if (numero == '') {
        infobien.innerHTML = ''
        infoerror.innerHTML = ''
    }
}