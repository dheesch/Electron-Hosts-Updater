export default {
  setHosts (state, hosts) {
    state.hosts = hosts
  },
  setPreviouslyUsedHosts (state, hosts) {
    state.previouslyUsedHosts = JSON.parse(hosts)
  },
  addHost (state, host) {
    state.hosts.push(host)
  },
  removeHost (state, index) {
    state.previouslyUsedHosts.push(state.hosts[index])
    state.hosts.splice(index, 1)
  },
  addPreviouslyUsedHost (state, index) {
    state.hosts.push(state.previouslyUsedHosts[index])
    state.previouslyUsedHosts.splice(index, 1)
  }

}
