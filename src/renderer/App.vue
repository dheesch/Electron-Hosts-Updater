<template>
  <div id="app">
    <hosts-updater></hosts-updater>
  </div>
</template>

<script>
  import HostsUpdater from '@/components/HostsUpdater'

  export default {
    name: 'electron-hosts-updater',
    components: {
      HostsUpdater
    }
  }
</script>

<style lang='scss'>
  /* CSS */
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import "~materialize-css/dist/css/materialize.min.css";

  .row {
    display: flex;
  }

  .col {
    // flex: 1;
  }
</style>
