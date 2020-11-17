Plotly.d3.csv("Age_and_Sex_2019_Male.csv", function(data_male) {
  Plotly.d3.csv("Age_and_Sex_2019_Female.csv", function (data_female) {

    var cg_male = [];
    var age_male = [];
    var cg_male_new = [];
    var age_male_new = [];

    var cg_female = [];
    var age_female = [];
    var cg_female_new = [];
    var age_female_new = [];

    for (let i = 0; i < data_male.length; i++) {
      cg_male.push(data_male[i].Category);
      age_male.push(data_male[i].Population);
    }

    cg_male_new.push("0-9");
    cg_male_new.push("10-19");
    cg_male_new.push("20-29");
    cg_male_new.push("30-39");
    cg_male_new.push("40-49");
    cg_male_new.push("50-59");
    cg_male_new.push("60-69");
    cg_male_new.push("70-79");
    cg_male_new.push("80+");

    age_male_new.push(parseInt(age_male[1]) + parseInt(age_male[2]));
    age_male_new.push(parseInt(age_male[3]) + parseInt(age_male[4]) + parseInt(age_male[5]));
    age_male_new.push(parseInt(age_male[6]) + parseInt(age_male[7]) + parseInt(age_male[8]) + parseInt(age_male[9]));
    age_male_new.push(parseInt(age_male[10]) + parseInt(age_male[11]));
    age_male_new.push(parseInt(age_male[12]) + parseInt(age_male[13]));
    age_male_new.push(parseInt(age_male[14]) + parseInt(age_male[15]));
    age_male_new.push(parseInt(age_male[16]) + parseInt(age_male[17]) + parseInt(age_male[18]) + parseInt(age_male[19]));
    age_male_new.push(parseInt(age_male[20]) + parseInt(age_male[21]));
    age_male_new.push(parseInt(age_male[22]) + parseInt(age_male[23]));

    for (let i = 0; i < data_female.length; i++) {
      cg_female.push(data_female[i].Category);
      age_female.push(data_female[i].Population);
    }

    cg_female_new.push("0-9");
    cg_female_new.push("10-19");
    cg_female_new.push("20-29");
    cg_female_new.push("30-39");
    cg_female_new.push("40-49");
    cg_female_new.push("50-59");
    cg_female_new.push("60-69");
    cg_female_new.push("70-79");
    cg_female_new.push("80+");

    age_female_new.push(parseInt(age_female[1]) + parseInt(age_female[2]));
    age_female_new.push(parseInt(age_female[3]) + parseInt(age_female[4]) + parseInt(age_female[5]));
    age_female_new.push(parseInt(age_female[6]) + parseInt(age_female[7]) + parseInt(age_female[8]) + parseInt(age_female[9]));
    age_female_new.push(parseInt(age_female[10]) + parseInt(age_female[11]));
    age_female_new.push(parseInt(age_female[12]) + parseInt(age_female[13]));
    age_female_new.push(parseInt(age_female[14]) + parseInt(age_female[15]));
    age_female_new.push(parseInt(age_female[16]) + parseInt(age_female[17]) + parseInt(age_female[18]) + parseInt(age_female[19]));
    age_female_new.push(parseInt(age_female[20]) + parseInt(age_female[21]));
    age_female_new.push(parseInt(age_female[22]) + parseInt(age_female[23]));

    // get male table div
    tableDivMale = document.getElementById('table_male');

    // get female table div
    tableDivFemale = document.getElementById('table_female');

    // START MALE TABLE
    // based off of example: https://plotly.com/javascript/table/
    var tableDataMale = [{
      type: 'table',
      header: {
        values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
        align: "center",
        line: { width: 1, color: 'black' },
        fill: { color: "#004e7c" },
        font: { family: "Arial", size: 12, color: "white" }
      },
      cells: {
        values: [cg_male_new, age_male_new],
        align: "center",
        line: { color: "black", width: 1 },
        font: { family: "Arial", size: 11, color: ["black"] },
        format: [
          "",
          " >4,3f",
        ],
      }
    }];

    var tableLayoutMale = {
      title: "Males in Hawaii by Age Group",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },
    };

    var myTable = Plotly.plot(tableDivMale, tableDataMale, tableLayoutMale);
    // END MALE TABLE

    // START FEMALE TABLE
    // based off of example: https://plotly.com/javascript/table/
    var tableDataFemale = [{
      type: 'table',
      header: {
        values: [["<b>Age Group</b>"], ["<b>Population</b>"]],
        align: "center",
        line: { width: 1, color: 'black' },
        fill: { color: "#b73225" },
        font: { family: "Arial", size: 12, color: "white" },
      },
      cells: {
        values: [cg_female_new, age_female_new],
        align: "center",
        line: { color: "black", width: 1 },
        font: { family: "Arial", size: 11, color: ["black"] },
        format: [
          "",
          " >4,3f",
        ],
      }
    }];

    var tableLayoutFemale = {
      title: "Females in Hawaii by Age Group",
      paper_bgcolor: "#dce1e3",
      font: {
        family: 'Arial',
        size: 12,
        color: '#333333'
      },
    };

    var myTable = Plotly.plot(tableDivFemale, tableDataFemale, tableLayoutFemale);
    // END FEMALE TABLE

    asplotdiv = document.getElementById("as_plot");

    // set plot layout
    var plotLayout = {
      title: "Age Groups in Hawaii (2019)",
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
          text: "Population",
        }
      },
    };

    // START FIRST TRACE
    var trace1 = {
      mode: "markers",
      x: cg_male_new,
      y: age_male_new,
      type: 'bar',
      name: 'Male',
      marker: {
        color: '#004e7c',
      }
    };

    data1 = [trace1];

    var myChart = Plotly.plot(asplotdiv, data1, plotLayout);
    // END FIRST TRACE

    // START SECOND TRACE
    var trace2 = {
      mode: "markers",
      x: cg_female_new,
      y: age_female_new,
      type: 'bar',
      name: 'Female',
      marker: {
        color: '#b73225',
      }
    };

    data2 = [trace2];

    var myChart2 = Plotly.plot(asplotdiv, data2, plotLayout);
    // END SECOND TRACE

  });
});
