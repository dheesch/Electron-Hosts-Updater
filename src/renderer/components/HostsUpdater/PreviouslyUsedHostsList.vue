<template>
  <div>
    <ul class='collection with-header'>
      
      <li class='collection-header'> <h5> Previously Used Hosts </h5> </li>
      <li v-for="(host, index) in previouslyUsedHosts" v-bind:key="'used-host-' + index" class='collection-item' :class="{ 'comment' : host.comment }">
        <span v-if="host.comment"> 
          {{ host.comment }} 
        </span>
        <span v-else>
          {{ host.ip }} 
        <span v-for="domain in host.domains" :key="domain" class='domain'>
          {{ domain }} 
        </span>
    </span>
        <div class='secondary-content'>
          <i class='material-icons' v-on:click="addToHosts(index)">add_box</i>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'previously-used-hosts-list',
    components: {},
    computed: {
      ...mapState({
        previouslyUsedHosts: function (state) { return state.previouslyUsedHosts }
      })
    },
    methods: {
      ...mapMutations(
        ['addPreviouslyUsedHost']
      ),
      addToHosts  (index) {
        this.addPreviouslyUsedHost(index)
      }

    },
    created () {
      this.$store.dispatch('getPreviouslyUsedHosts')
    }
  }
</script>

<style>
  
</style>
