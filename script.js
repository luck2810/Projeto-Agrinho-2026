// Aguarda o carregamento completo do DOM para evitar erros de leitura de nós do HTML
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. GERENCIAMENTO DE VARIÁVEIS E SAUDAÇÃO PERSONALIZADA
    // ==========================================================================
    const inputNome = document.getElementById("usernameInput");
    const btnSalvar = document.getElementById("btnSalvarNome");
    const containerSaudacao = document.getElementById("userGreeting");

    // Função para renderizar a saudação customizada na tela
    function exibirSaudacao(nome) {
        if (nome && nome.trim() !== "") {
            containerSaudacao.innerHTML = `<p style="font-weight: 600;">Seja bem-vindo(a), pioneiro(a) do agro sustentável: 🌾 ${nome}!</p>`;
        }
    }

    btnSalvar.addEventListener("click", () => {
        const nomeUsuario = inputNome.value;
        exibirSaudacao(nomeUsuario);
    });

    // Permitir submissão da saudação pressionando a tecla 'Enter'
    inputNome.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const nomeUsuario = inputNome.value;
            exibirSaudacao(nomeUsuario);
        }
    });


    // ==========================================================================
    // 2. ALTERNÂNCIA DE TEMA (MODO ESCURO / MODO CLARO)
    // ==========================================================================
    const btnTema = document.getElementById("btnTema");
    
    // Função para alterar o tema base de cores via atributo de tag no HTML
    btnTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        
        if (temaAtual === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });


    // ==========================================================================
    // 3. ACESSIBILIDADE E UX: DIMENSIONAMENTO DINÂMICO DE FONTE
    // ==========================================================================
    const btnAumentar = document.getElementById("btnAumentarTexto");
    const btnDiminuir = document.getElementById("btnDiminuirTexto");
    
    // Estado inicial para controle de escala de tamanho de fonte
    let tamanhoFonteAtual = 16; 

    // Função para recalcular o tamanho da fonte global
    btnAumentar.addEventListener("click", () => {
        if (tamanhoFonteAtual < 24) { // Limite máximo seguro de tamanho
            tamanhoFonteAtual += 2;
            document.documentElement.style.setProperty('--font-size-base', `${tamanhoFonteAtual}px`);
        }
    });

    btnDiminuir.addEventListener("click", () => {
        if (tamanhoFonteAtual > 12) { // Limite mínimo legível
            tamanhoFonteAtual -= 2;
            document.documentElement.style.setProperty('--font-size-base', `${tamanhoFonteAtual}px`);
        }
    });
});
