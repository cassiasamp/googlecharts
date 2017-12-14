google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharCursosAlura);

  
      function desenharCursosAlura() {
        var data = new google.visualization.arrayToDataTable([
          ['Curso', 'Número de alunos', { role: 'style' }],
          ['Mobile', 720, 'blue'],
          ['Design', 1600, 'green'],
          ['Programação', 1400, 'orange'],
          ['Front-end', 780, 'red'],
          ['Infra', 740, 'teal'],
          ['Business', 760, 'gold']
        ]);



        var options = {
          title: 'Quantidade de alunos por categoria de curso na Alura',
          hAxis: {
            title: 'Cursos da Alura',
          },
          vAxis: {
            title: 'Número de alunos'
          },
          legend: { position: 'none' },
          width: 820,
          height: 300,
        };

    var chart = new google.visualization.ColumnChart(document.getElementById('desenharCursosAlura_div'));
      chart.draw(data, options);
    }
