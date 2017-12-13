google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharScatterGastos);

 //gastos versao scatter 
      function desenharScatterGastos() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Mês');
        data.addColumn('number', 'Gastos');
        //data.addColumn('string', 'Área'); //ver como colocar tipo aqui

        data.addRows([
          [1, 67], [1, 88], [1, 77],
          [2, 93], [2, 85], [2, 91],
          [3, 71], [3, 78], [3, 93],
          [4, 80], [4, 82],[4, 75],
          [5, 80], [5, 90], [5, 72],
          [6, 75], [6, 68], [6, 98],
          [7, 82], [7, 94], [7, 79],
          [8, 95], [8, 86], [8, 67],
          [9, 60], [9, 80], [9, 92],
          [10, 81], [10, 79], [10, 83],
          [11, 75], [11, 80], [11, 71],
          [12, 89], [12, 92], [12, 85]
        ]);


        var options = {
          width: 700,
          height: 400,
          title: 'Tipos de gastos usando ScatterChart',
          hAxis: {title: 'Mês', format: 'decimal', 
                  gridlines: {
                      units: {
                        months: {format: ['Mon']},
                        }
                      },
                  viewWindowMode:'explicit',
                    viewWindow: {
                      max:12,
                      min:1
                      }
                    },
          vAxis: {title: 'Gastos', format: 'currency'}
        };

      
        var chart = new google.visualization.ScatterChart(document.getElementById('desenharScatterGastos_div'));
        chart.draw(data, options);
      }