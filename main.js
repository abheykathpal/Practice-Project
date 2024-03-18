let password = document.querySelector('#inputPassword');
let button = document.querySelector('button');
let eyeicon = document.querySelector('#eyeicon')

      button.addEventListener('click', function() {
        if (password.type === 'password') {
          password.setAttribute('type', 'text');
          eyeicon.classList.remove('fa-eye');
          eyeicon.classList.add('fa-eye-slash');
          button.innerHTML = "Hide password";
        } else {
          password.setAttribute('type', 'password');
          eyeicon.classList.remove('fa-eye-slash');
          eyeicon.classList.add('fa-eye');
          button.innerHTML = "Show password";
        }
      });
    
