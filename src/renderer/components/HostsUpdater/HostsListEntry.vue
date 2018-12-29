<template>
  <div>
    <span v-if="comment"> 
          {{ comment }} 
    </span>
    <span v-else>
      {{ ip }} 
      <span v-for="domain in domains" :key="domain" class='domain'>
        {{ domain }} 
      </span>
    </span>
    <div class='secondary-content'>
      <i class='material-icons' v-on:click="remove">delete</i>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'hosts-list-entry',
    props: {
      index: Number,
      ip: String,
      domains: Array,
      comment: String
    },
    computed: {
    },
    methods: {
      ...mapMutations(
        ['removeHost']
      ),
      remove () {
        this.removeHost(this.index)
      }
    }
  }
</script>

<style lang="scss">
  .domain {
    padding-left: 25px;
  }
</style>
