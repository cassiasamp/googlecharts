google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharScatterInvestimento);

function desenharScatterInvestimento() {
        var data = google.visualization.arrayToDataTable([
          ['Mês', 'Investimentos'],
          [ '1', 800 ],
          [ '2', 400 ],
          [ '3', 1100 ],
          [ '4', 400 ],
          [ '5', 500 ],
          [ '6', 750 ],
          [ '7', 1500 ],
          [ '8', 650 ],
          [ '9', 850 ],
          [ '10', 400 ],
          [ '11', 1000 ],
          [ '12', 720 ]
        ]);

        var options = {
          title: 'Investimentos por mês com ScatterChart',
          //vAxis: {title: 'Investimentos', minValue: 900, maxValue: 6, format: 'currency'},//arrumar min max values, não funciona
          //GOOGLE MUDOU API, PARA FUNCIONAR, USAR ABAIXO:
          vAxis: {
            title: 'Investimentos',
            format: 'currency',
            viewWindowMode:'explicit',
            viewWindow: {
              max:1600,
              min:200
            }
          },
          hAxis: {title: 'Mês', minValue: 0, maxValue: 5},//arrumar min e max values, não funciona
          legend: 'none',
          width:600,
          height:300
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('desenharScatterInvestimento_div'));
        chart.draw(data, options);
      }