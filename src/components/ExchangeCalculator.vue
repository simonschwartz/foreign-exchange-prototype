<template>
  <div class="exchange-calculator">
    I'm sending
    <input
      v-on:keyup="covertForwards"
      v-model.number="from_money"
      type="number">

    from

    <select v-model="from_country">
      <option v-bind:value="rates.AUD">Australia</option>
      <option v-bind:value="rates.JPY">Japan</option>
      <option v-bind:value="rates.INR">India</option>
      <option v-bind:value="rates.USD">United States</option>
      <option v-bind:value="rates.NZD">New Zealand</option>
      <option v-bind:value="rates.GBP">United Kingdom</option>
    </select>

    <br />
    at a rate of {{exchangeRate}}
    <br />

    The recepient will receive
    <input
      v-on:keyup="covertBackwards"
      v-model.number="to_money"
      type="number">
    to
    <select v-model="to_country">
      <option v-bind:value="rates.AUD">Australia</option>
      <option v-bind:value="rates.JPY">Japan</option>
      <option v-bind:value="rates.INR">India</option>
      <option v-bind:value="rates.USD">United States</option>
      <option v-bind:value="rates.NZD">New Zealand</option>
      <option v-bind:value="rates.GBP">United Kingdom</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'exchange-calculator',
  data () {
    return {
      from_money: '',
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
</style>
