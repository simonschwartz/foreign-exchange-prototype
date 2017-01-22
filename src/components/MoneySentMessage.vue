<template>

<div class="ui floating positive message">
  <h2>Money sent</h2>
  <p>We have received your request. It usually takes around 2-3 business days to complete the transaction.</p>
  <p>You will receive a confirmation email shortly</p>
  <button class="ui primary button">
    Make another transfer
  </button>
  <button class="ui button">
    Back to account page
  </button>
</div>

</template>

<script>
export default {
  name: 'money-sent-message',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.positive.message {
  color: #333;
}

@media (max-width: 580px) {
  .button {
    display: block;
    width: 100%;
    margin-bottom: 0.5em;
  }
}

</style>
