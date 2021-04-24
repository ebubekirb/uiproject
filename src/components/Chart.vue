<template>
  <vue-chart type="line" :data="chartData"></vue-chart>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'App',

  components: {
    VueChart
  },

  data: () => ({
    chartData: {
      labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 5', 'Item 5'],
      datasets: [
        {
          label: 'Component 1',
          data: [100, 400, 200, 600, 300, 450, 700],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
          ],
        }
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }),
}
</script>
