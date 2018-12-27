<template>
  <div>
    {{ ip }} 
    <span v-for="domain in domains" :key="domain" class='domain'>
      {{ domain }} 
    </span>

    <div class='secondary-content'>
      <i class='material-icons'>delete</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hosts-list-entry',
    props: {
      ip: String,
      domains: Array
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .domain {
    padding-left: 25px;
  }
</style>
