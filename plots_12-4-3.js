// // Plotly.newPlot("plotArea", [{x: [5, 7, 11], y: [10, 20, 30]}]);

// // var trace = {
// //     x: ["burrito", "pizza", "chicken"],
// //     y: [10, 18, 5],
// //     type: "bar"
// //  };

// //  var layout = {
// //     title: "Luncheon Survey",
// //     xaxis: {title: "food type"},
// //     yaxis: {title: "preference"}
// // };

// //  Plotly.newPlot("plotArea", [trace], layout);


// // Plotly.newPlot(
// //     "plotArea", 
// //         [{
// //             x: ["taco", "quesadilla", "sope"], 
// //             y: [21, 3, 9], 
// //             type: "bar"
// //         }]
// //     );


// // var trace = [{
// //     x: ["burrito", "pizza", "chicken"],
// //     y: [10, 18, 5],
// //     type: "bar"
// //  }];
// //  Plotly.newPlot("plotArea", trace);




// // var datagraph = {
// //     x: ["nonalcoholic beer", "nonalcoholic wine", 
// //         "nonalcoholic martini", "nonalcoholic margarita", 
// //         "ice tea", "nonalcoholic rum & coke", 
// //         "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
// //     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// //     type: "bar"
// //  };

// // var labels = {
// //     title: "indice de bebidas",
// //     xaxis: {title: "tipo"},
// //     yaxis: {title: "preferencia"}
// // };





// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", 
//         "nonalcoholic martini", "nonalcoholic margarita",
//         "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", 
//         "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };

//   var data = [trace];
  
//   var layout = {
//     title: "'Pie' Chart",
//   };
  
//   Plotly.newPlot("plotArea", data, layout);



//   var numbers = [1,2,3,4,5];
//   var doubled = numbers.map(function(num){
//       return num * 5;
//   });
//   console.log(doubled);

//   var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });


// var cityState = cities.map(function(state){
//   return state.State;
// });



// var cityPopulation = cities.map(function(pop){
//   return pop.population;
// });


// console.log(cityNames);
// console.log(cityState);
// console.log(cityPopulation);



// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num % 2 == 1;
// });

// console.log(larger);




// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var wordS = words.sort(function(Sletter){
//     return Sletter == s;
// });

// console.log(wordS)




// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);


// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);


// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);



// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);
// console.log(slice1)


// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var slice2 = words.slice(0,3);
// console.log(slice2)




function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();




  function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();


  function optionChanged(newSample) {
    console.log(newSample);
  }


  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }


  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  }











































