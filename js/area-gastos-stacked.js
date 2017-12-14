google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

//area gastos
    function drawChart(){
        var data = google.visualization.arrayToDataTable([
        ['Faculdade', 'Transporte', 'Lazer', 'Internet', 'Cartão de crédito',
         'Alimentação', { role: 'annotation' } ],
        ['2014', 10, 24, 20, 32, 18, ''],
        ['2015', 16, 22, 23, 30, 16, ''],
        ['2016', 28, 19, 29, 30, 12, ''],
        ['2017', 28, 19, 29, 30, 12, '']
      ]);


       var options = {
          isStacked: 'relative',
          height: 300,
          width: 650,
          legend: {position: 'right', maxLines: 3},
          vAxis: {
            minValue: 0,
          },
          title: 'AreaChart de gastos indo até 100%'
        };

      var chart = new google.visualization.AreaChart(document.getElementById("area_gastos_stacked"));
      chart.draw(data, options);

    }