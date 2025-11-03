

export function initFormValidation() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors(form);
    let valid = true;

    const nome = form.querySelector('#nome');
    if (!nome.value || nome.value.trim().length < 3) {
      setError(nome, 'Informe um nome válido (mín 3 caracteres)');
      valid = false;
    }

    const email = form.querySelector('#email');
    if (!email.checkValidity()) {
      setError(email, 'E-mail inválido');
      valid = false;
    }

    const cpf = form.querySelector('#cpf');
    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf.value)) {
      setError(cpf, 'CPF no formato 000.000.000-00');
      valid = false;
    }

    const telefone = form.querySelector('#telefone');
    if (!telefone.value || telefone.value.trim().length < 10) {
      setError(telefone, 'Telefone inválido');
      valid = false;
    }

    if (valid) {
      const payload = {
        nome: nome.value.trim(),
        email: email.value.trim(),
        cpf: cpf.value.trim(),
        telefone: telefone.value.trim(),
        nascimento: form.nascimento?.value || '',
        endereco: form.endereco?.value || '',
        cep: form.cep?.value || '',
        cidade: form.cidade?.value || '',
        estado: form.estado?.value || '',
        perfil: form.perfil?.value || ''
      };

      const lista = JSON.parse(localStorage.getItem('cadastros') || '[]');
      lista.push({ ...payload, createdAt: new Date().toISOString() });
      localStorage.setItem('cadastros', JSON.stringify(lista));

      showToast('Inscrição recebida. Obrigado!');
      form.reset();
    } else {
      const firstError = form.querySelector('.input-error');
      if (firstError) firstError.focus();
    }
  });

  function setError(el, message) {
    el.classList.add('input-error');
    let msg = el.parentElement.querySelector('.form-error');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'form-error';
      el.parentElement.appendChild(msg);
    }
    msg.textContent = message;
  }

  function clearErrors(form) {
    form.querySelectorAll('.input-error').forEach(i => i.classList.remove('input-error'));
    form.querySelectorAll('.form-error').forEach(m => m.remove());
  }

  function showToast(text) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = text;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3200);
  }
}
