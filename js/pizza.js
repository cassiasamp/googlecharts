google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharGraficoPizza);

 //Callback that draws the pie chart.
      function desenharGraficoPizza() {

        // Create the data table for the pie chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'tipo-de-gasto');
        data.addColumn('number', 'valor');
        data.addRows([
          ['Faculdade', 2500.00],
          ['Transporte', 450.00],
          ['Lazer', 100.00],
          ['Internet', 50.0],
          ['Cartão de crédito', 2000.00],
          ['Alimentação', 400.00]
        ]);

        // Set options for the pie chart.
        var options = {title:'Tipos de gastos usando PieChart',
                       width:400,
                       height:300};

        // Instantiate and draw the pie chart.
        var chart = new google.visualization.PieChart(document.getElementById('grafico_pizza_div'));
        chart.draw(data, options);
      }
