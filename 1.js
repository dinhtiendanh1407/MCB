// function timedRefresh(timeoutPeriod) {
//     setTimeout("location.reload(true);",timeoutPeriod);
// }
// window.onload = timedRefresh(50000);

// function on() {
//             document.getElementById("myImage").src= "bongdensang.jpg"
//         }
//         function off() {
//             document.getElementById("myImage").src= "bongden.jpg"
//         }

//           function led2(){
//             var btn = document.getElementById('btn');
//             if(btn.checked == true){
//               const note = confirm('Bạn muốn TẮT ĐÈN KHÔNG?')
//               if(note){
//                 document.getElementById("myImage2").src= "bongden.jpg";
//                 // document.getElementById('led2').style.backgroundColor = "";
//               }
//             }else{
//               const note = confirm('Bạn muốn BẬT ĐÈN KHÔNG?')
//               if(note){
//                 document.getElementById("myImage2").src= "bongdensang.jpg";
//                 // document.getElementById('led2').style.backgroundColor = "";
//               }
//             }
//           }


// Highcharts.chart('container', {

//     title: {
//         text: 'U.S Solar Employment Growth by Job Category, 2010-2020'
//     },
    
//     subtitle: {
//         text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
//     },
    
//     yAxis: {
//         title: {
//             text: 'Number of Employees'
//         }
//     },
    
//     xAxis: {
//         accessibility: {
//             rangeDescription: 'Range: 2010 to 2020'
//         }
//     },
    
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle'
//     },
    
//     plotOptions: {
//         series: {
//             label: {
//                 connectorAllowed: false
//             },
//             pointStart: 2010
//         }
//     },
    
//     series: [{
//         name: 'Nhiet do',
//         data: []
//     }, {
//         name: 'Do am',
//         data: []
//     }, {
//         name: 'Anh sang',
//         data: []
//     }],
    
//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }
    
//     });
    
//     var x = document.getElementById("nhietdo").innerHTML = Math.floor(Math.random() * 100);
//           if (x<37){
//               document.getElementById("temperature").style.backgroundColor = "orange";
//           }else if(x>=37 && x<60) {
//               document.getElementById("temperature").style.backgroundColor = "red";
//           } else{
//             document.getElementById("temperature").style.backgroundColor = "magenta";
//           }

//     var y = document.getElementById("do am").innerHTML = Math.floor(Math.random() * 100); 
//     if (y<30){
//         document.getElementById("humidity").style.backgroundColor = "skyblue";
//     }else if(y>=30 && y<70) {
//         document.getElementById("humidity").style.backgroundColor = "blue";
//     } else {
//         document.getElementById("humidity").style.backgroundColor = "navy";
//     }

//     var z = document.getElementById("anh sang").innerHTML = Math.floor(Math.random() * 100);
//           if (z<30){
//               document.getElementById("the light").style.backgroundColor = "#fffdd0";
//           }else if(z>=30 && z<60) {
//               document.getElementById("the light").style.backgroundColor = "yellow";
//           } else {
//               document.getElementById("the light").style.backgroundColor = "gold";
//           }

        

// function timedRefresh(timeoutPeriod) {
//     setTimeout("location.reload(true);",timeoutPeriod);
// }
// window.onload = timedRefresh(500000);

function on() {
    document.getElementById("myImage").src= "bongdensang.jpg"
}
function off() {
    document.getElementById("myImage").src= "bongden.jpg"
}

  function led2(){
    var btn = document.getElementById('btn');
    if(btn.checked == true){
      const note = confirm('Bạn muốn TẮT ĐÈN KHÔNG?')
      if(note){
        document.getElementById("myImage2").src= "bongden.jpg";
        // document.getElementById('led2').style.backgroundColor = "";
      }
    }else{
      const note = confirm('Bạn muốn BẬT ĐÈN KHÔNG?')
      if(note){
        document.getElementById("myImage2").src= "bongdensang.jpg";
        // document.getElementById('led2').style.backgroundColor = "";
      }
    }
  }




const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
const das =[0,0,0,0,0,0,0,0,0,0,0,0];
const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
setInterval(function(){
let x = Math.floor(Math.random()*101);
let y = Math.floor(Math.random()*101);   
let z = Math.floor(Math.random()*101);

function Temperature() {
document.getElementById("nhietdo").innerHTML=x;
if (x<37){
document.getElementById("temperature").style.backgroundColor = "orange";
}else if(x>=37 && x<60) {
document.getElementById("temperature").style.backgroundColor = "red";
} else{
document.getElementById("temperature").style.backgroundColor = "magenta";
}
}
Temperature();

function Humidity() {

document.getElementById("do am").innerHTML=y;
if (y<30){
document.getElementById("humidity").style.backgroundColor = "skyblue";
}else if(y>=30 && y<70) {
document.getElementById("humidity").style.backgroundColor = "blue";
} else {
document.getElementById("humidity").style.backgroundColor = "navy";
}
}
Humidity();

function Thelight() {

document.getElementById("anh sang").innerHTML=z;
if (z<30){
document.getElementById("the light").style.backgroundColor = "#fffdd0";
}else if(z>=30 && z<60) {
document.getElementById("the light").style.backgroundColor = "yellow";
} else {
document.getElementById("the light").style.backgroundColor = "gold";
}
}
Thelight();
        


function bieuDo(){
nds.push(x); nds.shift();
das.push(y); das.shift();
ass.push(z); ass.shift();
              
}
bieuDo();
Highcharts.chart('container', {

title: {
text: 'BIEU DO KHAO SAT'
       },
                
yAxis: {
min:0,
max:100
},
                
xAxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  
},
                
options: {
scales: {
y: {
beginAtZero: true,     
}
},},
legend: {
layout: 'vertical',
align: 'right',
verticalAlign: 'middle'
},
                
plotOptions: {
series: {
label: {
connectorAllowed: false
},
                  
}
},
                
series: [{
name: 'Nhiệt độ',
data: nds
},{
name: 'Độ ẩm',
data: das
}, {
name: 'Ánh sáng',
data: ass
},],
                
responsive: {
rules: [{
condition: {
maxWidth: 100,
minWidth:0
},
chartOptions: {
legend: {
layout: 'horizontal',
align: 'center',
verticalAlign: 'bottom'
}
}
}]
}
                
});
},5000);

