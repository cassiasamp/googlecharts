google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharPizzaFilmes);

 //Callback that draws the pie chart.
      function desenharPizzaFilmes() {

        // Create the data table for the pie chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Categorias');
        data.addColumn('number', 'Espectadores');
        data.addRows([
          ['Drama', 720],
          ['Comédia', 1600],
          ['Aventura', 1400],
          ['Ficção', 780],
          ['Terror', 740],
          ['Suspense', 760]
        ]);

        // Set options for the pie chart.
        var options = {title:'Categorias de filmes usando PieChart',
                       pieSliceText: 'label',
                       //pieStartAngle: 100,
                       colors: ['666666', 'gold', '#ffb3cc', 'CCCCCC', '999999', 'grey'],
                       width:400,
                       height:300};

        // Instantiate and draw the pie chart.
        var chart = new google.visualization.PieChart(document.getElementById('pizza_filmes_div'));
        chart.draw(data, options);
      }
