google.charts.load('current', {'packages':['corechart', 'line']});

google.charts.setOnLoadCallback(desenharLinhaPercentualGasto);

function desenharLinhaPercentualGasto() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Mês');
        data.addColumn('number', 'Percentual de gasto');
        data.addRows([
          [ new Date(2017, 0), 0.08 ],
          [ new Date(2017, 1), 0.04 ],
          [ new Date(2017, 2), 0.10],
          [ new Date(2017, 3), 0.0402 ],
          [ new Date(2017, 4), 0.0503 ],
          [ new Date(2017, 5), 0.0705 ],
          [ new Date(2017, 6), 0.105 ],
          [ new Date(2017, 7), 0.0605 ],
          [ new Date(2017, 8), 0.0805 ],
          [ new Date(2017, 9), 0.104 ],
          [ new Date(2017, 10), 0.105 ],
          [ new Date(2017, 11), 0.0702 ]
        ]);

        var options = {
          chart: {
            title: 'Percentual de gastos por mês com LineChart',
            subtitle: 'usando material charts nesse gráfico'
            },
            vAxis: {format:'percent'},
            hAxis: {
              //depois achar um jeito de exibir todos os meses
            },
          width: 800,
          height: 400
        };

      var chart = new google.charts.Line(document.getElementById('desenharLinhaPercentualGasto_div'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
