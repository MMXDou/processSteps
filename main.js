let currentStep = 1

const steps = document.querySelectorAll('.step')

const buttons = document.querySelectorAll('.button')

const progressing = document.querySelector('.progress')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button === buttons[0]) {
            if (currentStep > 1) {
                currentStep--
            }
        }
        else {
            if (currentStep < 4) {
                currentStep++
            }
        }
        doProgress()
    })

});


function doProgress() {

    switch (currentStep) {
        case 1:
            steps[0].classList.add('progressed')
            steps[1].classList.remove('progressed')
            steps[2].classList.remove('progressed')
            steps[3].classList.remove('progressed')
            progressing.style.width = '0'
            buttons[0].classList.add('disabledButton')
            buttons[0].disabled = true
            break
        case 2:
            steps[0].classList.add('progressed')
            steps[1].classList.add('progressed')
            steps[2].classList.remove('progressed')
            steps[3].classList.remove('progressed')
            progressing.style.width = '33.3%'
            buttons[0].classList.remove('disabledButton')
            buttons[0].disabled = false
            break
        case 3:
            steps[0].classList.add('progressed')
            steps[1].classList.add('progressed')
            steps[2].classList.add('progressed')
            steps[3].classList.remove('progressed')
            progressing.style.width = '66.6%'
            buttons[1].classList.remove('disabledButton')
            buttons[1].disabled = false
            break
        case 4:
            steps[0].classList.add('progressed')
            steps[1].classList.add('progressed')
            steps[2].classList.add('progressed')
            steps[3].classList.add('progressed')
            progressing.style.width = '100%'
            buttons[1].classList.add('disabledButton')
            buttons[1].disabled = true
            break
        default:
            console.log("out of control");
    }

}