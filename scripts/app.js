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

// Step Three checkbox check
choiceboxs.forEach(choicebox => {
    const checkbox = choicebox.querySelector('.checkbox3')
    choicebox.addEventListener('click', () => {
        document.querySelectorAll('.choicebox ,.checkbox3').forEach(cb => {
            cb.classList.remove('on')
        })

        checkbox.classList.toggle('on')
        CheckBox3On()
    })

})

continueBtn.addEventListener('click', () => {

    function MoodToday() {
        const steps = document.querySelectorAll('.task-step')
        const linebar = document.querySelectorAll('.line-bar')

        steps[0].classList.contains('One') && CheckBoxOn() ? (steps[0].classList.remove('One'), linebar[1].style.backgroundColor = '#4865db', steps[1].classList.add('Two')) : null

        steps[1].classList.contains('Two') && CheckBox2On() ? (steps[1].classList.remove('Two'), linebar[2].style.backgroundColor = '#4865db', steps[2].classList.add('Three')) : null

        steps[2].classList.contains('Three') && Write() ? (steps[2].classList.remove('Three'), linebar[3].style.backgroundColor = '#4865db', steps[3].classList.add('Four')) : null

        if (steps[3].classList.contains('Four') && CheckBox3On()) {
            steps[3].classList.remove('Four');
            linebar[3].style.backgroundColor = '#4865db'
            logYourMood.classList.toggle('hidden');
            overlay.classList.toggle('active');
            return true
        }

        return false

    }

    const moodContainer = document.querySelector('.mood-container')

    if (MoodToday()) {
        logMoodBtn.style.display = 'none'
         moodContainer.style.display = 'grid'
    }

    //Depois faco funcoes de tipo se o moodtoday for true o bnotao retorna 24hrs depois
    // e se o botao sumir aparece o mood-container
})



//UPDATE PROFILE 

const updateProfileBtn = document.querySelector('.updateProfileBtn')
const updateProfileContainer = document.querySelector('.updateProfile-container')
const exitProfile = document.querySelector('.exitProfile')

updateProfileBtn.addEventListener('click', () => {
    updateProfileContainer.classList.toggle('hidden')
    overlay.classList.toggle('active')
}) 

exitProfile.addEventListener('click', () => {
    updateProfileContainer.classList.toggle('hidden')
     overlay.classList.toggle('active')
})



















