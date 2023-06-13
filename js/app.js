function toggleMenu(){
    const menuMobile = document.getElementById("menu-mobile");

    if(menuMobile.className==="menu-mobile-active"){
        menuMobile.className = "menu-mobile";
    } else{
        menuMobile.className = "menu-mobile-active"
    }
}

function changePageOnMobile(){
  const menuMobile = document.getElementById("menu-mobile");
  const homeButton = document.getElementById('homeBtn');
  const sellButton = document.getElementById('sellBtn');
  const shoppingBagButton = document.getElementById('cadBtn');
  const employeesButton = document.getElementById('empBtn');

  homeButton.addEventListener('click', function() {
    window.location.href = "index.html";
    menuMobile.className = "menu-mobile";
  });

  sellButton.addEventListener('click', function() {
    window.location.href = "vendas.html";
    menuMobile.className = "menu-mobile";
  });

  shoppingBagButton.addEventListener('click', function() {
    window.location.href = "cadProdutos.html";
    menuMobile.className = "menu-mobile";
  });

  employeesButton.addEventListener('click', function() {
    window.location.href = "funcionarios.html";
    menuMobile.className = "menu-mobile";
  });
}

changePageOnMobile();

var ctx = document.getElementById('incomeExpenses').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [{ 
          data: [20,60,100,120,130,200,210,330,340,380,420,400],
          label: "Receita",
          borderColor: "rgb(60,186,159)",
          backgroundColor: "rgb(60,186,159,0.1)",
        }, { 
          data: [40,50,50,70,90,80,90,120,100,140,120,100],
          label: "Despesa",
          borderColor: "rgb(196,88,80)",
          backgroundColor:"rgb(196,88,80,0.1)",
        }
      ]
    },
  });

  ctx = document.getElementById('pizzagraphic').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });

    var speedCanvas = document.getElementById("graphicLine");

    var dataFirst = {
      data: [5, 7, 6, 9, 12, 15, 16, 20, 25, 30, 32, 40],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [2, 6, 12, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var dataThird = {
      data: [2, 3, 4, 7, 12, 16, 24, 35, 22, 35, 42, 50],
      fill: false,
      borderColor: "#6bd098",
      backgroundColor: "transparent",
      pointBorderColor: "#6bd098",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond, dataThird]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });


