// main.js
















































// Sample Chart as reference (from Session 8)
const labelYear= [2005,2006,2007,2008,2009,2010];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,          //we want the x axis to be the years
        datasets: [
            {
                label: "Accountancy",// uncomment this line and set this to "Accountancy" for example
                data: [495,468,575,536,596,554] ,// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 1,
                backgroundColor: "hsla(20,100%,80%,0.6)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)",
                fill: false,
                //put black rgb(0,0,0) or the same color as above
            },

            {
                label: "Business & Administration",
                data: [799,819,894,960,857,859] ,
                borderWidth: 1,
                backgroundColor: "hsla(50,84%,67%,0.6)",
                borderColor: "rgb(0,0,0)", 
                fill: false,

            },

            {
                label: "Dentistry",
                data: [12,14,15,17,19,25] ,
                borderWidth: 1,
                backgroundColor: "hsla(74, 98%, 50%,0.6)",
                borderColor: "rgb(0,0,0)", 
                fill: false,

            },

            {
                label: "Health Sciences",
                data: [69,57,67,77,107,196] ,
                borderWidth: 1,
                backgroundColor: "hsla(108, 78%, 59%,0.6)",
                borderColor: "rgb(0,0,0)",
                fill: false,

            },
           
            {
                label: "Information Technology",
                data: [199,130,190,210,162,154] ,
                borderWidth: 1,
                backgroundColor: "hsla(160, 80%, 65%,0.6)",
                borderColor: "rgb(0,0,0)", 
                fill: false,

            },

            {
                label: "Law",
                data: [125,134,123,115,118,90] ,
                borderWidth: 1,
                backgroundColor: "hsla(192, 80%, 65%,0.6)",
                borderColor: "rgb(0,0,0)", 
                fill: false,

            },

            {
                label: "Medicine",
                data: [86,94,83,96,97,94] ,
                borderWidth: 1,
                backgroundColor: "hsla(247, 86%, 72%,0.6)",
                borderColor: "rgb(0,0,0)",
                fill: false,

            },

            {
                label: "Natural, Physical & Mathematical Sciences",
                data: [674,880,827,796,946,1091] ,
                borderWidth: 1,
                backgroundColor: "hsla(273, 48%, 64%,0.6)",
                borderColor: "rgb(0,0,0)",
                fill: false,

            },

        ],
    }
    new Chart("grad-bar-chart",

            {
                type: "bar",
                data: dataObj,
                
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: true,
                        align: 'center',
                        position: 'bottom',

                    },
                    title: {
                        display: true,
                        text: ["Number of female graduates", "per Course" , ""], //set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    },

                    
                },

            },
            );
