document.getElementById("calcularBtn").addEventListener("click", function() {
    const alunoSelect = document.getElementById("alunoSelect");
    const nomeAluno = alunoSelect.value;
    
    if (!nomeAluno) {
      alert("Por favor, selecione um aluno.");
      return;
    }

    const notasInputs = document.querySelectorAll(".nota");
    const frequenciasInputs = document.querySelectorAll(".frequencia");
    
    let notas = [];
    let frequencias = [];

    notasInputs.forEach(input => {
      const nota = parseFloat(input.value);
      if (!isNaN(nota)) {
        notas.push(nota);
      }
    });

    frequenciasInputs.forEach(input => {
      const frequencia = parseFloat(input.value);
      if (!isNaN(frequencia)) {
        frequencias.push(frequencia);
      }
    });

    if (notas.length > 0 && frequencias.length > 0) {
      const mediaNotas = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
      const mediaFrequencia = frequencias.reduce((acc, curr) => acc + curr, 0) / frequencias.length;

      const situacao = mediaNotas > 59.99 && mediaFrequencia > 2.99 ? "Aprovado" : "Reprovado";

      document.getElementById("resultado").style.display = "block";
      document.getElementById("resultadoNome").textContent = nomeAluno;
      document.getElementById("resultadoNotas").textContent = mediaNotas.toFixed(2);
      document.getElementById("resultadoFrequencia").textContent = mediaFrequencia.toFixed(2);
      document.getElementById("resultadoSituacao").textContent = situacao;
    } else {
      alert("Por favor, insira notas e frequências.");
    }
  });

  var menuItem = document.querySelectorAll('.item-menu')
  function selectlink(){
    menuItem.forEach((item)=> 
      item.classList.remove('ativo')
    )
    this.classList.add('ativo')
  }
  menuItem.forEach((item)=> 
  item.addEventListener('click', selectlink)
  )
  var btnExp = document.querySelector('#btn-exp')
  var menuSide = document.querySelector('.menu')

  btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
  })
  function calcularMediaNotas() {
    var notas = document.querySelectorAll(".nota");
    var soma = 0;
    var quantidade = notas.length;

    notas.forEach(input => {
        soma += parseFloat(input.value) || 0;
    });

    return quantidade > 0 ? soma / quantidade : 0;
}

function gerarGrafico() {
    var notas = Array.from(document.querySelectorAll(".nota")).map(input => parseFloat(input.value) || 0);
    var mediaNotas = calcularMediaNotas(); 


    var ctx = document.getElementById("graficoNotas").getContext("2d");

    
    if (window.meuGrafico) {
        window.meuGrafico.destroy();
    }

    // Criando o gráfico
    window.meuGrafico = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Nota 1", "Nota 2", "Nota 3", "Nota 4", "Média"],
            datasets: [{
                label: "Notas",
                data: [...notas, mediaNotas],
                backgroundColor: ["blue", "green", "orange", "red", "purple"]
            }]
        }
    });
}