
function drawHistogram(res) {
    console.log(res);
    let myGraph = document.getElementById('myGraph');
    let trace1 = {};
    trace1.type = "histogram";
    let ageArray = [];
    for (let i = 0; i < res.length; i++) {
        ageArray.push(res[i].Age);
    }
    console.log(ageArray);
    trace1.x = ageArray;
    trace1.xbins = {
        //決定直方圖區間寬度，設定為10，就是0-9一組，10-19一組。以此類推
        size: 10,
        start: 0,  // 有用到xbins建議都要用start和end
        end:100
    };
    trace1.opacity = 0.5;
    trace1.marker = {
        color: 'green'
    };
    // trace1.y = set1;

    let data = [];
    data.push(trace1);

    let layout = {
        margin: {
            t: 50
        },
        title: '鐵達尼號年齡分布',
        // barmode: 'overlay'
    };

    Plotly.newPlot(myGraph, data, layout);
};