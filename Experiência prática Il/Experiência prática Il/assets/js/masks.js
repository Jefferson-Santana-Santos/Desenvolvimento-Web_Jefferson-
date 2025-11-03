(function () {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  const form = document.getElementById('form-cadastro');

  function onlyDigits(value) {
    return value.replace(/\D/g, '');
  }

  function maskCPF(value) {
    const v = onlyDigits(value).slice(0, 11);
    const parts = [];
    if (v.length > 0) parts.push(v.substring(0, 3));
    if (v.length > 3) parts.push(v.substring(3, 6));
    if (v.length > 6) parts.push(v.substring(6, 9));
    const suffix = v.length > 9 ? v.substring(9, 11) : '';
    return parts.join('.').concat(suffix ? '-' + suffix : '');
  }

  function maskPhone(value) {
    
    const v = onlyDigits(value).slice(0, 11);
    const ddd = v.substring(0, 2);
    const isMobile = v.length >= 11;
    const part1 = isMobile ? v.substring(2, 7) : v.substring(2, 6);
    const part2 = isMobile ? v.substring(7, 11) : v.substring(6, 10);
    if (!ddd) return '';
    return `(${ddd}) ${part1}${part2 ? '-' + part2 : ''}`;
  }

  function maskCEP(value) {
    const v = onlyDigits(value).slice(0, 8);
    const part1 = v.substring(0, 5);
    const part2 = v.substring(5, 8);
    return part2 ? `${part1}-${part2}` : part1;
  }

  if (cpf) {
    cpf.addEventListener('input', (e) => {
      e.target.value = maskCPF(e.target.value);
    });
    cpf.addEventListener('blur', () => {
      
      const digits = onlyDigits(cpf.value);
      cpf.setCustomValidity(digits.length === 11 ? '' : 'CPF deve ter 11 dígitos.');
    });
  }

  if (tel) {
    tel.addEventListener('input', (e) => {
      e.target.value = maskPhone(e.target.value);
    });
    tel.addEventListener('blur', () => {
      const digits = onlyDigits(tel.value);
      tel.setCustomValidity(digits.length >= 10 ? '' : 'Telefone inválido.');
    });
  }

  if (cep) {
    cep.addEventListener('input', (e) => {
      e.target.value = maskCEP(e.target.value);
    });
    cep.addEventListener('blur', () => {
      const digits = onlyDigits(cep.value);
      cep.setCustomValidity(digits.length === 8 ? '' : 'CEP deve ter 8 dígitos.');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        
        const invalid = form.querySelector(':invalid');
        if (invalid) invalid.focus();
      }
    });
  }
})();
