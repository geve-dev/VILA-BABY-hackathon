document.addEventListener('DOMContentLoaded', () => {

  // ── Banner slider ───────────────────────────────────────────────────────
  const imgContainer = document.querySelector('.banner .img');
  const bannerImages = document.querySelectorAll('.banner .img img');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (imgContainer && bannerImages.length && prevButton && nextButton) {
    let currentIndex = 0;

    function updateSlide() {
      const width = bannerImages[0].clientWidth;
      imgContainer.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % bannerImages.length;
      updateSlide();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
      updateSlide();
    });
  }


  // ── Botão voltar ao topo ────────────────────────────────────────────────
  const btnTopo = document.getElementById('btnTopo');
  if (btnTopo) {
    window.addEventListener('scroll', () => {
      btnTopo.style.display = document.documentElement.scrollTop > 200 ? 'block' : 'none';
    });
    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ── Overlay e sidebars ──────────────────────────────────────────────────
  const overlay     = document.getElementById('overlay');
  const sidebarLogin = document.getElementById('sidebar-login');
  const abrirLogin   = document.getElementById('abrir-login');
  const fecharLogin  = document.getElementById('fechar-login');
  

  document.getElementById("abrirPerfil").addEventListener("click", () => {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
        window.location.href = "./perfil.html";
    } else {
        alert("Você precisa fazer login primeiro!");
    }
});


  function abrirSidebar(sidebar) {
    if (!sidebar) return;
    sidebar.classList.add('ativo');
    if (overlay) overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function fecharSidebar(sidebar) {
    if (!sidebar) return;
    sidebar.classList.remove('ativo');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (abrirLogin)  abrirLogin.addEventListener('click',  () => abrirSidebar(sidebarLogin));
  if (fecharLogin) fecharLogin.addEventListener('click', () => fecharSidebar(sidebarLogin));

  if (overlay) {
    overlay.addEventListener('click', () => {
      if (sidebarLogin?.classList.contains('ativo')) fecharSidebar(sidebarLogin);
    });
  }


});

// card cuidados e profissionais
function scrollCard(id, distance) {
    const container = document.getElementById(id);
    container.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

// Função para carregar funcionários do backend
async function carregarFuncionarios() {
    try {
        const response = await fetch('http://localhost:3001/employees');
        const employees = await response.json();

        const container = document.getElementById('employees-container');

        employees.forEach(employee => {
            container.innerHTML += `
                <div class="card">
                    <img src="${employee.employees_url}" alt="${employee.employees_name}">
                    <h3>${employee.employees_name}</h3>
                    <button class="prof" onclick="window.location.href='medico.html?id=${employee.employees_id}'">
                      Ver mais
                  </button>
                </div>
            `;
        });

    } catch (erro) {
        console.error('Erro ao carregar funcionários:', erro);
    }
}

carregarFuncionarios();

//fazendo login
document.getElementById('botao-entrar').addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
try {        const response = await fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_email: email, user_password: senha })
        });
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('usuario', JSON.stringify(data.user));
            window.location.href = './perfil.html';
        } else {
            alert(data.mensagem || 'Erro ao fazer login');
        } 
    } catch (erro) {
        console.error('Erro ao fazer login:', erro);
        alert('Erro ao fazer login');
    }
});

//fazendo logout
const btnLogin = document.getElementById('abrir-login');
const usuario = localStorage.getItem('usuario');

if (usuario) {
    btnLogin.textContent = 'Logout';

    btnLogin.addEventListener('click', () => {
        localStorage.removeItem('usuario');
        window.location.href = './index.html';
    });
} else {
    btnLogin.textContent = 'Login';

    btnLogin.addEventListener('click', () => {
        document.getElementById('sidebar-login').classList.add('ativa');
    });
}