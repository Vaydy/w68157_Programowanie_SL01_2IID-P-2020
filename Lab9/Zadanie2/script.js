function PrawidlowaForma(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    const nameError = document.getElementById('name-error');
    const surnameError = document.getElementById('surname-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const repasswordError = document.getElementById('repassword-error');

    nameError.textContent = '';
    surnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    repasswordError.textContent = '';
    if (name.trim() === '') {
        nameError.textContent = 'Pole Imię jest wymagane';
        return;
    }

    if (surname.trim() === '') {
        surnameError.textContent = 'Pole Nazwisko jest wymagane';
        return;
    }

    if (email.trim() === '') {
        emailError.textContent = 'Pole Email jest wymagane';
        return;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Nieprawidłowy format Email';
        return;
    }

    if (password.trim() === '') {
        passwordError.textContent = 'Pole Hasło jest wymagane';
        return;
    }

    if (repassword.trim() === '') {
        repasswordError.textContent = 'Pole Powtórz hasło jest wymagane';
        return;
    } else if (repassword !== password) {
        repasswordError.textContent = 'Hasła nie są zgodne';
        return;

    }
    alert('Formularz został pomyślnie wysłany');
    document.getElementById('registration-form').reset(); // Czyszczenie formularza
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
}