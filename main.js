// Initialize a Line chart in the container with the ID chart1
  new Chartist.Bar('#chart1', {
    labels: ["8:00","","9:00","","10:00","","11:00","","12:00","","13:00","","14:00","","15:00","","16:00","","17:00","","18:00","","19:00","","20:00","","21:00","","22:00",""],
    series: [[30, 50, 50, 40, 10, 20, 40, 90, 80, 70, 60, 50, 40, 20, 30, 50, 30, 80, 60, 70, 70, 40, 40, 30, 60, 40, 30, 20, 10]]
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
    labels: ["8:00","","9:00","","10:00","","11:00","","12:00","","13:00","","14:00","","15:00","","16:00","","17:00","","18:00","","19:00","","20:00","","21:00","","22:00",""],
    series: [[30, 50, 50, 40, 10, 20, 40, 90, 80, 70, 60, 50, 40, 20, 30, 50, 30, 80, 60, 70, 70, 40, 40, 30, 60, 40, 30, 20, 10]]
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


/** pokus

series: [[{
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    },
    {
      value: 10,
      className: "myclass2"
    },
    {
      value: 30,
      className: "myclass3"
    },
    {
      value: 40,
      className: "myclass4"
    },
    {
      value: 20,
      className: "myclass1"
    }
    ]]

**/