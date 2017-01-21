export default {

  exchange_rates: {},

  getRates (context) {
    var url = 'http://api.fixer.io/latest'
    context.$http.get(url).then(response => {
      this.exchange_rates = response.body.rates
      console.log('success')
    }, (response) => {
      console.log('fail')
    })
  }
}
