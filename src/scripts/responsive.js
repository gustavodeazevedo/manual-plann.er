// Este script configura o comportamento responsivo nas páginas do Starlight
// Ele deve ser importado nas páginas que precisam de funcionalidade responsiva adicional

// Função para verificar o tamanho da tela e aplicar classes responsivas
export function setupResponsiveFeatures() {
    const isMobileViewport = window.innerWidth <= 768;
    const isSmallMobileViewport = window.innerWidth <= 480;

    document.documentElement.classList.toggle('is-mobile', isMobileViewport);
    document.documentElement.classList.toggle('is-small-mobile', isSmallMobileViewport);

    // Detectar orientação do dispositivo
    const isLandscape = window.innerWidth > window.innerHeight;
    document.documentElement.classList.toggle('is-landscape', isLandscape);
    document.documentElement.classList.toggle('is-portrait', !isLandscape);

    // Otimizações específicas para dispositivos móveis
    if (isMobileViewport) {
        // Ajustar tamanho máximo de imagens
        document.querySelectorAll('img').forEach(img => {
            if (!img.style.maxWidth) {
                img.style.maxWidth = '100%';
            }
        });

        // Garantir que tabelas não ultrapassem a largura da tela
        document.querySelectorAll('table').forEach(table => {
            const parent = table.parentElement;
            if (parent && !parent.classList.contains('responsive-table-container')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'responsive-table-container';
                parent.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });

        // Adicionar indicações para a orientação do dispositivo quando necessário
        if (detectOrientationSensitiveContent()) {
            showOrientationTip(isLandscape);
        }
    }
}

// Função para detectar conteúdo que se beneficiaria de orientação específica
function detectOrientationSensitiveContent() {
    // Verificar se existem tabelas largas ou imagens panorâmicas
    const wideTables = Array.from(document.querySelectorAll('table')).some(table => {
        return table.offsetWidth > window.innerWidth * 0.9;
    });

    const wideImages = Array.from(document.querySelectorAll('img')).some(img => {
        return img.naturalWidth > img.naturalHeight * 1.5 && img.offsetWidth > window.innerWidth * 0.8;
    });

    return wideTables || wideImages;
}

// Exibe dica de orientação para melhor visualização
function showOrientationTip(isLandscape) {
    // Remover dica anterior, se existir
    const existingTip = document.getElementById('orientation-tip');
    if (existingTip) {
        existingTip.remove();
    }

    // Se estiver no modo retrato e houver conteúdo largo, sugerir rotacionar para paisagem
    if (!isLandscape) {
        const tip = document.createElement('div');
        tip.id = 'orientation-tip';
        tip.className = 'orientation-tip';
        tip.innerHTML = `
      <div class="tip-content">
        <span class="rotate-icon">↻</span>
        <span>Gire seu dispositivo para melhor visualização</span>
        <button class="close-tip">×</button>
      </div>
    `;

        document.body.appendChild(tip);

        // Remover a dica ao clicar no botão de fechar
        const closeBtn = tip.querySelector('.close-tip');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                tip.remove();
            });
        }

        // Remover a dica após 5 segundos automaticamente
        setTimeout(() => {
            if (tip.parentNode) {
                tip.remove();
            }
        }, 5000);
    }
}

// Ajusta dinamicamente as margens e paddings em elementos específicos
export function adjustSpacingForMobile() {
    if (window.innerWidth <= 768) {
        const contentContainers = document.querySelectorAll('main .content');
        contentContainers.forEach(container => {
            container.style.padding = '1rem';
        });

        // Reduzir espaçamento entre elementos
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
            heading.style.marginTop = '1.25em';
            heading.style.marginBottom = '0.6em';
        });
    }
}

// Melhorar a acessibilidade para interações por toque
export function enhanceTouchInteractions() {
    if ('ontouchstart' in window) {
        // Aumentar a área de toque para links e botões
        document.querySelectorAll('a, button').forEach(element => {
            // Garante um tamanho mínimo de 44x44px (recomendação de acessibilidade)
            if (element.offsetWidth < 44 || element.offsetHeight < 44) {
                element.style.minWidth = '44px';
                element.style.minHeight = '44px';
                element.style.display = 'inline-flex';
                element.style.alignItems = 'center';
                element.style.justifyContent = 'center';
            }
        });
    }
}

// Inicializar os ajustes responsivos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setupResponsiveFeatures();
    adjustSpacingForMobile();
    enhanceTouchInteractions();

    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', () => {
        setupResponsiveFeatures();
        adjustSpacingForMobile();
    });
});
