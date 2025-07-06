
const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passStrength = document.getElementById('passStrength');
const passMatch = document.getElementById('passMatch');
const successDiv = document.getElementById('success');

password.addEventListener('input', () => {
  const val = password.value;
  const strong = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
  if (strong.test(val)) {
    passStrength.textContent = 'Strong ✅';
    passStrength.style.color = 'green';
  } else {
    passStrength.textContent = 'Weak ❌';
    passStrength.style.color = 'red';
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value === password.value) {
    passMatch.textContent = 'Matched ✅';
    passMatch.style.color = 'green';
  } else {
    passMatch.textContent = 'Not matched ❌';
    passMatch.style.color = 'red';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (passStrength.textContent.includes('Strong') && passMatch.textContent.includes('Matched')) {
    form.style.display = 'none';
    successDiv.style.display = 'block';

    // Implementing client-side routing
    window.history.pushState({}, '', '/dashboard');
  } else {
    alert('Please ensure password is strong and confirmed correctly.');
  }
});
