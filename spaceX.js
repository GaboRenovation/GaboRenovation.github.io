
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));

// BOTH WORK

const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(data => console.log(data));


// Indexing to retrieve only the first element in the array returned from the API call.
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));


// The code to retrieve the full_nameof the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

d3.json(url).then();

d3.json("samples.json").then(function(data){
    console.log("hello");
});

// When reading an external data file such as a CSV or JSON file into a script, you must run a server. You cannot directly open index.htmlwith your browser.
// To load the page, navigate to the directory where samples.json and index.html, as well as the script file, plots.js, are located. Open the command line (Terminal or Git Bash) and type the following:
//              python -m http.server
// allows us to skirt this restriction. Python's HTTP server provides a web address for both the JSON and HTML files to avoid these security issues.


d3.json("samples.json").then(function(data){
    console.log(data);
});


// to extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});


// to sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});


// to delete null values from the sorted wfreq array
// use  filter ()


// Use Object.entries() to print each key-value pair inside an array.
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.keys(researcher1));

researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];


// With the following code, we can display the metadata of any individual from the dataset:

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});


















