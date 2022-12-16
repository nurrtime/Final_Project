let inputEmail = document.querySelector('.input');
let submit = document.querySelector('.submit');


submit.addEventListener('click', handleSubmitButton);

function handleSubmitButton() {
    if (submit) {
        window.localStorage.setItem('submit', JSON.parse(JSON.stringify(inputEmail)))
    }
}