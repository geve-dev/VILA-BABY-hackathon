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