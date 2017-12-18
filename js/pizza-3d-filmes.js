google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharPizza3dFilmes);

 //Callback that draws the pie chart.
      function desenharPizza3dFilmes() {

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
                       pieSliceText: 'percent',
                       pieStartAngle: 10,
                       is3D: true,
                       colors: ['666666', 'gold', '#ffb3cc', 'CCCCCC', '999999', 'grey'],
                       width:400,
                       height:300};

        // Instantiate and draw the pie chart.
        var chart = new google.visualization.PieChart(document.getElementById('pizza_3d_filmes_div'));
        chart.draw(data, options);
      }
