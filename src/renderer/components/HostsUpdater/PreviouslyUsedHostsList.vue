<template>
  <div>
    <ul class='collection with-header'>
      <li class='collection-header'> <h5> Previously Used Hosts </h5> </li>
      <li v-for="(host, index) in previouslyUsedHosts" v-bind:key="'used-host-' + index" class='collection-item'>
        {{host.ip}} | {{ host.domain }}
        <div class='secondary-content'>
          <i class='material-icons'>add_box</i>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'previously-used-hosts-list',
    components: { },
    computed: {
      ...mapState({
        previouslyUsedHosts: function (state) { return state.previouslyUsedHosts }
      })
    },
    methods: {
    },
    created () {
      this.$store.dispatch('getPreviouslyUsedHosts')
    }
  }
</script>

<style>
  
</style>
