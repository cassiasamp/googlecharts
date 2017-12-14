 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaAssistidos2);

      function linhaAssistidos2() {
        var data = google.visualization.arrayToDataTable([
        ['Ano','Filmes assistidos'],
          ['2004',  5],
          ['2005', 60],
          ['2006', 3],
          ['2007', 50]
        ]);

        var options = {
          title: 'Filmes assistidos (conclusão 2)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('linha_assistidos_2'));

        chart.draw(data, options);
      }