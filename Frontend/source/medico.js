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

//pegar o id do médico da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID do médico:", id);

//buscar os dados do médico usando o ID
async function carregarMedico() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const response = await fetch(`http://localhost:3001/employees/${id}`);
  const medico = await response.json();

  // colocar na tela
   document.getElementById("fotoMedico").src = medico.employees_url;
    document.getElementById("nomeMedico").textContent = medico.employees_name;
    document.getElementById("descMedico").textContent = medico.employees_desc;
}

carregarMedico();