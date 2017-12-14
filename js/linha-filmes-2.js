google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaCurva2);

      function linhaCurva2() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Filmes lançados', 'Filmes assistidos'],
          ['2004',  300,      210],
          ['2005',  780,      670],
          ['2006',  260,      120],
          ['2007',  430,      310],
          //['2008',  630,      540],
          //['2009',  430,      220],
          //['2010',  530,      440]
        ]);

        var options = {
          title: 'Filmes lançados e assistidos: conclusão 1',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart_2'));

        chart.draw(data, options);
      }