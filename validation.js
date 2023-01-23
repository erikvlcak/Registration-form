// validation script here
let inputs = document.querySelectorAll('input');
let regField = document.querySelector('.registrationField')
let submit = document.querySelector('.registrationField button');
let register = new Set();

let patterns = {
    realname: /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/,
    username: /^[a-z]{5,12}$/,
    email: /^\w{3,10}@\w{3,10}\.\w{2,3}$/,
    password: /^.{8,20}$/,
    telephone: /^\+\d{2,4}\s\d{9,11}$/,
};


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        let regex = patterns[e.target.name];
        let field = e.target.value;

        if (e.target.value != '') {
            if (regex.test(field)) {
                e.target.classList.add('valid');
                e.target.classList.remove('invalid');
                e.target.nextElementSibling.setAttribute('class', 'invisible');
                e.target.nextElementSibling.nextElementSibling.setAttribute('class', 'visible');
                e.target.nextElementSibling.style.color = 'green';
                register.add(e.target.name);
            } else {
                e.target.classList.add('invalid');
                e.target.classList.remove('valid');
                e.target.nextElementSibling.setAttribute('class', 'visible');
                e.target.nextElementSibling.nextElementSibling.setAttribute('class', 'invisible');
                e.target.nextElementSibling.style.color = 'red';
                register.delete(e.target.name);
            }
        }
        else {
            e.target.nextElementSibling.setAttribute('class', 'invisible');
            e.target.nextElementSibling.nextElementSibling.setAttribute('class', 'visible');
            e.target.classList.remove('valid');
            e.target.classList.remove('invalid');
        }

        if (register.size == 5) {

            regField.children[1].setAttribute('class', 'invisible');
            regField.children[2].setAttribute('class', 'visible');
            regField.children[0].setAttribute('class', 'active');
        } else {
            regField.children[1].setAttribute('class', 'visible');
            regField.children[2].setAttribute('class', 'invisible');
            regField.children[0].setAttribute('class', 'inactive');

        }
    });

});

submit.addEventListener('click', (e) => {
    if (e.target.className == 'active') {
        alert('Boli ste registrovani.');
        e.target.textContent = 'Uz ste zaregistrovali.'
        e.target.setAttribute('class', 'inactive');
        e.target.nextElementSibling.nextElementSibling.setAttribute('class', 'invisible');
        e.target.disabled = true;
        inputs.forEach((item) => {
            item.disabled = true;
        })


    }
})
















