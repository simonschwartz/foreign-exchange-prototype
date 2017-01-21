<template>
  <div class="exchange-calculator">
    <input v-on:keyup="foo2" v-model.number="from_money" type="number">
    <select v-model="from_country">
      <option v-bind:value="1.4115">Australia</option>
      <option>B</option>
      <option>C</option>
    </select>
    <input v-on:keyup="foo" v-model.number="to_money" type="number">
    <select v-model="to_country">
      <option v-bind:value="122.47">India</option>
      <option>E</option>
      <option>F</option>
    </select>
    {{exchangeRate}}
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
  computed: {
    exchangeRate: function () {
      let fromCalc = (1 / this.from_rate)
      let toCalc = (1 / this.to_rate)
      this.exchangeR = fromCalc / toCalc
    }
  },
  methods: {
    foo: function () {
      this.from_money = this.to_money * this.exchangeR
    },
    foo2: function () {
      this.to_money = this.from_money * this.exchangeR
    }
  },
  watch: {
    from_country: function () {
      this.from_rate = this.from_country
    },
    from_money: function () {
    },
    to_country: function () {
      this.to_rate = this.to_country
    },
    to_money: function () {
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
