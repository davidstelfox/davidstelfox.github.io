var w = 875,
			h = 800

	var xScale = d3.scale.linear()
					.domain([0,400])
					.range([100,875])

	var svg1 = d3.select(".artistPlays")
				.append("svg")
				.attr("width", w)
				.attr("height", h)

	d3.json("data/ArtistPlays.json", function(d) {

		svg1.selectAll("rect")
			.data(d)
			.enter()
			.append("rect")
			.attr("x", 0)
			.attr("y", function(d,i) {return i * 30 })
			.attr("width", function(d) {return xScale(d.Plays)})
			.attr("height", 20)
			.style("fill", function(d) {return d.Colour})
			.style("fill-opacity", 0.8)
			

		svg1.selectAll("text")
			.data(d)
			.enter()
			.append("text")
			.attr("x", 5)
			.attr("y", function(d,i) {return i * 30 + 15 })
			.text(function(d) {return d.Artist})
			.style("fill", "white")
			.style("font-size", "12pt")
			.style("font-family", "Andale Mono")

	})