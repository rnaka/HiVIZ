// Bar - Education by Sex

var male= {
  x: ['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [4.04, 6.37, 29.30, 15.55, 9.31, 22.29, 13.14],
  type: 'bar',
  name: 'Male (US)',
  marker: {
    color: '#052061',
  }
};

var male2= {
  x: ['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [3.08, 4.68, 28.98, 21.78, 10.37, 20.39, 10.72],
  type: 'bar',
  name: 'Male (Hawaii)',
  marker: {
    color: '#004e7c',
  }
};

var female = {
  x:['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [3.74, 5.73, 27.01, 15.77, 11.15, 22.78, 13.82],
  type: 'bar',
  name: 'Female (US)',
  marker: {
    color: '#730818',
  }
};

var female2 = {
  x:['< 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
  y: [4.47, 4.09, 26.43, 20.31, 10.90, 22.49, 11.3],
  type: 'bar',
  name: 'Female (Hawaii)',
  marker: {
    color: '#B73225',
  }
};

var data = [male, male2, female, female2];

var layout = {
  paper_bgcolor: "#dce1e3",
  title: "Education Attainment by Sex (percentile)",
  xaxis: {
    tickangle: 30
  },
  barmode: 'group'
};

Plotly.newPlot('edusexbar', data, layout);

// Table - Education by Sex

var values = [
      ['Less Than 9th Grade', '9th-12th Grade', 'High School Diploma', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Graduates Degree'],
      ["  4,313k", "  6,792k", "31,257k", "16,591k", "  9,936k", "23,785k", "14,021k"],
      [' 14.98k', ' 22.77k', '141.06k', '105.98k', '  50.49k', '  99.23k', '  52.16k'],
    [" 4,290k", "  6,580k", "31,002k", "18,099k", 
"12,802k", "26,151k", "15,858k"],
      ['  22.42k', '  20.53k', '132.57k', '101.88k', '  54.69k', '112.83k', '  56.79k']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>MALE (US)</b>"],["<b>MALE (HAWAII)</b>"],["<b>FEMALE (US)</b>"],
				 ["<b>FEMALE (HAWAII)</b>"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['#5C5F58']},
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

Plotly.newPlot('edusextable', data, layout);

// Table - Education by Race

var values = [
      ['US Average','Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
      ['90.1','88.7', '96.9', '94.0', '88.5', '90.3', '95.5', '86.4', '89.7'],
      ['46.3','33.5', '45.7', '23.2', '13.0', '22.0', '28.8', '29.1', '28.4']]

var data = [{
  type: 'table',
  header: {
    values: [["<b>RACE</b>"],
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

Plotly.newPlot('eduracetable', data, layout);

// Bar - Education by Race

var trace1 = {
  x: ['US Average','Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
  y: ['90.1','88.7', '96.9', '94.0', '88.5', '90.3', '95.5', '86.4', '89.7'],
  name: 'High School Rate',
  type: 'bar',
    marker: {
    color: '#591C0B'
  },
};

var trace2 = {
  x: ['USA OVERALL','Asian', 'White', 'Multiple Races', 'Islander', 'Hispanic', 'Black', 'Other Race', 'Native American'],
  y: ['46.3','33.5', '45.7', '23.2', '13.0', '22.0', '28.8', '29.1', '28.4'],
  name: 'College Rate',
  type: 'bar',
    marker: {
    color: '#304d35'
  },
};

var data = [trace1, trace2];

var layout = {
  barmode: 'group',
  paper_bgcolor: "#dce1e3",
  xaxis: {
    tickangle: 30
  }
};

Plotly.newPlot('eduracebar', data, layout);


// Table - Earnings by Education

var values = [
      ['Overall', 'Some High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
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

Plotly.newPlot('earnedutable', data,layout);

// Bar - Earning by Education

var average = {
  x:['Overall', 'Some High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
  y: ['$41,126', '$26,333', '$32,466','$39,242','$51,101','$67,960'],
  type: 'bar',
  name: 'Average',
  marker: {
    color: '#304d35',
  }
};

var male= {
  x: ['Overall', 'Some High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
  y: ['$47,105','$29,098','$37,295','$45,303','$60,247','$81,740'],
  type: 'bar',
  name: 'Male',
  marker: {
    color: '#004e7c',
  }
};

var female = {
  x:['Overall', 'Some High School', 'High School Grad', 'Some College', 'Bachelors Degree', 'Graduates Degree'],
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
    tickangle: 30
  },
  barmode: 'group'
};

Plotly.newPlot('earnedubar', data, layout);

// Table - Poverty and Employment Rate by Education Attainment

var values = [
      ['US Average','Some High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
      ['10.51','18.62','11.71','  7.81','  4.50'],
      ['60.8','60.6','70.1','73.6','80.7'],]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EDUCATION ATTAINED</b>"], ["<b>POVERTY RATE</b>"], ["<b>EMPLOYMENT RATE</b>"]],
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

Plotly.newPlot('povertyemploymenttable', data,layout);

// Bar - Poverty and Employment rte by Education Attainment

var povertyrate = {
  x: ['US Average','Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
  y: [10.51,18.62, 11.71, 7.81,4.50],
  name: 'Poverty Rate',
  type: 'bar',
  marker: {
    color: '#591C0B'
  },
};

var employmentrate = {
  x: ['US Average','Less Than High School', 'High School Grad', 'Some College', 'Bachelors Degree and Higher'],
  y: [60.8, 60.6, 70.1, 73.6,80.7],
  name: 'Employment Rate',
  type: 'bar',
  marker: {
    color: '#304d35'
  },
};

var data = [povertyrate, employmentrate];

var layout = {
  barmode: 'group',
  paper_bgcolor: "#dce1e3",
  xaxis: {
    tickangle: 20
  },
};

Plotly.newPlot('povertyemploymentbar', data, layout);

// Table = Employment by Race

var values = [
      ['US Average','2+ Races', 'Asian', 'Hispanic', 'Other','Hawaiian','White', 'White (Non-Hispanic)','Black', 'Indian'],
      [60.8,64.3,60.6,59.6,57.9,57.6,54.2,54.1,48.4,48.3],]

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

Plotly.newPlot('raceemploymenttable', data,layout);
     
// Bar - Employment by Race

var data = [{
  y: [60.8,64.3,60.6,59.6,57.9,57.6,54.2,54.1,48.4,48.3],
  x: ['US Average','2+ Races', 'Asian', 'Hispanic', 'Other','Hawaiian','White', 'White (Non-Hispanic)','Black', 'Indian'],
  type: 'bar',
  marker: {
    color:'#304d35'
  },
}];

var layout = {
  paper_bgcolor: "#dce1e3",
  height: 400,
  width: 500
};

Plotly.newPlot('raceemploymentbar', data, layout);

// Table - Occupation Types

var values = [
      ['Management', 'Legal', 'Computer/Mathematical', 'Architecture/Engineering','Life/Physical/Social Sciences','Community/Social Services', 'Business/Financial Operations','Education Instruction/Library Services','Arts/Design/Entertainment/Sports/Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations and Services Related','Building/Grounds Cleaning and Maintenance','Personal Care and Services','Sales and Related','Office/ Administrative Support', 'Farming/Fishing/Forestry', 'Construction/Extraction', 'Installation/Maintenance/Repair', 'Production', 'Transportation/Material Moving'],
      ['34,111','  4,050','10,980', '  9,250','  6,510','11,030','29,170','44,190','  9,350','30,770','23,430','19,630','85,430','36,220','18,620','60,260','79,410','    870','31,010','25,200','14,910','51,190'],
      ['$  54,930','$  54,530','$  81,790','$  82,600','$  73,770','$  53,860','$  72,190','$  54,770','$  57,580','$103,850','$  36,180','$  52,700','$  39,690','$  37,840','$  35,270','$  40,120','$  43,290','$  41,010','$  70,570','$  57,980','$  43,650','$  46,070' ]]

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

Plotly.newPlot('occupationtable', data, layout);

// Bar - Occupation Income

var income= {
  x: ['Management', 'Legal', 'Computer/Mathematical', 'Architecture/Engineering','Life/Physical/Social Sciences','Community/Social Services', 'Business/Financial Operations','Education Instruction/Library Services','Arts/Design/Entertainment/Sports/Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations and Services Related','Building/Grounds Cleaning and Maintenance','Personal Care and Services','Sales and Related','Office/ Administrative Support', 'Farming/Fishing/Forestry', 'Construction/Extraction', 'Installation/Maintenance/Repair', 'Production', 'Transportation/Material Moving'],
  y: ['$54,930','$54,530','$81,790','$82,600','$73,770','$53,860','$72,190','$54,770','$57,580','$103,850','$36,180','$52,700','$39,690','$37,840','$35,270','$40,120','$43,290','$41,010','$70,570','$57,980','$43,650','$46,070' ],
  type: 'bar',
  marker: {
    color: '#304d35',
  }
};

var data = [income];

var layout = {
  paper_bgcolor: "#dce1e3",
  title: "Average Income For Each Occupation Field",
  xaxis: {
    tickangle: -15,
    height: 50
  },
  barmode: 'group',
  width: 1000,
  height: 500
};

Plotly.newPlot('occupationbar', data, layout);

// Bar - Occupation Employment 

var income= {
  x: ['Management', 'Legal', 'Computer/Mathematical', 'Architecture/Engineering','Life/Physical/Social Sciences','Community/Social Services', 'Business/Financial Operations','Education Instruction/Library Services','Arts/Design/Entertainment/Sports/Media','Healthcare Practitioners','Healthcare Support','Protective Services','Food Preparations and Services Related','Building/Grounds Cleaning and Maintenance','Personal Care and Services','Sales and Related','Office/ Administrative Support', 'Farming/Fishing/Forestry', 'Construction/Extraction', 'Installation/Maintenance/Repair', 'Production', 'Transportation/Material Moving'],
  y: ['34,111','  4,050','10,980', '  9,250','  6,510','11,030','29,170','44,190','  9,350','30,770','23,430','19,630','85,430','36,220','18,620','60,260','79,410','    870','31,010','25,200','14,910','51,190'],
  type: 'bar',
  marker: {
    color: '#591C0B',
  }
};

var data = [income];

var layout = {
  paper_bgcolor: "#dce1e3",
  title: "Number Of People In Each Occupation Field",
  xaxis: {
    tickangle: -15,
    height: 50
  },
  barmode: 'group',
  width: 1000,
  height: 500
};

Plotly.newPlot('occupationemploymentbar', data, layout);