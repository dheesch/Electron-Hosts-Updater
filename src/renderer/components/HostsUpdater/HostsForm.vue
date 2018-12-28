<template>
  <div class='form-container'>
    <div class='input-field col s12 white'>
      {{ domains }}
      <input type='text' placeholder='IP Address'>
      <!-- why does v-for start with 1 -->
      <input v-for="n in domains.length" type='text' placeholder="Domain" :key="'domain-' + n" v-model="domains[n-1]"> 
      <button class='btn' v-on:click="addDomain()"> Add Domain </button>
      <button class='btn red' v-on:click="clear()"> Clear </button>
      <button class='btn green'> Submit </button>
      
    </div>

    <div class='input-field col s12 white'>
      <button class='btn red darken-4'> Save Changes </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hosts-form',
    components: { },
    data: function () {
      return {
        domains: [''],
        ipAddress: ''
      }
    },
    methods: {
      addDomain () {
        this.domains.push('')
      },
      clear () {
        this.domains = ['']
      }
    }
  }
</script>

<style lang="scss">
  .btn, .input {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .form-container {
    position: sticky;
  }
</style>
