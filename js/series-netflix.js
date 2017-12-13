  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesNetflix);

    function drawSeriesNetflix() {

      var data = google.visualization.arrayToDataTable([
        ['Categoria',           'Series',    'Duração','',                     'Espectadores'],
        ['Comédia',                   10,     2,        'Comédia',                   34646463],
        ['Drama Político',            5,     3,        'Drama Político',            81902307],
        ['Ficção Científica',         7,     8,        'Ficção Científica',         5523095],
        ['Ação e Aventura',           12,     2,        'Ação e Aventura',           79716203],
        ['Suspense',                  8,     4,        'Suspense',                  61801570],
        ['Terror',                    6,     5,        'Terror',                    31090763]
        
      ]);

      var options = {
        title: 'Correlação entre séries, duração ' +
               'e espectadores (2017)',
        hAxis: {title: 'Séries', maxValue: 15, minValue:0},
        vAxis: {title: 'Duração (em horas)', maxValue: 9, format:'decimal'}, 
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_netflix_div'));
      chart.draw(data, options);
    }