var values = [
      [["Asian"], ["White"],
      				 ["Two or More Races"], ["Native Hawaiian/Pacific Islander"], ["Black or African American"],
      				 ["Some Other Race"],["American Indian and Alaska Native"]],
      ["536,842","355,612","341,756","143,274","  26,266","  15,292","    2,987"]]

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
    float: ["right"],
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
      title: "Race of Hawai'i (2019)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },

    };

Plotly.newPlot('raceTable', data, layout);

var blueGrad = [
['#004E7C','#B73225','#591C0B','#304d35','#5C5F58','#052061','#730818']
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
  title: "Races in Hawai'i",
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
  showlegend: true,
};

Plotly.newPlot('raceChart', data, layout);

var values = [
      [["English"], ["Spanish"],
      				 ["Indo-European"], ["Asian and Pacific Island"], ["Other"]
      				 ],
      ["983,502","  29,100","  15,067","295,852","    8,120"]]

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
      title: "Language Spoken in Hawai'i (2019, ages 5 and over)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },

    };

Plotly.newPlot('LangTable', data, layout);

var redGrad = [
['#B73225','#004E7C','#591C0B','#304d35','#5C5F58',
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
  title: "Languages Spoken in Hawai'i",
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
  showlegend: true,
};

Plotly.newPlot('LangChart', data, layout);

var values = [
      [["Asian"], ["White"],
      				 ["Two or More Races"], ["Native Hawaiian/Pacific Islander"], ["Black or African American"],
      				 ["Hispanic or Latino"],["American Indian and Alaska Native"],["White alone, not Hispanic or Latino"]],
      ["  19,366,132","250,446,756","    9,190,707","      656,479","  43,984,096","  60,724,312","    4,267,114","197,271,953"]]

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
    float: ["right"],
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
      title: "Race of USA (2019)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },

    };

Plotly.newPlot('raceTable1', data, layout);

var blueGrad = [
['#B73225','#052061','#591C0B','#304d35','#5C5F58','#004E7C','#730818','#000000']
];

var data = [{
  values: [19366132,250446756,9190707,656479,43984096,60724312,4267114,197271953],
  labels: [["Asian"], ["White"],
                 				 ["Two or More Races"], ["Native Hawaiian/Pacific Islander"], ["Black or African American"],
                 				 ["Hispanic or Latino"],["American Indian and Alaska Native"],["White alone, not Hispanic or Latino"]],
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
  title: "Races in USA",
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
  showlegend: true,
};

Plotly.newPlot('raceChart1', data, layout);

var values = [
      [["English"], ["Spanish"],
      				 ["Indo-European"], ["Asian and Pacific Island"], ["Other"]
      				 ],
      ["256,355,067","  44,132,336","  12,144,862","  11,816,622","    3,938,874"]]

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
      title: "Language Spoken in USA (2019, ages 5 and over)",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },

    };

Plotly.newPlot('LangTable1', data, layout);

var redGrad = [
['#B73225','#004E7C','#591C0B','#304d35','#5C5F58',
]
];

var data = [{
  values: [256355067,44132336,12144862,11816622,3938874],
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
  title: "Languages Spoken in USA",
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
  showlegend: true,
};

Plotly.newPlot('LangChart1', data, layout);

var trace1 = {
  x: ['Asian','White','Two or More Races', 'Native Hawaiian/Pacific Islander', 'Black or African American','Some Other Race','American Indian and Alaska Native'],
  y: [536842,355612,341756,143274,26266,15292,2987],
  name: 'HI',
  type: 'bar'
};

var trace2 = {
  x: ['Asian', 'White','Two or More Races', 'Native Hawaiian/Pacific Islander', 'Black or African American','Hispanic or Latino','American Indian and Alaska Native','White alone, not Hispanic or Latino'],
  y: [19366132,250446756,9190707,656479,43984096,60724312,4267114,197271953],
  name: 'USA',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group',
        paper_bgcolor: "#dce1e3",
        title: "Race: Hawai'i VS USA"
};

Plotly.newPlot('hiusabar', data, layout);