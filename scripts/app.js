const logMoodBtn = document.getElementById('logmood-btn')

const logYourMood = document.getElementById('log-your-mood')

const taskStep = document.getElementById('taskstep')

const overlay = document.getElementById('overlay')

const sentimentBox = document.querySelectorAll('.sentimentBox')

const choiceboxs = document.querySelectorAll('.choice-box')

const continueBtn = document.querySelector('.continue-btn');



// Initial mood log entry
logMoodBtn.addEventListener('click', () => {
    logYourMood.classList.toggle('hidden')
    taskStep.classList.toggle('One')
    overlay.classList.toggle('active')
})

// Step One checkbox check
choiceboxs.forEach(choicebox => {
    const checkbox = choicebox.querySelector('.checkbox')
    choicebox.addEventListener('click', () => {
        document.querySelectorAll('.choicebox ,.checkbox').forEach(cb => {
            cb.classList.remove('on')
        })

        checkbox.classList.toggle('on')
        CheckBoxOn()
    })

})



// Step Two checkbox check
sentimentBox.forEach(sentiment => {

    const checkbox2 = sentiment.querySelector('.checkbox2')

    sentiment.addEventListener('click', () => {
        checkbox2.classList.toggle('on')
        CheckBox2On()
    })
})

//TODO: Aprimorar a lógica do continueBtn
continueBtn.addEventListener('click', () => {

    const linebar = document.querySelectorAll('.line-bar')
    const steps = document.querySelectorAll('.task-step')

    if (CheckBoxOn()) {
        steps.forEach(step => {
            step.classList.remove('One')
        })
        if (steps.length > 1) {
            steps[1].classList.add('Two')
        }

        if (linebar.length > 1) {
            linebar[1].style.backgroundColor = '#4865db'
        }

        continueBtn.style.backgroundColor = '#c7d3f7'
        continueBtn.style.cursor = 'default';
    }

    if (CheckBox2On()) {
        const steps = document.querySelectorAll('.task-step')
        steps.forEach(step => {
            step.classList.remove('Two')
        })

        if (steps.length > 2) {
            steps[2].classList.add('Three')
        }


        if (linebar.length > 2) {
            linebar[2].style.backgroundColor = '#4865db'
        }

        continueBtn.style.backgroundColor = '#c7d3f7'
        continueBtn.style.cursor = 'default';
    }
    if (Write()) {
        const steps = document.querySelectorAll('.task-step')
        steps.forEach(step => {
            step.classList.remove('Three')
        })

        if (steps.length > 3) {
            steps[3].classList.add('Four')
            continueBtn.textContent = 'All set!'
        }

        
        if (linebar.length > 3) {
            linebar[3].style.backgroundColor = '#4865db'
        }

        continueBtn.style.backgroundColor = '#c7d3f7'
        continueBtn.style.cursor = 'default';
    }
})

// continueBtn.addEventListener('click', => {

// })



//TODO: Estudar sobre boas práticas no JS para uma organização e código mais limpo










