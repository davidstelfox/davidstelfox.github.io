var svg = d3.select(".legend")
					.append("svg")
					.attr("width", 1000)
					.attr("height", 140)


		var languageData = 
		[ {"language":"Ambient", "color":"#5B2A86"}, 
		{"language":"Electronic", "color":"#39A2AE"}, 
		{"language":"Indie", "color":"#B370B0"},
		{"language":"Metal", "color":"#9AC6C5"},
		{"language":"Modern Classical", "color":"#360568"},
		{"language":"Post rock", "color":"#7785AC"},
		{"language":"Punk", "color":"#A5E6BA"},
		{"language":"Rock", "color":"#87255B"}
		 ];

			var legend = svg.append("g")
							.attr("class", "legend")
							.attr("x", 10)
							.attr("y", 20)
							.attr("width", 10)
							.attr("heigt", 20)

				legend.selectAll("g")
						.data(languageData)
						.enter()
						.append("g")
						.each(function(d,i) {
							var g = d3.select(this);
									g.append("circle")
										.attr("cx", 10)
										.attr("cy", i* 15 + 20)
										.attr("r", 5)
										.attr("width", 10)
										.attr("height", 10)
										.style("fill", d.color)
										.style("fill-opacity", 0.6)

									g.append("text")
										.attr("x", 20)
										.attr("y", i* 15 + 25)
										.attr("width", 10)
										.attr("height", 20)
										.text(d.language)
										.style("font-size", "10pt")


						})