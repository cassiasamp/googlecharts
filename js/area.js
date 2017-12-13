google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(areaChart);

function areaChart() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Entradas', 'Saídas'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Entradas e saídas anuais',
          hAxis: {title: 'Ano',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area_chart_div'));
        chart.draw(data, options);
      }