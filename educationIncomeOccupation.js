var male= {
  x: ['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [14.98, 22.77,141.06,105.98, 50.49,99.23, 52.16],
  type: 'bar',
  name: 'Male',
  marker: {
    color: '#004e7c',
  }
};

var female = {
  x:['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [22.42,20.53,132.57,101.88,54.69,112.83,56.7],
  type: 'bar',
  name: 'Female',
  marker: {
    color: '#B73225',
  }
};

var data = [male, female];

var layout = {
  paper_bgcolor: "#dce1e3",
  xaxis: {
    tickangle: -30
  },
  barmode: 'group'
};

Plotly.newPlot('educationbysex', data, layout);

var values = [
      ['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
      [' 14.98k', ' 22.77k', '141.06k', '105.98k', '  50.49k', '  99.23k', '  52.16k'],
      ['  22.42k', '  20.53k', '132.57k', '101.88k', '  54.69k', '112.83k', '  56.79k']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>MALE</b>"],
				 ["<b>FEMALE</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58', '#004e7c','B73225']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ['black']},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table1', data, layout);

var values = [
      ['Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
      ['424,942', '244,126', '177,326', '  89,170', '  73,805', '  17,122', '    9,393', '    2,311'],
      ['376,960', '236,505', '166,729', '  78,879', '  66,653', '  16,348', '    8,113', '    2,072'],
      ['142,225', '111,543', '  41,153', '  11,634', '  16,273', '    4,927', '    2,729', '      656']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>RACE</b>"], ["<b>TOTAL</b>"],
				 ["<b>HIGH SCHOOL GRADUATION RATE</b>"], ["<b>COLLEGE GRADUATION RATE</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table2', data, layout);

var data = [{
  values: [376960, 236505, 166729,78879,66653,16348,8113,2072],
  labels: ['Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
  domain: {column: 0},
  hoverinfo: 'label+percent',
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35','#5C5F58','#052061','#730818','#000000']
  },
},{
  values: [142225,111543,41153,11634,16273,4927,2729,656],
  labels: ['Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
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
      text: 'High School Rate',
      x: 0.03,
      y: -.2
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Bachelor Rate',
      x: 0.93,
      y: -.2
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
  grid: {rows: 1, columns: 2}
};

Plotly.newPlot('educationracepie', data, layout);

var values = [
      ['Overall', '< High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
      ['$41,126', '$26,333', '$32,466','$39,242','$51,101','$67,960'],
        ['$47,105','$29,098','$37,295','$45,303','$60,247','$81,740'],
      ['$36,075','$22,943','$28,874','$32,899','$44,429','$59,069']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>AVERAGE</b>"],
				 ["<b>MALE</b>"], ["<b>FEMALE</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58','#5C5F58','#004E7C','#B73225']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]
var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table3', data,layout);

var average = {
  x:['Overall', 'Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
  y: ['$41,126', '$26,333', '$32,466','$39,242','$51,101','$67,960'],
  type: 'bar',
  name: 'Average',
  marker: {
    color: '#304d35',
  }
};

var male= {
  x: ['Overall', 'Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
  y: ['$47,105','$29,098','$37,295','$45,303','$60,247','$81,740'],
  type: 'bar',
  name: 'Male',
  marker: {
    color: '#004e7c',
  }
};

var female = {
  x:['Overall', 'Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
  y: ['$36,075','$22,943','$28,874','$32,899','$44,429','$59,069'],
  type: 'bar',
  name: 'Female',
  marker: {
    color: '#B73225',
  }
};

var data = [average,male, female];

var layout = {
  paper_bgcolor: "#dce1e3",
  xaxis: {
    tickangle: -30
  },
  barmode: 'group'
};

Plotly.newPlot('earningbyeducationbar', data, layout);

var values = [
      ['Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
      ['18.62','11.71','  7.81','  4.50'],]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>POVERTY RATE</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table4', data,layout);

var data = [{
  values: [18.62, 11.71, 7.81,4.50],
  labels: ['Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
  type: 'pie',
    marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35']
  },
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  height: 400,
  width: 500
};

Plotly.newPlot('povertybyeducaionpie', data, layout);

var values = [
      ['Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
      ['60.6','70.1','73.6','80.7'],]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>EMPLOYMENT RATE</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table5', data,layout);

var data = [{
  values: [60.6, 70.1, 73.6,80.7],
  labels: ['Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
  type: 'pie',
    marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35']
  },
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  height: 400,
  width: 500
};

Plotly.newPlot('employmentbyeducationpie', data, layout);

var values = [
      ['2+ Races', 'Asian', 'Hispanic', 'Other','Hawaiian','White', 'White (Non-Hispanic)','Black', 'Indian'],
      [64.3,60.6,59.6,57.9,57.6,54.2,54.1,48.4,48.3],]

var data = [{
  type: 'table',
  header: {
    values: [["<b>RACE</b>"], ["<b>EMPLOYMENT RATE</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
      paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table6', data,layout);

     
var data = [{
  values: [64.3,60.6,59.6,57.9,57.6,54.2,54.1,48.4,48.3],
  labels: ['2+ Races', 'Asian', 'Hispanic', 'Other','Hawaiian','White', 'White (Non-Hispanic)','Black', 'Indian'],
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35','#5C5F58','#052061','#730818','#005916','#2E2E2E']
  },
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  height: 400,
  width: 500
};

Plotly.newPlot('employmentbyrace', data, layout);

var values = [
      ['Management', 'Business/Financial Operations', 'Computer & Mathematical', 'Architecture & Engineering','Life, Physical, & Social Sciences','Community & Social Services', 'Legal','Education Instruction and Library Services','Arts, Design, Entertainment, Sports, & Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations & Services Related','Building/Grounds Cleaning & Maintenance','Personal Care & Services','Sales & Related','Office & Administrative Support','Farming, Fishing & Forestry','Construction & Extraction','Installation, Maintenance, & Repair','Production', 'Transportation & Material Moving'],
      ['34,111','29,170','10,980', '  9,250','  6,510','11,030','  4,050','44,190','  9,350','30,770','23,430','19,630','85,430','36,220','18,620','60,260','79,410','    870','31,010','25,200','14,910','51,190'],
      ['$  54,930','$  72,190','$  81,790','$  82,600','$  73,770','$  53,860','$  54,530','$  54,770','$  57,580','$103,850','$  36,180','$  52,700','$  39,690','$  37,840','$  35,270','$  40,120','$  43,290','$  41,010','$  70,570','$  57,980','$  43,650','$  46,070' ]]

var data = [{
  type: 'table',
  header: {
    values: [["<b>OCCUPATION TYPE</b>"], ["<b>EMPLOYMENT RATE</b>"], ["<b>AVERAGE INCOME</b>"]],
    align: ["center"],
    line: {width: 1, color: '#black'},
    fill: {color: ['#5C5F58']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    line: { COLOR: 'black', width: 1},
	 fill: {color: [ 'white']},
    font: {family: "Arial", size: 11, color: ["black"]},
    align: ["center"],
    float: ["right"],
  }
}]

var layout = {
  paper_bgcolor: "#dce1e3",
};

Plotly.newPlot('table7', data, layout);

var income= {
  x: ['Management', 'Business/Financial Operations', 'Computer & Mathematical', 'Architecture & Engineering','Life, Physical, & Social Sciences','Community & Social Services', 'Legal','Education Instruction and Library Services','Arts, Design, Entertainment, Sports, & Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations & Services Related','Building/Grounds Cleaning & Maintenance','Personal Care & Services','Sales & Related','Office & Administrative Support','Farming, Fishing & Forestry','Construction & Extraction','Installation, Maintenance, & Repair','Production', 'Transportation & Material Moving'],
  y: ['$54,930','$72,190','$81,790','$82,600','$73,770','$53,860','$54,530','$54,770','$57,580','$103,850','$36,180','$52,700','$39,690','$37,840','$35,270','$40,120','$43,290','$41,010','$70,570','$57,980','$43,650','$46,070' ],
  type: 'bar',
  marker: {
    color: '#004e7c',
  }
};

var data = [income];

var layout = {
  paper_bgcolor: "#dce1e3",
  xaxis: {
    tickangle: -15,
    height: 50
  },
  barmode: 'group',
  width: 1000,
  height: 500
};

Plotly.newPlot('occupationsalarygraph', data, layout);

var data = [{
  values: [34111,29170,10980,9250,6510,11030,4050,44190,9350,30770,23430,19630,85430,36220,18620,60260,79410,870,31010,25200,14910,51190],
  labels: ['Management', 'Business/Financial Operations', 'Computer & Mathematical', 'Architecture & Engineering','Life, Physical, & Social Sciences','Community & Social Services', 'Legal','Education Instruction and Library Services','Arts, Design, Entertainment, Sports, & Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations & Services Related','Building/Grounds Cleaning & Maintenance','Personal Care & Services','Sales & Related','Office & Administrative Support','Farming, Fishing & Forestry','Construction & Extraction','Installation, Maintenance, & Repair','Production', 'Transportation & Material Moving'],
  type: 'pie',
  marker: {
    colors: ['#B73225','#004E7C','#591C0B','#304d35','#5C5F58','#052061','#730818','#005916','#2E2E2E']
  },
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  height: 400,
  width: 800
};

Plotly.newPlot('occupationemploymentpie', data, layout);




