var w = 900,
			h = 300

	var svg3 = d3.select(".ShortLong")
				.append("svg")
				.attr("width", w)
				.attr("height", h)

	var songs = [{"Artist":"William Basinski","Song":"dlp 1.1","Length":63.5, "Colour": "#87255B"},
					{"Artist":"Orchid","Song":"Chaos Ain't Me","Length":0.5, "Colour": "white" }]

		svg3.selectAll("circle")
			.data(songs)
			.enter()
			.append("circle")
			.attr("cx", function(d, i) {return (i + 1) * 200} )
			.attr("cy", 100)
			.attr("r", function(d) {return d.Length * 5} )
			.style("fill", function(d) {return d.Colour})
			.style("fill-opacity", 0.6)