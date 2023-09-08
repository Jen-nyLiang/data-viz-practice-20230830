d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        drawPieChart(res);
    }
);
