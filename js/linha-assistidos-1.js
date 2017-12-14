 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaAssistidos1);

      function linhaAssistidos1() {
        var data = google.visualization.arrayToDataTable([
        ['Ano','Filmes assistidos'],
          ['2004',  210],
          ['2005', 670],
          ['2006', 120],
          ['2007', 310]
        ]);

        var options = {
          title: 'Filmes assistidos (conclusão 1)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('linha_assistidos_1'));

        chart.draw(data, options);
      }