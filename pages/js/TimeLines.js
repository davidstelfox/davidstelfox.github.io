var TimeData = [71, 51, 65, 35, 25, 45, 35, 32, 32, 33, 46, 35]

	var w = 1000, h = 500

	var xRange = d3.scale.linear()
						.domain([0, 12])
						.range([0, 1000])

	var yRange = d3.scale.linear()
						.domain([0, 80])
						.range([500, 0])

	var svg = d3.select(".songplays")
				.append("svg")
				.attr("width", w)
				.attr("height", h);


	var area = d3.svg.area()
					.interpolate("basis")
					.x(function(d, i) {return xRange(i);})
					.y0(h)
					.y1(function(d, i) {return yRange(d);})

	svg.append("path")
		.datum(TimeData)
		.attr("class", "area")
		.attr("d", area)
		.style("fill", "#8B2635")
		.style("fill-opacity", 0.6);



			      svg.append("text")
			      		.attr("transform", "translate(50," + (h - 4) + ")")
			      		.style("font-family", 'Andale Mono')
			      		.style("font-size", "10pt")
			      		.style("text-anchor", "middle")
			      		.text("January 2015")


			      svg.append("text")
			      		.attr("transform", "translate(" + (w - 135) + "," + (h - 4) + ")")
			      		.style("font-family", 'Andale Mono')
			      		.style("font-size", "10pt")
			      		.style("text-anchor", "middle")
			      		.text("December 2015")	

			       svg.append("text")
			      		.attr("transform", "translate(10,25)")
			      		.style("font-family", 'Andale Mono')
			      		.style("font-size", "10pt")
			      		.style("text-anchor", "middle")
			      		.text("80")