var values = [
      [["Asian"], ["White"],
      				 ["Two or More Races"], ["Native Hawaiian/Pacific Islander"], ["Black or African American"],
      				 ["Some Other Race"],["American Indian and Alaska Native"]],
      ["536,842","355,612","341,756","143,274","26,266","15,292","2,987"]]

var data = [{
  type: 'table',
  header: {
    values: [["<b>Race</b>"], ["<b>Population</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: '#004e7c'},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
      title: "Race of Hawaii(2019)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },
      height: 600,
        width: 800,
    };

Plotly.newPlot('raceTable', data, layout);

var blueGrad = [
['rgb(0,76,153)','rgb(0,102,204)','rgb(0,128,255)','rgb(51,153,255)','rgb(102,178,255)',
'rgb(153,204,255)','rgb(204,229,255)',]
];

var data = [{
  values: [536842,355612,341756,143274,26266,15292,2987],
  labels: [["Asian"], ["White"],
                 				 ["Two or More Races"], ["Native Hawaiian/Pacific Islander"], ["Black or African American"],
                 				 ["Some Other Race"],["American Indian and Alaska Native"]],
   marker: {
      colors: blueGrad[0]
     },
  domain: {column: 0},
  name: 'race',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Races in Hawaii',
        paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Race',
      x: 0.5,
      y: 0.5
    }
  ],
  height: 600,
  width: 800,
  showlegend: true
};

Plotly.newPlot('raceChart', data, layout);

var values = [
      [["English"], ["Spanish"],
      				 ["Indo-European"], ["Asian and Pacific Island"], ["Other"]
      				 ],
      ["983,502","29,100","15,067","295,852","8,120"]]

var data = [{
  type: 'table',
  header: {
    values: [["<b>Language</b>"], ["<b>Population</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: '#b73225'},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
      title: "Language Spoken in Hawaii(2019, ages 5 and over)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },
      height: 600,
        width: 800,
    };

Plotly.newPlot('LangTable', data, layout);

var redGrad = [
['rgb(153,0,0)','rgb(204,0,0)','rgb(255,0,0)','rgb(255,51,51)','rgb(255,102,102)',
]
];

var data = [{
  values: [983502,29100,15067,295852,8120],
  labels: [["English"], ["Spanish"],
                 				 ["Indo-European"], ["Asian and Pacific Island"], ["Other"]
                 				 ],
  marker: {
        colors: redGrad[0]
       },
  domain: {column: 0},
  name: 'Language',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Languages Spoken in Hawaii ',
        paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Language',
      x: 0.5,
      y: 0.5
    }
  ],
  height: 600,
  width: 800,
  showlegend: true
};

Plotly.newPlot('LangChart', data, layout);
