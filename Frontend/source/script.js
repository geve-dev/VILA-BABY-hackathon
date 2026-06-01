document.addEventListener('DOMContentLoaded', () => {

  // ── "Ver mais / Ver menos" ──────────────────────────────────────────────
  document.querySelectorAll('.section .card.hidden').forEach(card => {
    card.classList.add('toggleable');
  });

  document.querySelectorAll('.showmore').forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const container = button.closest('.vermais')?.previousElementSibling;
      if (!container) return;

      let toggleCards = container.querySelectorAll('.card.toggleable');

      if (toggleCards.length === 0) {
        container.querySelectorAll('.produtos .card.hidden').forEach(card => {
          card.classList.add('toggleable');
        });
        toggleCards = container.querySelectorAll('.card.toggleable');
      }

      if (toggleCards.length === 0) {
        container.querySelectorAll('.produtos .card:nth-child(n+5)').forEach(card => {
          card.classList.add('toggleable', 'hidden');
        });
        toggleCards = container.querySelectorAll('.card.toggleable');
      }

      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (!expanded) {
        toggleCards.forEach(c => c.classList.remove('hidden'));
        button.textContent = 'Ver menos';
        button.setAttribute('aria-expanded', 'true');
      } else {
        toggleCards.forEach(c => c.classList.add('hidden'));
        button.textContent = 'Ver mais';
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });


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


  // ── Carrinho ────────────────────────────────────────────────────────────
  const badge           = document.getElementById('badge-carrinho');
  const sidebarCarrinho = document.getElementById('sidebar-carrinho');
  const abrirCarrinho   = document.getElementById('abrir-carrinho');
  const fecharCarrinho  = document.getElementById('fechar-carrinho');
  const listaCarrinho   = document.getElementById('lista-carrinho');
  const footerCarrinho  = document.querySelector('.footer-carrinho');
  const totalCarrinho   = document.getElementById('total-carrinho');
  const botaoFinalizar  = document.getElementById('botao-finalizar');
  const botaoContinuar  = document.getElementById('botao-continuar');
  const botaoContinuarVazio = document.getElementById('sair-carrinho');

  function atualizarCarrinho() {
    if (!listaCarrinho) return;
    const itens    = listaCarrinho.querySelectorAll('li:not(#carrinho-vazio)');
    const msgVazio = document.getElementById('carrinho-vazio');

    if (badge)        { badge.textContent = itens.length; badge.style.display = itens.length > 0 ? 'inline-block' : 'none'; }
    if (footerCarrinho) footerCarrinho.style.display = itens.length > 0 ? 'flex' : 'none';
    if (msgVazio)       msgVazio.style.display = itens.length === 0 ? 'flex' : 'none';

    if (totalCarrinho) {
      let total = 0;
      itens.forEach(item => {
        const txt = item.querySelector('p:last-child')?.textContent.replace('R$ ', '').replace(',', '.');
        total += parseFloat(txt) || 0;
      });
      totalCarrinho.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }
  }

  document.querySelectorAll('.adicionar').forEach(botao => {
    botao.addEventListener('click', () => {
      const card   = botao.closest('.card');
      const nome   = card.querySelector('h3')?.textContent   || '';
      const antigoPreco = card.querySelector('span')?.textContent || '';
      const preco  = card.querySelector('p')?.textContent    || '';
      const imagem = card.querySelector('img')?.src          || '';

      const li = document.createElement('li');
      li.innerHTML = `
        <div class="carPord-img"><img src="${imagem}" alt="${nome}"></div>
        <div class="infos-prod">
          <p><strong>${nome}</strong></p>
          <p class="pecoAntigo">${antigoPreco}</p>
          <p><strong>${preco}</strong></p>
        </div>
        <button class="remover">
          <svg width="20" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33325 24C3.59992 24 2.97214 23.7389 2.44992 23.2167C1.9277 22.6944 1.66659 22.0667 1.66659 21.3333V4H0.333252V1.33333H6.99992V0H14.9999V1.33333H21.6666V4H20.3333V21.3333C20.3333 22.0667 20.0721 22.6944 19.5499 23.2167C19.0277 23.7389 18.3999 24 17.6666 24H4.33325ZM17.6666 4H4.33325V21.3333H17.6666V4ZM6.99992 18.6667H9.66658V6.66667H6.99992V18.6667ZM12.3333 18.6667H14.9999V6.66667H12.3333V18.6667Z" fill="#572063"/>
          </svg>
        </button>`;

      li.querySelector('.remover').addEventListener('click', () => { li.remove(); atualizarCarrinho(); });
      listaCarrinho.appendChild(li);
      atualizarCarrinho();
    });
  });

  if (botaoFinalizar)      botaoFinalizar.addEventListener('click', () => alert('Finalizar compra ainda não implementado.'));
  if (botaoContinuar)      botaoContinuar.addEventListener('click', () => fecharSidebar(sidebarCarrinho));
  if (botaoContinuarVazio) botaoContinuarVazio.addEventListener('click', () => fecharSidebar(sidebarCarrinho));


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

  if (abrirCarrinho)  abrirCarrinho.addEventListener('click',  () => abrirSidebar(sidebarCarrinho));
  if (fecharCarrinho) fecharCarrinho.addEventListener('click', () => fecharSidebar(sidebarCarrinho));
  if (abrirLogin)     abrirLogin.addEventListener('click',     () => abrirSidebar(sidebarLogin));
  if (fecharLogin)    fecharLogin.addEventListener('click',    () => fecharSidebar(sidebarLogin));

  if (overlay) {
    overlay.addEventListener('click', () => {
      if (sidebarCarrinho?.classList.contains('ativo')) fecharSidebar(sidebarCarrinho);
      if (sidebarLogin?.classList.contains('ativo'))    fecharSidebar(sidebarLogin);
    });
  }


  // ── Slider de Cuidados (arrastar) ───────────────────────────────────────
  const slider = document.getElementById('slider');

  if (slider) {
    let isDown   = false;
    let startX   = 0;
    let scrollLeft = 0;

    // Mouse
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX     = e.pageX - slider.getBoundingClientRect().left;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = 'auto';
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      slider.style.scrollBehavior = 'smooth';
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x    = e.pageX - slider.getBoundingClientRect().left;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch (celular)
    slider.addEventListener('touchstart', (e) => {
      startX     = e.touches[0].pageX - slider.getBoundingClientRect().left;
      scrollLeft = slider.scrollLeft;
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
      const x    = e.touches[0].pageX - slider.getBoundingClientRect().left;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }

});