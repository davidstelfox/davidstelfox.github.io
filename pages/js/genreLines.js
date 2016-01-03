var margin = {top: 25, right: 20, bottom: 35, left: 20};
			var width = 875;
			var height = 525 - margin.top - margin.bottom;
			

		// creates linear scales which are passed in when dataset is loaded
			var x = d3.scale.linear()
					.domain([1,12])
					.range([0 , width]);

			var y = d3.scale.linear()
					.domain([0,520])
					.range([height - margin.top, 0]);

		// creates lines on svg based
			var metalLine = d3.svg.line()
							.x(function(d){return x(d.Month)})
							.y(function(d){return y(d.Metal)})
							.interpolate("basis") ;

			var ambientLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Ambient);})
						.interpolate("basis") ;

			var postRockLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Postrock);})
						.interpolate("basis") ;

			var modernClassicalLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.ModernClassical);})
						.interpolate("basis") ;

			var indieLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Indie);})
						.interpolate("basis") ;

			var rockLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Rock);})
						.interpolate("basis") ;

			var electronicLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Electronic);})
						.interpolate("basis") ;

			var punkLine = d3.svg.line()
						.x(function(d){return x(d.Month);})
						.y(function(d){return y(d.Punk);})
						.interpolate("basis") ;

			var svg = d3.select(".genreLines")
						.append("svg")
						.attr("width", width)
						.attr("height", height + margin.top)
						// .append("g")
						// .attr("transform", "translate(0," + margin.top + ")");

			// var xAxis = d3.svg.axis()
			// 					.scale(x)
			// 					.tickFormat(function(d){return d.Date;})
			// 					.ticks(0)
			// 					.orient("bottom");

		// Loads in json 
		d3.csv("data/genrePlays.csv", function(data) {
				
		// Passes fields from JSON to scales created earlier
			// x.domain(d3.extent(data, function(d) {return d.Month}));
			// y.domain(d3.extent(data, function(d) {return d.ModernClassical}));

			var strokew = 6

		// Appends the line to the SVG based on variable above
      		  svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", metalLine)
			      .attr("id", "certified")
			      .style("stroke", "#9AC6C5")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew)
			      ;


			svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", ambientLine)
			      .attr("id", "certified")
			      .style("stroke", "#5B2A86")
				.style("fill", "none")
				.style("stroke-opacity", 0.6)
				.style("stroke-width", strokew);

			  svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", postRockLine)
			      .attr("id", "certified")
			      .style("stroke", "#7785AC")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);

			  svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", modernClassicalLine)
			      .attr("id", "certified")
			      .style("stroke", "#360568")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);

			    svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", indieLine)
			      .attr("id", "certified")
			      .style("stroke", "#B370B0")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);


			     svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", rockLine)
			      .attr("id", "certified")
			      .style("stroke", "#87255B")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);

			     svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", electronicLine)
			      .attr("id", "certified")
			      .style("stroke", "#39A2AE")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);


			      svg.append("path")
			      .datum(data)
			      .attr("class", "line")
			      .attr("d", punkLine)
			      .attr("id", "certified")
			      .style("stroke", "#A5E6BA")
			      .style("fill", "none")
			      .style("stroke-opacity", 0.6)
			      .style("stroke-width", strokew);

			  });