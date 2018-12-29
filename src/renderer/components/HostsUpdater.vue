<template>
  <div>
    <div class='row'>
      <div class='col s4 blue-grey lighten-1'>
        <hosts-form></hosts-form>
      </div>

      <div class='col s8 blue-grey lighten-4'>
        <hosts-list></hosts-list>
        <previously-used-hosts-list></previously-used-hosts-list>
      </div>
    </div>

    
  </div>
</template>

<script>
  import HostsList from './HostsUpdater/HostsList'
  import PreviouslyUsedHostsList from './HostsUpdater/PreviouslyUsedHostsList'
  import HostsForm from './HostsUpdater/HostsForm'

  export default {
    name: 'hosts-updater',
    components: { HostsList, PreviouslyUsedHostsList, HostsForm },
    methods: {}
  }
</script>

<style lang='scss'>
  i {
    &:hover {
      color: #b71c1c
    }
  }
</style>
