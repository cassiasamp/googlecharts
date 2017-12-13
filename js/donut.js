google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharGraficoDonut);

//Callback that draws the donut chart.
    function desenharGraficoDonut() {

        // Create the data table for the donut chart.
        var data = google.visualization.arrayToDataTable([
          ['Area', 'Gasto'],
          ['Faculdade', 2500.00],
          ['Transporte', 450.00],
          ['Lazer', 100.00],
          ['Internet', 50.0],
          ['Cartão de crédito', 2000.00],
          ['Alimentação', 400.00]
        ]);

        // Set options for the donut chart.
        var options = {
          title:'Tipos de gastos usando DonutChart',
          pieHole: 0.4,
          width:400,
          height:300
        };

        // Instantiate and draw the donut chart.
        var chart = new google.visualization.PieChart(document.getElementById('grafico_donut_div'));
        chart.draw(data, options);
      }
