google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharPizzaAlura);

 //Callback that draws the pie chart.
      function desenharPizzaAlura() {

        // Create the data table for the pie chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'curso');
        data.addColumn('number', 'numero-de-alunos');
        data.addRows([
          ['Mobile', 720],
          ['Design', 1600],
          ['Programação', 1400],
          ['Front-end', 780],
          ['Infra', 740],
          ['Business', 760]
        ]);

        // Set options for the pie chart.
        var options = {title:'Cursos na Alura usando PieChart',
                       pieSliceText: 'none',
                       pieStartAngle: 135,
                       colors: ['666666', 'gold', '#ffb3cc', 'CCCCCC', '999999', 'grey'],
                       width:400,
                       height:300};

        // Instantiate and draw the pie chart.
        var chart = new google.visualization.PieChart(document.getElementById('pizza_alura_div'));
        chart.draw(data, options);
      }
