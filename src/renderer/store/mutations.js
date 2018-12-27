export default {
  setHosts (state, hosts) {
    state.hosts = hosts
  },
  setPreviouslyUsedHosts (state, hosts) {
    state.previouslyUsedHosts = JSON.parse(hosts)
  }
}
