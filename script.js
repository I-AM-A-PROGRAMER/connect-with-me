document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.getElementById('email-link');
  const copyMessage = document.getElementById('copy-message');
  const yourEmail = 'supriyo3606c@gmail.com';

  emailLink.addEventListener('click', function(event) {
      event.preventDefault();
      navigator.clipboard.writeText(yourEmail)
        .then(() => {
          copyMessage.classList.add('show');
             setTimeout(() => {
              copyMessage.classList.remove('show');
            }, 3000);
        })
        .catch(err => {
          console.error('Failed to copy email: ', err);
        });
  });
});