$(document).ready(function(){
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Respuestas', 'Nº de Respuestas', { role: 'style' }],
          ['A)',     4, "#ff3730"],
          ['B)',   1, "#ff3730"],
		  ['C)',   15, "#33ed26"]
        ]);

        var options = {
          title: 'Resumen de Respuestas',
          is3D: true,
		  legend: { position: "none" }
        };

        var chart = new google.visualization.BarChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


})

$(window).resize(function(){
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Respuestas', 'Nº de Respuestas', { role: 'style' }],
          ['A)',     4, "#ff3730"],
          ['B)',   1, "#ff3730"],
		  ['C)',   15, "#33ed26"]
        ]);

        var options = {
          title: 'Resumen de Respuestas',
          is3D: true,
		  legend: { position: "none" }
        };

        var chart = new google.visualization.BarChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


})