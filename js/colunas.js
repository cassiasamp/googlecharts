google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharColunasEntradaSaida);

  //grafico de colunas de entradas e saida da conta
      function desenharColunasEntradaSaida() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Mês');
        data.addColumn('number', 'Entradas');
        data.addColumn('number', 'Saídas');

        data.addRows([
          ['Jan', 2500, 1000],
          ['Fev', 2000, 500],
          ['Mar', 3000, 1300],
          ['Abr', 1500, 1700],
          ['Mai', 5000, 2250],
          ['Jun', 3567, 3000],
          ['Jul', 3452, 1468],
          ['Ago', 1833, 5250],
          ['Set', 3803, 5500],
          ['Out', 1800, 1000],
          ['Nov', 3569, 1500],
          ['Dez', 3000, 1740],
        ]);

        var options = {
          title: 'Entradas e saídas mensais com ColumnChart',
          hAxis: {
            title: 'Mês',
          },
          vAxis: {
            title: 'Valor',
            format: 'currency'
          },
          width: 800,
          height: 400,
        };

    var chart = new google.visualization.ColumnChart(document.getElementById('desenharColunasEntradaSaida_div'));
      chart.draw(data, options);
    }
