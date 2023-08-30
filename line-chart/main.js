let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "lines+markers"; 
trace1.type = "scatter";
trace1.name = "Uber";// 新增每一條線的名字
trace1.marker = {
    size: 10 // 調整點的大小
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom center"; //文字在點的下方中間
trace1.textfont = {
    family: "Raleway,sans-sefif",
    size: 10 //點文字大小
};
trace1.visible = true;

for (let i = 0; i < set1.length; i++) {
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines"; // 線
trace2.type = "scatter";
trace2.name = "Lyft";// 新增每一條線的名字
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.visible = false;
trace2.line = {
    color: 'red'
};

for (let i = 0; i < set2.length; i++) {
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers"; // 線+點
trace3.type = "scatter";
trace3.name = "Yellow";// 新增每一條線的名字
trace3.marker = {
    size: 10 // 調整點的大小
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.visible = false;
trace3.line = {
    color: 'yellow' //,
    // shape: 'spline'   //折線變曲線
};

for (let i = 0; i < set3.length; i++) {
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1); // 把trace1放到data
data.push(trace2);
data.push(trace3);

let layout = {
    margin: {
        t: 50  //margin top 上方留的空間
    },
    // 調整X.Y軸範圍作法不是最佳的，應該以資料的最大值去做調整
    xaxis: {
        // range: [0, 31]  // X軸變成0-6
    },
    yaxis: {
        // range: [0, 200000]  // Y軸變成0-25
    },
    title: '練習圖表',
    updatemenus: [
        {
            y: 1.1,
            x: 0.1,
            yancor: 'top',
            buttons: [
                {
                    method: 'restyle',
                    args: ['visible', [true, false, false]],
                    label: "Uber"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: "Lyft"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: "Yellow"
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true]],
                    label: "Display All"
                }
            ]
        }
    ]
};

Plotly.newPlot(myGraph, data, layout)