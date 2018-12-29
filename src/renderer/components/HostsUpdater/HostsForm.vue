<template>
  <div class='form-container'>
    <div class='input-field col s12 white'>
      <form @submit.prevent="submitForm">
        <div v-if="inValidForm" class='red'> <h6> Error - INCOMPLETE FORM </h6> </div>
        <input type='text' placeholder='IP Address' v-model="ipAddress">
        
        <!-- why does v-for start with 1 -->
        <div v-for="n in domains.length" :key="'domain-' + n">
          <input :class="{ 'additional-domain' : n > 1 }" class='domain-input' input type='text' :placeholder="n" v-model="domains[n-1]">
          <i v-if="n != 1" class='material-icons remove-domain-icon' v-on:click="removeElement(n - 1)">delete</i>
        </div>
        <button class='btn' v-on:click.prevent="addDomain()"> Add Domain </button>
        <button class='btn red' v-on:click.prevent="clearForm()"> Clear </button>
        <button class='btn green'> Submit </button>
      </form>
      
      
    </div>

    <div class='input-field col s12 white'>
      <button class='btn red darken-4' v-on:click='save'> Save Changes </button>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapState } from 'vuex'
  export default {
    name: 'hosts-form',
    components: { },
    data: function () {
      return {
        domains: [''],
        ipAddress: '',
        inValidForm: false
      }
    },
    computed: {
      ...mapState({
        hosts: function (state) { return state.hosts }
      })
    },
    methods: {
      ...mapMutations([
        'addHost'
      ]),
      ...mapActions([
        'saveHosts'
      ]),
      addDomain () {
        this.domains.push('')
      },
      removeElement (index) {
        console.log(this.domains)
        this.domains.splice(index, 1)
        console.log(this.domains)
        // this.domains = updated
      },
      clearForm () {
        console.log('clearing form')
        this.domains = ['']
        this.ipAddress = ''
      },
      submitForm () {
        console.log('submitting form')

        // no need for intense validation here at the moment

        if (this.ipAddress !== '' && this.domains[0] !== '') {
          this.addHost({ip: this.ipAddress, domains: this.domains})
          this.inValidForm = false
          this.clearForm()
        } else {
          this.inValidForm = true
        }
      },
      save () {
        this.saveHosts(this.hosts)
      }
    }
  }
</script>

<style lang="scss">
  .btn, input {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .additional-domain {
    width: 90% !important;
  }

  .remove-domain-icon {
    width: 10%;
    color: #26a69a;
  }

  .form-container {
    position: sticky;
  }
</style>
