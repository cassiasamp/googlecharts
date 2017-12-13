google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawSeriesAlura);

//bubble chart
    function drawSeriesAlura() {
      var data = google.visualization.arrayToDataTable([
        ['Categoria',   'Cursos',    'Taixa de conclusão', 'Numero de alunos'],
        ['Mobile',       80,              1.67,          34646463],
        ['Design',       65,              1.36,          81902307],
        ['Programação',  70,              1.84,           5523095],
        ['Front-end',    72,              2.78,          79716203],
        ['Infra',        80,              2,             61801570],
        ['Business',     68,              4.77,          31090763]
        
      ]);
      var options = {
        title: 'Correlação entre cursos, taixa de conclusão ' +
               '(2017)',
        hAxis: {title: 'Cursos', maxValue: 83},
        vAxis: {title: 'Taixa de conclusão'},
        bubble: {textStyle: {fontSize: 11}},
        colorAxis: {colors: ['yellow', 'red']}
      };
      var chart = new google.visualization.BubbleChart(document.getElementById('series_alura_div'));
      chart.draw(data, options);
    }