 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(linhaLancados2);

      function linhaLancados2() {
        var data = google.visualization.arrayToDataTable([
        ['Ano', 'Filmes lançados'],
          ['2004',  30      ],
          ['2005',  10      ],
          ['2006',  40      ],
          ['2007',  10      ]
        ]);

        var options = {
          title: 'Filmes lançados (conclusão 2)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('linha_lancados_2'));

        chart.draw(data, options);
      }