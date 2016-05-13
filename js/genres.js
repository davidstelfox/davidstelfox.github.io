var playdata = [{"Genre":"Modern Classical","Plays":2384},
					{"Genre":"Ambient","Plays":378},
					{"Genre":"Post rock","Plays":279},
					{"Genre":"Metal","Plays":551},
					{"Genre":"Punk","Plays":991},
					{"Genre":"Rock","Plays":1056},
					{"Genre":"Indie","Plays":401},
					{"Genre":"Electronic","Plays":183}]

	var values = [2384, 1056, 991, 551, 401, 378, 279, 183]

	var data = []

	var yOffset = 0

	var w = 1000, h = 200

	var colors = ['#360568', '#87255B', '#A5E6BA', '#9AC6C5', '#B370B0', '#5B2A86', '#7785AC', '#39A2AE']

	var valueScale = d3.scale.linear()
								.domain([0,2500])
								.range([0, 350])

		for(var i = 0; i < values.length; i++) {

		    var datum = {

		        value : valueScale(values[i]),
		        colour : colors[i],
		        x: 0,
		        y: yOffset

		    }

		    yOffset += valueScale(values[i]) 

		    data.push(datum)

		}	

	var svg = d3.select(".genres")
				.append("svg")
				.attr("width", w)
				.attr("height", h)


			svg.selectAll("rect")
				.data(data)
				.enter()
				.append("rect")
				.attr("width", function(d) {return d.value})
				.attr("height", 200)
				.attr("x", function(d) {return d.y})
			    .style("fill", function(d) {return d.colour})
			    .style("fill-opacity", 0.6)