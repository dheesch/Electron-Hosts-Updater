<template>
  <div>
    <div class='row'>
      <div class='col s3 blue-grey lighten-1'>
        
      </div>

      <div class='col s9 blue-grey lighten-4'>
        <hosts-list></hosts-list>
        <previously-used-hosts-list></previously-used-hosts-list>
      </div>
    </div>

    
  </div>
</template>

<script>
  import HostsList from './HostsUpdater/HostsList'
  import PreviouslyUsedHostsList from './HostsUpdater/PreviouslyUsedHostsList'
  export default {
    name: 'hosts-updater',
    components: { HostsList, PreviouslyUsedHostsList },
    methods: {}
  }
</script>

<style lang='scss'>
  
</style>
