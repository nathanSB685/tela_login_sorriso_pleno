/**
 * Alterna a visibilidade da senha (mostrar / ocultar)
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 0110.122 3.937 9.97 9.97 0 011.563 3.029 10.026 10.026 0 01-1.636 3.011M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"></path>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        `;
    }
}

/**
 * Exibe instrução de recuperação de senha
 */
function showForgotMessage(e) {
    e.preventDefault();
    const msgBox = document.getElementById('statusMessage');
    msgBox.className = 'p-4 rounded-xl text-xs font-semibold text-center bg-gray-100 text-[#333333] border border-gray-200 block';
    msgBox.textContent = 'Entre em contato com a administração da clínica para redefinir sua senha.';
}

/**
 * Simula o envio do formulário de login
 */
function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const msgBox = document.getElementById('statusMessage');
    const username = document.getElementById('username').value;

    btn.disabled = true;
    btnText.textContent = 'Entrando...';
    msgBox.className = 'hidden';

    setTimeout(() => {
        btn.disabled = false;
        btnText.textContent = 'Entrar';
        
        msgBox.className = 'p-4 rounded-xl text-xs font-semibold text-center bg-emerald-50 text-[#007a3f] border border-emerald-200 block';
        msgBox.textContent = `Acesso liberado para: ${username}`;
    }, 1000);
}