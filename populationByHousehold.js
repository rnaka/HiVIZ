var values = [
  ['Married Couples', 'Male Householder', 'Female Householder', 'Non-Family'],
  ['850,592', '97,302', '230,334', '194,726'],
  ['10,701,033', '1,227,939', '3,409,936', '3,546,040'],
  ['190,700,284', '21,255,781', '52,629,950', '55,569,146']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>HOUSEHOLD TYPE</b>"], ["<b>HAWAII</b>"], ["<b>NEW YORK</b>"],
      ["<b>UNITED STATES</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 9, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
    fill: {color: [ 'white']},
    font: {family: "Arial", size: 9, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
  paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table1', data, layout);

var data = [{
  values: [850592, 97302, 230334, 194726],
  labels: ['Married Couples', 'Male Householder', 'Female Householder', 'Non-Family'],
  domain: {column: 0},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#5C5F58']
  },
},{
  values: [10701033, 1227939, 3409936, 3546040],
  labels: ['Married Couples', 'Male Householder', 'Female Householder', 'Non-Family'],
  domain: {column: 1},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#5C5F58']
  },
},{
  values: [190700284, 21255781, 52629950, 55569146],
  labels: ['Married Couples', 'Male Householder', 'Female Householder', 'Non-Family'],
  domain: {column: 2},
  hoverinfo: 'label+percent',
  type: 'pie'
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Hawaii',
      x: 0.09,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'New York',
      x: 0.49,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'US',
      x: 0.88,
      y: -.3
    }
  ],
  height: 350,
  width: 750,
  showlegend: false,
  grid: {rows: 1, columns: 3}
};

Plotly.newPlot('pie1', data, layout);

var values = [
  ['Owned', 'Rented'],
  ['279,960', '185,339'],
  ['3,985,516', '3,461,296'],
  ['78,724,862', '44,077,990']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>HOUSEHOLD TYPE</b>"], ["<b>HAWAII</b>"], ["<b>NEW YORK</b>"],
      ["<b>UNITED STATES</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 9, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
    fill: {color: [ 'white']},
    font: {family: "Arial", size: 9, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
  paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table2', data, layout);

var data = [{
  values: [279960, 185339],
  labels: ['Owned', 'Rented'],
  domain: {column: 0},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C']
  },
},{
  values: [3985516, 3461296],
  labels: ['Owned', 'Rented'],
  domain: {column: 1},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C']
  },
},{
  values: [78724862, 44077990],
  labels: ['Owned', 'Rented'],
  domain: {column: 2},
  hoverinfo: 'label+percent',
  type: 'pie'
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Hawaii',
      x: 0.09,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'New York',
      x: 0.49,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'US',
      x: 0.88,
      y: -.3
    }
  ],
  height: 350,
  width: 750,
  showlegend: false,
  grid: {rows: 1, columns: 3}
};

Plotly.newPlot('pie2', data, layout);

var values = [
  ['Single Unit', 'Multi-Unit', 'Mobile Home', 'Boat, RV, Van, Etc.'],
  ['337,874', '210,722', '1,658', '74'],
  ['3,906,264', '4,305,568', '190,184', '2,189'],
  ['93,778,238', '37,299,373', '8,468,274', '140,324']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>HOUSEHOLD TYPE</b>"], ["<b>HAWAII</b>"], ["<b>NEW YORK</b>"],
      ["<b>UNITED STATES</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 9, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
    fill: {color: [ 'white']},
    font: {family: "Arial", size: 9, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
  paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table3', data, layout);

var data = [{
  values: [337874, 210722, 1658, 74],
  labels: ['Single Unit', 'Multi-Unit', 'Mobile Home', 'Boat, RV, Van, Etc.'],
  domain: {column: 0},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#5C5F58']
  },
},{
  values: [3906264, 4305568, 190184, 2189],
  labels: ['Single Unit', 'Multi-Unit', 'Mobile Home', 'Boat, RV, Van, Etc.'],
  domain: {column: 1},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#5C5F58']
  },
},{
  values: [93778238, 37299373, 8468274, 140324],
  labels: ['Single Unit', 'Multi-Unit', 'Mobile Home', 'Boat, RV, Van, Etc.'],
  domain: {column: 2},
  hoverinfo: 'label+percent',
  type: 'pie'
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Hawaii',
      x: 0.09,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'New York',
      x: 0.49,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'US',
      x: 0.88,
      y: -.3
    }
  ],
  height: 350,
  width: 750,
  showlegend: false,
  grid: {rows: 1, columns: 3}
};

Plotly.newPlot('pie3', data, layout);

var values = [
  ['Under $100K', '$100K - $200K', '$200K - $300K', '$300K - $400K', '$400K - $500K', '$500K - $1M', 'Over $1M'],
  ['4,101','9,303','16,357','29,643','28,223','146,938','28,153'],
  ['516,280','786,658','518,816','441,469','405,899','964,341','170,032'],
  ['12,945,144','19,437,984','16,079,298','10,584,277','6,286,456','10,294,023','1,663,399']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>VALUE</b>"], ["<b>HAWAII</b>"], ["<b>NEW YORK</b>"], ["<b>UNITED STATES</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 9, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
    fill: {color: [ 'white']},
    font: {family: "Arial", size: 9, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
  paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table4', data, layout);

var data = [{
  values: [4101,9303,16357,29643,28223,146938,28153],
  labels: ['Under $100K', '$100K - $200K', '$200K - $300K', '$300K - $400K', '$400K - $500K', '$500K - $1M', 'Over $1M'],
  domain: {column: 0},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35','#5C5F58','#052061','#2E2E2E']
  },
},{
  values: [516280,786658,518816,441469,405899,964341,170032],
  labels: ['Under $100K', '$100K - $200K', '$200K - $300K', '$300K - $400K', '$400K - $500K', '$500K - $1M', 'Over $1M'],
  domain: {column: 1},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35','#5C5F58','#052061','#2E2E2E']
  },
},{
  values: [12945144,19437984,16079298,10584277,6286456,10294023,1663399],
  labels: ['Under $100K', '$100K - $200K', '$200K - $300K', '$300K - $400K', '$400K - $500K', '$500K - $1M', 'Over $1M'],
  domain: {column: 2},
  hoverinfo: 'label+percent',
  type: 'pie'
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Hawaii',
      x: 0.09,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'New York',
      x: 0.49,
      y: -.3
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'US',
      x: 0.88,
      y: -.3
    }
  ],
  height: 350,
  width: 775,
  showlegend: false,
  grid: {rows: 1, columns: 3}
};

Plotly.newPlot('pie4', data, layout);
