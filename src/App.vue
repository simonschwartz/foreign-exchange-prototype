<template>
  <div id="app">
    <app-header></app-header>
    <exchange-calculator v-bind:rates="rates"></exchange-calculator>
    <form-button></form-button>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import ExchangeCalculator from './components/ExchangeCalculator'
import FormButton from './components/FormButton'

export default {
  name: 'app',
  components: {
    AppHeader,
    ExchangeCalculator,
    FormButton
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
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>

<style src="semantic-ui-css/components/form.min.css"></style>
<style src="semantic-ui-css/components/input.min.css"></style>
<style src="semantic-ui-css/components/label.min.css"></style>
<style src="semantic-ui-css/components/button.min.css"></style>
