let myGraph = document.getElementById('myGraph');
// 動物堆疊

let trace1 = {};
trace1.type = "bar";
trace1.name = "2023/02/01";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "Uber"
trace1.x[1] = "Lyft"
trace1.x[2] = "Yellow"
trace1.y[0] = Uber[0]["count"];
trace1.y[1] = Lyft[0]["count"];
trace1.y[2] = Yellow[0]["count"];

trace1.text = trace1.y;
trace1.textfont = {
    // 修改文字樣式
    color: "#003D79",
    size: 12
};

trace1.marker = {
    //區塊顏色
    color: "#97CBFF"
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "2023/02/02";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "Uber"
trace2.x[1] = "Lyft"
trace2.x[2] = "Yellow"
trace2.y[0] = Uber[1]["count"];
trace2.y[1] = Lyft[1]["count"];
trace2.y[2] = Yellow[1]["count"];

trace2.text = trace2.y;
trace2.textfont = {
    // 修改文字樣式
    color: "#ECF5FF",
    size: 12
};

trace2.marker = {
    //區塊顏色
    color: "#0066CC"
};

let trace3 = {};
trace3.type = "bar";
trace3.name = "2023/02/03";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "Uber"
trace3.x[1] = "Lyft"
trace3.x[2] = "Yellow"
trace3.y[0] = Uber[2]["count"];
trace3.y[1] = Lyft[2]["count"];
trace3.y[2] = Yellow[2]["count"];

trace3.text = trace3.y;
trace3.textfont = {
    // 修改文字樣式
    color:"#ECF5FF",
    size:12
};

trace3.marker = {
    //區塊顏色
    color:"#003D79"
};

let data = [];
data.push(trace1); // 把trace1放到data
data.push(trace2);
data.push(trace3);

let layout = {
    title:"紐約計程車2023/02長條圖",
    margin: {
        t: 30  //margin top 上方留的空間
    },
    barmode: "stack"
};

Plotly.newPlot(myGraph, data, layout)