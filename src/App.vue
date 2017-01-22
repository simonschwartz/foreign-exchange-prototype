<template>
  <div id="app">
    <app-header></app-header>
    <exchange-calculator v-bind:rates="rates"></exchange-calculator>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import ExchangeCalculator from './components/ExchangeCalculator'
import BankDetailsForm from './components/BankDetailsForm'

export default {
  name: 'app',
  components: {
    AppHeader,
    ExchangeCalculator,
    BankDetailsForm
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
  color: #2c3e50;
}

body {
  margin: 0;
  margin-bottom: 5em;
}

fieldset {
  border: 0;
  max-width: 100%;
}

legend {
  font-size: 1.1rem;
}
</style>

<style src="semantic-ui-css/components/form.min.css"></style>
<style src="semantic-ui-css/components/input.min.css"></style>
<style src="semantic-ui-css/components/label.min.css"></style>
<style src="semantic-ui-css/components/button.min.css"></style>
<style src="semantic-ui-css/components/message.min.css"></style>
<style src="semantic-ui-css/components/segment.min.css"></style>
<style src="semantic-ui-css/components/statistic.min.css"></style>
<style src="semantic-ui-css/components/loader.min.css"></style>
<style src="semantic-ui-css/components/dimmer.min.css"></style>
