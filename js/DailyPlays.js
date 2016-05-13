// load in data from json file
				d3.json("data/DailyPlays.json", function(data) {
				
				var h = 1000;
				var w = 875;
				var id = function(d) {return d.Month}
				var dayno = function(d) {return d.Day}
				var count = function(d) {return d.Plays}
				
				var Months = ["J", "F", "M", "A", "M", "J", "J", "A", "S",
								"O", "N", "D"]
				
				// creates linear scale based on input (domain [extent gives range]) and provides output
				// between values in range
				var xscale = d3.scale.linear()
									.domain(d3.extent(data, id))
									.range([100, w-100]);
							
				var yscale = d3.scale.linear()
										.domain(d3.extent(data, dayno))
										.range([50, h-50]);
										
			
			

			//create variable with SVG element by hanging it off the body tag in HTML file, give it size attributes	
				var svg = d3.select(".dailyplays")
							.append("svg")
							.attr("width", w)
							.attr("height", h)


			// create a shape for each array in JSON file
				svg.selectAll("circle")
					.data(data)
					.enter()
					.append("circle")
					

			// pass data to shape for each array
					.attr("cx", function(d) {return xscale(id(d))})
					.attr("cy", function(d) {return yscale(dayno(d))})
					.attr("r", function(d) {return Math.sqrt(d.Plays*3);})
					.attr("fill", "#8B2635")
					.attr("fill-opacity", 0.6)

				svg.selectAll("text")
					.data(Months)
					.enter()
					.append("text")
					.attr("x", function(d,i) {return xscale(i) + 58} )
					.attr("y", 20)
					.text(function(d) {return d})
					.style("font-size", "16pt")


				});