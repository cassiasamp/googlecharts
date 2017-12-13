google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawSeriesChart);

//bubble chart
    function drawSeriesChart() {
      var data = google.visualization.arrayToDataTable([
        ['Mês',   'Valor investido',   'Rendimento',  'Population'],
        ['Jan',    80.66,              1.67,          34646463],
        ['Fev',    79.84,              1.36,          81902307],
        ['Mar',    78.6,               1.84,           5523095],
        ['Abr',    72.73,              2.78,          79716203],
        ['Mai',    80.05,              2,             61801570],
        ['Jun',    72.49,              1.7,           73137148],
        ['Jul',    68.09,              4.77,          31090763],
        ['Ago',    81.55,              2.96,           7485600],
        ['Set',    68.6,               1.54,         141850000],
        ['Out',    78.09,              2.05,         307007000],
        ['Nov',    78.09,              2.05,         307007000],
        ['Dez',    78.09,              2.05,         307007000]
      ]);
      var options = {
        title: 'Correlação entre mês, rendimento ' +
               'e valor investido (2017)',
        hAxis: {title: 'Valor investido'},
        vAxis: {title: 'Percentual de crescimento'},
        bubble: {textStyle: {fontSize: 11}}
      };
      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }