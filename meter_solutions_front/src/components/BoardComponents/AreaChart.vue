<script>
import { Line } from "vue-chartjs";

export default {
  name: "AreaChart",
  extends: Line,
  data() {
    return {
      chartData: Object,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },

  props: {
    dataclip: Object,
    period: Object,
  },

  mounted () {
    var data = Object
    data.labels = []
    data.datasets = Object
    data.datasets.label = 'Line Chart'
    data.datasets.fill = false
    data.datasets.borderColor ='#2554FF'
    data.datasets.backgroundColor = '#2554FF'
    data.datasets.borderWidth = 1
    data.datasets.data = []

    for (const el in this.dataclip){
      data.labels.push(el.timestamp)
      data.datasets.data.push(el.value)
    }

    //alert(this.dataclip.length)

    this.chartData = data

    this.renderChart(this.chartData, this.options)
  },
};
</script>

<style scoped>

</style>