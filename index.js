const form = document.forms['form-pop-up'];
const input = form.email;
const popUp = document.querySelector('.pop-up.principal');
const confirmationPopUp = document.querySelector('.pop-up.bottom');
const pValidation = document.querySelector('.p-validation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validationForm(input.value)) return;
    popUp.classList.toggle('js-not-visibly');
    confirmationPopUp.classList.toggle('js-not-visibly');
});

//This validates the email every time de user types a new value
input.addEventListener('keydown', (event) => {
    if (!validationForm(input.value)) {
        pValidation.style.display = 'initial';
        input.classList.add('invalid');
    } else {
        pValidation.style.display = 'none';
        input.classList.remove('invalid');
    }
});

//When the input lost focus, it validate that the email is correct
input.addEventListener('blur', (event) => {

    if (input.value.length == 0) {
        pValidation.style.display = 'none';
        input.classList.remove('invalid');
    }
    else if (!validationForm(input.value)) {
        pValidation.style.display = 'initial';
        input.classList.add('invalid');
    }
    else {
        pValidation.style.display = 'none';
        input.classList.remove('invalid');
    }
});


document.getElementById('btn-dismiss').addEventListener('click', () => {
    confirmationPopUp.classList.toggle('js-not-visibly');
    popUp.classList.toggle('js-not-visibly');
})

function validationForm(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}