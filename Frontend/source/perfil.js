function trocarAba(aba) {
    // 1. Esconder todos os conteúdos e tirar o active das abas
    document.getElementById('conteudo-favoritos').classList.remove('active');
    document.getElementById('conteudo-grupos').classList.remove('active');
    document.getElementById('tab-favoritos').classList.remove('active');
    document.getElementById('tab-grupos').classList.remove('active');

    // 2. Mostrar o conteúdo selecionado
    if (aba === 'favoritos') {
        document.getElementById('conteudo-favoritos').classList.add('active');
        document.getElementById('tab-favoritos').classList.add('active');
    } else {
        document.getElementById('conteudo-grupos').classList.add('active');
        document.getElementById('tab-grupos').classList.add('active');
    }
}

const usuario = JSON.parse(localStorage.getItem('usuario'));

if (!usuario) {     
    window.location.href = './index.html'; // ou login.html
} else {
    document.getElementById('url').src = usuario.user_url;
    document.getElementById('nome').textContent = usuario.user_name;
    document.getElementById('desc').textContent = usuario.user_desc;
   
}