<template>
<div>
  <form class="exchange-calculator ui form attached fluid segment">
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
  </form>
  <div class="ui bottom attached message" id="bottom-container">

  <dl>
    <dt>
      <div class="ui small statistic">
        <div class="label">
          Total transaction cost
        </div>
        <div class="value">
          ${{transactionFee + this.from_money}}
        </div>
      </div>
    </dt>
    <dd>Amount sending: ${{this.from_money}}</dd>
    <dd>Our 2% transaction fee: ${{transactionFee}}</dd>
    <dd>Exchange rate: {{exchangeRate}}</dd>
  </dl>

  <transition name="fade">
  <bank-details-form v-if="show_bank_details"></bank-details-form>
  </transition>

  <transition name="fade">
  <button
    v-if="show_bank_details"
    v-on:click="showBankForm"
    class="ui primary button">
    Send money
  </button>
  <button
    v-else
    v-on:click="showBankForm"
    class="ui primary button">
    Next: Payment
  </button>
  </transition>

</div>
</div>
</template>

<script>
import BankDetailsForm from './BankDetailsForm'
export default {
  name: 'exchange-calculator',
  components: {
    BankDetailsForm
  },
  data () {
    return {
      from_money: '20',
      from_country: '',
      to_money: '',
      to_country: '',
      exchangeR: '',
      show_bank_details: false
    }
  },
  props: ['rates'],
  computed: {
    exchangeRate: function () {
      let fromCalc = (1 / this.from_country)
      let toCalc = (1 / this.to_country)
      this.exchangeR = fromCalc / toCalc
      return fromCalc / toCalc
    },
    transactionFee: function () {
      return this.from_money * 0.02
    }
  },
  methods: {
    covertBackwards: function () {
      this.from_money = (this.to_money / this.exchangeR)
    },
    covertForwards: function () {
      this.to_money = this.from_money * this.exchangeR
    },
    showBankForm: function () {
      this.show_bank_details = true
    }
  },
  watch: {
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

form {
  max-width: 100%;
}

.ui.attached.segment {
  width: auto;
  max-width: auto;
}

select {
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background:url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIPnI+py+0/hJzz0IruwjsVADs=) no-repeat 98% 40%!important;
}

.ui.statistic>.label, .ui.statistics .statistic>.label {
   text-align: left;
   text-transform: none;
}

.ui.statistic>.value, .ui.statistics .statistic>.value {
  text-align: left;
}

dt {
  margin-bottom: 1em;
}

dd {
  margin-left: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: max-height .4s ease;
  max-height: 20em;
  overflow: hidden;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  max-height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
