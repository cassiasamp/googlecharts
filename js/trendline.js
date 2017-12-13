google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(trendChart);

function trendChart() {
  var data = google.visualization.arrayToDataTable([
    ['Nota do curso', 'Duração do curso'],
    [8, 3], [4, 5], [10, 2], [4, 2], [3, 5], [6.5, 8], [10, 2]]);

  var options = {
    title: 'Nota do curso e duração do curso',
    hAxis: {title: 'Nota do curso'},
    vAxis: {title: 'Duração do curso'},
    legend: 'none',
    trendlines: { 0: {} }    // Draw a trendline for data series 0.
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('trend_chart_div'));
  chart.draw(data, options);
}