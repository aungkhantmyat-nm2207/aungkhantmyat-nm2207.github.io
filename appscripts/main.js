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














// Season Rating (reference from Session 8)
    const labelSeasons1= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];

        

        const dataObj1 = {
            labels: labelSeasons1,          
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








// Gender chart




const dataObj4 = {
    labels: labelSeasons1,          
    datasets: [
        {
            label: "Female Average Placement",
            data: [9.13,
                8.75,
                9.63,
                7.50,
                9.13,
                8.88,
                7.88,
                9.11,
                7.89,
                10.80,
                9.33,
                9.75,
                10.30,
                12.44,
                8.00,
                8.10,
                10.78,
                9.38,
                11.70,
                9.80,
                11.10,
                11.00,
                11.44,
                7.89,
                10.11,
                11.50,
                10.20,
                9.11,
                9.00,
                10.00,
                10.60,
                9.22,
                13.30,
                9.50,
                11.11,
                10.90,
                11.40,
                10.22,
                9.50,
                10.40,
                9.13,
                10.00,
                11.67
                
                ] ,
            borderWidth: 3,
            backgroundColor: "#fc7979",
            borderColor: "#fc7979",
            fill: false,

        },

        {
            label: "Female Median",
            data: Array(43).fill(9.8),
            borderWidth: 2,
            backgroundColor: "#fc7979",
            borderColor: "#fc7979",
            fill: false,
            pointRadius: 0,
        },


        {
            label: "Male Average placement",
            data: [7.875,
                8.25,
                7.38,
                9.50,
                7.88,
                8.13,
                9.13,
                9.89,
                11.11,
                10.20,
                9.67,
                7.25,
                10.70,
                7.70,
                9.00,
                12.90,
                8.22,
                7.63,
                9.30,
                11.20,
                9.90,
                8.00,
                7.56,
                11.11,
                8.78,
                9.40,
                10.80,
                9.89,
                9.90,
                8.75,
                10.30,
                9.78,
                7.60,
                11.50,
                7.89,
                10.10,
                9.60,
                8.78,
                11.50,
                10.60,
                9.89,
                9.00,
                7.33,
                

                ],
            borderWidth: 3,
            backgroundColor: "#519ecf",
            borderColor: "#519ecf",
            fill: false,
        },


        {
            label: "Male Median",
            data: Array(43).fill(9.4),
            borderWidth: 2,
            backgroundColor: "#519ecf",
            borderColor: "#519ecf",
            fill: false,
            pointRadius: 0,
        },

    ],
}







new Chart("genderChart",

{
    type: "line",
    data: dataObj4,
    
    options : { 
        responsiveness: true,   
        interaction : {
            mode: 'index',
            intersact: false,
        },
        stacked: false,
        
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



);


//Diversity Chart


const dataObj5 = {
    labels: labelSeasons1,          
    datasets: [
        {
            label: "Number of LGBT players per season",
            data: [2,
                2,
                1,
                1,
                0,
                0,
                0,
                1,
                2,
                2,
                2,
                0,
                3,
                0,
                1,
                4,
                1,
                1,
                1,
                0,
                0,
                0,
                2,
                2,
                1,
                1,
                2,
                1,
                2,
                1,
                1,
                1,
                2,
                4,
                2,
                1,
                3,
                2,
                3,
                0,
                3,
                5,
                2,
                
            ] ,
            borderWidth: 3,
            backgroundColor: "#b964f5",
            borderColor: "#b964f5",
            fill: false,

        },


        {
            label: "Number of People of colour players per season",
            data: [2,
                3,
                3,
                2,
                3,
                3,
                3,
                2,
                1,
                3,
                2,
                3,
                15,
                15,
                4,
                5,
                6,
                4,
                7,
                3,
                5,
                3,
                7,
                5,
                5,
                4,
                2,
                6,
                4,
                5,
                7,
                4,
                7,
                5,
                6,
                5,
                9,
                5,
                9,
                5,
                10,
                11,
                13,
                
                ],
            borderWidth: 3,
            backgroundColor: "#d9b411",
            borderColor: "#d9b411",
            fill: false,
        },


        {
            label: "Controversial Seasons",
            data: [ , , , , , , , , , , , 20, 20, 20,20, , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
            borderWidth: 1,
            backgroundColor: "hsla(25, 86%, 72%, 0.5)",
            borderColor: "hsla(25, 86%, 72%, 0.5)",
            fill: true,
            pointRadius: 0
        },

        {
            label: "The New Era",
            data: [ , , , , , , , , , , , , , ,, , , , , , , , , , , , , , , , , , , , , , , , , , 20, 20,20,],
            borderWidth: 1,
            backgroundColor: "hsla(194, 65%, 63%, 0.5)",
            borderColor: "hsla(194, 65%, 63%, 0.5)",
            fill: true,
            pointRadius: 0
        },


    ],
}







new Chart("diversityChart",

{
    type: "line",
    data: dataObj5,
    
    options : { 
        responsiveness: true,   
        interaction : {
            mode: 'index',
            intersact: false,
        },
        stacked: false,
        
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



);














// Episodes with highest Ratings


 const labelEpisodes1 = ["S31 E10", "S31 E8", "S43 E6", "S28 E6", "S31 E13", "S37 E8", "S20 E6", "S26 E10","S32 E10", "S33 E10", "S34 E3", "S40 E11", "S40 E14"];
 const SeasonColours1 = ["#3a0594", "#3a0594", "#cae37c", "#6f726f", "#3a0594", "#a6bdb0", "#000000", "#20a792", "#d0112b", "#865d30", "#19458d", "#7b6992", "#7b6992"];

                const dataObj2 ={
                    labels: labelEpisodes1,
                    datasets: [
                        { label : "Imdb Rating (out of 10)",
                        data: [
                        9.3,
                        9.2,
                        9.1,
                        9,
                        9,
                        9,
                        8.9,
                        8.9,
                        8.9,
                        8.9,
                        8.9,
                        8.9,
                        8.9,         
                        ],
                    borderWidth: 1.2,
                    backgroundColor: SeasonColours1,
                    borderColor: "rgb(0,0,0)",
                    fill:true,
                        },
                    ],
                }

                new Chart("topEpisodesRating",
                
                    {
                        type: "bar",
                        data: dataObj2,
                        options : {
                        
                        legend: {
                            display: false,
                        },
                        
                        
                        scales: {
                            yAxes: [
                                {
                                    ticks : {
                                        beginAtZero: false,
                                        suggestedMin: 5,
                                        suggestedMax: 10,
                                    }
                                }
                            ]
                        },

                        title :{
                            display: true,
                            text: ["Highest Rated Episodes by IMDB"],
                            fontFamily: "TrebuchetMS",
                            fontSize: 20,
                            fontColor: 'rgb(0,0,0)',
                        },
                        },
                    },


                    // NOTE TO SELF : ADD INTERACTIVE TOOLTIP
                    
                )



// Seasons with highest Ratings

 const labelSeasons2 = [
        "Survivor 31: Cambodia",
        "Survivor 40: Winners at War",
        "Survivor 7: Pearl Islands",
        "Survivor 20: Heroes vs. Villains",
        "Survivor 28: Cagayan",
        ];

const SeasonColours2 = [
    "#3a0594",
    "#7b6992",
    "#ffc900",
    "#000000",
    "#6f726f",];

const borderColor2 = [
    "#f55142",
    "#f55142",
    "#34c24e",
    "#f55142",
    "#34c24e",
]

                const dataObj3 ={
                    labels: labelSeasons2,
                    datasets: [
                        { label : "Top 5 Seasons based on Average IMDB rating",
                        data: [
                            8.42,
                            8.34,
                            8.26,
                            8.23,
                            8.07,
                               
                        ],
                    borderWidth: 4,
                    backgroundColor: SeasonColours2,
                    borderColor: borderColor2,
                    fill:true,
                        },
                    ],
                }

                new Chart("seasonRanking",
                
                    {
                        type: "bar",
                        data: dataObj3,
                        options : {
                        
                        legend: {
                            display: false,
                        },
                        
                        
                        scales: {
                            yAxes: [
                                {
                                    ticks : {
                                        beginAtZero: false,
                                        suggestedMin: 5,
                                        suggestedMax: 10,
                                    }
                                }
                            ]
                        },


                        scales: {
                            xAxes: [
                                {
                                    ticks : {
                                        autoSkip: false,
                                        offset: true,
                                    }
                                }
                            ]
                        },

                        title :{
                            display: true,
                            text: ["Top 5 Seasons According to IMDB"],
                            fontFamily: "TrebuchetMS",
                            fontSize: 20,
                            fontColor: 'rgb(0,0,0)',
                        },
                        },
                    },


                    // NOTE TO SELF : ADD INTERACTIVE TOOLTIP
                    
                )
