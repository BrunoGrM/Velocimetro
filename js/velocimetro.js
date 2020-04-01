var velocimetro = echarts.init(document.getElementById('velocimetro'));

option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}"
    },
    toolbox: {
        show: false,
        feature: {
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [{
        name: 'Velocímetro',
        type: 'gauge',
        max: 300,
        detail: { formatter: '{value}' },
        data: [{ value: 0, name: 'Velocidade' }],
        axisLine: { 
            lineStyle: { 
                color: [
                    [0.2, '#55ce63'],
                    [0.8, '#009efb'],
                    [1, '#f62d51']
                ],
            }
        },
    }]
};

velocimetro.setOption(option, true);

velocimetro.setOption(option, true), $(function() {
    function resize() {
        setTimeout(function() {
            velocimetro.resize()
        }, 100)
    }
    $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
});

function setVelocidade(velocidade){
	option.series[0].data[0].value = velocidade;
	velocimetro.setOption(option, true);
}