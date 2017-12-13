google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawPercStackedChart);

//full stacked columns
    function drawPercStackedChart(){
        var data = google.visualization.arrayToDataTable([
        ['Faculdade', 'Transporte', 'Lazer', 'Internet', 'Cartão de crédito',
         'Alimentação', { role: 'annotation' } ],
        ['2014', 10, 24, 20, 32, 18, ''],
        ['2015', 16, 22, 23, 30, 16, ''],
        ['2016', 28, 19, 29, 30, 12, ''],
        ['2017', 28, 19, 29, 30, 12, '']
      ]);

    
      var view = new google.visualization.DataView(data);

       var options = {
          isStacked: 'percent',
          height: 300,
          legend: {position: 'right', maxLines: 3},
          vAxis: {
            minValue: 0,
          },
          title: 'ColumnChart de gastos com as colunas dando 100% (full stacked)'
        };

      var chart = new google.visualization.ColumnChart(document.getElementById("drawPercStackedChart_div"));
      chart.draw(view, options);

    }