export function validateForm(form) {
  const fields = form.querySelectorAll('input, textarea');
  let valid = true;

  fields.forEach(field => {
    if (!field.checkValidity()) {
      field.classList.add('error');
      valid = false;
    } else {
      field.classList.remove('error');
    }
  });

  return valid;
}

export function attachValidation(form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const isValid = validateForm(form);
    if (isValid) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    } else {
      alert('Por favor, corrija os campos destacados.');
    }
  });
}
