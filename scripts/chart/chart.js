var chartDom = document.getElementById('chart');
var myChart = echarts.init(chartDom);

var data = [1, 2, 3, 2, 3, 5, 2, 4, 5, 2, 3]; 

var option = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: getLast11Days()
  },
  yAxis: {
    type: 'value',
    data: data
  },
  series: [
    {
      type: 'bar',
      data: data,
      barWidth: 40,
      itemStyle: {
        borderRadius: 20,
        color: '#e0e0e0' 
      },
      z: 1
    },
    {
      type: 'pictorialBar',
      data: data,
      encode: { x: 0, y: 1 },
      itemStyle: {
        borderRadius: 20
      },
      symbol: 'image://../assets/images/icon-very-happy-color.svg',
      symbolSize: [33, 33],
      symbolPosition: 'end',   
      symbolOffset: [0, 5],   
      z: 10
    }
  ]
};

myChart.setOption(option);
window.addEventListener('resize', () => myChart.resize());

//PRECISO QUE AO INVES DE VALORES 1,2,3,4,5 SEJA OS HORARIOS QUE DORMIU 0-2 3-4 5-6 7-8 9+


function getLast11Days() {

  const days = []
  const today = new Date()

  for (let i = 10; i >= 0; i--) {
    const date = new Date()
    date.setDate(today.getDate() - i)

    const day = String(date.getDate()).padStart(2, '0')
    const month = date.toLocaleString('en', { month: 'short' })

    days.push(`${month} ${day}`)
  }
  return days
}




