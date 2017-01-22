<template>
  <form class="exchange-calculator ui form">
    <fieldset>
    <legend>I'm sending money from:</legend>
    <div class="two fields">
      <div class="field">
        <label for="send_amount">Amount to send</label>
        <div class="ui labeled input">
          <div class="ui label">$</div>
          <input
            v-on:keyup="covertForwards"
            v-model.number="from_money"
            type="number"
            id="send_amount">
        </div>
      </div>

      <div class="field">
        <label for="from_country">Sending from country</label>
        <select v-model="from_country" id="from_country">
          <option v-bind:value="rates.AUD">Australia</option>
          <option v-bind:value="rates.JPY">Japan</option>
          <option v-bind:value="rates.INR">India</option>
          <option v-bind:value="rates.USD">United States</option>
          <option v-bind:value="rates.NZD">New Zealand</option>
          <option v-bind:value="rates.GBP">United Kingdom</option>
        </select>
      </div>
    </div>

  </fieldset>

  <fieldset>
    <legend>The recepient will receive</legend>
    <div class="two fields">
      <div class="field">
        <label for="received_amount">Amount received</label>
      <div class="ui labeled input">
        <div class="ui label">$</div>
        <input
          v-on:keyup="covertBackwards"
          v-model.number="to_money"
          type="number"
          id="received_amount">
      </div>
    </div>

    <div class="field">
      <label for="to_country">Destination country</label>
    <select v-model="to_country" id="to_country">
      <option v-bind:value="rates.AUD">Australia</option>
      <option v-bind:value="rates.JPY">Japan</option>
      <option v-bind:value="rates.INR">India</option>
      <option v-bind:value="rates.USD">United States</option>
      <option v-bind:value="rates.NZD">New Zealand</option>
      <option v-bind:value="rates.GBP">United Kingdom</option>
    </select>
  </div>
</div>
</fieldset>

    <p>Current exchange rate: {{exchangeRate}}</p>

  </form>
</template>

<script>
export default {
  name: 'exchange-calculator',
  data () {
    return {
      from_money: '20',
      from_country: '',
      from_rate: '',
      to_money: '',
      to_country: '',
      to_rate: '',
      exchangeR: ''
    }
  },
  props: ['rates'],
  computed: {
    exchangeRate: function () {
      let fromCalc = (1 / this.from_rate)
      let toCalc = (1 / this.to_rate)
      this.exchangeR = fromCalc / toCalc
      return fromCalc / toCalc
    }
  },
  methods: {
    covertBackwards: function () {
      this.from_money = (this.to_money / this.exchangeR)
    },
    covertForwards: function () {
      this.to_money = this.from_money * this.exchangeR
    }
  },
  watch: {
    from_country: function () {
      this.from_rate = this.from_country
    },
    to_country: function () {
      this.to_rate = this.to_country
    },
    exchangeR: function () {
      this.to_money = this.from_money * this.exchangeR
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

select {
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background:url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIPnI+py+0/hJzz0IruwjsVADs=) no-repeat 99% 40%!important;

 }
</style>
