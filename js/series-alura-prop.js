  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesAluraProp);

    function drawSeriesAluraProp() {

      var data = google.visualization.arrayToDataTable([
        ['Categoria',   'Cursos',    'taxa de conclusão','Categoria', 'Numero de alunos'],
        ['Mobile',       80,              0.167,         'Mobile',       34646463],
        ['Design',       65,              0.136,         'Design',       81902307],
        ['Programação',  70,              0.184,          'Programação', 5523095],
        ['Front-end',    72,              0.278,          'Front-end',   79716203],
        ['Infra',        80,              0.20,            'Infra',     61801570],
        ['Business',     68,              0.477,        'Business',      31090763]
        
      ]);

      var options = {
        title: 'Correlação entre cursos, taxa de conclusão ' +
               '(2017)',
        hAxis: {title: 'Cursos', maxValue: 83},
        vAxis: {title: 'taxa de conclusão', format:'percent'}, 
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_alura_prop_div'));
      chart.draw(data, options);
    }