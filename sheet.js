const scriptURL = 'https://script.google.com/macros/s/AKfycbw8_dDkoXZ5jaKIXAVLs3r_29FSJ1j-i2TS4pe6vFkVJ0rINgiPeX4KzF3kjas-w3V8/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})