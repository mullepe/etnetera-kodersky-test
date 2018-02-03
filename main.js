// Initialize a Line chart in the container with the ID chart1
  new Chartist.Bar('#chart1', {
    labels: ["8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","8:00","","22:00",""],
    series: [[100, 10, 120, 180, 200, 100, 10, 120, 180, 200, 100, 10, 120, 180, 200, 100, 10, 120, 180, 200,100, 10, 120, 180, 200, 100, 10, 120, 180]]
	}, 

	{

	axisX: {
   		showGrid: false,
   		offset: 60,
	},

	axisY: {
   		showLabel: false,
   		showGrid: false,
   		
	},

  	

  });

  // Initialize a Line chart in the container with the ID chart2
  new Chartist.Bar('#chart2', {
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
  });


