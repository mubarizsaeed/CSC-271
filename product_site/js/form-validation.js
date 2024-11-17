//  form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

// help text when input is focused
function showHelp(event) {
    const input = event.target;
    let helpDiv = input.parentElement.querySelector('.help-text');
    
    if (!helpDiv) {
        helpDiv = document.createElement('div');
        helpDiv.className = 'help-text';
        input.parentElement.appendChild(helpDiv);
    }
    
    if (input === nameInput) {
        helpDiv.textContent = 'Enter first and last name';
    } else if (input === emailInput) {
        helpDiv.textContent = 'Enter a valid email (example@email.com)';
    } else if (input === phoneInput) {
        helpDiv.textContent = 'Enter phone as: 123-456-7890';
    }
}

//  input when user leaves the field
function checkInput(event) {
    const input = event.target;
    const helpDiv = input.parentElement.querySelector('.help-text');
    if (helpDiv) helpDiv.remove();
    
    let error = '';
    
    if (input === nameInput && !input.value.includes(' ')) {
        error = 'Please enter both first and last name';
    } else if (input === emailInput && !input.value.includes('@')) {
        error = 'Please enter a valid email';
    } else if (input === phoneInput && !input.value.includes('-')) {
        error = 'Please use format: 123-456-7890';
    }
    
    const errorDiv = input.parentElement.querySelector('.error');
    if (error) {
        if (!errorDiv) {
            const div = document.createElement('div');
            div.className = 'error';
            div.style.color = 'red';
            div.textContent = error;
            input.parentElement.appendChild(div);
        }
    } else if (errorDiv) {
        errorDiv.remove();
    }
}

// form submission
function handleSubmit(event) {
    event.preventDefault();
    
    if (!nameInput.value || !emailInput.value || !phoneInput.value) {
        alert('Please fill out all required fields');
        return;
    }
    
    if (!document.querySelectorAll('.error').length) {
        alert('Form submitted successfully!');
        form.reset();
    }
}

// event listeners
nameInput.addEventListener('focus', showHelp);
emailInput.addEventListener('focus', showHelp);
phoneInput.addEventListener('focus', showHelp);

nameInput.addEventListener('blur', checkInput);
emailInput.addEventListener('blur', checkInput);
phoneInput.addEventListener('blur', checkInput);

form.addEventListener('submit', handleSubmit);