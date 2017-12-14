google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(desenharPiramide);

function desenharPiramide() {
        var data = google.visualization.arrayToDataTable([

		        ['Idade', 'Homem', 'Mulher'],
		       	['0-4 anos',  106, -104],
		        ['5-9 anos',   91,  -86 ],
				['10-14 anos', 79,  -77 ],
				['15-19 anos', 68,  -64 ],
				['20-24 anos', 62,  -58 ],
				['25-29 anos', 56,  -53 ],
				['30-34 anos', 51,  -46 ],
				['35-39 anos', 48,  -41 ],
				['40-44 anos', 43,  -35 ],
				['45-49 anos', 39,  -30 ],
				['50-54 anos', 33,  -27 ],
				['55-59 anos', 32,  -25 ],
				['60-64 anos', 27,  -20 ],
				['64-69 anos', 19,  -16 ],
				['70-74 anos', 13,  -12 ],
				['75-79 anos', 8,   -7  ],
				['80-84 anos', 3,   -3  ],
				['85-89 anos', 1,   -1  ],
				['90-94 anos', 0,   0   ],
				['95+ anos',   0,   0   ]
		]);


		var view = new google.visualization.DataView(data);
	      view.setColumns([0, 1,
	                       { calc: "stringify",
	                         sourceColumn: 1,
	                         type: "string",
	                         role: "annotation" },
	                       2,
	                       { calc: "stringify",
	                         sourceColumn: 2,
	                         type: "string",
	                         role: "annotation" }]);

		var options = {
				title: 'Pirâmide de população em determinada faixa etária',
                isStacked: true,
                bar: {groupWidth: "92%"},
                hAxis: {
                    format: ';',
                },
                vAxis: {
                    direction: -1
                }
            };

        var formatter = new google.visualization.NumberFormat({
                pattern: ';'
            });
				formatter.format(data, 2);

		var chart = new google.visualization.BarChart(document.getElementById('piramide_div'));
      chart.draw(view, options);
	};


		