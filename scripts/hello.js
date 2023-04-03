requirejs(["https://cdnjs.cloudflare.com/ajax/libs/plotly.js/1.33.1/plotly.min.js"],
function(Plotly)

{

                "use strict";

               

                function plotlyChart()

                {             

                };

               

                plotlyChart.prototype.draw = function (oControlHost)

                {              let cont                                = oControlHost.container;

                               cont.innerHTML               += `<div id="chart" style="width: 600px; height: 400px;"></div>`;

                               const chart         = document.getElementById('chart');   

                               const xAxis = [];

                               const yAxis = [];

                              

                               const db = this.db;

                               console.log('*** db', db);

                               for (let i = 0; i < db.rowCount; i++)

                               {              const xCellValue = db.getCellValue(i, 0);

                                               xAxis.push(xCellValue);

                                               console.log(xCellValue);

                                               const yCellValue = db.getCellValue(i, 1);

                                               yAxis.push(yCellValue);

                                               console.log(yCellValue);

                               }

                               //console.log('*** db', db);

 

                               //console.log('*** axes', xAxis, yAxis);

                              

                              

                               //console.log('*** chart', chart);

                               Plotly.newPlot(chart, [{

                                               x: xAxis,

                                               y: yAxis

                                               }],

                                               { margin: {t:0}, });

 

/*

                               Plotly.newPlot(chart, [{

                                               x: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],

                                               y: [10, 20, 30, 40, 50]

                                               }],

                                               { margin: {t:0}});

 

*/

 

//                                           y: [100, 110, 120, 130, 140, 150]}],

 

/*

                               Plotly.plot('chart', [{

                                               y: [getData()],

                                               type: 'line'

                               }]);

 

*/

                }                             

 

                function getData()

                {              return Math.random();

                }

 

                plotlyChart.prototype.initialize = function( oControlHost, fnDoneInitializing )

                {              fnDoneInitializing();

                }             

 

                plotlyChart.prototype.setData = function( oControlHost, oDataStore )

                {              this.db = oDataStore;                                                                                                                                                                                                 // bewaar de koppeling naar de query voor later gebruik

 

                };

 

                return plotlyChart;

}

);            