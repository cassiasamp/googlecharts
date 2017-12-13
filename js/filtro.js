google.charts.load('current', {'packages':['corechart', 'scatter', 
        'bar', 'table', 'gauge', 'controls']});

google.charts.setOnLoadCallback(drawChartRangeFilter);

//CHART RANGE
     function drawChartRangeFilter() {

    var control = new google.visualization.ControlWrapper({
      'controlType': 'ChartRangeFilter',
      'containerId': 'chartRangeFilter_control_div',
      'options': {
        // Filter by the date axis.
        'filterColumnIndex': 0,
        'ui': {
          'chartType': 'LineChart',
          'chartOptions': {
            'chartArea': {'width': '90%'},
            'hAxis': {'baselineColor': 'none'}
          },
          // Display a single series that shows the closing value of the stock.
          // Thus, this view has two columns: the date (axis) and the stock value (line series).
          'chartView': {
            'columns': [0, 3]
          },
          // 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
          'minRangeSize': 86400000
        }
      },
      // Initial range: 2012-02-09 to 2012-03-20.
      'state': {'range': {'start': new Date(2012, 1, 9), 'end': new Date(2012, 2, 20)}}
    });

    var chart = new google.visualization.ChartWrapper({
      'chartType': 'ColumnChart',
      'containerId': 'chartRangeFilter_chart_div',
      'options': {
        // Use the same chart area width as the control for axis alignment.
        'chartArea': {'height': '80%', 'width': '90%'},
        'hAxis': {'slantedText': false},
        'vAxis': {'viewWindow': {'min': 0, 'max': 2000}},
        'legend': {'position': 'none'},
        'title': 'Selecionar o mês para ver o balanço (precisa ainda ser melhorado)',
      },
      // Convert the first column from 'date' to 'string'.
      'view': {
        'columns': [
          {
            'calc': function(dataTable, rowIndex) {
              return dataTable.getFormattedValue(rowIndex, 0);
            },
            'type': 'string'
          }, 1, 2, 3, 4]
      }
    });

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Saídas');
    data.addColumn('number', 'Entradas');
    data.addColumn('number', 'Baixa');
    data.addColumn('number', 'Crescimento');

    // Create random stock values, just like it works in reality.
    var open, close = 300;
    var low, high;
    for (var day = 1; day < 121; ++day) {
      var change = (Math.sin(day / 2.5 + Math.PI) + Math.sin(day / 3) - Math.cos(day * 0.7)) * 150;
      change = change >= 0 ? change + 10 : change - 10;
      open = close;
      close = Math.max(50, open + change);
      low = Math.min(open, close) - (Math.cos(day * 1.7) + 1) * 15;
      low = Math.max(0, low);
      high = Math.max(open, close) + (Math.cos(day * 1.3) + 1) * 15;
      var date = new Date(2012, 0 ,day);
      data.addRow([date, Math.round(low), Math.round(open), Math.round(close), Math.round(high)]);
    }

    var dashboard = new google.visualization.Dashboard(
      document.getElementById('chartRangeFilter_dashboard_div'));
    dashboard.bind(control, chart);
    dashboard.draw(data);
  }

//bubble chart
    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['Mês',   'Valor',       'Rendimento',      'Population'],
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
               'valor investido (2017)',
        hAxis: {title: 'Valor investido'},
        vAxis: {title: 'Percentual de crescimento'},
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }