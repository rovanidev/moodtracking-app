function CheckBoxOn() {

    const checkboxon = document.querySelector('.checkbox.on')

    if (checkboxon) {
            continueBtn.style.backgroundColor = '#4865db'
            continueBtn.style.cursor = 'pointer';
        } else {
            continueBtn.style.backgroundColor = '#c7d3f7'
            continueBtn.style.cursor = 'default';
        }

    return checkboxon
}

function CheckBox2On() {

    const checkboxon = document.querySelector('.checkbox2.on')

    if (checkboxon) {
            continueBtn.style.backgroundColor = '#4865db'
            continueBtn.style.cursor = 'pointer';
        } else {
            continueBtn.style.backgroundColor = '#c7d3f7'
            continueBtn.style.cursor = 'default';
        }

    return checkboxon
}


function Write() {
    const message = document.getElementById('message')

    message.addEventListener('input', Write); //o Input dispara sempre que o usuario digita, apaga ou cola texto e o write faz a verificacao

    if(message.value.length > 0) {
        continueBtn.style.backgroundColor = '#4865db'
            continueBtn.style.cursor = 'pointer';
            return true
    }else {
            continueBtn.style.backgroundColor = '#c7d3f7'
            continueBtn.style.cursor = 'default';
            return false
        }
}




