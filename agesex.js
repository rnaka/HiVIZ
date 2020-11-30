// START OF MALE HAWAII TABLE
var male_hi = [
    ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
    ['86671', '83988', '101298', '99296', '84745', '86703', '84646', '54615', '25893']
]

var male_hi_data = [{
  type: 'table',
  header: {
    values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
    align: "center",
    line: { width: 1, color: 'black' },
    fill: { color: "#004e7c" },
    font: { family: "Arial", size: 12, color: "white" }
  },
  cells: {
    values: male_hi,
    align: "center",
    line: { color: "black", width: 1 },
    font: { family: "Arial", size: 11, color: ["black"] },
    format: [
      "",
      "⠀>7,f",
    ],
  }
}];

var male_hi_table_layout = {
  title: "Males in Hawaii by Age Group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
};

Plotly.newPlot('table_male_hi', male_hi_data, male_hi_table_layout);
// END OF MALE HAWAII TABLE

// START OF MALE USA TABLE
var male_usa = [
  ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
  ['19972455', '21890966', '22832289', '22173510', '20108242', '20516060', '18242281', '10897682', '4955488']
]

var male_usa_data = [{
  type: 'table',
  header: {
    values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
    align: "center",
    line: { width: 1, color: 'black' },
    fill: { color: "#b73225" },
    font: { family: "Arial", size: 12, color: "white" }
  },
  cells: {
    values: male_usa,
    align: "center",
    line: { color: "black", width: 1 },
    font: { family: "Arial", size: 11, color: ["black"] },
    format: [
      "",
      "⠀>10,f",
    ],
  }
}];

var male_usa_table_layout = {
  title: "Males in USA by Age Group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
};

Plotly.newPlot('table_male_usa', male_usa_data, male_usa_table_layout);
// END OF MALE USA TABLE

// START OF FEMALE HAWAII TABLE
var female_hi = [
  ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
  ['83130', '76315', '88182', '97517', '82205', '85656', '91237', '63132', '40643']
]

var female_hi_data = [{
  type: 'table',
  header: {
    values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
    align: "center",
    line: { width: 1, color: 'black' },
    fill: { color: "#004e7c" },
    font: { family: "Arial", size: 12, color: "white" }
  },
  cells: {
    values: female_hi,
    align: "center",
    line: { color: "black", width: 1 },
    font: { family: "Arial", size: 11, color: ["black"] },
    format: [
      "",
      "⠀>7,f",
    ],
  }
}];

var female_hi_table_layout = {
  title: "Females in Hawaii by Age Group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
};

Plotly.newPlot('table_female_hi', female_hi_data, female_hi_table_layout);
// END OF FEMALE HAWAII TABLE

// START OF FEMALE USA TABLE
var female_usa = [
  ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
  ['19122817', '20886037', '21869690', '21899925', '20476570', '21432881', '20168785', '13010630', '7783215']
]

var female_usa_data = [{
  type: 'table',
  header: {
    values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
    align: "center",
    line: { width: 1, color: 'black' },
    fill: { color: "#b73225" },
    font: { family: "Arial", size: 12, color: "white" }
  },
  cells: {
    values: female_usa,
    align: "center",
    line: { color: "black", width: 1 },
    font: { family: "Arial", size: 11, color: ["black"] },
    format: [
      "",
      "⠀>10,f",
    ],
  }
}];

var female_usa_table_layout = {
  title: "Females in USA by Age Group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
};

Plotly.newPlot('table_female_usa', female_usa_data, female_usa_table_layout);
// END OF FEMALE USA TABLE

// START OF HAWAII VS US MALE BAR GRAPH
var barMalePlotLayout = {
  title: "Male Age Groups: Hawaii vs USA (2019)",
  barmode: "group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
  xaxis: {
    automargin: true,
    title: {
      text: "Age Group",
    }
  },
  yaxis: {
    automargin: true,
    title: {
      text: "Population (%)",
    }
  },
};

// START FIRST TRACE
var trace_male_hi_bar = {
  mode: "markers",
  x: male_hi[0],
  y: [12.244, 11.865, 14.311, 14.028, 11.972, 12.249, 11.958, 7.716, 3.658],
  type: 'bar',
  name: 'HI',
  marker: {
    color: '#004e7c',
  },
  hovertemplate: "HI: %{y}%",
};
// END FIRST TRACE

// START SECOND TRACE
var trace_male_usa_bar = {
  mode: "markers",
  x: male_usa[0],
  y: [12.360, 13.547, 14.130, 13.722, 12.444, 12.696, 11.289, 6.744, 3.067],
  type: 'bar',
  name: 'USA',
  marker: {
    color: '#b73225',
  },
  hovertemplate: "USA: %{y}%",
};

var trace_male_bar_data = [trace_male_hi_bar, trace_male_usa_bar];

Plotly.newPlot('hi_usa_male_bar', trace_male_bar_data, barMalePlotLayout);
// END OF HAWAII VS US MALE BAR GRAPH

// START OF HAWAII VS US FEMALE BAR GRAPH
var barFemalePlotLayout = {
  title: "Female Age Groups: Hawaii vs USA (2019)",
  barmode: "group",
  paper_bgcolor: "#dce1e3",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
  xaxis: {
    automargin: true,
    title: {
      text: "Age Group",
    }
  },
  yaxis: {
    automargin: true,
    title: {
      text: "Population (%)",
    }
  },
};

// START FIRST TRACE
var trace_female_hi_bar = {
  mode: "markers",
  x: female_hi[0],
  y: [11.741, 10.779, 12.455, 13.773, 11.611, 12.098, 12.886, 8.917, 5.740],
  type: 'bar',
  name: 'HI',
  marker: {
    color: '#004e7c',
  },
  hovertemplate: "HI: %{y}%",
};
// END FIRST TRACE

// START SECOND TRACE
var trace_female_usa_bar = {
  mode: "markers",
  x: female_usa[0],
  y: [11.475, 12.533, 13.123, 13.141, 12.287, 12.861, 12.102, 7.807, 4.670],
  type: 'bar',
  name: 'USA',
  marker: {
    color: '#b73225',
  },
  hovertemplate: "USA: %{y}%",
};

var trace_female_bar_data = [trace_female_hi_bar, trace_female_usa_bar];

Plotly.newPlot('hi_usa_female_bar', trace_female_bar_data, barFemalePlotLayout);
// END OF HAWAII VS US FEMALE BAR GRAPH

// START HAWAII PIE
var plotLayoutHiPie = {
  title: "Male vs Female Ratio in Hawaii",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
  showlegend: false,
  paper_bgcolor: "#dce1e3",
  piecolorway: ["#b73225", "#004e7c"],
  height: 440
};

var hiPie = {
  labels: ['Male', 'Female'],
  values: [707855, 708017],
  type: 'pie',
  mode: 'markers',
  texttemplate: "<b>%{label}</b><br>%{value}<br>%{percent}",
  rotation: 30,
  name: 'Male vs Female Ratio in Hawaii'
};

data_hi_pie = [hiPie];

Plotly.newPlot('hi_pie', data_hi_pie, plotLayoutHiPie);
// END HAWAII PIE

// START USA PIE
var plotLayoutUsaPie = {
  title: "Male vs Female Ratio in USA",
  font: {
    family: 'Arial',
    size: 12,
    color: '#333333'
  },
  showlegend: false,
  paper_bgcolor: "#dce1e3",
  piecolorway: ["#b73225", "#004e7c"],
  height: 440
};

var usaPie = {
  labels: ['Male', 'Female'],
  values: [161588973, 166650550],
  type: 'pie',
  mode: 'markers',
  texttemplate: "<b>%{label}</b><br>%{value}<br>%{percent}",
  rotation: 30,
  name: 'Male vs Female Ratio in USA'
};

data_usa_pie = [usaPie];

Plotly.newPlot('usa_pie', data_usa_pie, plotLayoutUsaPie);
// END USA PIE
