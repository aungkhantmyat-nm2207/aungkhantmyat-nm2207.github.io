// main.js
















// Quiz // I dont know how to make it so it can only be clicked once  <--- !!! note-to-self : UPDATE

var options1 = document.querySelectorAll("#quiz1-Option1, #quiz1-Option2, #quiz1-Option3, #quiz1-Option4");

options1.forEach(function(option1) {
  option1.addEventListener("click", function() {
    if (option1.id === "quiz1-Option2") {
      option1.style.backgroundColor = "green";
      document.getElementById("result1").innerHTML = "Correct! Survivor has filmed most of its season in Fiji with the last 10 seasons (and counting) being filmed in Fiji! ";
    } else {
      option1.style.backgroundColor = "red";
      document.getElementById("result1").innerHTML = "Incorrect. Please try again.";
    }
  });
});














// Sample Chart as reference (from Session 8)
// Viewership chart
const labelSeasons= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];

    

    const dataObj1 = {
        labels: labelSeasons,          
        datasets: [
            {
                label: "Average Viewership",
                data: [27.27928571,
                    31.01666667,
                    20.144,
                    20.47,
                    21.50333333,
                    20.133,
                    21.32466667,
                    23.046875,
                    19.88230769,
                    20.54571429,
                    18.37666667,
                    16.68071429,
                    15.62,
                    14.07785714,
                    14.36307692,
                    12.432,
                    12.54,
                    11.86466667,
                    12.201875,
                    12.31733333,
                    11.9125,
                    11.16546667,
                    10.9525,
                    10.06866667,
                    10.248,
                    9.473333333,
                    9.600666667,
                    9.435,
                    9.34,
                    9.623571429,
                    9.051428571,
                    8.948,
                    8.427857143,
                    8.010769231,
                    8.09,
                    7.753571429,
                    7.295714286,
                    7.232857143,
                    6.448571429,
                    7.639285714,
                    5.695384615,
                    5.367692308,
                    4.993846154,
                    ] ,// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 1.2,
                backgroundColor: "hsla(20,100%,80%,0.6)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)",
                fill: false,
                yAxisId: 'y1',
                //put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Average imdb rating (out of 10)",
                data: [7.528571429,
                    7.546666667,
                    7.333333333,
                    7.58,
                    7.588888889,
                    7.78,
                    8.26,
                    7.76875,
                    7.615384615,
                    7.985714286,
                    7.713333333,
                    7.585714286,
                    7.713333333,
                    7.185714286,
                    7.692307692,
                    7.713333333,
                    7.442857143,
                    7.6,
                    7.375,
                    8.226666667,
                    6.89375,
                    6.766666667,
                    7.30625,
                    6.92,
                    7.773333333,
                    7.54,
                    7.373333333,
                    8.071428571,
                    7.492857143,
                    7.757142857,
                    8.421428571,
                    7.673333333,
                    7.9,
                    7.969230769,
                    7.228571429,
                    7.221428571,
                    8.042857143,
                    7.764285714,
                    7.25,
                    8.342857143,
                    5.823076923,
                    7.392307692,
                    7.469230769,
                    
                    ],
                borderWidth: 1.2,
                backgroundColor: "hsla(20,100%,80%,0.6)",
                borderColor: "rgb(0,0,0)",
                fill: false,
                yAxisId: 'y2',
                //put black rgb(0,0,0) or the same color as above
            },

        ],
    }


    new Chart("viewership-chart",

            {
                type: "line",
                data: dataObj1,
                
                options: { 
                    responsiveness: true,   //Information on multi-axis chart from https://www.chartjs.org/docs/latest/samples/line/multi-axis.html
                    interaction : {
                        mode: 'index',
                        intersact: false,
                    },
                    stacked: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart - Multi Axis'
                        },
                    },

                    scales: {
                        y1:{
                            type: 'linear',
                            display: true,
                            position: 'left',
                        },
                        y2: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                    
                            // grid line settings //not working :(
                            grid: {
                              drawOnChartArea: true, 
                        },
                    },
                },

                    maintainAspectRatio: true,
                    legend: {
                        display: true,
                        align: 'center',
                        position: 'bottom',

                    },
                    title: {
                        display: true,
                        text: ["Average Viewership Numbers vs Average IMDB rating", "per Season" , ""],
                        fontFamily: "TrebuchetMS",
                        fontSize: 20,
                        fontColor: 'rgb(0,0,0)',
                    },

                
                },

            },

            );

            //Multi-axis is not working :(

