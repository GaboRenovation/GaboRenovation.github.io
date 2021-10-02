// Plotly.newPlot("plotBase", [{x:[8,9,11,18], y:[1,3,4,8]}])



var datagraph = {
    x: ["nonalcoholic beer", "nonalcoholic wine", 
        "nonalcoholic martini", "nonalcoholic margarita", 
        "ice tea", "nonalcoholic rum & coke", 
        "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };

var labels = {
    title: "indice de bebidas",
    xaxis: {title: "tipo"},
    yaxis: {title: "preferencia"}
};


Plotly.newPlot("plotBase", [datagraph], labels);


