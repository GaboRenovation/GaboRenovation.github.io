

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  

    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  

      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  



  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  


  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  



  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      let samples = data.samples;
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      



      // Delivery 3 -------------------------------
      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      let metadata = data.metadata.filter(sampleObj => sampleObj.id == sample);;
      // ------------------------------------------
  
  
      //  5. Create a variable that holds the first sample in the array.
      let result = resultArray[0];
      //console.log(result);
  
      // Delivery 3 ------------------------------
      // 2. Create a variable that holds the first sample in the metadata array.
      let metadataResult = metadata[0];
      // -----------------------------------------
  
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      let otus_ids = result.otu_ids;
      //console.log(otus_ids);
      let otus_labels = result.otu_labels;
      //console.log(otus_labels);
      let sample_values = result.sample_values;
      //console.log(sample_values);
  
      



      // Delivery 2 Bubble chart
      let bubbleID = result.otu_ids;
      let bubbleValues = result.sample_values;
      let bubbleLabels = result.otus_labels;
  



      // Delivery 3 ------------------------------
      // 3. Create a variable that holds the washing frequency.
      let wfreq = parseFloat(metadataResult.wfreq);
      // -----------------------------------------
  
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      otus_labels = result.otu_labels.slice(0, 10).reverse();
      //console.log(otus_labels);
      sample_values = result.sample_values.slice(0, 10).reverse();
      //console.log(sample_values);
      var yticks = otus_ids.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();
      //console.log(yticks);
  
      // 8. Create the trace for the bar chart. 
      var barData = [{
        x: sample_values,
        y: yticks,
        type: "bar",
        orientation: "h",
        text: otus_labels 
      }];
      
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found"
      };
      
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);
  



      // Delivery 2
      // 1. Create the trace for the bubble chart.
      var bubbleData = [{
        x: bubbleID,
        y: bubbleValues,
        text: bubbleLabels,
        mode: 'markers',
        marker: {
          color: bubbleID,
          size: bubbleValues,
          colorscale: "Portland"    
        },
        hovertemplate: '<b>Samples: </b>: %{y}' +
                          '<br><b>OTU Id: </b>: %{x}<br><extra></extra>',
        showlegend: false
      
      }];
  
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: 'Bacteria Cultures Per Sample',
        xaxis: {title: "OTU Id"},
          automargin: true,
          hovermode: "closest"
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  
  


      // Delivery3
      // 4. Create the trace for the gauge chart.
      var gaugeData = [{
        value: wfreq,
        type: "indicator",
        mode: "gauge+number",
        title: {text:'Belly Button Washing Frequency<br></br>Scrubs per Week'},
        gauge: {
          axis: {range: [null,10], dtick: "2"},
  
          bar: {color: "black"},
          steps:[
            {range: [0, 2], color: "red"},
            {range: [2, 4], color: "orange"},
            {range: [4, 6], color: "yellow"},
            {range: [6, 8], color: "lightgreen"},
            {range: [8, 10], color: "green"}
          ],
          dtick: 2
        }
  
      }];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        automargin: true
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge",gaugeData, gaugeLayout);
  
    });
  }

  