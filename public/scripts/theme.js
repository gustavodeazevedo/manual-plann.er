// Este script configura o tema para iniciar sempre em modo escuro

// Função para definir o tema escuro
function setDarkTheme() {
    const root = document.documentElement;

    // Define o atributo data-theme como 'dark'
    root.setAttribute('data-theme', 'dark');

    // Armazena a preferência no localStorage
    localStorage.setItem('starlight-theme', 'dark');

    // Atualiza o botão de alternância de tema, se existir
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'true');
    }
}

// Função para verificar se o Starlight já tem seu próprio script de tema
function initDarkTheme() {
    // Se o Starlight ainda não definiu um tema (para não sobrescrever a escolha do usuário após a primeira visita)
    if (!localStorage.getItem('starlight-theme')) {
        setDarkTheme();
    }
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initDarkTheme);

// Executar imediatamente para evitar flash de tema claro
initDarkTheme();
