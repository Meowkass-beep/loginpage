const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmar');
const dataInput = document.getElementById('data')
const mostrarSenha = document.getElementById('revelarSenha')
const mostrarSenhaConfirmar = document.getElementById('revelarSenhaConfirmar')
const cidadeSelect = document.getElementById('cidade')

mostrarSenha.addEventListener('click', () => {
    const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', type);

    if (type === 'password') {
        mostrarSenha.textContent = "Mostrar Senha";
    } else {
        mostrarSenha.textContent = "Ocultar Senha";
    }
});

mostrarSenhaConfirmar.addEventListener('click', () => {
    const type = confirmarSenhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmarSenhaInput.setAttribute('type', type);

    if (type === 'password') {
        mostrarSenhaConfirmar.textContent = "Mostrar Senha";
    } else {
        mostrarSenhaConfirmar.textContent = "Ocultar Senha";
    }
});

telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = value;
    validareTelefone();
});

emailInput.addEventListener('input', validareEmail);

senhaInput.addEventListener('input', function () {
    validareSenha();
    validareConfirmarSenha();
});

confirmarSenhaInput.addEventListener('input', validareConfirmarSenha);

dataInput.addEventListener('input', validarData);

cidadeSelect.addEventListener('change', mudarEstado)

function mudarEstado() {
    const cidadeSelecionada = this.options[this.selectedIndex];
    const estado = cidadeSelecionada.getAttribute('data-estado');
    if (estado) {
        document.getElementById('estado').value = estado;
    } else {
        document.getElementById('estado').value = "";
    }
}

function validarData() {
    const dataErro = document.getElementById('dataErro');
    const dataRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const inputDateValue = dataInput.value;

    if (!dataRegex.test(inputDateValue)) {
        dataErro.textContent = 'Data inválida';
        dataErro.classList.add('visible');
        return false;
    }

    const dataSelecionada = new Date(inputDateValue);
    const dataAtual = new Date();

    if (dataSelecionada > dataAtual) {
        dataErro.textContent = 'A data não pode ser no futuro';
        dataErro.classList.add('visible');
        return false;
    } else {
        dataErro.classList.remove('visible');
        return true;
    }
}

function validareEmail() {
    const emailErro = document.getElementById('emailErro');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailErro.textContent = 'Email inválido';
        emailErro.classList.add('visible');
        return false;
    } else {
        emailErro.classList.remove('visible');
        return true;
    }
}

function validareTelefone() {
    const telefoneErro = document.getElementById('telefoneErro');
    if (telefoneInput.value.replace(/\D/g, '').length < 11) {
        telefoneErro.textContent = 'Telefone inválido';
        telefoneErro.classList.add('visible');
        return false;
    } else {
        telefoneErro.classList.remove('visible');
        return true;
    }
}

function validareSenha() {
    const senha = senhaInput.value;
    const senhaErro = document.getElementById('senhaErro');

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senhaRegex.test(senha)) {
        senhaErro.textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.';
        senhaErro.classList.add('visible');
        return false;
    } else {
        senhaErro.classList.remove('visible');
        return true;
    }
}

function validareConfirmarSenha() {
    const confirmarErro = document.getElementById('confirmarErro');
    if (senhaInput.value !== confirmarSenhaInput.value) {
        confirmarErro.textContent = 'As senhas não coincidem.';
        confirmarErro.classList.add('visible');
        return false;
    } else {
        confirmarErro.classList.remove('visible');
        return true;
    }
}


document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const isEmailValid = validareEmail();
    const isTelefoneValid = validareTelefone();
    const isSenhaValid = validareSenha();
    const isConfirmarSenhaValid = validareConfirmarSenha();

    if (isEmailValid && isTelefoneValid && isSenhaValid && isConfirmarSenhaValid) {
        alert('Formulário enviado com sucesso!');
        e.target.submit();
    } else {
        alert('Por favor, corrija os erros antes de enviar o formulário.');
    }
});
