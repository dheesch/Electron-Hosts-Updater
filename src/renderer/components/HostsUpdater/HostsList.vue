<template>
  <div>
    <ul class='collection with-header'>
      <li class='collection-header'> <h5> Hosts </h5> </li>
      <li v-for="(host, index) in hosts" v-bind:key="'host-' + index" class='collection-item' :class="{ 'comment' : host.comment }" >
        <hosts-list-entry :ip="host.ip" :domains="host.domains" :comment="host.comment" :index="index"></hosts-list-entry>
      </li>

    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import HostsListEntry from './HostsListEntry'

  export default {
    name: 'hosts-list',
    components: { HostsListEntry },
    computed: {
      ...mapState({
        hosts: function (state) { return state.hosts }
      })
    },
    methods: {
    },
    created () {
      this.$store.dispatch('getHosts')
    }
  }
</script>

<style lang="scss">
  li {
    list-style-type: none;
  }

  .comment {
    background-color: #757575 !important;
  }
</style>
