 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaCurva);

      function linhaCurva() {
        var data = google.visualization.arrayToDataTable([
        ['Ano', 'Filmes lançados', 'Filmes assistidos'],
          ['2004',  30,      5],
          ['2005',  10,      60],
          ['2006',  40,       3],
          ['2007',  10,      50]
        ]);

        var options = {
          title: 'Filmes lançados e assistidos: conclusão 2',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }