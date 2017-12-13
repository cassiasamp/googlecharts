google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharLinhaInvestimento);

function desenharLinhaInvestimento() {
         var data = google.visualization.arrayToDataTable([
          ['Mês','Investimentos'],
          [ 'Jan', 800 ],
          [ 'Fev', 400 ],
          [ 'Mar', 1100],
          [ 'Abr', 400 ],
          [ 'Mai', 500 ],
          [ 'Jun', 750 ],
          [ 'Jul', 1500 ],
          [ 'Ago', 650 ],
          [ 'Set', 850 ],
          [ 'Out', 400 ],
          [ 'Nov', 1000 ],
          [ 'Dez', 720 ]
        ]);

        var options = {
          title: 'Investimentos por mês com LineChart',
          vAxis: {format: 'currency'},
          legend: 'none',
          width: 650,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('desenharLinhaInvestimento_div'));
        chart.draw(data, options);
      }