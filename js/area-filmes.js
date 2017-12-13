google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(areaFilmes);

function areaFilmes() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Lançados', 'Assitidos'],
          ['2013',  10,      400],
          ['2014',  11,      300],
          ['2015',  21,       250],
          ['2016',  10,      350],
          ['2017',  20,      200]
        ]);

        var options = {
          title: 'Filmes lançados e assistidos anualmente',
          hAxis: {title: 'Ano',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          colors:['Plum','LightBlue']
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area_filmes_div'));
        chart.draw(data, options);
      }