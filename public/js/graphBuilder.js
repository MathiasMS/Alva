window.onload = function () {

		var myPieChart = new Chart(document.getElementById("myChart"), {
		    type: 'doughnut',
		    data: {
		      labels: ["Lightening", "Air Conditioning"],
		      datasets: [
		        {
		          label: "Total Current Usage (km)",
		          backgroundColor: ["#3e95cd", "#8e5ea2"],
		          data: [70,30]
		        }
		      ]
		    },
		    options: {
		      title: {
		        display: true
		      }
		    }
		});

		setInterval(function(){
             $.ajax({url: "http://localhost:8082/getArduinoData",type: "GET", success: function(result){
                    myPieChart.data.datasets.forEach((dataset) => {
                dataset.data[0]=Math.abs(result.iluminacion);
                dataset.data[1]=Math.abs(result.equipos);
            });
                }});
			
		    myPieChart.update();
		},1000);
	
}