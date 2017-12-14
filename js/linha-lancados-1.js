 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaLancados1);

      function linhaLancados1() {
        var data = google.visualization.arrayToDataTable([
        ['Ano','Filmes lancados'],
          ['2004', 300],
          ['2005', 780],
          ['2006', 260],
          ['2007', 430]
        ]);

        var options = {
          title: 'Filmes lancados (conclusão 1)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('linha_lancados_1'));

        chart.draw(data, options);
      }