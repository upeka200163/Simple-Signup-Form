const panda = document.getElementById('panda');
const triggers = document.querySelectorAll('.password-trigger');

triggers.forEach(input => {
  input.addEventListener('focus', () => {
    panda.classList.add('look-away');
  });

  input.addEventListener('blur', () => {
    panda.classList.remove('look-away');
  });
});