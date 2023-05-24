// Obtén la referencia al elemento canvas
var ctx = document.getElementById("myChart").getContext("2d");

// Crea los datos para el gráfico
var data = {
  labels: ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4", "Candidato 5"],
  datasets: [
    {
      label: "Votos",
      data: [120, 80, 150, 200, 100],
      backgroundColor: ["rgb(51, 255, 255)", "rgb(11, 128, 238)", "rgb(9, 241, 83)", "rgb(93, 31, 246)", "rgb(243, 16, 136)"],
    },
  ],
};

// Configura las opciones del gráfico
var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Crea el gráfico de barras
var myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});

//Grafico para el concejo
var ctxx = document.getElementById("myChart2").getContext("2d");

// Crea los datos para el gráfico
var dataa = {
  labels: ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4", "Candidato 5"],
  datasets: [
    {
      label: "Votos",
      data: [120, 80, 150, 200, 100],
      backgroundColor: ["rgb(51, 255, 255)", "rgb(11, 128, 238)", "rgb(9, 241, 83)", "rgb(93, 31, 246)", "rgb(243, 16, 136)"],
    },
  ],
};

// Configura las opciones del gráfico
var optiones = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
// Crea el gráfico de barras
var myChartt = new Chart(ctxx, {
  type: "bar",
  data: dataa,
  options: optiones,
});
