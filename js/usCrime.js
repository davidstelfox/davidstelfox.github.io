
	
	var w = 1000,
			width = 1200,
			h = 505,
			gridSize = Math.floor(w / 42),
			marginLeft = 120,
			marginTop = 50,
			dept = ["Austin", "Charlotte", "Chicago", "Columbus", "Dallas", "Detroit", "El Paso", "Fort Worth", "Houston", "Indianapolis", "Jacksonville", "Los Angeles", "Memphis", "New York City", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "San Francisco", "San Jose"]

	var svg = d3.select("body")
				.append("svg")
				.attr("width", width)
				.attr("height", h)
				.append("g")
				.attr("transform", "translate(" + marginLeft + "," + marginTop + ")");


	d3.csv("data/us_crime_20.csv", function(d) {

			var colorScale = d3.scale.linear()
									.domain([250,3250])
									.range(["#deebf7", "#3182bd"])

			var dayLabels = svg.selectAll(".dept")
						.data(dept)
						.enter()
						.append("text")
						.text(function(d) {return d; })
						.attr("x", -17)
						.attr("y", function(d,i) {return (i * gridSize) - 12; })
						.style("text-anchor", "end")
			            .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
            			.attr("class", "daylabel")
            			.style("font-size", 12);


			svg.selectAll("circle")
				.data(d)
				.enter()
				.append("circle")
				.attr("cx", function(d) { return (d.year_no - 1) * gridSize - 5; })
              	.attr("cy", function(d) { return (d.dept_no - 1) * gridSize; })
              	.attr("r", 8)
              	.style("fill", "white")
              	.style("fill", function(d) {return colorScale(d.violent); })

            svg.append("text")
            	.text("1975")
            	.attr("x", -20)
            	.attr("y", -20)
            	.style("font-size", 12);

            svg.append("text")
            	.text("2015")
            	.attr("x", w - 100)
            	.attr("y", -20)
            	.style("font-size", 12);

            // Fudges the legend
            svg.append("circle")
            	.attr("cx", -5)
            	.attr("cy", 475)
            	.attr("r", 8)
            	.style("fill", "#deebf7")

             svg.append("text")
            	.text("250 violents crimes per 100,000")
            	.attr("x", 10)
            	.attr("y", 480)
            	.style("font-size", 10);

               svg.append("circle")
            	.attr("cx", -5)
            	.attr("cy", 500)
            	.attr("r", 8)
            	.style("fill", "#3182bd") 

             svg.append("text")
            	.text("3250 violents crimes per 100,000")
            	.attr("x", 10)
            	.attr("y", 505)
            	.style("font-size", 10);

	})