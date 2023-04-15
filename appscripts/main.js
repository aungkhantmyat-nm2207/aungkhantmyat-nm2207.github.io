// main.js



//slideshow, code source: https://www.w3schools.com/howto/howto_js_slideshow.asp

    // initialising the slide Index
    let slideIndex = 1;

    //control which slide is being displayed
    function showSlides(n) {
        let i;

        //retriving the slides
        let slides = document.getElementsByClassName("mySlides");


        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
    

    //function call to show the slides instead of stack of photos
    showSlides(slideIndex);

    // Next/previous controls
    //Prev slides will input (-1), changing the slideIndex to previous slide
    //Plus slides will input (1), changing the slideIndex to next slide
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }





// Season Rating 
//  code sourced from Week 8 session code
    const labelSeasons1= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];


    const dataObj1 = {
        labels: labelSeasons1,          
        datasets: [
            {
                label: "Average Viewership (in million)",
                data: [27.28,
                    31.02,
                    20.14,
                    20.47,
                    21.50,
                    20.13,
                    21.32,
                    23.05,
                    19.88,
                    20.55,
                    18.38,
                    16.68,
                    15.62,
                    14.08,
                    14.36,
                    12.43,
                    12.54,
                    11.86,
                    12.20,
                    12.31,
                    11.91,
                    11.16,
                    10.95,
                    10.06,
                    10.24,
                    9.47,
                    9.60,
                    9.43,
                    9.34,
                    9.62,
                    9.05,
                    8.94,
                    8.42,
                    8.01,
                    8.09,
                    7.75,
                    7.29,
                    7.23,
                    6.44,
                    7.63,
                    5.69,
                    5.36,
                    4.99,
                    ] ,
                borderWidth: 0,
                backgroundColor: "#eb8f34",
                borderColor: "#eb8f34",
                fill: false,
                yAxisID : "y",
            },
            {
                label: "Average imdb rating (out of 10)",
                data: [7.52,
                    7.54,
                    7.33,
                    7.58,
                    7.58,
                    7.78,
                    8.26,
                    7.76,
                    7.61,
                    7.98,
                    7.71,
                    7.58,
                    7.71,
                    7.18,
                    7.69,
                    7.71,
                    7.44,
                    7.60,
                    7.37,
                    8.22,
                    6.89,
                    6.76,
                    7.30,
                    6.92,
                    7.77,
                    7.54,
                    7.37,
                    8.07,
                    7.49,
                    7.75,
                    8.42,
                    7.67,
                    7.90,
                    7.96,
                    7.22,
                    7.22,
                    8.04,
                    7.76,
                    7.25,
                    8.34,
                    5.82,
                    7.39,
                    7.46,
                    ],
                borderWidth: 0,
                backgroundColor: "#e33d93",
                borderColor: "#e33d93",
                fill: false,
                yAxisID: "y1",

            },

        ],
    }

        //creating the chart
        new Chart("viewership-chart",

                {
                    type: "line",
                    data: dataObj1,
                    
                    options: { 
                       scales: {

                        //creating the mixed axis, method from : https://stackoverflow.com/questions/38085352/how-to-use-two-y-axes-in-chart-js-v2

                        //setting the different Y axes
                        yAxes: [{
                            id: 'y',
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                max: 50,
                                min: 0
                            },
                        },{
                            id: 'y1',
                            type: 'linear',
                            position: 'right',
                            ticks: {
                                max: 10,
                                min: 0
                            },
                        }]
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
//  code sourced from Week 8 session code
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
            label: "Overall Female Average Median",

            //making a straight line of data
            data: Array(43).fill(9.8),
            borderWidth: 2,
            backgroundColor: "#fc7979",
            borderColor: "#fc7979",
            fill: false,
            //ensuring that there is no radius bubble
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
            label: "Overall Male Average Median",
            
            //making a straight line of data
            data: Array(43).fill(9.4),
            borderWidth: 2,
            backgroundColor: "#519ecf",
            borderColor: "#519ecf",
            fill: false,

            //ensuring that there is no radius bubble
            pointRadius: 0,
        },

    ],
}


//Creating the chart
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
//  code sourced from Week 8 session code


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

                //Creating the highlight areaon the graph by putting the data at max to draw a line on top and fill up the below area
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






    //Creating the chart
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





// Quiz 
// learning querySelector from https://www.w3schools.com/jsref/met_document_queryselector.asp

// selecting all the options from html to create options
    var options = document.querySelectorAll("#quiz1-Option1, #quiz1-Option2, #quiz1-Option3, #quiz1-Option4");

    //creating a forEach loop to create event for each answer option
    options.forEach(function(answer) {

    //adding EventListender on click
    answer.addEventListener("click", function() {

        //Correct Answer
        if (answer.id === "quiz1-Option2") {
        answer.style.backgroundColor = "green";
        document.getElementById("result1").innerHTML = "Correct! Survivor has filmed most of its season in Fiji with the last 10 seasons (and counting) being filmed in Fiji! ";

        //Wrong Answer
        } else {
        answer.style.backgroundColor = "red";
        document.getElementById("result1").innerHTML = "Incorrect. Please try again.";
        }
    });
    });




// Map of where survivor has filmed
// world map original code sourced from : https://plotly.com/javascript/choropleth-maps/

    //retriving the .csv files that was uploaded to github
    d3.csv('https://raw.githubusercontent.com/aungkhantmyat-nm2207/aungkhantmyat-nm2207.github.io/main/resources/ownData/CountryData2.csv', function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

    //creating the choropleth map
    var data = [{
        type: 'choropleth',
        locationmode: 'country names',

        //unpacking the .csv file accordingly
        locations: unpack(rows, 'Countries'),
        z: unpack(rows, 'SeasonCount'),
        text: unpack(rows, 'SeasonsList'),
        autocolorscale: false,

        //custom colorscale to add contrast and use the web colours 
        colorscale: [
            [0, '#f7e1be'], [1, '#ed1111']
        ],

        //adding of the color bar with legend
        colorbar: {
            title: '<b>Number of <br>Seasons:',
            thickness: 50
        },


        //formatting of hover text. source : https://plotly.com/javascript/hover-text-and-formatting/
        hovertemplate:
            "<b>%{location}</b><br>" +
            "Number of seasons : %{z}" +
            "<br>List of seasons : %{text}" +
            "<extra></extra>"
    }];

    //creating the layout
    var layout = {


        height: 600,
        margin: {"r":10,"t":100,"l":10,"b":30},
        title: '<b>Countries where Survivor has filmed:',
        geo: {
            projection: {
            //Map Projections sourced from : https://plotly.com/python/map-configuration/#:~:text=The%20available%20projections%20are%20
            //Although the source is in phyton, the projections are stil the same
            // Orthographic globe was used instead cos it seems more interactive and cooler :) 
                type: 'orthographic',
                
            }

        },

    };

    
    //Plotting the map
    Plotly.newPlot("myDiv2", data, layout, {showLink: false});

    });



// Statemap of where the survivor's contestants are from
// state map code sourced from : https://plotly.com/javascript/bubble-maps/

// retriving the .csv file that was uploaded to github
d3.csv('https://raw.githubusercontent.com/aungkhantmyat-nm2207/aungkhantmyat-nm2207.github.io/main/resources/ownData/StateData.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    // unpacking the .csv file
    var cityName = unpack(rows, 'Row Labels'),
        cityPop = unpack(rows, 'No. of contestants'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'long'),
        citySize = [],
        hoverText = [],

        //change of scale to fit the data better
        scale = 2;

        //for loop to loop through the cityPop to change the size of each bubble with legend from current text
        for ( var i = 0 ; i < cityPop.length; i++) {

            //Scaling of the bubble size
            var currentSize = cityPop[i] / scale;
            //Attaching the information to the bubbles
            var currentText = " Number of Players from " + "<b>" + cityName[i] + " : " + cityPop[i];
            citySize.push(currentSize);
            hoverText.push(currentText);
        }

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',

        //situating the bubble with the lat and lon given in the .csv
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            color: "#f59342",
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: "<b>Survivor Players's state",


        margin: {"r":10,"t":100,"l":10,"b":30},

        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: '#eeca9f',


            //increase of subunitwidth to show greater division between the states for the bubblemap
            subunitwidth: 10,
            countrywidth: 0,
            subunitcolor: 'white',
            countrycolor: '#eeca9f',
        },
      
    };

    Plotly.newPlot("myDiv", data, layout, {showLink: true});

});





// Seasons with highest Ratings
//  code sourced from Week 8 session code

// Stating the arrays
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

    //Creating the chart
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
                            //  Starting at 5 so that the bar graphs will still be pretty high with lower variance so it gives the impression that these episodes are highly rated.
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
    )





// Episodes with highest Ratings
// code sourced from Week 8 session code


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
                                       //begin at 5 so there will be higher variance in the height
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
                   
               )

