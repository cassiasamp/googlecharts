 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaEixoDuplo);

      function linhaEixoDuplo() {
        var data = google.visualization.arrayToDataTable([
        ['Ano', 'Filmes lançados', 'Filmes assistidos'],
          ['2004',  30,      7],
          ['2005',  10,      60],
          ['2006',  40,       8],
          ['2007',  10,      50],
          ['2008',  80,      10],
          ['2009',  20,      40]
        ]);

        var options = {
          title: 'Filmes lançados e assitidos juntos (duplo eixo y)',
          width: 900,
          height: 500,
          curveType: 'function',
          // Gives each series an axis that matches the vAxes number below.
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'Filmes lançados'},
            1: {title: 'Filmes assistidos'}
          },
          hAxis: {
            /*ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
                    new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
                    new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
                   ]*/
          },
          vAxis: {
            format: 'decimal',
            0: {viewWindow: {
              maxValue: 10,
              minValue: 5,
            }},
            1: {viewWindow: {
              maxValue: 100,
              minValue: 0
            }}
          }
      };
      


        /*var options = {
          title: 'Filmes lançados (conclusão 2)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };*/

        var chart = new google.visualization.LineChart(document.getElementById('linha_eixo_duplo'));

        chart.draw(data, options);
      } 