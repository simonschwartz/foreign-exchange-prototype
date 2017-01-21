<template>
  <div id="app">
    <exchange-calculator v-bind:rates="rates"></exchange-calculator>
  </div>
</template>

<script>
import ExchangeCalculator from './components/ExchangeCalculator'

export default {
  name: 'app',
  components: {
    ExchangeCalculator
  },
  data () {
    return {
      rates: {}
    }
  },
  created: function () {
    var url = 'http://api.fixer.io/latest'
    this.$http.get(url).then(response => {
      this.rates = response.body.rates
      console.log('success')
    }, (response) => {
      console.log('fail')
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
