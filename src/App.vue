<template>
  <div id="app">
    <exchange-calculator></exchange-calculator>
  </div>
</template>

<script>
import rates from './exchange-rate-service'
import ExchangeCalculator from './components/ExchangeCalculator'

export default {
  name: 'app',
  components: {
    ExchangeCalculator
  },
  data () {
    return {
      rates: rates.exchange_rates
    }
  },

  ready: function () {
    rates.getRates(this)
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
