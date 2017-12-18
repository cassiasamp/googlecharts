google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharFilmes);

  
      function desenharFilmes() {
        var data = new google.visualization.arrayToDataTable([
          ['Categoria', 'Número de espectadores', { role: 'style' }],
          ['Drama', 720, 'blue'],
          ['Comédia', 1600, 'green'],
          ['Aventura', 1400, 'orange'],
          ['Ficção', 780, 'red'],
          ['Terror', 740, 'teal'],
          ['Suspense', 760, 'gold']
        ]);



        var options = {
          title: 'Quantidade de espectadores por categoria de filmes',
          hAxis: {
            title: 'Categorias de filmes',
          },
          vAxis: {
            title: 'Número de espectadores'
          },
          legend: { position: 'none' },
          width: 820,
          height: 300,
        };

    var chart = new google.visualization.ColumnChart(document.getElementById('desenharFilmes_div'));
      chart.draw(data, options);
    }
