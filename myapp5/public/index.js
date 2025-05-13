    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const submitBtn = document.getElementById('submitBtn');
    const githubBtn = document.getElementById('githubBtn');
    const googleBtn = document.getElementById('googleBtn');
    const forgotPwdBtn = document.getElementById('forgotPwdBtn');

    function checkInputs() {
      const isValid = username.value.trim() !== '' && password.value.trim() !== '';
      submitBtn.disabled = !isValid;
      if (isValid) {
        errorMsg.textContent = '';
      }
    }

    username.addEventListener('input', checkInputs);
    password.addEventListener('input', checkInputs);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      errorMsg.textContent = '';
      const userVal = username.value.trim();
      const passVal = password.value.trim();

      if (userVal.length < 3) {
        errorMsg.textContent = 'Username/email must be at least 3 characters.';
        username.focus();
        return;
      }
      if (passVal.length < 6) {
        errorMsg.textContent = 'Password must be at least 6 characters.';
        password.focus();
        return;
      }

      if ((userVal === 'user' || userVal === 'user@example.com') && passVal === 'password123') {
        alert('Login successful! 🎉');
        form.reset();
        submitBtn.disabled = true;
        errorMsg.textContent = '';
        window.location.href='secret.html';
      } else {
        errorMsg.textContent = 'Invalid username/email or password.';
        password.focus();
      }
    });

    githubBtn.addEventListener('click', () => {
      alert('GitHub login clicked (demo).');
    });

    googleBtn.addEventListener('click', () => {
      alert('Google login clicked (demo).');
    });

    forgotPwdBtn.addEventListener('click', () => {
      alert('Forgot password clicked (demo).');
    });

    checkInputs();